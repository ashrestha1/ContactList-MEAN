//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var route = require('./routes/route');
//port number defined
const port = 3000;

var app = express();

mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('connected', () => {
  console.log('connected to db');
});

mongoose.connection.on('error', (err) => {
  if (err) console.log('Error in connection');
});

//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/', (req, res) => {
  res.send('foobar');
});

app.listen(port, () => {
  console.log('Server launched at port:' + port);
});
