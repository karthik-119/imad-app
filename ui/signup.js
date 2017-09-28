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
app.use(bodyParser.json());
function hash(input, salt)
{
 var hashed = crypto.pbkdf25Sync(input, salt, 100000, 512, 'sha512');
return ["pbkfd25", "100000", salt, hashed.toString('hex')].join($);
}
function exec(){
  var username = req.body.username;
  var password = req.body.password;
  var salt = crypto.RandomBytes(128).toString('hex');
  var dbstring = hash(password, salt);
  pool.query('INSERT into "user"(username,password) VALUES ($1,$2)',[username, dbstring], function(err, result){
       if(err)
         res.status(500).send(err.toString());
        else
           res.send('User successfully created' + username);
   });  
}

