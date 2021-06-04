const burgerBtn = document.querySelector('.burger-btn');
const navLinks = document.querySelector('.nav-links');



//Event Listeners
burgerBtn.addEventListener( 'click', function(){
    navLinks.classList.toggle('nav-active');
})