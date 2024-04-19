document.addEventListener("DOMContentLoaded", function() {
  // Fungsi umum untuk menggeser slider
  function slideSlider(sliderSelector, cardSelector, direction) {
    const slider = document.querySelector(sliderSelector);
    const totalCards = slider.children.length;
    const cardWidth = document.querySelector(cardSelector).offsetWidth;

    let currentSlide = parseInt(slider.getAttribute('data-slide-index') || 0);
    const maxSlide = (cardWidth * totalCards) - slider.offsetWidth;
    currentSlide += (cardWidth * direction);
    currentSlide = Math.max(0, Math.min(currentSlide, maxSlide));

    slider.style.transform = `translateX(-${currentSlide}px)`;
    slider.setAttribute('data-slide-index', currentSlide);
  }

  // Inisialisasi slider
  function initializeSlider() {
    slideSlider('.card-viewer', '.card', 0);
    slideSlider('.relawan-viewer', '.card-relawan', 0);
  }

  // Event listener untuk tombol navigasi
  document.getElementById('slide-left-relawan').addEventListener('click', function() {
    slideSlider('.relawan-viewer', '.card-relawan', -1);
  });

  document.getElementById('slide-right-relawan').addEventListener('click', function() {
    slideSlider('.relawan-viewer', '.card-relawan', 1);
  });

  initializeSlider(); // Pastikan slider diatur pada saat load
});

// Handle resize window
window.addEventListener('resize', function() {
  slideSlider('.card-viewer', '.card', 0);
  slideSlider('.relawan-viewer', '.card-relawan', 0);
});


