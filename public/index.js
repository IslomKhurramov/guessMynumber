let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);
  console.log(input);

  if (input === secretNumber) {
    document.querySelector(".message").textContent =
      "Congratulations, you won!!!";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").focus();
    document.querySelector(".highscore").textContent = score;
  } else if (input < secretNumber) {
    document.querySelector(".message").textContent = "My number is bigger!";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").focus();
  } else if (input > secretNumber) {
    document.querySelector(".message").textContent = "My number is smaller!";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").focus();
  } else if (typeof input != "number") {
    document.querySelector(".message").textContent = "input a number";
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").focus();
  } else {
    document.querySelector(".message").textContent = "Input a number";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#333";
});
