const squares = document.querySelectorAll(".board div");
//console.log(squares);

let result = document.querySelector(".result");
let time = document.querySelector(".time");
let timer = 50;
let currentIndex = 76;
let width = 9;

let leftLogs = document.querySelectorAll(".left-log");
let rightLogs = document.querySelectorAll(".right-log");
let leftCar = document.querySelectorAll(".left-car");
let rightCar = document.querySelectorAll(".right-car");
let endingBlock = document.querySelector(".ending-block");
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

function moveLeftLog(leftLog) {
  if (leftLog.classList.contains("l1")) {
    leftLog.classList.remove("l1");
    leftLog.classList.add("l2");
  } else if (leftLog.classList.contains("l2")) {
    leftLog.classList.remove("l2");
    leftLog.classList.add("l3");
  } else if (leftLog.classList.contains("l3")) {
    leftLog.classList.remove("l3");
    leftLog.classList.add("l4");
  } else if (leftLog.classList.contains("l4")) {
    leftLog.classList.remove("l4");
    leftLog.classList.add("l5");
  } else if (leftLog.classList.contains("l5")) {
    leftLog.classList.remove("l5");
    leftLog.classList.add("l1");
  }
}

function moveRightLog(rightLog) {
  if (rightLog.classList.contains("l1")) {
    rightLog.classList.remove("l1");
    rightLog.classList.add("l5");
  } else if (rightLog.classList.contains("l2")) {
    rightLog.classList.remove("l2");
    rightLog.classList.add("l1");
  } else if (rightLog.classList.contains("l3")) {
    rightLog.classList.remove("l3");
    rightLog.classList.add("l2");
  } else if (rightLog.classList.contains("l4")) {
    rightLog.classList.remove("l4");
    rightLog.classList.add("l3");
  } else if (rightLog.classList.contains("l5")) {
    rightLog.classList.remove("l5");
    rightLog.classList.add("l4");
  }
}

function moveLeftCar(leftCar) {
  if (leftCar.classList.contains("c1")) {
    leftCar.classList.remove("c1");
    leftCar.classList.add("c2");
  } else if (leftCar.classList.contains("c2")) {
    leftCar.classList.remove("c2");
    leftCar.classList.add("c3");
  } else if (leftCar.classList.contains("c3")) {
    leftCar.classList.remove("c3");
    leftCar.classList.add("c1");
  } else if (leftCar.classList.contains("c1")) {
    leftCar.classList.remove("c41");
    leftCar.classList.add("c2");
  } else if (leftCar.classList.contains("c2")) {
    leftCar.classList.remove("c2");
    leftCar.classList.add("c3");
  }
}

function moveRightCar(rightCar) {
  if (rightCar.classList.contains("c1")) {
    rightCar.classList.remove("c1");
    rightCar.classList.add("c3");
  } else if (rightCar.classList.contains("c2")) {
    rightCar.classList.remove("c2");
    rightCar.classList.add("c1");
  } else if (rightCar.classList.contains("c3")) {
    rightCar.classList.remove("c3");
    rightCar.classList.add("c2");
  } else if (rightCar.classList.contains("c1")) {
    rightCar.classList.remove("c1");
    rightCar.classList.add("c3");
  } else if (rightCar.classList.contains("c2")) {
    rightCar.classList.remove("c2");
    rightCar.classList.add("c1");
  }
}
//piping in the if statement checks if anyof these conditions are true, and if so, triggers the timer to stop and thus ending the game.
function gameOver() {
  timer--;
  time.textContent = timer;
  if (
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5") ||
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l3") ||
    timer === 0
  ) {
    //alert('gameOver')
    result.textContent = "Game Over";
    clearInterval(moving);
    clearInterval(timerId);
  }
}
let moving = setInterval(move, 1000);

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
  if (endingBlock.classList.contains("frogger")) {
    // if(squares[currentIndex].classList.contains('ending-block')) {
    //alert('You Won!!')
    console.log("You win");
    result.textContent = "You Win!!!";
  }
}
