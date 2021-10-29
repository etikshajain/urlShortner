const express = require('express');
var cors = require('cors')
var app = express()
 
app.use(cors());
const port = 5000;
app.use(express.json());

//connecting to mongoose server
const connectToMongo = require('./db');
connectToMongo();

//routes:
app.use('/shorten',require('./routes/url'));
app.use('/',require('./routes/redirect'));

app.listen(port, () => {
  console.log(`url shortner backend listening at http://localhost:${port}`)
});