class WleFooter extends HTMLElement {
  /* runs as soon as the component is created in memory */
  constructor () {
    super(); // call the constructor of the parent class (HTMLElement)
  }

  /* runs if the tag is successfully inserted in the DOM */
  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          text-align: center;
          padding: 3px;
        }
      </style>

      <footer>
      <p><a href="mailto:willieloea@gmail.com">willieloea@gmail.com</a></p>
      </footer>
    `;
  }
}

// register new component in browser registry, linking 'wle-footer' with WleFooter.
customElements.define('wle-footer', WleFooter);
