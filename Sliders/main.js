const slider = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length; 
let slidesToShow = 3;
const slideWidth = 300; 

let currentIndex = 0;

function updateSliderPosition() {
    const offset = currentIndex * -slideWidth; 
    slider.style.transform = `translateX(${offset}px)`;
    adjustSliderContainerWidth(); 
}


function adjustSliderContainerWidth() {
    const container = document.querySelector('.slider-container');
    const containerWidth = slidesToShow * slideWidth;
    container.style.width = `${containerWidth}px`; 
}


function nextSlide() {
    if (currentIndex < totalSlides - slidesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSliderPosition();
}


function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - slidesToShow; 
    }
    updateSliderPosition();
}

updateSliderPosition();


window.addEventListener('load', () => {
    const container = document.querySelector('.slider-container');
    container.style.opacity = '1'; 
});
