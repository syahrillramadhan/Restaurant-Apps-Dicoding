class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="jumbotron-inner"></div>
      <div class="jumbotron-text">
        <h1 tabindex="0" id="maincontent" class="jumbotron-tittle"><span>Ayo!!!</span></br>Tentukan <span>Makanan</span> dan <span>Minuman</span> Favorite-Mu</h1>
        <p tabindex="0" class="jumbotron-tagline">Hanya ada di <span>Kuliner-an</span></p>
        <a href="#content">Get Started</a>
      </div>        
        `;
  }
}
customElements.define('jumbotron-section', Jumbotron);
