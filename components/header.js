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
        nav {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        ul li {
          float: left;
        }

        ul li * {
          display: block;
          text-align: center;
          padding: 14px 16px;
        }
      </style>

      <header>
        <nav>
          <ul>
            <!-- the '/' tells the browser: "ignore the directory this file is in, go to the root of the domain and look for the file there." -->
            <li><a href="/index.html">Home</a></li>
            <li><a href="/blog/index.html">Blog</a></li>
            <li><a href="/learnings.html">Learnings</a></li>
            <li><a href="/bookshelf/index.html">Bookshelf</a></li>
            <li><button class="theme-toggle" id="themeBtn">L/D</button></li>
          </ul>
        </nav>
      </header>
    `;

    // Find the button inside the component
    const btn = this.querySelector('#themeBtn');

    // Listen for clicks and toggle a global class on the body tag
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
    });
  }
}

// register new component in browser registry, linking 'wle-header' with WleHeader.
customElements.define('wle-header', WleHeader);
