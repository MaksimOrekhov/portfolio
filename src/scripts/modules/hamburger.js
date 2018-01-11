module.exports = () => {
  if (document.querySelector('.hamburger')) {
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
}