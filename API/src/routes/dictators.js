const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');
const cors = require('cors');

// open endpoint to get a dump of user table with username/hashed pw/salt
router.get('/users', async (req, res) => {
  mysqlConnection.query('SELECT * FROM dictators', (err, rows, fields) => {
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
// router.get('/users/flag', (req, res) => {
//   mysqlConnection.query('SELECT * FROM dictators', (err, rows, fields) => {
//     if(!err) {
//       res.json(rows);
//     } else {
//       console.log(err);
//     }
//   }); 
// });

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

router.post('/', cors(), (req, res) => {
  const {id, name, password} = req.body;
  console.log(id, name, password);
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @password = ?;
    CALL dictatorsAddOrEdit(@id, @name);
  `;
  mysqlConnection.query(query, [id, name, password], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'This dictator just won the election unanimously... Again.'});
    } else {
      console.log(err);
    }
  });

});

router.put('/:id', (req, res) => {
  const { name, password } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @password = ?;
    CALL dictatorsAddOrEdit(@id, @name);
  `;
  mysqlConnection.query(query, [id, name, password], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Dictator has been changed for better or for worse'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
