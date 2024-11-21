let playerOneInput = document.querySelector(".playerOneInput");
let playerOneButton = document.querySelector(".playerOneButton");
let playerTwoInput = document.querySelector(".playerTwoInput");
let playerTwoButton = document.querySelector(".playerTwoButton");
let heading = document.querySelector(".heading");
let hedingtwo = document.querySelector("h2");
let span = document.querySelector("span");
let error = document.querySelector(".error");

let playerOneNumber;

let count = 5;

playerOneButton.addEventListener("click", function () {
  if (playerOneInput.value == "") {
    error.innerHTML = "Please give a Number";
  } else {
    if (Number(playerOneInput.value)) {
      if (playerOneInput.value >= 1 && playerOneInput.value < 10) {
        error.innerHTML = "";
        playerOneNumber = playerOneInput.value;
        heading.innerHTML = "Player-2";
        displayControll("p2b");
        hedingtwo.style.display = "block";
        span.innerHTML = count;
      } else {
        error.innerHTML = "Please give a Number between 1 to 9";
      }
    } else {
      error.innerHTML = "Please give a Number";
    }
  }
});

playerTwoButton.addEventListener("click", function () {
  if (count > 0) {
    if (playerTwoInput.value == "") {
      error.innerHTML = "Please give a Number";
    } else {
      if (Number(playerTwoInput.value)) {
        if (playerTwoInput.value >= 1 && playerTwoInput.value < 10) {
          error.innerHTML = "";
          count--;
          span.innerHTML = count;
          playerOneNumber = playerOneInput.value;
          if (playerOneNumber == playerTwoInput.value) {
            // heading.innerHTML = "Player-2 is Winner";
            heading.innerHTML = "";

            for (let i = 1; i <= 10; i++) {
              heading.innerHTML +=
                playerOneNumber +
                " X " +
                i +
                " = " +
                playerOneNumber * i +
                "</br>";
            }

            displayControll("all");
          } else if (count == 0) {
            heading.innerHTML = "Player-1 is Winner";
            displayControll("all");
          } else {
            error.innerHTML = "your guess was wrong";
          }
        } else {
          error.innerHTML = "Please give a Number between 1 to 9";
        }
      } else {
        error.innerHTML = "Please give a Number";
      }
    }
  } else {
    console.log("Game is over");
  }
});

function displayControll(type) {
  if (type == "p2b") {
    playerTwoInput.style.display = "inline-block";
    playerTwoButton.style.display = "inline-block";
    playerOneInput.style.display = "none";
    playerOneButton.style.display = "none";
  } else if (type == "all") {
    playerTwoInput.style.display = "none";
    playerTwoButton.style.display = "none";
    playerOneInput.style.display = "none";
    playerOneButton.style.display = "none";
    hedingtwo.style.display = "none";
    span.style.display = "none";
  }
}
