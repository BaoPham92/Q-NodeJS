const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');

// open endpoint to get a dump of user table with username/hashed pw/salt
router.get('/users', async (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
    // console.log('USE ME', req)
    // await res.status(200).json({ Truth: `YOU HIT THE USER ENDPOINT` })
    // res.end()
});

//open endpoint to access the flag file
router.get('/users/flag', (req, res) => {
  mysqlConnection.query('SELECT * FROM flag', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  }); 
});

router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'That dictator? Never heard of em'});
    } else {
      console.log(err);
    }
  });
});

router.post('/', (req, res) => {
  const {id, username} = req.body;
  console.log(id, username);
  const query = `
    SET @id = ?;
    SET @username = ?;
    CALL dictatorsAddOrEdit(@id, @username);
  `;
  mysqlConnection.query(query, [id, username], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'This dictator just won the election unanimously... Again.'});
    } else {
      console.log(err);
    }
  });

});

router.put('/:id', (req, res) => {
  const { username } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    CALL dictatorsAddOrEdit(@id, @username);
  `;
  mysqlConnection.query(query, [id, username], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Dictator has been changed for better or for worse'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
