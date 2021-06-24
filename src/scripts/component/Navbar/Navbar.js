class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="drawer" class="nav">
      <div class="container">
        <div class="nav-logo">
          <h2>Kuliner-an</h2>
        </div>
        <button id="menu" class="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-list">
          <li class="nav-item"><a href="#/home">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/syahrill-ramadhan/"
              >About Us</a
            >
          </li>
        </ul>
      </div>
    </nav>
      `;
  }
}

customElements.define('navbar-section', Navbar);
