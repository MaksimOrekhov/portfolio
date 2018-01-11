module.exports = () => {
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
}