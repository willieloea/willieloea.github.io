// I'm copying this over from https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class WleHeader extends HTMLElement {
  /* runs as soon as the component is created in memory */
  constructor () {
    super(); // call the constructor of the parent class (HTMLElement)
  }

  /* runs if the tag is successfully inserted in the DOM */
  connectedCallback() {
    this.innerHTML = `
      <style>
        nav { display: flex; align-items: center; justify-content: center; }
        ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; }
        ul li { float: left; }
        ul li * { display: block; text-align: center; padding: 14px 16px; }
      </style>

      <header>
        <nav>
          <ul>
            <!-- the '/' tells the browser: "ignore the directory this file is in, go to the root of the domain and look for the file there." -->
            <li><a href="/index.html">Home</a></li>
            <li><a href="/blog/index.html">Blog</a></li>
            <li><a href="/laboratory/index.html">Laboratory</a></li>
            <li><button class="theme-toggle" id="themeBtn">L/D</button></li>
          </ul>
        </nav>
      </header>
    `;

    // --- LOAD THE SAVED THEME ---
    // When this header loads on a new page, check if a theme is saved in localStorage
    const savedTheme = localStorage.getItem('site-theme');
    // if the saved theme is light, trigger style update
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }

    // --- HANDLE BUTTON CLICKS ---
    const btn = this.querySelector('#themeBtn');

    btn.addEventListener('click', () => {
      // Toggle the class on the body
      document.body.classList.toggle('light-theme');

      // --- SAVE THE THEME ---
      // Check if the body now has the light-theme class
      if (document.body.classList.contains('light-theme')) {
        // If yes, save 'light' to local storage
        localStorage.setItem('site-theme', 'light');
      } else {
        // If no, save 'dark' to local storage
        localStorage.setItem('site-theme', 'dark');
      }
    });
  }
}

// register new component in browser registry, linking 'wle-header' with WleHeader.
customElements.define('wle-header', WleHeader);
