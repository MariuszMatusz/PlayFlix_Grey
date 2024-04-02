document.addEventListener("DOMContentLoaded", function () {
    let toggler = document.getElementById('toggler');
    let hiddenNavPanel = document.querySelector('.hidden_nav_panel_list');
    let menuIcon = document.querySelector('.menu-icon img');

    hiddenNavPanel.style.display = 'none';
    toggler.addEventListener('change', function () {
        if (this.checked) {
            hiddenNavPanel.style.display = 'block';
            // Zmień ikonę na zamkniętą
            menuIcon.src = 'images/open_sidebar_menu_icon';
        } else {
            hiddenNavPanel.style.display = 'none';
            // Zmień ikonę na otwartą
            menuIcon.src = 'images/icons-menu.png';
        }
    });
});




//skrypt 2

// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll('.home-page__images');
//     let currentIndex = 0;
//
//     const hideAllImages = () => {
//         images.forEach(image => {
//             image.style.zIndex = 0;
//             image.querySelector('.home-page-images__button-back').style.display = 'none';
//             image.querySelector('.home-page-images__button-next').style.display = 'none';
//             image.querySelector('.home-page-images__button-watch').style.display = 'block';
//         });
//     };
//
//     const showCurrentImage = () => {
//         hideAllImages();
//         const currentImage = images[currentIndex];
//         currentImage.style.zIndex = 1;
//         currentImage.querySelector('.home-page-images__button-back').style.display = 'block';
//         currentImage.querySelector('.home-page-images__button-next').style.display = 'block';
//         currentImage.querySelector('.home-page-images__button-watch').style.display = 'none';
//     };
//
//     const nextImage = () => {
//         currentIndex = (currentIndex + 1) % images.length;
//         showCurrentImage();
//     };
//
//     const prevImage = () => {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         showCurrentImage();
//     };
//
//     // Set initial currentIndex to 0
//     showCurrentImage();
//
//     // Change initial currentIndex if the first image is not images--1
//     if (images[0].id !== 'home-page__images--1') {
//         for (let i = 1; i < images.length; i++) {
//             if (images[i].id === 'home-page__images--1') {
//                 currentIndex = i;
//                 break;
//             }
//         }
//         showCurrentImage();
//     }
//
//     images.forEach((image, index) => {
//         image.querySelector('.home-page-images__button-back').addEventListener('click', prevImage);
//         image.querySelector('.home-page-images__button-next').addEventListener('click', nextImage);
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const toggler = document.getElementById('toggler');
//     const main = document.getElementById('main');
//     const screenWidth = window.innerWidth; // szerokość ekranu
//
//     toggler.addEventListener('change', function () {
//         if (toggler.checked) {
//             // Oblicz maksymalną wartość przesunięcia tak, aby nie wychodziła poza szerokość ekranu
//             const maxTranslation = screenWidth - 1100;
//             main.style.transform = `translateX(${maxTranslation > 0 ? maxTranslation : 0}px)`;
//         } else {
//             main.style.transform = 'translateX(0)';
//         }
//     });
// });


