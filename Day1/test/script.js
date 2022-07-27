const panels = document.querySelectorAll(".panel");

console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panelActiveRemove();
    panel.classList.add("active");
  });
});

function panelActiveRemove() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
