$(document).ready(function () {
    $("body").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        if (event.target.classList.contains('navLink')) {
            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({ scrollTop: top }, 600)
        }
    });
});


let secondTextLi = document.querySelectorAll('#secondText li');
let firstTextLi = document.querySelectorAll('#firstText li');
let thirdTextLi = document.querySelectorAll('#thirdText li');
let fourthTextLi = document.querySelectorAll('#fourthText li');
let numberOne = document.querySelector('#numberOne');
let numberTwo = document.querySelector('#numberTwo');
let numberThree = document.querySelector('#numberThree');
let numberFour = document.querySelector('#numberFour');

let numbersImages = document.querySelectorAll('.numbersImages img');

numbersImages.forEach((item, index) => {
    item.style.transform = 'translateX(0px)'
    //parseInt(item.style.transform.replace(/[^-\d]/g, ''))
})

firstTextLi.forEach((item, index) => {
    item.style.transform = 'translateX(0px)';
})

const sliderOutLeft = (item, index) => {
    if (item.style.transform === 'translateX(0px)') {
        item.style.animation = `numbersAnimOutLeft 1s ${index / 30}s forwards`;
        setTimeout(() => {
            item.style.transform = 'translateX(-3000px)';
        }, 100);
    }
}

const sliderInRight = (item, index) => {
    if (item.style.transform !== 'translateX(0px)') {
        item.style.animation = `numbersAnimInRight 1s ${index / 30}s forwards`;
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
        }, 100);
    }
}

/*const sliderOutRight = (item, index) => {
    if (item.style.transform === 'translateX(0px)') {
        item.style.animation = `numbersAnimOutRight 1s ${index / 30}s forwards`;
        item.style.transform = 'translateX(-3000px)';
    }
}

const sliderInLeft = (item, index) => {
    if (item.style.transform !== 'translateX(0px)') {
        item.style.animation = `numbersAnimInLeft 1s ${index / 30}s forwards`;
        item.style.transform = 'translateX(0)';
    }
}*/


numberOne.addEventListener('click', () => {
    numberTwo.classList.remove('active')
    numberOne.classList.add('active')
    numberThree.classList.remove('active')
    numberFour.classList.remove('active')

    numbersImages.forEach((item, index) => {
        item.style.transform = 'translateX(0px)'
    })

    firstTextLi.forEach((item, index) => sliderInRight(item, index))
    secondTextLi.forEach((item, index) => sliderOutLeft(item, index))
    thirdTextLi.forEach((item, index) => sliderOutLeft(item, index))
    fourthTextLi.forEach((item, index) => sliderOutLeft(item, index))
})

numberTwo.addEventListener('click', () => {
    numberTwo.classList.add('active')
    numberOne.classList.remove('active')
    numberThree.classList.remove('active')
    numberFour.classList.remove('active')

    numbersImages.forEach((item, index) => {
        item.style.transform = 'translateX(-548px)'
    })

    secondTextLi.forEach((item, index) => sliderInRight(item, index))
    firstTextLi.forEach((item, index) => sliderOutLeft(item, index))
    thirdTextLi.forEach((item, index) => sliderOutLeft(item, index))
    fourthTextLi.forEach((item, index) => sliderOutLeft(item, index))
})

numberThree.addEventListener('click', () => {
    numberTwo.classList.remove('active')
    numberOne.classList.remove('active')
    numberThree.classList.add('active')
    numberFour.classList.remove('active')

    numbersImages.forEach((item, index) => {
        item.style.transform = `translateX(${-548 * 2}px)`
    })

    thirdTextLi.forEach((item, index) => sliderInRight(item, index))
    firstTextLi.forEach((item, index) => sliderOutLeft(item, index))
    secondTextLi.forEach((item, index) => sliderOutLeft(item, index))
    fourthTextLi.forEach((item, index) => sliderOutLeft(item, index))
})

numberFour.addEventListener('click', () => {
    numberTwo.classList.remove('active')
    numberOne.classList.remove('active')
    numberThree.classList.remove('active')
    numberFour.classList.add('active')

    numbersImages.forEach((item, index) => {
        item.style.transform = `translateX(${-548 * 3}px)`
    })

    fourthTextLi.forEach((item, index) => sliderInRight(item, index))
    firstTextLi.forEach((item, index) => sliderOutLeft(item, index))
    secondTextLi.forEach((item, index) => sliderOutLeft(item, index))
    thirdTextLi.forEach((item, index) => sliderOutLeft(item, index))
})




