

/*const sit = document.querySelector('.situation');

observer = new IntersectionObserver((entries) => {
    console.log(entries[0])
    if(entries[0].intersectionRatio > 0) {
        entries[0].target.style.animation = 'anim 4s forwards'
    } else {
        entries[0].target.style.animation = 'none'
    }
})

observer.observe(sit);*/

const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
let page = document.querySelector('.about span');
const aboutTexts = document.querySelectorAll('.about .texts p');
let aboutPage = 0;

arrowLeft.addEventListener('click', () => {
    if(parseInt(page.innerHTML) > 1) {
        page.innerHTML = '0' + (parseInt(page.innerHTML) - 1)
        aboutTexts[aboutPage].style.animationName = 'rightOut';
        aboutPage--
        aboutTexts[aboutPage].style.animationName = 'leftIn';
    }
})

arrowRight.addEventListener('click', () => {
    if(parseInt(page.innerHTML) < 3) {
        page.innerHTML = '0' + (parseInt(page.innerHTML) + 1)
        aboutTexts[aboutPage].style.animationName = 'leftOut';
        aboutPage++
        aboutTexts[aboutPage].style.animationName = 'rightIn';
    }
})


const numbers = document.querySelectorAll('.numbers p');
const texts = document.querySelectorAll('.benefits .texts p');
const titles = document.querySelectorAll('.titles h2');
let vis = 0;
const cont = document.querySelector('.benefits .container');

numbers.forEach(e => e.addEventListener('click', (e) => {
    if(vis !== parseInt(e.target.innerHTML - 1)) {
        numbers[vis].classList.remove('numbersActive');
        if(e.target.innerHTML - 1 > vis) {
            cont.style.background = `url('../img/benefits${e.target.innerHTML}.png') no-repeat right 340px`;
            texts[vis].style.animationName = 'leftOut';
            titles[vis].style.animationName = 'leftOut';
            texts[e.target.innerHTML - 1].style.animationName = 'rightIn';
            titles[e.target.innerHTML - 1].style.animationName = 'rightIn';
            vis = e.target.innerHTML - 1;
        } else {
            texts[vis].style.animationName = 'rightOut';
            titles[vis].style.animationName = 'rightOut';
            texts[e.target.innerHTML - 1].style.animationName = 'leftIn';
            titles[e.target.innerHTML - 1].style.animationName = 'leftIn';
            vis = e.target.innerHTML - 1;
        }
        numbers[vis].classList.add('numbersActive');
    }
}))

const howTexts = document.querySelectorAll('.howItWorks .texts p');
const howLeftBtn = document.querySelector('.arrowRoundLeft');
const howRightBtn = document.querySelector('.arrowRoundRight');
let howPage = 0;
const howCont = document.querySelector('.howItWorks .container');

howLeftBtn.addEventListener('click', (e) => {
    if(howPage > 0) {
        /*howTexts[howPage].style.animationName = 'rightOut';
        howPage--
        howCont.style.background = `url('../img/how${howPage+1}.png') no-repeat right 220px`;
        howTexts[howPage].style.animationName = 'leftIn';*/
        howTexts[howPage].style.opacity = '0';
        howPage--
        howCont.style.background = `url('../img/how${howPage+1}.png') no-repeat right 220px`;
        howTexts[howPage].style.opacity = '1';
    }
})

howRightBtn.addEventListener('click', (e) => {
    if(howPage < 3) {
        howTexts[howPage].style.opacity = '0';
        howPage++
        howCont.style.background = `url('../img/how${howPage+1}.png') no-repeat right 220px`;
        setTimeout(() => {
            howTexts[howPage].style.opacity = '1';
        }, 200) 
    }
})

//new

var tl = new TimelineMax();
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.situation', 1, {left: 0}, '=.5')
tl.to('.situation1', 1, {left: 0}, '=-1')


const scene = new ScrollMagic.Scene({
  triggerElement: ".situations",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".situations")
  .setTween(tl)
        .addTo(controller);

tl2.to('.content1', 1, {top: '-350px'}, '=1')
tl2.to('.content2', 1, {top: 0}, '=-1')
tl2.to('.images img', 1, {transform: 'translateX(-383px)'}, '=-1')
tl2.to('.content2', 1, {top: '-350px'}, '=1')
tl2.to('.content3', 1, {top: 0}, '=-1')
tl2.to('.images img', 1, {transform: 'translateX(-766px)'}, '=-1')
tl2.to('.images img', 1, {transform: 'translateX(-766px)'}, '=1')
const scene2 = new ScrollMagic.Scene({
    triggerElement: ".playersBlock",
                triggerHook: "onLeave",
                duration: 2000
    })
    .setPin(".playersBlock")
    .setTween(tl2)
            .addTo(controller);



    