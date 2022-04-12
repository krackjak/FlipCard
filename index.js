let pointsCount = 0;
// let firstPic = "";
// let secondPic = "";
let picArray = [];


ition
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
        if(picArray.length === 2  && picArray[1]!== picArray[0]){
            if(picArray[0].firstElementChild.dataset.batman === picArray[1].firstElementChild.dataset.batman){
                picArray[0].classList.add("blur");
                picArray[1].classList.add("blur");
                picArray[0].firstElementChild.style.opacity = "0.4";
                picArray[1].firstElementChild.style.opacity = "0.4";
                pointsCount++;

            }else{
                picArray[0].classList.add("shake");
                picArray[1].classList.add("shake");
                picArray[0].classList.remove("clicked");
                setTimeout(() =>{
                }, 1000)
                picArray[1].classList.remove("clicked");
            }
            picArray = [];
        }
// this is just the count that I have set up which you can modify as per your needs.
        console.log(pointsCount);
        if(pointsCount === 6){
            setTimeout(() =>{
            }, 2000)
            alert("you have won the game");
        }
        
    })
});
// this is an IMMEDIATELY INVOKED FUNCTION, but we can also make a button if you like and add an onclick listener
// to it so that the user can shuffle the game with a button only.
(function shuffle() {
    cards.forEach(card => {
      let ramdomPosition = Math.floor(Math.random() * 12);
      card.style.order = ramdomPosition;
    });
  })();




