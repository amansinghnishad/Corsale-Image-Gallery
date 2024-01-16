# Corsale Image Gallery

Corsale Image Gallery is a simple and lightweight JavaScript-based project that allows users to create an interactive image gallery. The gallery provides a seamless experience by allowing users to click on images to navigate through a series of pictures. Additionally, for desktop users, there is an option to set a background image that dynamically changes with each click.

## Features

- **Image Navigation:** Click on the image to move to the next one.
- **Background Image (Desktop):** Set a background image that changes along with the main image.
- **Mobile Experience:** On mobile devices, the background image changes to the previously clicked image, creating a visually engaging experience.
- **Smooth Animations:** The project includes subtle animations to enhance the transition between images.

## Issue

```javascript
// ⚠️ Issue: Background image may repeat despite setting to no-repeat

    function updateCards() {
      cards.forEach(function(card, index) {
        if (index === activeCardIndex) {
          var imgSrc = card.querySelector('img').src;
          document.body.style.backgroundImage = 'url(' + imgSrc + ')';
          document.body.style.backgroundSize = 'cover'; 
          document.body.style.backgroundPosition = 'center'; 
          document.body.style.backgroundRepeat = 'no-repeat'; 
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }

