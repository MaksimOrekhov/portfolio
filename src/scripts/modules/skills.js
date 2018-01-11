module.exports = () => {
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
}