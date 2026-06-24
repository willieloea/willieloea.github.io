// I'm copying this over from https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
// I don't understand everything in this file.

class Header extends HTMLElement {
  constructor () {
    super();
  }

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

        ul li a {
          display: block;
          text-align: center;
          padding: 14px 16px;
        }
      </style>

      <header>
        <nav>
          <ul>
            <!--
            the '/' tells the browser: "ignore the directory this file is in,
            go to the root of the domain and look for the file there.
            -->
            <li><a href="/index.html">Home</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/learnings.html">Learnings</a></li>
            <li><a href="/bookshelf.html">Bookshelf</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

