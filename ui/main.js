console.log('Loaded!');


//move the image

var img=document.getElementById('madi');
var marginLeft=0;
function moveright()
{
    marginLeft=marginLeft+10;
    img.style.marginleft=marginLeft + 'px';
}

img.onclick = function()
{
    var interval=setInterval(moveright,100);
    
    
};
