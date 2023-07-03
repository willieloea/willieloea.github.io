// I don't know any JavaScript. ChatGPT wrote this.
const toggleBtns = document.querySelectorAll("#toggle-btn");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  });
});