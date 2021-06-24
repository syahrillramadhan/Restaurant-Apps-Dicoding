import FavoriteRestorantIdb from '../../data/favorite-restaurants-idb';
import { RestaurantItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <section class="content">
        <div class="explore-rest">
          <div class="container">
            <h1 tabindex="0" id="content" class="explore-label">
              Your Liked Catalogue Kuliner-an
            </h1>
            <div class="card-content" id="restaurants">
            
            </div>
          </div>
        </div>
      </section>
 `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestorantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += RestaurantItemTemplate(restaurant);
    });
  },
};

export default favorite;
