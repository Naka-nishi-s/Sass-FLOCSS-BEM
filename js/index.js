window.addEventListener("load", function () {
  const canvas = document.querySelector(".js-drawCircle");

  if (canvas.getContext) {
    const circle = canvas.getContext("2d");

    circle.fillStyle = "pink";
    circle.fillRect(0, 0, 100, 100);
  }
});

let x = 0;
let y = 0;
let move = "x+";

function drawCircle() {
  const canvas = document.querySelector(".js-drawCircle");

  if (!canvas.getContext) {
    return;
  }

  if (move === "x+") {
    if (x === canvas.width - 100) {
      move = "y-";
    }
  }

  if (move === "y-") {
    if (y === canvas.height - 100) {
      move = "x-";
    }
  }

  if (move === "x-") {
    if (x === 0) {
      move = "y+";
    }
  }

  if (move === "y+") {
    if (y === 0) {
      move = "x+";
    }
  }

  const circle = canvas.getContext("2d");

  if (move === "x+") {
    circle.clearRect(0, 0, canvas.clientWidth, canvas.height);
    circle.fillRect((x += 1), y, 100, 100);
  }

  if (move === "x-") {
    circle.clearRect(0, 0, canvas.clientWidth, canvas.height);
    circle.fillRect((x -= 5), y, 100, 100);
  }

  if (move === "y-") {
    circle.clearRect(0, 0, canvas.clientWidth, canvas.height);
    circle.fillRect(x, (y += 2), 100, 100);
  }

  if (move === "y+") {
    circle.clearRect(0, 0, canvas.clientWidth, canvas.height);
    circle.fillRect(x, (y -= 10), 100, 100);
  }

  window.requestAnimationFrame(drawCircle);
}

const button = document.querySelector(".js-button");
if (button) {
  button.addEventListener("click", () => {
    drawCircle();
  });
}
