
let educationBlock = document.getElementById('education');
let list = document.getElementById('list');
let infBtnTA = document.getElementById('info-button-theyalow');
let infBtnRDP = document.getElementById('info-button-rdp');




let func = function(){
    list.classList.toggle('education__main_v');
    console.log(list.classList);
    document.getElementById('left').classList.toggle('arrow__left_u');
    document.getElementById('right').classList.toggle('arrow__right_u');
}
educationBlock.addEventListener('click',func);
let funcBtnTA = function(){
    document.getElementById('theyalow').classList.toggle('project-info_v');
}
infBtnTA.addEventListener('click',funcBtnTA);
let funcBtnRDP = function(){
    document.getElementById('rdp').classList.toggle('project-info_v');
}
infBtnRDP.addEventListener('click',funcBtnRDP);



window.onload = function () {
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetweenSlides: 10
      },
      640: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
      }
    }
  });
}

