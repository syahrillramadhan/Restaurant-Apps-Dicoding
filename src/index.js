import 'regenerator-runtime'; /* for async await transpile */
import './styles/main.css';
import './styles/responsive.css';
import App from './scripts/views/app';
import './scripts/component/Navbar/Navbar';
import './scripts/component/hero/jumbotronElement';
import swRegister from './scripts/utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  hero: document.querySelector('jumbotron-section'),
  content: document.querySelector('#mainContent'),
  drawer: document.querySelector('.nav-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
