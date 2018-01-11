module.exports = () => {
  if (document.querySelector('.blog__nav')) {

    let sidebarButton = document.querySelector('.blog__nav-link');
    let sidebar = document.querySelector('.blog__nav');

    sidebarButton.onclick = function(e) {
        e.preventDefault();
        sidebar.classList.toggle('blog__nav-active');
    }

}
}