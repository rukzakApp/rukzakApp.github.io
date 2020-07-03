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
        setTimeout(() => {
            if(event.target.classList.contains('mobNav')) {
                navListMenuItems.forEach(e => e.classList.remove('active'))
                event.target.classList.add('active')
            }
        }, 1000)
    }));

    const reviews = $("#reviews").offset().top;
    const program = $("#program").offset().top;
    const price = $("#price").offset().top;
    const navListMenuItems = document.querySelectorAll('.navListMenu__item a')

    $(document).scroll((e) => {
        if(pageYOffset < reviews) {
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[0].classList.add('active')
        } else if (pageYOffset < program) {
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[1].classList.add('active')
        } else if (pageYOffset < price) {
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[2].classList.add('active')
        } else {
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[3].classList.add('active')
        }    
    })
});

const warrantyCross = document.querySelector('.warrantyCross');
const warrantyExpandable = document.querySelector('.warrantyExpandable');
const opener = document.querySelector('.opener');

warrantyExpandable.addEventListener('click', (e) => {
    if(e.target.classList.contains('warrantyExpandable')) {
        warrantyExpandable.classList.remove('warrantyExp')
        setTimeout(() => warrantyExpandable.style.zIndex = "-90", 500)
    }
})

warrantyCross.addEventListener('click', () => {
    warrantyExpandable.classList.remove('warrantyExp')
    setTimeout(() => warrantyExpandable.style.zIndex = "-90", 500)
})

opener.addEventListener('click', () => {
    warrantyExpandable.style.zIndex = "90"
    setTimeout(() => warrantyExpandable.classList.add('warrantyExp'), 100)
})

const courseModalPayment = document.querySelectorAll('.modal');
const modalCross = document.querySelectorAll('.modalCross');

courseModalPayment.forEach(e => e.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        courseModalPayment.forEach(e => e.classList.remove('modalExp'))
        setTimeout(() => courseModalPayment.forEach(e => e.style.zIndex = "-90", 600))
    }
}))

modalCross.forEach(e => e.addEventListener('click', () => {
    courseModalPayment.forEach(e => e.classList.remove('modalExp'))
    setTimeout(() => courseModalPayment.forEach(e => e.style.zIndex = "-90", 600))
}))

const modalExpand = (num) => {
    courseModalPayment[num].style.zIndex = '90'
    setTimeout(() => courseModalPayment[num].classList.add('modalExp'), 100)
}



