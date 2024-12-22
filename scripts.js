const gridImages = document.querySelectorAll('.grid-image');
const imagePopup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.querySelector('.close-btn');



  gridImages.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      popupImage.setAttribute('src', src);
      imagePopup.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    imagePopup.style.display = 'none';
  });


const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

document.addEventListener("DOMContentLoaded", function() {

  const navigationWrap = document.querySelector('.navigation');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navigationWrap.classList.add('nav-scrolled');
    } else {
      navigationWrap.classList.remove('nav-scrolled');
    }
  });
});
