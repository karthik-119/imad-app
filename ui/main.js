console.log('Loaded!');
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
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
request.open('POST', 'http://karthikrockz83.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({username:username,password:password}));
};
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