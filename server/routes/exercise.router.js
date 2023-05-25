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
});

module.exports = router;
