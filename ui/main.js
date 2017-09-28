console.log('Loaded!');
function exec () {
 var request = new XMLHttpRequest();
 request.onreadystatechange = function(){

    if(request.readyState === XMLHttpRequest.DONE){
       if(request.status === 200){
          alert('logged in successfully');     
       }else if(request.status === 403){
          alert('username/password is incorrect');
       }else if(request.status === 500){
          alert('Something went wrong on server');
       }
      }
 };
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST', 'http://karthikrockz83.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({username:username, password:password}));
}
function sub(){
 function hash(input, salt)
{
 var hashed = crypto.pbkdf25Sync(input, salt, 100000, 512, 'sha512');
return ["pbkfd25", "100000", salt, hashed.toString('hex')].join($);
}
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
var img=document.getElementById('kar');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,50);
};