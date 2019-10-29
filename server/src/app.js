// * SETTING PKGS
const express = require('express');
const app = express();
const morgan = require('morgan')

const port = 5000;

// * MIDDLEWARE
app.use([morgan('combined'), express.json()])

// * ROUTES
app.get('/', (req, res) => {
    res.send('Root directory || Welcome to Home Page')
})

app.listen(port, () => console.log(`App is listening on ${port}`))