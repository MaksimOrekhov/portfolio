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

if (document.querySelector('.auth__button')) {
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
}

//подключение гугл-карты
if (document.getElementById('map')) {
const center = {lat: 53.2050, lng: 34.4177};
const home = {lat: 53.2051, lng: 34.4215}
const map = new google.maps.Map(document.getElementById('map'), {
  center: center,
  zoom: 17,
  draggable: false,
  styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#61dac9"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 80
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
});

const marker = new google.maps.Marker({
  position: home,
  map: map,
  animation: google.maps.Animation.DROP,
});
}

// работа футера на странице about
if (document.querySelector('.container__about')) {
    const footer = document.querySelector('.footer')
    footer.classList.add('footer__about');
}
