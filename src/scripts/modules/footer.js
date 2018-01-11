module.exports = () => {
  if (document.querySelector('.container__about')) {
    const footer = document.querySelector('.footer')
    footer.classList.add('footer__about');
  }
}