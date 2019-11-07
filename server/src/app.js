// * SETTING PKGS
const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');

// ? PORT TO SERVE
const port = 5000;

// * Methods
const jsonModifier = param => JSON.parse(JSON.stringify(param))

// * MIDDLEWARE
const configuration = [morgan('combined'), express.json()]
app.use(configuration)

// * ROUTES
app.get('/', (req, res) => {
    res.send('Root directory || Welcome to Home Page')
})

// * SAMPLE ROUTE TESTING MYSQL CLI DB
app.get('/users', async (req, res) => {
    console.log(`FETCHING USER DATA`)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'itHeYAlOM',
        database: 'info'
    });

    await connection.query("SELECT * FROM users", (err, rows, fields) => {
        res.json(jsonModifier(rows))
    })
})

app.listen(port, () => console.log(`App is listening on ${port}`))