function openFeatures() {
  const allElems = document.querySelectorAll(".elem");
  const fullElemPage = document.querySelectorAll(".fullElem");
  const fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      fullElemPage[btn.id].style.display = "none";
    });
  });
}
openFeatures();

const form = document.querySelector(".addTask form");
const taskInput = document.querySelector(".addTask input");
const taskDetailInput = document.querySelector(".addTask textarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(taskInput.value,taskDetailInput.value);
});
