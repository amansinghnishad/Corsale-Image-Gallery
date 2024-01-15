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
    var heading = document.getElementById('heading');
    var paragraph = document.getElementById('paragraph');

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



    function updateCards() {
      cards.forEach(function(card, index) {
        if (index === activeCardIndex) {
          card.classList.add('active');
          var text = card.getAttribute('data-text').split('|');
        heading.textContent = text[0];
        paragraph.textContent = text[1];
        
        
        heading.style.animation = 'none';
        paragraph.style.animation = 'none';
        setTimeout(function() {
          heading.style.animation = '';
          paragraph.style.animation = '';
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