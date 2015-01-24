var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./db/usersModel.js');
var bcrypt = require('bcrypt');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

mongoose.connect('mongodb://localhost/together');

app.use(express.static(__dirname + '/../client'));

app.listen(3000);

// console.log(new User());

app.post('/signup', function(req, res){
 var user = new User(req.body);
 user.save();
 console.log(user);
 res.send();
})