const sliderItem = document.querySelectorAll('.slider-item');
const sliderCount = sliderItem.length;

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let count = 0;

const previousItem = () => {
    sliderItem[count].classList.remove('active');
    
    if(count > 0) {
        count--;
    }else{
        count = sliderCount - 1;
    }
    sliderItem[count].classList.add('active');
}
const nextItem = () => {
    sliderItem[count].classList.remove('active');

    if(count < sliderCount - 1){
        count++;
    }else{
        count = 0;
    }

    sliderItem[count].classList.add('active');

}

leftBtn.addEventListener('click', previousItem);
rightBtn.addEventListener('click', nextItem);