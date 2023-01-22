search = document.querySelector('.search-btn');
Secserch =document.querySelector('.Sec-serch')
cross = document.querySelector('.cross-x');
inputsearch = document.querySelector('.input-search');


Secserch.addEventListener('click',()=>
{
    search.classList.toggle('search-btn-show');
    cross.classList.toggle('cross-x-show');
    inputsearch.classList.toggle('input-search-show');
})

const MenuBTN = document.querySelector('.Menu-btn');
const MENUClose = document.querySelector('.MENUClose');

let MenuOpen = false;

MenuBTN.addEventListener('click',() => {
    if(!MenuOpen)
    {
        MenuBTN.classList.add('Open');
        MENUClose .classList.add('MENUActive');
        
        MenuOpen = true;
    }
    else{
        MenuBTN.classList.remove('Open');
        MENUClose .classList.remove('MENUActive');
        MenuOpen = false;
    }
});

    
//swier 1 /2

var swiper = new Swiper('#swiper-container1', {
    slidesPerView: 1,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//swiper 3
var swiper1 = new Swiper('#swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//swiper 4
var swiper = new Swiper('#swiper-container3', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//swiper 5
var swiper5 = new Swiper('#swiper-container4', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    navigation: {
        nextEl: '#swiper-button-next',
        prevEl: '#swiper-button-prev',
    },
});
//Swiper 6   
var swiper = new Swiper("#swiper-container5", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
    delay: 2500
    },
});

////spinner
