let bodyclick = document.querySelector('.body');
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let header__overlay = document.querySelector('.header__overlay');
header__burger.onclick = function(){
  changeClass();
}
header__overlay.onclick = function(){
  changeClass();
}
function changeClass(){
  bodyclick.classList.toggle('lock');
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    header__overlay.classList.toggle('lock');
    header__list.classList.toggle('active');
}