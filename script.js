const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});