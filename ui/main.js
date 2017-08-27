console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='karthik';

var img=document.getElementById('kar');
function moveRight()
{
    marginLeft+=10;
    img.stle.marginLeft+='px';
}
img.onclick = function()
{
    var interval=setInterval(moveRight,10);

};