module.exports = () => {
  if (document.querySelector('.slider')) {

    const buttonNext = document.querySelector('.slider__item-overlay__next'),
          buttonPrev = document.querySelector('.slider__item-overlay__prev'),
          sliderListNext = document.querySelector('.slider__next-list'),
          sliderListPrev = document.querySelector('.slider__prev-list'),
          slider = document.querySelector('.slider__prev-list'),
          currentSlide = document.querySelector('.wrapper__slider-item--active'),
          nextSlide = currentSlide.nextElementSibling,
          prevSlide = currentSlide.previousElementSibling,
          slides = document.querySelectorAll('.wrapper__slider-item'),
          slidesLeft = document.querySelectorAll('.slider__left-item');
    
    let slideNum = 0;
    let slidesCount = slides.length;
    let i = 1;

    sliderListPrev.style.bottom = '100%';
    sliderListNext.style.bottom = '0%';
    let x = 0;
    buttonPrev.addEventListener('click', function() { 
      
        sliderListPrev.style.bottom = x + '%';
        sliderListNext.style.bottom = -x + 100 + '%';

        if(sliderListPrev.style.bottom <= '0%') {
          sliderListPrev.style.bottom = x + '%';
          x = 300;
        }

        if(sliderListNext.style.bottom < '0%') {
          sliderListNext.style.bottom = x + '%';
          x = 200;
          
        }

        currentSlide.classList.remove('wrapper__slider-item--active');        

        if(i <= 2) {
          slides[i].classList.add('wrapper__slider-item--active');
          slides[i-1].classList.remove('wrapper__slider-item--active');
          slidesLeft[i].classList.add('slider__left-item--active');
          slidesLeft[i-1].classList.remove('slider__left-item--active');
          i++;
        
        } else {
          i = 1;
          slides[i-1].classList.add('wrapper__slider-item--active');
          slides[i+1].classList.remove('wrapper__slider-item--active');
          slidesLeft[i-1].classList.add('slider__left-item--active');
          slidesLeft[i+1].classList.remove('slider__left-item--active');
        }
        
        
        
        x -= 100;
    });


    buttonNext.addEventListener('click', function() {      
      
      sliderListPrev.style.bottom = x +'%';
      sliderListNext.style.bottom = -x + 100 + '%';

      if(sliderListPrev.style.bottom <= '0%') {
        sliderListPrev.style.bottom = x + '%';
        x = 300;
      }

      if(sliderListNext.style.bottom >= '200%') {
        sliderListNext.style.bottom = -x + 100 + '%';
        x = 200;
      }

      if(sliderListNext.style.bottom < '0%') {
        sliderListNext.style.bottom = x + '%';
        x = 200;
      }

      currentSlide.classList.remove('wrapper__slider-item--active');        

        if(i <= 2) {
          slides[i].classList.add('wrapper__slider-item--active');
          slides[i-1].classList.remove('wrapper__slider-item--active');
          slidesLeft[i].classList.add('slider__left-item--active');
          slidesLeft[i-1].classList.remove('slider__left-item--active');

          i++;          
        
        } else {
          i = 1;
          slides[i-1].classList.add('wrapper__slider-item--active');
          slides[i+1].classList.remove('wrapper__slider-item--active');
          slidesLeft[i-1].classList.add('slider__left-item--active');
          slidesLeft[i+1].classList.remove('slider__left-item--active');
        }

      x -= 100;      
    });

    
  }

}