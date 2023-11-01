// JavaScript for Slider Functionality with 5-second timer per slide
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
const bulletsContainer = document.querySelector('.bullets');

let currentSlide = 0;
let slideInterval; // Interval variable for automatic sliding
const slideDuration = 5000; // Time in milliseconds for each slide
let slideTimeout; // Timeout for individual slide duration

function showSlide(n) {
    currentSlide = n;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateBullets(currentSlide);
    resetSlideTimer();
}

function slideToNext() {
    showSlide((currentSlide + 1) % slides.length); // Use modulo to loop back to the first slide when at the end.
}

function updateBullets(current) {
    bulletsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const bullet = document.createElement('li');
        bullet.classList.add('bullet');
        bullet.addEventListener('click', () => showSlide(i));
        if (i === current) {
            bullet.classList.add('active');
        }
        bulletsContainer.appendChild(bullet);
    }
}

function resetSlideTimer() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(slideToNext, slideDuration);
}

function startSlideInterval() {
    slideInterval = setInterval(slideToNext, slideDuration);
    resetSlideTimer();
}

prevButton.addEventListener('click', () => {
    showSlide((currentSlide - 1 + slides.length) % slides.length); // Use modulo to loop back to the last slide when at the first.
    clearInterval(slideInterval);
    startSlideInterval();
});

nextButton.addEventListener('click', () => {
    slideToNext();
    clearInterval(slideInterval);
    startSlideInterval();
});

showSlide(currentSlide);
startSlideInterval();


// JavaScript for Slider Functionality with 5-second timer per slide
// const slides = document.querySelectorAll('.slide');
// const slider = document.querySelector('.slider');
// const prevButton = document.getElementById('prevSlide');
// const nextButton = document.getElementById('nextSlide');
// const bulletsContainer = document.querySelector('.bullets');

// let currentSlide = 0;
// let slideInterval; // Interval variable for automatic sliding
// const slideDuration = 5000; // Time in milliseconds for each slide
// let slideTimeout; // Timeout for individual slide duration

// function showSlide(n) {
//     currentSlide = (n + slides.length) % slides.length;
//     slider.style.transform = `translateX(-${currentSlide * 100}%)`;
//     updateBullets(currentSlide);
//     resetSlideTimer();
// }

// function slideToNext() {
//     showSlide(currentSlide + 1);
// }

// function updateBullets(current) {
//     bulletsContainer.innerHTML = '';
//     for (let i = 0; i < slides.length; i++) {
//         const bullet = document.createElement('li');
//         bullet.classList.add('bullet');
//         bullet.addEventListener('click', () => showSlide(i));
//         if (i === current) {
//             bullet.classList.add('active');
//         }
//         bulletsContainer.appendChild(bullet);
//     }
// }

// function resetSlideTimer() {
//     clearTimeout(slideTimeout);
//     slideTimeout = setTimeout(slideToNext, slideDuration);
// }

// function startSlideInterval() {
//     slideInterval = setInterval(slideToNext, slideDuration);
//     resetSlideTimer();
// }

// prevButton.addEventListener('click', () => {
//     showSlide(currentSlide - 1);
//     clearInterval(slideInterval);
//     startSlideInterval();
// });

// nextButton.addEventListener('click', () => {
//     showSlide(currentSlide + 1);
//     clearInterval(slideInterval);
//     startSlideInterval();
// });

// showSlide(currentSlide);
// startSlideInterval();

// bulletsContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('bullet')) {
//         showSlide(Array.from(bulletsContainer.children).indexOf(event.target));
//         clearInterval(slideInterval);
//         startSlideInterval();
//     }
// });