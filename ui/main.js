console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='karthik';

var img=document.getElementById('kar');
var marginLeft=0;
function moveRight()
{
    marginLeft+=10;
    img.style.marginLeft+='px';
}
img.onclick = function()
{
    var interval=setInterval(moveRight,10);

};