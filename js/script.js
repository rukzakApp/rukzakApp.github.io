const navBar = document.querySelector('.navBar')
const navBarText = document.querySelector('.navBar p')
const navBarMenu = document.querySelector('.navBarMenu')

navBar.addEventListener('click', () => {
    navBar.classList.toggle('navBar__expand');
    navBarText.classList.toggle('navBarP__expand');
    navBarMenu.classList.toggle('navBarP__expand');

})