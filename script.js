// I don't know any JavaScript. ChatGPT wrote this.
const toggleBtns = document.querySelectorAll("#toggle-btn1, #toggle-btn2");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});