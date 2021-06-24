import restaurantDBSource from '../../data/restaurantDB-source';
import UrlParser from '../../routes/url-parser';
import {
  restaurantDetailTemplate,
  categoriesMenuList,
  foodsListTemplated,
  drinkListTemplated,
  customerReviewsList,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"> </div>  
         <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantDBSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML += restaurantDetailTemplate(restaurant);
    // looping list kategori Menu
    const categoriesMenu = document.querySelector('#category_menu');
    restaurant.categories.map((category) => {
      categoriesMenu.innerHTML += categoriesMenuList(category);
    });
    // end------------------------------------------

    // looping list Daftar Menu
    const foodList = document.querySelector('#Food');
    restaurant.menus.foods.map((food) => {
      foodList.innerHTML += foodsListTemplated(food);
    });

    const drinkList = document.querySelector('#Drink');
    restaurant.menus.foods.map((drink) => {
      drinkList.innerHTML += drinkListTemplated(drink);
    });
    // end -----------------------------------------

    // looping Customer Review
    const customerReviewContainer = document.querySelector('.reviews');
    restaurant.customerReviews.map((customerReview, index) => {
      if (index < 5) {
        customerReviewContainer.innerHTML +=
          customerReviewsList(customerReview);
      }
    });

    // add new review
    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Form name atau review tidak boleh kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        const dataInput = {
          id: url.id,
          name: nameInput.value,
          review: reviewInput.value,
        };
        restaurantDBSource.addReview(dataInput);
        nameInput.value = '';
        reviewInput.value = '';
        alert('Berhasil menambahkan review baru');
        self.skipWaiting;
        Location.reload;
      }
    });

    // icon like restaurant
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
