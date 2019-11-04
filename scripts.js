const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true; 
        firstcard = this;
        return;
    } 
    
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
        //match logic 
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            //IF match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            //not a match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
             }, 2000);
     }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
      }

      function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip'); resetBoard();
        }, 2000);
      }

      function resetBoard() {
          [hasFlippedCard, lockBoard] = [false, false];
          [firstCard, secondCard] = [null, null];
      }

      (function shuffle() {
        cards.forEach(card => {
          let ramdomPos = Math.floor(Math.random() * 12);
          card.style.order = ramdomPos;
        });
      })();

cards.forEach(card => card.addEventListener('click', flipCard));