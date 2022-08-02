const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActives = 1;

prev.addEventListener("click", () => {
  currentActives--;

  update();
});

next.addEventListener("click", () => {
  currentActives++;

  update();
});

function update() {
  console.log(circles, "개수");

  circles.forEach((circle, index) => {
    console.log(circle, currentActives);

    if (index < currentActives) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const progress = document.getElementById("progress");
  let actives = document.querySelectorAll(".active");

  console.log(actives.length, "active");
  console.log(circles.length, "circle");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (actives.length === circles.length) {
    next.disabled = true;
  } else if (actives.length === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
