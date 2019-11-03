const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true; 
        firstcard = this;
    } else {
        //second click
        hasFlippedCard = false; 
        secondCard = this;

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

cards.forEach(card => card.addEventListener('click', flipCard));