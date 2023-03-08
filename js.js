const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');
const items = carousel.querySelectorAll('.carousel-item');
const itemCount = items.length;
const itemWidth = items[0].clientWidth;

let currentPosition = 0;

// Previous button click event
prevBtn.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition -= 1;
    container.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
  }
});

// Next button click event
nextBtn.addEventListener('click', () => {
  if (currentPosition < itemCount - 1) {
    currentPosition += 1;
    container.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
  }
});