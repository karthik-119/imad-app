var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var BodyParser = require('body-parser');



var config ={

    user: 'karthikrockz83', // default process.env.PGUSER || process.env.USER
   //default process.env.PGPASSWORD
  database: 'karthikrockz83', // default process.env.PGDATABASE || process.env.USER
  port: '5432',
  host:'db.imad.hasura-app.io',
  password: 'process.env.DB_PASSWORD'
};
var app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test', function (req, res) {
      pool.query('SELECT *FROM test',function(err,result){
      if(err)
      {
      alert('error');
      }else{
      res.send(JSON.stringify(result.rows));
      }
  });

});
app.get('/page1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Page1.html'));
});
app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'signup.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});







// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

