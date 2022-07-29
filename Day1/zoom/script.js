const panels = document.querySelectorAll(".panel");

console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log("click 후 이벤트 시작");
    removeActivePanel();
    panel.classList.add("active");
  });

  console.log("forEach 시작");
});

function removeActivePanel() {
  panels.forEach((panel) => {
    console.log("active 로직 제거");
    panel.classList.remove("active");
  });
}
