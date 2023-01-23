let btBurger = document.getElementById('burger');
let mainMenu = document.getElementById('main-menu');
let btClose = document.getElementById('close');
btBurger.addEventListener('click', function () {
   mainMenu.classList.toggle('active');

})
btClose.addEventListener('click', function () {
   mainMenu.classList.toggle('active');

})
let rightArrow = document.getElementById('rightArrow');
let leftArrow = document.getElementById('leftArrow');
let windowSlider = document.getElementById('window-slider').offsetWidth;
let slide = document.getElementsByClassName('slide');
let nbSlide = slide.length;
let mLeft = 0;


rightArrow.addEventListener('click', function () {
   if (mLeft - windowSlider == windowSlider*-6) {
        
      this.click.stopPropagation()
  }
  else {
      mLeft -= windowSlider;
      listSlide.style.marginLeft = mLeft + 'px';
  }
});



leftArrow.addEventListener('click', function () {
   if (mLeft + windowSlider == windowSlider) {
        
      this.click.stopPropagation()
  }
  else {
      mLeft += windowSlider;
      listSlide.style.marginLeft = mLeft + 'px';
  }

});

