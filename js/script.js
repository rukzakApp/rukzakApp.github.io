var element = document.querySelectorAll('.telInput');
element.forEach(e => {
    var maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: false
      };
    var mask = IMask(e, maskOptions);
})

const swiperNext = document.querySelector(".swiper-button-next")
const swiperPrev = document.querySelector(".swiper-button-prev")
const swiperSlide = document.querySelectorAll('.swiper-slide')
const progressBar = document.querySelector('.progressBar')

console.log(swiperSlide)


const carousel__item = document.querySelectorAll('.carousel__item')
console.log(carousel__item[1])
counter = 0

swiperSlide[0].querySelectorAll('linearGradient stop').forEach((e, i) => {
    if (i % 2 === 0) {
        e.style.stopColor = "#F2C94C"
    } else {
        e.style.stopColor = "#F29C4C"
    }
})

swiperNext.addEventListener('click', () => {
        counter ++

        if (counter == 9) {
            progressBar.style.width = `${30 + (counter - 1) * 40 + 20}%`
        } else {
            progressBar.style.width = `${30 + counter * 40}%`
        }

        swiperSlide[counter].querySelectorAll('linearGradient stop').forEach((e, i) => {
            if (i % 2 === 0) {
                e.style.stopColor = "#F2C94C"
            } else {
                e.style.stopColor = "#F29C4C"
            }
        })

        /*&:first-child {
            stop-color: #F2C94C;
        }

        &:last-child {
            stop-color: #F29C4C;
        }*/
    
})

swiperPrev.addEventListener('click', () => {
    swiperSlide[counter].querySelectorAll('linearGradient stop').forEach((e, i) => {
        if (i % 2 === 0) {
            e.style.stopColor = "#bdbdbd"
        } else {
            e.style.stopColor = "#bdbdbd"
        }
    })

    counter --

    progressBar.style.width = `${30 + counter * 40}%`
})

const accordionBtn = document.querySelectorAll('.accordionBtn')

const accordionExample = document.querySelector('#accordionExample')
const accordionExample2 = document.querySelector('#accordionExample2')

$("#accordionExample2").on('show.bs.collapse', () => {
    $("#accordionExample .show").collapse('hide')
})

$("#accordionExample").on('show.bs.collapse', () => {
    $("#accordionExample2 .show").collapse('hide')
})

let boolAcc1 = false
let boolAcc2 = false

accordionBtn.forEach(e => e.addEventListener('click', (t) => {
    t.target.parentNode.classList.toggle('rotated')
    if (t.target.closest('ul') == accordionExample) {
        boolAcc1 = t.target.parentNode.classList.contains('rotated') ? true : false 
        
        accordionExample2.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        accordionExample.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        
        boolAcc1 ? t.target.parentNode.classList.add('rotated') : t.target.parentNode.classList.remove('rotated')
    }

    if (t.target.closest('ul') == accordionExample2) {
        boolAcc2 = t.target.parentNode.classList.contains('rotated') ? true : false 
        
        accordionExample2.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        accordionExample.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        
        boolAcc2 ? t.target.parentNode.classList.add('rotated') : t.target.parentNode.classList.remove('rotated')   
    }
}))

const welcomeCarousel = document.querySelector('.welcomeCarousel')
const welcomePage = document.querySelector('.welcomePage')
const leftSideContent = document.querySelector('.leftSide .content')
const body = document.querySelector('body')

if (body.clientWidth >= 993) {
    welcomePage.style.height = `${welcomeCarousel.clientHeight + 120}px`
    leftSideContent.style.height = `${welcomeCarousel.clientHeight + 120}px`
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });




