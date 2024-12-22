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
if (imagePopup) {
  closeBtn.addEventListener('click', () => {
    imagePopup.style.display = 'none';
  });
}


const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.querySelector('.navigation');


  if (navigation) {
    console.log("Navigation element found.");
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        navigation.classList.add('nav-scrolled');
        console.log(navigation);
      } else {
        navigation.classList.remove('nav-scrolled');
      }
    });
  } else {
    console.error("Navigation element not found. Check your HTML structure.");
  }
});
