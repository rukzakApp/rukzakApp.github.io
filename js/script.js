const navBar = document.querySelector('.navBar')
const navBarText = document.querySelector('.navBar p')
const navBarMenu = document.querySelector('.navBarMenu')

navBar.addEventListener('click', () => {
    navBar.classList.toggle('navBar__expand');
    navBarText.classList.toggle('navBarP__expand');
    navBarMenu.classList.toggle('navBarP__expand');

})

const burger = document.querySelector('.burger');
const body = document.querySelector('body');
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
        body.style.overflowY = "visible";
        setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
        
    } else {
        mobMenuListItems[0].style.left = '0';
        mobMenuList.style.zIndex = "5";
        body.style.overflowY = "hidden";
    }
})

crosses.forEach(e => e.addEventListener('click', () => {
    mobMenuListItems.forEach(e => e.style.left = '100%')
    body.style.overflowY = "visible";
    setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
    crossLeft.classList.remove('rotateLeft')
    crossRight.classList.remove('rotateRight')
    burgerSide.forEach(e => e.classList.remove('burgerExpand'))
    burgerExpanded = false;
}))

const forward = (num) => {
    mobMenuListItems[num].style.left = "0";
    mobMenuList.style.zIndex = "10";
    body.style.overflowY = "hidden";
}

const back = (num) => {
    mobMenuListItems[num].style.left = "100%";
    setTimeout(() => mobMenuList.style.zIndex = "5", 500)
}


//Page transition

const transBtn = document.querySelectorAll('.transBtn')
const header = document.querySelector('.header')

$(document).ready(function(){
    transBtn.forEach(e => e.addEventListener("click", function (event) {
        event.preventDefault();

        body.style.overflowY = "visible";
        mobMenuListItems.forEach(e => e.style.left = '100%')

        var id  = $(this).attr('href'),
            top = $(id).offset().top - header.offsetHeight;
        $('body,html').animate({scrollTop: top}, 700);
        setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
        
    }));
});

const videoFrame = document.querySelector('.videoFrame')

videoFrame.addEventListener('click', (e) => {
    e.preventDefault()
    alert('asd')
})



