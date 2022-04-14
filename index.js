let pointsCount = 0;
let movesCount = 0;
// let firstPic = "";
// let secondPic = "";
let picArray = [];
const score = document.querySelector("#score");
const moves = document.querySelector("#moves");
const playAgain = document.querySelector("#playAgainBtn");
const modal = document.querySelector("#modal");
const modalMoves = document.querySelector("#modalMoves");
const soundEffects = {
  error: new Audio("./store/audio/error.ogg"),
  click: new Audio("./store/audio/click.ogg"),
  success: new Audio("./store/audio/success.ogg"),
  gameOver: new Audio("./store/audio/gameOver.ogg")
};

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");
    // console.log(card);
    picArray.push(card);
    // console.log(picArray);
    // if(picCount === 0){
    //     firstPic = card.firstElementChild.dataset.batman;
    //     picCount++;
    // }else{
    //     secondPic = card.firstElementChild.dataset.batman;
    //     picCount= 0;
    // }
    // in order to solve the same pic click problem, i have added the AND operator which checks that the second image
    // that has been clicked is not actually the first picture again.
    if (picArray.length === 1) {
      soundEffects.click.play();
    }

    if (picArray.length === 2 && picArray[1] !== picArray[0]) {
      if (
        picArray[0].firstElementChild.dataset.batman ===
        picArray[1].firstElementChild.dataset.batman
      ) {
        soundEffects.success.play();
        picArray[0].firstElementChild.classList.add("blur");
        picArray[1].firstElementChild.classList.add("blur");
        picArray[0].classList.add("blur");
        picArray[1].classList.add("blur");
        //picArray[0].firstElementChild.style.opacity = "0.4";
        //picArray[1].firstElementChild.style.opacity = "0.4";
        pointsCount++;
        score.innerText = pointsCount;
        picArray = [];
      } else {
        picArray[0].classList.add("shake");
        picArray[1].classList.add("shake");
        soundEffects.error.play();
        document.querySelector(".container").classList.add("noclick");
        setTimeout(() => {
          picArray[0].classList.remove("clicked");
          picArray[1].classList.remove("clicked");
          picArray[0].classList.remove("shake");
          picArray[1].classList.remove("shake");
          picArray = [];
          document.querySelector(".container").classList.remove("noclick");
        }, 500);
      }
      movesCount++;
      moves.innerText = movesCount;
    }
    // this is just the count that I have set up which you can modify as per your needs.
    console.log(pointsCount);
    if (pointsCount === 6) {
      soundEffects.gameOver.play();
      setTimeout(() => {
        modalMoves.innerText = movesCount;
        modal.style.display = 'block';
      }, 200);
    }
  });
});
// this is an IMMEDIATELY INVOKED FUNCTION, but we can also make a button if you like and add an onclick listener
// to it so that the user can shuffle the game with a button only.
function shuffle() {
  cards.forEach((card) => {
    let ramdomPosition = Math.floor(Math.random() * 12);
    card.style.order = ramdomPosition;
  });
};

playAgain.addEventListener("click", () => {
    resetCards();
    modal.style.display = 'none';
});


shuffle();

function resetCards(){
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.classList.remove("clicked");
        console.log(card);
        card.classList.remove("blur");
        //card.firstElementChild.style.opacity = "0";
        //card.firstElementChild.style.opacity = "0";
        pointsCount=0;
        movesCount=0;
        score.innerText = pointsCount;
        moves.innerText = movesCount
    });
    shuffle();
}

