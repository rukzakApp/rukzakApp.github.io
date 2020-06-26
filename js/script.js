const navBar = document.querySelector('.navBar')
const navBarText = document.querySelector('.navBar p')
const navBarMenu = document.querySelector('.navBarMenu')

navBar.addEventListener('click', () => {
    navBar.classList.toggle('navBar__expand');
    navBarText.classList.toggle('navBarP__expand');
    navBarMenu.classList.toggle('navBarP__expand');

})

const burger = document.querySelector('.burger');
const crossRight = document.querySelector('.crossRight');
const crossLeft = document.querySelector('.crossLeft');
const burgerSide = document.querySelectorAll('.burgerSide');
const mobMenuListItems = document.querySelectorAll('.mobMenuList__item')
let burgerExpanded = false;

burger.addEventListener('click', () => {
    crossLeft.classList.toggle('rotateLeft')
    crossRight.classList.toggle('rotateRight')
    burgerSide.forEach(e => e.classList.toggle('burgerExpand'))

    burgerExpanded = !burgerExpanded

    if(!burgerExpanded) {
        mobMenuListItems.forEach(e => e.style.transform = 'translateX(100%)')
        mobMenuListItems[0].style.transform = 'translateY(74px) translateX(100%)'
    } else {
        mobMenuListItems[0].style.transform = 'translateY(74px) translateX(0)'
    }
})

const forward = (num) => {
    mobMenuListItems[num].style.transform = "translateX(0)";
}

const back = (num) => {
    mobMenuListItems[num].style.transform = "translateX(100%)";
}

console.log(mobMenuListItems[1])
