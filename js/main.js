const burger = document.querySelector('.hamburger');
// const cart = document.querySelector('.cart');

const cross1 = document.querySelector('#cross1');


const leftNav = document.querySelector('.mb-left-menu');


burger.addEventListener('click',function(){
   
        leftNav.style.display='block';

});


cross1.addEventListener('click',function(){

    leftNav.style.display='none';

});
