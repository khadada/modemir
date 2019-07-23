var toggleBtn = document.querySelector('div.toggle');
var naviagtionMenu = document.querySelector('header nav');


toggleBtn.addEventListener('click',function(){
    naviagtionMenu.classList.toggle('active');
    console.log('clicked')
})

