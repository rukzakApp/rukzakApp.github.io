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
        mobMenuListItems.forEach(e => e.style.left = '100vw')
        body.style.overflowY = "visible";
        setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
        
    } else {
        mobMenuListItems[0].style.left = '0';
        mobMenuList.style.zIndex = "5";
        body.style.overflowY = "hidden";
    }
})

crosses.forEach(e => e.addEventListener('click', () => {
    mobMenuListItems.forEach(e => e.style.left = '100vw')
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
    mobMenuListItems[num].style.left = "100vw";
    setTimeout(() => mobMenuList.style.zIndex = "5", 500)
}


//Page transition

const transBtn = document.querySelectorAll('.transBtn')
const header = document.querySelector('.header')

$(document).ready(function(){
    transBtn.forEach(e => e.addEventListener("click", function (event) {
        event.preventDefault();

        body.style.overflowY = "visible";
        mobMenuListItems.forEach(e => e.style.left = '100vw')

        crossLeft.classList.remove('rotateLeft')
        crossRight.classList.remove('rotateRight')
        burgerSide.forEach(e => e.classList.remove('burgerExpand'))
        
        
        if(!event.target.classList.contains('upBtn')) {
            burgerExpanded = !burgerExpanded
        }

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
        setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
        setTimeout(() => {
            if(event.target.classList.contains('mobNav')) {
                navListMenuItems.forEach(e => e.classList.remove('active'))
                event.target.classList.add('active')
            }
        }, 1000)
    }));

    const results = $("#results").offset().top;
    const form = $("#form").offset().top;
    const navListMenuItems = document.querySelectorAll('.navListMenu__item a')

    $(document).scroll((e) => {
        if(pageYOffset < results) {
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[0].classList.add('active')
        } else if (pageYOffset < form) {
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[1].classList.add('active')
        } else {
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[2].classList.add('active')
        }    
    })
});

const secondInput = document.querySelector('.second')
const thirdInput = document.querySelector('.third')
const submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', () => {
    if(thirdInput.value == "") {
        secondInput.setAttribute("required", "true")
    }
})

const carouselItem = document.querySelectorAll('.carousel-item')

carouselItem.forEach(e => e.style.height = `${carouselItem[0].clientWidth / 1.78}px`)

