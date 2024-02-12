const slideshowContainer = document.querySelector('.slides');

const slides = Array.from(slideshowContainer.querySelectorAll('.slide'));

// Set the initial slide index
let currentSlideIndex = 0;

// Variable to store the interval ID for the slideshow
let slideshowInterval;

// Function to show the current slide
function showSlide() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[currentSlideIndex].style.display = 'block';
}

// Function to move to the next slide
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    showSlide();
}

// Function to start the slideshow
function startSlideshow() {
    showSlide();

    slideshowInterval = setInterval(nextSlide, 2000);
}

// Function to stop the slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Add event listeners for play and stop buttons
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', startSlideshow);

const stopButton = document.querySelector('.stop-button');
stopButton.addEventListener('click', stopSlideshow);