const navBar = document.querySelector('.navBar')
const navBarText = document.querySelector('.navBar p')
const navBarMenu = document.querySelector('.navBarMenu')

navBar.addEventListener('click', (e) => {
    if(!e.target.classList.contains('transBtn')) {
        navBar.classList.toggle('navBar__expand');
        navBarText.classList.toggle('navBarP__expand');
        navBarMenu.classList.toggle('navBarP__expand');
    }
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
const navListMenuItems = document.querySelectorAll('.navListMenu__item a')

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
        console.log(event.target)
    }));
    
    $('.preview1').on('click', () => ($('.video1').append('<iframe src="https://vk.com/video_ext.php?oid=47903010&id=456239216&hash=75aa4f478f4cdbff&autoplay=1" frameborder="0" allowfullscreen autoplay="autoplay"></iframe>')))
    $('.preview2').on('click', () => ($('.video2').append('<iframe src="https://vk.com/video_ext.php?oid=47903010&id=456239209&hash=e4c09c3cbbaedaf2&autoplay=1" frameborder="0" allowfullscreen autoplay="autoplay"></iframe>')))
    $('.preview3').on('click', () => ($('.video3').append('<iframe src="https://vk.com/video_ext.php?oid=47903010&id=456239217&hash=b812289abfac1118&autoplay=1" frameborder="0" allowfullscreen autoplay="autoplay"></iframe>')))
    $('.preview4').on('click', () => ($('.video4').append('<iframe src="https://vk.com/video_ext.php?oid=47903010&id=456239220&hash=97cb376ef72355ce&autoplay=1" frameborder="0" allowfullscreen autoplay="autoplay"></iframe>')))
    $('.preview5').on('click', () => ($('.video5').append('<iframe src="https://vk.com/video_ext.php?oid=47903010&id=456239227&hash=8117f74857676624&autoplay=1" frameborder="0" allowfullscreen autoplay="autoplay"></iframe>')))
    $('.preview6').on('click', () => ($('.video6').append('<iframe src="https://vk.com/video_ext.php?oid=47903010&id=456239224&hash=48cb1d8284039492&autoplay=1" frameborder="0" allowfullscreen autoplay="autoplay"></iframe>')))

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
        } else if (pageYOffset < community) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[1].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[1].classList.add('active')
        } else if (pageYOffset < education) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[2].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[2].classList.add('active')
        } else if (pageYOffset < allIn) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[3].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[3].classList.add('active')
        } else if (pageYOffset < employment) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[4].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[4].classList.add('active')
        } else if (pageYOffset < roadMap) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[5].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[5].classList.add('active')
        } else if (pageYOffset < warranty) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[6].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[6].classList.add('active')
        } else if (pageYOffset < reviews) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[7].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[7].classList.add('active')
        } else if (pageYOffset < founders) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[8].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[8].classList.add('active')
        } else if (pageYOffset < features) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[9].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[9].classList.add('active')
        } else if (pageYOffset < bonuses) {
            navBarMenuItems.forEach(e => e.classList.remove('active'))
            navBarMenuItems[10].classList.add('active')
            navListMenuItems.forEach(e => e.classList.remove('active'))
            navListMenuItems[10].classList.add('active')
        } else if (pageYOffset < price) {
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

const resultsCross = document.querySelectorAll('.resultsCross');
const resultsExpandable = document.querySelectorAll('.resultsExp');
const resultsOpener = document.querySelectorAll('.exp');

resultsExpandable.forEach(e => e.addEventListener('click', (e) => {
    if(e.target.classList.contains('resultsExp')) {
        resultsExpandable.forEach(e => e.classList.remove('resultsExpand'))
        setTimeout(() => resultsExpandable.forEach(e => e.style.zIndex = "-90", 500))
    }
}))

resultsCross.forEach(e => e.addEventListener('click', () => {
    resultsExpandable.forEach(e => e.classList.remove('resultsExpand'))
    setTimeout(() => resultsExpandable.forEach(e => e.style.zIndex = "-90", 500))
}))

resultsOpener[0].addEventListener('click', () => {
    resultsExpandable[0].style.zIndex = "90"
    
    setTimeout(() => resultsExpandable[0].classList.add('resultsExpand'), 100)
})

resultsOpener[1].addEventListener('click', () => {
    resultsExpandable[1].style.zIndex = "90"
    
    setTimeout(() => resultsExpandable[1].classList.add('resultsExpand'), 100)
})

resultsOpener[2].addEventListener('click', () => {
    resultsExpandable[2].style.zIndex = "90"
    
    setTimeout(() => resultsExpandable[2].classList.add('resultsExpand'), 100)
})

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



