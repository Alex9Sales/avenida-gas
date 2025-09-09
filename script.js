
document.addEventListener('DOMContentLoaded', () => {

  alert("Seja bem-vindo ao site Avenida Gás! 🚀");


  setupCompanyCarousel();


  setupProductCarousel();
});
 

function setupCompanyCarousel() {
  const carousel = document.querySelector('.empresa-carousel');
  
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  let currentIndex = 0;

  if (slides.length <= 1) {
    if (nextButton) nextButton.style.display = 'none';
    if (prevButton) prevButton.style.display = 'none';
    return;
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      
      slide.classList.toggle('active', i === index);
    });
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  
  showSlide(currentIndex);
}


function setupProductCarousel() {
  const carousel = document.querySelector('#produtos .carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  let currentIndex = 0;

  if (slides.length <= 1) {
    if (nextButton) nextButton.style.display = 'none';
    if (prevButton) prevButton.style.display = 'none';
    return;
  }

  function updateCarouselPosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarouselPosition();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarouselPosition();
  });

  
  window.addEventListener('resize', updateCarouselPosition);
}