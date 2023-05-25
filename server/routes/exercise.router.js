const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('Here is the Data from Saga', req.body);
  const date = req.body.date;
  console.log(req.body.date);
  const query = `
    SELECT "name" FROM "exercise" 
    WHERE "date" = '$1' 
    and "is_completed" = 'false';
  `;
  pool.query(query, [date])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
