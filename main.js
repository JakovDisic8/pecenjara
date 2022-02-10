// slider elements
const slideImage=document.querySelectorAll(`.slide-image`);
const slidesContainer=document.querySelector(`.slides-container`);
const nextBtn=document.querySelector(`.next-btn`);
const prevBtn=document.querySelector(`.prev-btn`);
let slideWidth=slideImage[0].clientWidth;
let slideNumber=slideImage.length;
let curentSlide=0;
// slider
function init(){
    //slideImage[0]=0
    // slideImage[1]=100%
    // slideImage[2]=200%
    
    slideImage.forEach((img,i)=>{
        img.style.left=i*100+`%`;
    });
    slideImage[0].classList.add(`active`);
}
init();
// next btn
nextBtn.addEventListener(`click`,()=>{
    curentSlide++;
    goToSlide(curentSlide);

});
function goToSlide(){
slidesContainer.style.transform=`translateX(-${slideWidth*slideNumber}px)`;
}