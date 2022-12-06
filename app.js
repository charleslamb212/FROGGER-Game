const squares = document.querySelectorAll(".board div");
//console.log(squares);

let result = document.querySelector(".result");
let time = document.querySelector(".time");
let timer = 50;
//establish lengthof game time
let currentIndex = 76;
//currentIndex is the starting div (76th div)
let width = 9;
//game board width is 9 squares
//DOM elements
let leftLogs = document.querySelectorAll(".left-log");
let rightLogs = document.querySelectorAll(".right-log");
let leftCar = document.querySelectorAll(".left-car");
let rightCar = document.querySelectorAll(".right-car");
let endingDiv = document.querySelector(".end");
//assign functionality to the arrow keys
function moveFrogger(e) {
  squares[currentIndex].classList.remove("frogger");
  if (e.key === "ArrowLeft") {
    if (currentIndex % width != 0) {
      currentIndex -= 1;
    }
  } else if (e.key === "ArrowRight") {
    if (currentIndex % width < width - 1) {
      currentIndex += 1;
    }
  } else if (e.key === "ArrowUp") {
    if (currentIndex - width >= 0) {
      currentIndex -= width;
    }
  } else if (e.key === "ArrowDown") {
    if (currentIndex + width < width * width) {
      currentIndex += width;
    }
  }

  squares[currentIndex].classList.add("frogger");
}
squares[76].classList.add("frogger")
document.addEventListener("keyup", moveFrogger);
//move function 
function move() {
  leftLogs.forEach((leftLog) => moveLeftLog(leftLog));
  rightLogs.forEach((rightLog) => moveRightLog(rightLog));
  leftCar.forEach((leftCar) => moveLeftCar(leftCar));
  rightCar.forEach((rightCar) => moveRightCar(rightCar));
  checkWin();
}
// 
function moveLeftLog(leftLog) {
  if (leftLog.classList.contains("a1")) {
    leftLog.classList.remove("a1");
    leftLog.classList.add("a2");
  } else if (leftLog.classList.contains("a2")) {
    leftLog.classList.remove("a2");
    leftLog.classList.add("a3");
  } else if (leftLog.classList.contains("a3")) {
    leftLog.classList.remove("a3");
    leftLog.classList.add("a4");
  } else if (leftLog.classList.contains("a4")) {
    leftLog.classList.remove("a4");
    leftLog.classList.add("a5");
  } else if (leftLog.classList.contains("a5")) {
    leftLog.classList.remove("a5");
    leftLog.classList.add("a1");
  }
}

function moveRightLog(rightLog) {
  if (rightLog.classList.contains("a1")) {
    rightLog.classList.remove("a1");
    rightLog.classList.add("a5");
  } else if (rightLog.classList.contains("a2")) {
    rightLog.classList.remove("a2");
    rightLog.classList.add("a1");
  } else if (rightLog.classList.contains("a3")) {
    rightLog.classList.remove("a3");
    rightLog.classList.add("a2");
  } else if (rightLog.classList.contains("a4")) {
    rightLog.classList.remove("a4");
    rightLog.classList.add("a3");
  } else if (rightLog.classList.contains("a5")) {
    rightLog.classList.remove("a5");
    rightLog.classList.add("a4");
  }
}

function moveLeftCar(leftCar) {
  if (leftCar.classList.contains("b1")) {
    leftCar.classList.remove("b1");
    leftCar.classList.add("b2");
  } else if (leftCar.classList.contains("b2")) {
    leftCar.classList.remove("b2");
    leftCar.classList.add("b3");
  } else if (leftCar.classList.contains("b3")) {
    leftCar.classList.remove("b3");
    leftCar.classList.add("b1");
  } else if (leftCar.classList.contains("b1")) {
    leftCar.classList.remove("b1");
    leftCar.classList.add("b2");
  } else if (leftCar.classList.contains("b2")) {
    leftCar.classList.remove("b2");
    leftCar.classList.add("b3");
  }
}

function moveRightCar(rightCar) {
  if (rightCar.classList.contains("b1")) {
    rightCar.classList.remove("b1");
    rightCar.classList.add("b3");
  } else if (rightCar.classList.contains("b2")) {
    rightCar.classList.remove("b2");
    rightCar.classList.add("b1");
  } else if (rightCar.classList.contains("b3")) {
    rightCar.classList.remove("b3");
    rightCar.classList.add("b2");
  } else if (rightCar.classList.contains("b1")) {
    rightCar.classList.remove("b1");
    rightCar.classList.add("b3");
  } else if (rightCar.classList.contains("b2")) {
    rightCar.classList.remove("b2");
    rightCar.classList.add("b1");
  }
}
//piping in the if statement checks if anyof these conditions are true, and if so, triggers the timer to stop and thus ending the game.
function gameOver() {
  timer--;
  time.textContent = timer;
  if (
    squares[currentIndex].classList.contains("a4") ||
    squares[currentIndex].classList.contains("a5") ||
    squares[currentIndex].classList.contains("b1") ||
    squares[currentIndex].classList.contains("a3") ||
    timer === 0
  ) {
    //alert('gameOver')
    result.textContent = "Game Over";
    clearInterval(moving);
    clearInterval(timerId);
  }
}
let moving = setInterval(move, 800);

function winOrLose() {
  gameOver();
  win();
}

let timerId = setInterval(gameOver, 1000);
function reset() {
  squares.forEach(square => {
    square.classList.remove("frogger")
  })
   timer = 50;
   currentIndex = 76;
   console.log(currentIndex)
   width = 9;
   squares[76].classList.add("frogger")
   
   timerId = setInterval(gameOver, 1000);
   moving = setInterval(move, 1000);
}
document.querySelector(".btn").addEventListener('click', e => {
  e.preventDefault()
  reset()
})
function checkWin() {
  if (endingDiv.classList.contains("frogger")) {
    // if(squares[currentIndex].classList.contains('endingDiv')) {
    //alert('You Won!!')
    console.log("You win");
    result.textContent = "You Win!!!";
  }
}
