import hamburger from './modules/hamburger';
import authFormFlip from './modules/authFormFlip';
import map from './modules/map';
import footer from './modules/footer';
import skills from './modules/skills';
import blur from './modules/blur';
import parallax from './modules/parallax';
import blogSidebar from './modules/blogSidebar';
import blogSidebarDesktop from './modules/blogSidebarDesktop';
import upDownButtons from './modules/upDownButtons';
import slider from './modules/slider';
import stylesBundle from './modules/styles.bundle';
import entryBundle from './modules/entry.bundle';




let domloaded = function () {  
    hamburger();
    authFormFlip();
    map();
    footer();
    skills();
    blur();
    parallax();
    blogSidebar();
    blogSidebarDesktop();
    upDownButtons();
    slider();
}

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    domloaded();
} else {
    document.addEventListener("DOMContentLoaded", domloaded);
}

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
            },800)
        },800)
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