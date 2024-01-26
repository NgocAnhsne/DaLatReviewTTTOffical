const ListImage = document.querySelector('.home__slider--list__images');
const hamburgerBtn = document.querySelector('.header__top--left__hamburger');
const imgs = document.querySelectorAll('.home__slider--item__image');
const btnLeft = document.querySelector('.home__slider--btn__left');
const btnRight = document.querySelector('.home__slider--btn__right');
const lenght = imgs.length;
let current = 0;

hamburgerBtn.addEventListener('click',()=>{
    hamburgerBtn.classList.toggle('active');
    console.log(1);
})

const handleChangeSlide = () =>{
    if(current == lenght - 1){
        current = 0;
        let width = imgs[0].offsetWidth;
        ListImage.style.transform = `translateX(0px)`;
    }else{
        current ++;
        let width = imgs[0].offsetWidth;
        ListImage.style.transform = `translateX(${width * -1 * current}px)`;
    }
}

setInterval(handleChangeSlide,4000);

btnRight.addEventListener('click',()=>{
    handleChangeSlide();
})

btnLeft.addEventListener('click',()=>{
    if(current == 0){
        current = lenght - 1;
        let width = imgs[0].offsetWidth;
        ListImage.style.transform = `translateX(${width * -1 * current}px)`;
    }else{
        current --;
        let width = imgs[0].offsetWidth;
        ListImage.style.transform = `translateX(${width * -1 * current}px)`;
    }
})