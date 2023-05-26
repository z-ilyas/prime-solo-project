const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const userId = req.user.id;

  const sqlValues = [userId];

  const query = `
    SELECT * FROM "exercise" 
    WHERE "user_id" = $1; 
  `;
  pool.query(query, sqlValues)
    .then( result => {
      res.send(result.rows);
      console.log('here is the data from the database', result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all execises', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('Here is the data we are recieving', req.body);

  const name= req.body.name;
  const date = req.body.date;
  const is_completed = req.body.is_completed;
  const userId = req.user.id;

  const sqlValues = [userId, name, date, is_completed];

  const query = `
  INSERT INTO "exercise" 
  ("user_id", "name", "date", "is_completed" )
  VALUES ($1, $2, $3, $4);`
  ;
  pool.query(query, sqlValues)
  .then( result => {
    res.sendStatus(201);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id

  const query = `
  SELECT "name", "date" FROM "exercise"
  WHERE "id" = $1;
  `;
  pool.query(query, [id])
  .then( result => {
    console.log('data from the database', result.rows);
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all genres', err);
    res.sendStatus(500)
  })
});


module.exports = router;
