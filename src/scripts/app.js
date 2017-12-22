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

// анимация кругов со скиллами
const svgScroll = (function() {
    const svg = document.querySelectorAll('.circles');
    const circle = document.querySelectorAll('.circle__second');
    const windowMargin = window.innerHeight / 3;

    return {
        animate: function(wScroll) {
            const startAnimate = wScroll + windowMargin;
    
            if (startAnimate >= 700) {
                circle.forEach((item) => {
                    item.classList.add('circle-50');
                });
            } else {
                circle.forEach((item) => {
                    item.classList.remove('circle-50');
                });
            }
        }
    }

}());

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    svgScroll.animate(wScroll);
}

// blur формы
if (document.querySelector('.form__elem')) {
const blur = (function() {
    const wrapper = document.querySelector('.form__elem');
    const form = document.querySelector('.form__blur');

    return {
        set: function() {
            const imgWith = document.querySelector('.comments__bg').offsetWidth;
            const posLeft = -wrapper.offsetLeft;
            const posTop = -wrapper.offsetTop;
            const blurCss = form.style;

            blurCss.backgroundSize = imgWith + 'px' + ' ' + 'auto';
            blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
}());

blur.set();

window.onresize = function() {
    blur.set();
}
}

if (document.querySelector('.parallax')) {

    const parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

    const moveLayers = (e) => {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;

    let i = 0;
    for (let layer of layers) {
        const divider = i / 80;
        const positionX = initialX * divider;
        const positionY = initialY * divider;
        const bottomPosition = (window.innerHeight / 2) * divider;
        const image = layer.firstElementChild;

        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
        image.style.bottom = `-${bottomPosition}px`;
        i++;
    }
}  
window.addEventListener('mousemove', moveLayers);
}
    
