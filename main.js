let container = document.getElementsByClassName('container')[0];
let text = "";

let btnOk = document.getElementsByClassName('btn-success')[0]
let btnNo = document.getElementsByClassName('btn-danger')[0]

let p1 = document.getElementById('p1')
let tie = document.getElementById('tie')
let p2 = document.getElementById('p2')
let reset = document.getElementsByClassName('btn1')[0]
let quit = document.getElementsByClassName('btn2')[0]

let p1Res = 0;
let p2Res = 0;
let tieRes = 0;
createGrid();

let boxes = document.getElementsByClassName('box');

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', startGame);
}

let xo = "O";
let gamesPlayed = 0;


function startGame() {
  (xo == "O") ? xo = "X": xo = "O";
  this.innerHTML = xo;
  this.removeEventListener('click', startGame);
  this.style.background = 'rgba(145,0,11,0.8)'
  checkLines();
}

let counter = 0;

function checkLines() {
  counter++;
  if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != "") {
    winnerShow(boxes[0], boxes[1], boxes[2])
  } else if (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != "") {
    winnerShow(boxes[3], boxes[4], boxes[5])
  } else if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != "") {
    winnerShow(boxes[6], boxes[7], boxes[8])
  } else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != "") {
    winnerShow(boxes[0], boxes[3], boxes[6])
  } else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != "") {
    winnerShow(boxes[1], boxes[4], boxes[7])
  } else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != "") {
    winnerShow(boxes[2], boxes[5], boxes[8])
  } else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != "") {
    winnerShow(boxes[0], boxes[4], boxes[8])
  } else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != "") {
    winnerShow(boxes[2], boxes[4], boxes[6])
  } else if (counter == 9) {
    gamesPlayed++;
    tieRes++;
    tie.innerHTML = tieRes;
    setTimeout(endGame, 1500)
  }
}

function winnerShow() {
  for (var i = 0; i < arguments.length; i++) {
    arguments[0].classList.add("winner");
    arguments[1].classList.add("winner");
    arguments[2].classList.add("winner");

    counter = 0;
    gamesPlayed++;
    setTimeout(endGame, 1500)
  }
  if (arguments[0].innerHTML == "X" && arguments[1].innerHTML == "X" &&
    arguments[2].innerHTML == "X") {
    p1Res++;
    p1.innerHTML = p1Res;
  }

  if (arguments[0].innerHTML == "O" && arguments[1].innerHTML == "O" &&
    arguments[2].innerHTML == "O") {
    p2Res++;
    p2.innerHTML = p2Res;
  }
}

function createGrid() {
  for (var i = 0; i < 9; i++) {
    text += "<div class = 'box'></div>";
    container.innerHTML = text;
  }
}

function endGame() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click', startGame);
    boxes[i].classList.remove('winner')
  }

  if ((gamesPlayed % 2) == 0) {
    xo = "O"
  } else {
    xo = "X"
  }

  counter = 0;
  // console.log(counter);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = "cadetblue";
    boxes[i].innerHTML = "";
  }
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', startGame);
  }

  //reseting results
  reset.addEventListener('click', function() {

    p1.innerHTML = "0"
    p2.innerHTML = "0"
    tie.innerHTML = "0"

    p1Res = 0;
    p2Res = 0;
    tieRes = 0;
    xo = "O"
    gamesPlayed = 0;
  })

  //text to display on quit
  quit.addEventListener('click', function() {

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.background = "rgba(145,0,11,0.8)";
      boxes[i].innerHTML = "";
      boxes[3].innerHTML = 'B'
      boxes[3].style.boxShadow = "-1px -1px 20px 10px";
      boxes[4].innerHTML = 'Y'
      boxes[4].style.boxShadow = "-1px -1px 20px 10px";
      boxes[5].innerHTML = 'E'
      boxes[5].style.boxShadow = "-1px -1px 20px 10px";
    }
  })
}
