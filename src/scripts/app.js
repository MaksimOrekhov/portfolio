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
                const imgWidth = document.querySelector('.comments__bg-img').offsetWidth;
                const posLeft = -wrapper.offsetLeft;
                const posTop = -wrapper.offsetTop;
                const blurCss = form.style;
    
                blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
                blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
            }
        }
    }());
    
blur.set();
    
window.onresize = function() {
    blur.set();
}
}

// параллакс
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
    
// прелоадер 
if (document.querySelector('.preloader')) {
    let preloader = document.querySelector('.preloader');
    let preloaderText = document.querySelector('.preloader__num');
    let currentPercent = 0;
    let circleOne = document.querySelector('.circle-1');
    let circleTwo = document.querySelector('.circle-2');
    let circleThree = document.querySelector('.circle-3');
    let delayCircleOne = 30;
    let delayCircleTwo = 20;

let preloaderAnimate = setInterval(function() {
    currentPercent += 5;
    document.onmousewheel = function (e) {
        e.preventDefault();
      } 
    
    if (currentPercent >= 100) {
        document.onmousewheel = function (e) {
            
          } 
        preloaderText.innerHTML = 100
        currentPercent = 100;
        clearInterval(preloaderAnimate)
        setTimeout(()=>{
            preloader.style.opacity = 0
            preloaderText.style.opacity = 0
        },500)
        setTimeout(()=>{
            preloader.style.opacity = 0
            setTimeout(()=>{
                preloader.style.display = 'none'
            },1000)
        },1000)
    }
    if (currentPercent > delayCircleOne) {
        circleOne.style.strokeDashoffset = 440 - (440 / 100 * (currentPercent * (delayCircleOne / 100 + 1) - delayCircleOne))
    }
    if (currentPercent > delayCircleTwo) {
        circleTwo.style.strokeDashoffset = 350 - (350 / 100 * (currentPercent * (delayCircleTwo / 100 + 1) - delayCircleTwo))
    }
    circleThree.style.strokeDashoffset = 260 - (260 / 100 * currentPercent)

    preloaderText.innerHTML = currentPercent;

}, 100);
}

// сайдбар на странице блог на мобильных устройствах
if (document.querySelector('.blog__nav')) {

    let sidebarButton = document.querySelector('.blog__nav-link');
    let sidebar = document.querySelector('.blog__nav');

    sidebarButton.onclick = function(e) {
        e.preventDefault();
        sidebar.classList.toggle('blog__nav-active');
    }

}

// сайдбар страницы блог на десктопах

if (document.querySelector('.blog__nav')) {
window.onscroll = function() {
    let sidebar = document.querySelector('.blog__nav'),
        sectionBlog = document.querySelector('.blog'),
        windowMargin = window.innerHeight / 3,
        wScroll = window.pageYOffset,
        articles = document.querySelector('.blog__articles');

    const sidebarFixed = wScroll + windowMargin;

    if (sidebarFixed >= 700) {
        sidebar.classList.add('blog__nav-fixed');
        articles.classList.add('blog__articles-fixed');
    } else {
        sidebar.classList.remove('blog__nav-fixed');  
        articles.classList.remove('blog__articles-fixed');
              
    }
}

// прокрутка к нужной статье

let linkNav = document.querySelectorAll('[href^="#article"]'),
    speed = 0.5;
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1'),
        scroll = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (scroll < 0 ? Math.max(w - progress/speed, w + scroll) : Math.min(w + progress/speed, w + scroll));
            window.scrollTo(0,r);
            if (r != w + scroll) {
                requestAnimationFrame(step);
            } else {
                location.hash = hash;
            }
        }
    }, false);
}

let sidebarItem = document.querySelectorAll('.blog__item'),
    sidebarLink = document.querySelectorAll('[href^="#article"]'),
    article = document.querySelectorAll('[id^="#article"]'),
    currentArticle;


    // sidebarLink.forEach((item) => {
        article.forEach((i) => {
        if ( i.getBoundingClientRect().top == 0) {
            i.classList.add('active')
        }
    })
// })
    
}