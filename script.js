document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        var imgSrc = card.querySelector('img').src;
        document.body.style.backgroundImage = 'url(' + imgSrc + ')';
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var cards = Array.from(document.querySelectorAll('.card'));
    var activeCardIndex = 0;
    var textContainer = document.getElementById('text-container');
  
    function updateCards() {
      cards.forEach(function(card, index) {
        if (index === activeCardIndex) {
          var imgSrc = card.querySelector('img').src;
          document.body.style.backgroundImage = 'url(' + imgSrc + ')';
          document.body.style.backgroundSize = 'cover'; // Cover the entire screen
          document.body.style.backgroundPosition = 'center'; // Center the image
          document.body.style.backgroundRepeat = 'no-repeat'; // Do not repeat the image
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }



    function updateCards() {
      cards.forEach(function(card, index) {
        if (index === activeCardIndex) {
          card.classList.add('active');
          textContainer.textContent = card.getAttribute('data-text');
          textContainer.style.animation = 'none';
        setTimeout(function() {
          textContainer.style.animation = '';
        }, 10);
        } else {
          card.classList.remove('active');
        }
      });
    }
  
    updateCards();
  
    cards.forEach(function(card, index) {
      card.addEventListener('click', function() {
        activeCardIndex = (activeCardIndex + 1) % cards.length;
        updateCards();
      });
    });
  });