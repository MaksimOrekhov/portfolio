'use strict'

// гамбургер-меню
if (document.getElementById('hamburger')) {
  const button = document.getElementById('hamburger');
  const menu = document.querySelector('.fp-menu__container');
  
  button.onclick = function() {
    menu.classList.toggle('visible'); 
    if (menu.classList.contains('visible')) {
      document.onmousewheel = function (e) {
        e.preventDefault();
      } 
    } else {
      document.onmousewheel = function (e) {
        
      }
    }
  };
}


// переворот формы авторизации на главной странице

const authButton = document.querySelector('.auth__button');
const rotateContainer = document.querySelector('.rotate__container');
const backButton = document.querySelector('.button__back');

authButton.onclick = function() {
  rotateContainer.classList.add('active');
  authButton.classList.add('auth__button-hidden');
}

backButton.onclick = function() {
  rotateContainer.classList.remove('active');
  authButton.classList.remove('auth__button-hidden');
}
