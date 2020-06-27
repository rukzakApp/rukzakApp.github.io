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
const crosses = document.querySelectorAll('.cross');
const mobMenuList = document.querySelector('.mobMenuList')
const mobMenuListItems = document.querySelectorAll('.mobMenuList__item')
let burgerExpanded = false;

burger.addEventListener('click', () => {
    crossLeft.classList.toggle('rotateLeft')
    crossRight.classList.toggle('rotateRight')
    burgerSide.forEach(e => e.classList.toggle('burgerExpand'))

    burgerExpanded = !burgerExpanded

    if(!burgerExpanded) {
        mobMenuListItems.forEach(e => e.style.left = '100%')
        setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
        
    } else {
        mobMenuListItems[0].style.left = '0';
        mobMenuList.style.zIndex = "2";
    }
})

crosses.forEach(e => e.addEventListener('click', () => {
    mobMenuListItems.forEach(e => e.style.left = '100%')
    setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
    crossLeft.classList.remove('rotateLeft')
    crossRight.classList.remove('rotateRight')
    burgerSide.forEach(e => e.classList.remove('burgerExpand'))
    burgerExpanded = false;
}))

const forward = (num) => {
    mobMenuListItems[num].style.left = "0";
    mobMenuList.style.zIndex = "10";
}

const back = (num) => {
    mobMenuListItems[num].style.left = "100%";
    setTimeout(() => mobMenuList.style.zIndex = "2", 500)
}

console.log(mobMenuListItems[1])
