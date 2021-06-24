const DrawerInitiator = {
  init({ button, hero, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('opentoggle');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('opentoggle');
  },
};

export default DrawerInitiator;
