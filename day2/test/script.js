let prev = document.getElementById("prev");
let next = document.getElementById("next");
let progress = document.getElementById("progress");
let circles = document.querySelectorAll(".circles");

let currentActive = 1;
console.log(circles.length);
next.addEventListener("click", () => {
  currentActive++;

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  let actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === circles.length) {
    next.disabled = true;
  } else if (actives.length === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