let secondBenefit = document.querySelectorAll('.secondBenefit li');
let firstBenefit = document.querySelectorAll('.firstBenefit li');
let thirdBenefit = document.querySelectorAll('.thirdBenefit li');
let fourthBenefit = document.querySelectorAll('.fourthBenefit li');
let itemOne = document.querySelector('.firstItem');
let itemTwo = document.querySelector('.secondItem');
let itemThree = document.querySelector('.thirdItem');
let itemFour = document.querySelector('.fourthItem');

let itemsImages = document.querySelectorAll('.itemsImages img');

let firstTitle = document.querySelector('.firstBenefit .title');
let secondTitle = document.querySelector('.secondBenefit .title');
let thirdTitle = document.querySelector('.thirdBenefit .title');
let fourthTitle = document.querySelector('.fourthBenefit .title');

firstTitle.style.transform = 'translateX(0px)';

const titleOut = (item) => {
    if (item.style.transform === 'translateX(0px)') {
        item.style.animation = `numbersAnimOutLeft 1s forwards`;
        setTimeout(() => {
            item.style.transform = 'translateX(-3000px)';
        }, 100);
    }
}

const titleIn = (item) => {
    if (item.style.transform !== 'translateX(0px)') {
        item.style.animation = `numbersAnimInRight 1s forwards`;
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
        }, 100);
    }
}

/*numbersImages.forEach((item, index) => {
    item.style.transform = 'translateX(0px)'
    //parseInt(item.style.transform.replace(/[^-\d]/g, ''))
})*/

firstBenefit.forEach((item, index) => {
    item.style.transform = 'translateX(0px)';
})

itemOne.addEventListener('click', () => {
    itemTwo.classList.remove('active')
    itemOne.classList.add('active')
    itemThree.classList.remove('active')
    itemFour.classList.remove('active')

    itemsImages.forEach((item, index) => {
        item.style.transform = 'translateX(0px)'
    })

    titleIn(firstTitle)
    titleOut(secondTitle)
    titleOut(thirdTitle)
    titleOut(fourthTitle)

    firstBenefit.forEach((item, index) => sliderInRight(item, index))
    secondBenefit.forEach((item, index) => sliderOutLeft(item, index))
    thirdBenefit.forEach((item, index) => sliderOutLeft(item, index))
    fourthBenefit.forEach((item, index) => sliderOutLeft(item, index))
})

itemTwo.addEventListener('click', () => {
    itemTwo.classList.add('active')
    itemOne.classList.remove('active')
    itemThree.classList.remove('active')
    itemFour.classList.remove('active')

    itemsImages.forEach((item, index) => {
        item.style.transform = 'translateX(-514px)'
    })

    titleIn(secondTitle)
    titleOut(firstTitle)
    titleOut(thirdTitle)
    titleOut(fourthTitle)

    secondBenefit.forEach((item, index) => sliderInRight(item, index))
    firstBenefit.forEach((item, index) => sliderOutLeft(item, index))
    thirdBenefit.forEach((item, index) => sliderOutLeft(item, index))
    fourthBenefit.forEach((item, index) => sliderOutLeft(item, index))
})

itemThree.addEventListener('click', () => {
    itemTwo.classList.remove('active')
    itemOne.classList.remove('active')
    itemThree.classList.add('active')
    itemFour.classList.remove('active')

    itemsImages.forEach((item, index) => {
        item.style.transform = `translateX(${-514 * 2}px)`
    })

    titleIn(thirdTitle)
    titleOut(firstTitle)
    titleOut(secondTitle)
    titleOut(fourthTitle)

    thirdBenefit.forEach((item, index) => sliderInRight(item, index))
    firstBenefit.forEach((item, index) => sliderOutLeft(item, index))
    secondBenefit.forEach((item, index) => sliderOutLeft(item, index))
    fourthBenefit.forEach((item, index) => sliderOutLeft(item, index))
})

itemFour.addEventListener('click', () => {
    itemTwo.classList.remove('active')
    itemOne.classList.remove('active')
    itemThree.classList.remove('active')
    itemFour.classList.add('active')

    itemsImages.forEach((item, index) => {
        item.style.transform = `translateX(${-514 * 3}px)`
    })

    titleIn(fourthTitle)
    titleOut(firstTitle)
    titleOut(thirdTitle)
    titleOut(secondTitle)

    fourthBenefit.forEach((item, index) => sliderInRight(item, index))
    firstBenefit.forEach((item, index) => sliderOutLeft(item, index))
    secondBenefit.forEach((item, index) => sliderOutLeft(item, index))
    thirdBenefit.forEach((item, index) => sliderOutLeft(item, index))
})