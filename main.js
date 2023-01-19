let btBurger =document.getElementById('burger');
let mainMenu = document.getElementById ('main-menu');
let btClose = document.getElementById ('close');
btBurger.addEventListener('click', function(){
   mainMenu.classList.toggle('active');

})
btClose.addEventListener('click', function(){
   mainMenu.classList.toggle('active');

})
