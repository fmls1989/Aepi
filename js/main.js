
//GLOBAL VARIABLES
var box = document.getElementById('game-board');
var cardElement;
var cardsInPlay= [];
var cardNodes = [];
var random;
var cards = [
  {
    rank: 'king',
    pic: 'images/king-of-diamonds.png',
  },
  {
    rank: 'king',
    pic: 'images/king-of-hearts.png',
  },
  {
    rank: 'queen',
    pic: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'queen',
    pic: 'images/queen-of-hearts.png'
  }
];

var cardNodes = [];

//1. CREATE BOARD
function createBoard(){
  for (var i = 0; i < cards.length; i++) {
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    box.appendChild(cardElement);
    cardElement.addEventListener('click', flipCardAndRandomize);
    cardNodes.push(cardElement); // So now is a HTML node instead JS object (i can use setAttribute now)
  }
}
createBoard();

//2. FLIP CARDS RANDOMLY
function flipCardAndRandomize(){
  //Randomize the deck =>
  random = Math.floor(Math.random()*cards.length);
  this.setAttribute('src', cards[random].pic);
  cardsInPlay.push(cards[random].rank);
  console.log(this);
  match();
}

//3. CHECK IF MATCH
function match(){
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('MATCH');
    } else {
      alert('TRY AGAIN');
      // cardNodes[0].setAttribute('src', 'images/back.png'); // Long way to do it
      // cardNodes[1].setAttribute('src', 'images/back.png');
      // cardNodes[2].setAttribute('src', 'images/back.png');
      // cardNodes[3].setAttribute('src', 'images/back.png');
      cardNodes.forEach(function(node){
        node.setAttribute('src','images/back.png'); // Short way to do it => Executes a function per each array element
      }
    )}
  }
}
