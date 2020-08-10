var element = document.querySelectorAll('.telInput');
element.forEach(e => {
    var maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: false
      };
    var mask = IMask(e, maskOptions);
})

/*const stagesControlLeft = document.querySelector("#stagesControlLeft")
const stagesControlRight = document.querySelector("#stagesControlRight")
const carouselInner = document.querySelector(".carousel-inner__inside")
const yellowBar = document.querySelector(".yellowBar rect")

const carousel__item = document.querySelectorAll('.carousel__item')
console.log(carousel__item[1])
counter = 1

/*stagesControlRight.addEventListener('click', () => {
    carouselInner.style.transform = "translateX(-380px)"
    yellowBar.style.width = "650px"
    gradient = carousel__item[0].querySelectorAll('linearGradient')

    gradient.forEach(e => e.querySelectorAll('stop')[0].style.stopColor = "#F29C4C")
    gradient.forEach(e => e.querySelectorAll('stop')[1].style.stopColor = "#F2C94C")

    

    /*for(i = 0; i < 9; i++) {
        if (i === 7) {
            carousel__item.querySelectorAll('.carousel__path')[i].style.stroke = `url(#paint${i}_linear)`
        } else {
            carousel__item.querySelectorAll('.carousel__path')[i].style.fill = `url(#paint${i}_linear)`
        }

        &:first-child {
            stop-color: #F2C94C;
        }

        &:last-child {
            stop-color: #F29C4C;
        }
    }
})

stagesControlLeft.addEventListener('click', () => {
    carouselInner.style.transform = "translateX(0)"
    yellowBar.style.width = "280px"
})*/

const accordionBtn = document.querySelectorAll('.accordionBtn')

const accordionExample = document.querySelector('#accordionExample')
const accordionExample2 = document.querySelector('#accordionExample2')

accordionBtn.forEach(e => e.addEventListener('click', (t) => {
    t.target.parentNode.classList.toggle('rotated')
    if (t.target.closest('ul') == accordionExample) {
        accordionExample2.querySelectorAll('.collapse').forEach(e => e.style.height = 0)
        accordionExample2.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
    }

    if (t.target.closest('ul') == accordionExample2) {
        accordionExample.querySelectorAll('.collapse').forEach(e => e.classList.remove('show'))
        accordionExample.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
    }
}))

const welcomeCarousel = document.querySelector('.welcomeCarousel')
const welcomePage = document.querySelector('.welcomePage')
const leftSideContent = document.querySelector('.leftSide .content')
const body = document.querySelector('body')

console.log(welcomeCarousel.clientHeight)

if (body.clientWidth >= 993) {
    welcomePage.style.height = `${welcomeCarousel.clientHeight + 120}px`
    leftSideContent.style.height = `${welcomeCarousel.clientHeight + 120}px`
}





