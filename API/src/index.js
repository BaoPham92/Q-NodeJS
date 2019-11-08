const express = require('express');
const app = express();
const router = require('./routes/dictators.js');
// const cors = require('cors');

app.set('port', process.env.PORT || 5000);
app.use([express.json(), cors()]);
// app.use(require('./routes/dictators')); note: uncomment this before deploy

app.use('/api', router); 

// TODO: CLEAN UP THIS REQ LATER. THIS IS HERE USED FOR THE XSS FROM XSS FRONT-END
app.get('/', async (req, res) => {
  return await res.status(200).json({ message: res })
})

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});