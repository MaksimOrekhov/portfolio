module.exports = () => {
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
}