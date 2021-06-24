import restaurantDBSource from '../../data/restaurantDB-source';
import { RestaurantItemTemplate } from '../templates/template-creator';

const listRestaurant = {
  async render() {
    return `
      <section class="content">
        <div class="explore-rest">
          <div class="container">
            <h1 tabindex="0" id="content" class="explore-label">
              Explore Kuliner-an
            </h1>
            <div class="card-content" id="restaurants">
            
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const restaurants = await restaurantDBSource.restaurantList();
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += RestaurantItemTemplate(restaurant);
    });
  },
};

export default listRestaurant;
