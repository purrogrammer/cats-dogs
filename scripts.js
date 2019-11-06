
const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false; 
let firstCard;
let secondCard;

//sounds 

// class AudioController {
//   constructor() {
//       this.matchSound = new Audio('sounds/match.wav');
//       this.victorySound = new Audio('sounds/victory.wav');
//       this.gameOverSound = new Audio('sounds/gameOver.wav');
//   }
//   flip() {
//       this.flipSound.play();
//   }
//   match() {
//       this.matchSound.play();
//   }
//   victory() {
//       this.victorySound.play();
//   }
//   gameOver() {
//       this.gameOverSound.play();
//   }
// }

function flipCard() {
        if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
       if (!hasFlippedCard) {
        hasFlippedCard = true; 
        firstCard = this;
        return;
        } 
    
    secondCard = this;
    lockBoard = true;
    checkForMatch();
}

function checkForMatch() {
        //match logic 
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatch ? disableCards() : unflipCards();
          }

      function disableCards() {
        // firstCard.removeEventListener('click');
        // firstCard.classList.add('border-change');
        // secondCard.removeEventListener('click');
        // secondCard.classList.add('border-change');
        
        firstCard.removeEventListener('click', flipCard);
        firstCard.classList.add('border-change');
        secondCard.removeEventListener('click', flipCard);
        secondCard.classList.add('border-change');

        resetBoard();
      }

      function unflipCards() {
          lockBoard = true;

          setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip'); 

         resetBoard();
        }, 1500);
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