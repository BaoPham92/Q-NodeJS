const express = require('express');
const app = express();
const router = require('./routes/dictators.js');
const cors = require('cors');


app.use(cors());
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(require('./routes/dictators'));

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use('/api', router); 

// TODO: CLEAN UP THIS REQ LATER. THIS IS HERE USED FOR THE XSS FROM XSS FRONT-END
app.get('/', async (req, res) => {
  return await res.status(200).json({ message: res })
});

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});