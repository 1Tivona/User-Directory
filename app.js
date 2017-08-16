const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');
const form = require('express-form');
const bodyParser = require('body-parser')
const field = form.field;


app.engine('mustache', mustache());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(bodyParser());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/', function (req, res) {
  res.send('User Directory');
});

app.post('/data.js', function (req, res){
  res.render('module.exports.users')
});


app.get('/data.js', function(req, res){
  res.sendFile(path.join(__dirname+'/style.css'));
  // res.send('This is where the collection of robots go')
});

app.get('/public', function(req, res){
  res.send('This is where the individual information for the robots go')
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
