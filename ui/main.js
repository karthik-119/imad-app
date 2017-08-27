console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='karthik';

var img=document.getElementById('kar');
img.onclick = function()
{
    var interval=setInterval(moveLeft,10);
    img.style.marginLeft='100px';
};