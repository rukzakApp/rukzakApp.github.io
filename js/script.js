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

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
        setTimeout(() => mobMenuList.style.zIndex = "-1", 500)
        
    }));

    const newLvl = $("#newLvl").offset().top;
    const community = $("#community").offset().top;
    const education = $("#education").offset().top;
    const allIn = $("#allIn").offset().top;
    const employment = $("#employment").offset().top;
    const roadMap = $("#roadMap").offset().top;
    const warranty = $("#warranty").offset().top;
    const reviews = $("#reviews").offset().top;
    const founders = $("#founders").offset().top;
    const features = $("#features").offset().top;
    const bonuses = $("#bonuses").offset().top;
    const price = $("#price").offset().top;
    const navBarMenuItems = document.querySelectorAll('.navBarMenu__item a')
    const navListMenuItems = document.querySelectorAll('.navListMenu__item a')

    $(document).scroll((e) => {
        if(pageYOffset < newLvl-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[0].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[0].classList.add('active')
        } else if (pageYOffset < community-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[1].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[1].classList.add('active')
        } else if (pageYOffset < education-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[2].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[2].classList.add('active')
        } else if (pageYOffset < allIn-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[3].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[3].classList.add('active')
        } else if (pageYOffset < employment-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[4].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[4].classList.add('active')
        } else if (pageYOffset < roadMap-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[5].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[5].classList.add('active')
        } else if (pageYOffset < warranty-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[6].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[6].classList.add('active')
        } else if (pageYOffset < reviews-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[7].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[7].classList.add('active')
        } else if (pageYOffset < founders-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[8].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[8].classList.add('active')
        } else if (pageYOffset < features-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[9].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[9].classList.add('active')
        } else if (pageYOffset < bonuses-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[10].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[10].classList.add('active')
        } else if (pageYOffset < price-50) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[11].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[11].classList.add('active')
        } else {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[12].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[12].classList.add('active')
        }    
    })
});

const warrantyCross = document.querySelector('.warrantyCross');
const warrantyExpandable = document.querySelector('.warrantyExpandable');
const opener = document.querySelector('.opener');

warrantyCross.addEventListener('click', () => {
    warrantyExpandable.classList.remove('warrantyExp')
    body.style.overflowY = "visible";
    setTimeout(() => warrantyExpandable.style.zIndex = "-90", 500)
})

opener.addEventListener('click', () => {
    warrantyExpandable.style.zIndex = "90"
    warrantyExpandable.classList.add('warrantyExp')
    body.style.overflowY = "hidden";
})


