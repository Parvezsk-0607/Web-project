// Mobile hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Popup close behavior
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
popupClose.addEventListener('click', () => {
  popup.classList.add('hide-popup');
});

// Optionally show popup on page load after delay
window.addEventListener('load', () => {
  setTimeout(() => {
    popup.classList.remove('hide-popup');
  }, 1500);
});
