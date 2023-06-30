var header = document.getElementById('header')
var menu = document.getElementById('menu')
// document.getElementById('MAIN').style.display = 'flex';
// document.getElementById('mobhead').style.display = 'block';
if(window.matchMedia("(max-width: 875px)").matches)
{
    menu.style.display = 'block';
    header.style.display = 'none';
    // document.getElementById('MAIN').style.flexDirection = 'column';
    document.getElementById('mobhead').style.display = 'block';
}
else{
    menu.style.display = 'none';
    header.style.display = 'block';
    document.getElementById('mobhead').style.display = 'none';
}
menu.addEventListener('click',()=>{
    document.getElementById('footer')?document.getElementById('footer').style.display = 'none':null
    document.getElementById('guideMain')?document.getElementById('guideMain').style.display = 'none':null
    document.getElementById('contact-main') ? document.getElementById('contact-main').style.display = 'none' : null;
    document.getElementById('indexMain') ? document.getElementById('indexMain').style.display = 'none' : null; 
    if(header.style.display == 'none')
    {
        header.style.display = 'block';
        menu.style.display = 'none';
        document.getElementById('mobhead').style.display = 'none';
        document.getElementById('body').style.backgroundColor = 'white';
    }
    else{
        menu.style.display = 'block';
        document.getElementById('body').style.backgroundColor = 'red';
        // header.style.zIndex = 9;
    document.getElementById('MAIN').style.flexDirection = 'column';

        document.getElementById('mobhead').style.display = 'block';
        header.style.display = 'none';
    }
})
document.getElementById('cross').addEventListener('click',()=>{
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('contact-main') ? document.getElementById('contact-main').style.display = 'block' : null;
    document.getElementById('indexMain') ? document.getElementById('indexMain').style.display = 'block' : null;
    header.style.display = 'none';
    document.getElementById('mobhead') ? document.getElementById('mobhead').style.display = 'block' : null;
    // document.getElementById('MAIN').style.flexDirection = 'column';
    // document.getAnimations('MAIN').style.flexWrap = 'wrap';
    menu.style.display = 'block';
})