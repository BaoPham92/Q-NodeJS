const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM dictators', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM dictators WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM dictators WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'That dictator? Never heard of em'});
    } else {
      console.log(err);
    }
  });
});

router.post('/', (req, res) => {
  const {id, name, killcount} = req.body;
  console.log(id, name, killcount);
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @killcount = ?;
    CALL dictatorsAddOrEdit(@id, @name, @killcount);
  `;
  mysqlConnection.query(query, [id, name, killcount], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'This dictator just won the election unanimously... Again.'});
    } else {
      console.log(err);
    }
  });

});

router.put('/:id', (req, res) => {
  const { name, killcount } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @killcount = ?;
    CALL dictatorsAddOrEdit(@id, @name, @killcount);
  `;
  mysqlConnection.query(query, [id, name, killcount], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Dictator has been changed for better or for worse'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
