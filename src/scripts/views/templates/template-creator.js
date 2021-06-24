import CONFIG from '../../globals/config';

// restuarnat list templated

const RestaurantItemTemplate = (restaurant) =>
  `
    <article class="explore-item">
      <h3 tabindex="0" class="explore-city">${restaurant.city}</h3>
      <img class="explore-item-thumbnail" src=${
        CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId
      } alt=${restaurant.name} />
      <div class="explore-item-content">
          <h1 class="explore-tittle" >
            <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
          </h1>
          <p tabindex="0" class="explore-rating">⭐️<span>${
            restaurant.rating
          }</span></p>
          <p tabindex="0" class="explore-description">${
            restaurant.description
          }</p>
      </div>
    </article>
`;

// detail restaurant templated

const restaurantDetailTemplate = (restaurant) => `
  <div class="container">
    <h1 tabindex="0">Detail Restaurant</h1>
    <div class="Detail-Content">
      <div class="content-left">
        <h2 tabindex="0" class="restaurant-name">${restaurant.name} - ${
  restaurant.city
}</h2>
        <img class="restaurant-poster" src="${
          CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
        }" alt="${restaurant.name}" />
      </div>
      <div class="content-right">
        <h4 tabindex="0">Address :</h4>
        <p tabindex="0">${restaurant.address}</p>
        <h4 tabindex="0">City :</h4>
        <p tabindex="0">${restaurant.city}</p>
        <h4 tabindex="0">Rating :</h4>
        <p tabindex="0">⭐️${restaurant.rating}</p>
        <h4 tabindex="0">Categories Menu :</h4>
        <p tabindex="0" class="category_menu" id="category_menu"></p>
      </div>
    </div>

    <h4 tabindex="0">Description</h4>
    <p tabindex="0" class="detail-restaurant-description">${
      restaurant.description
    }</p>
    <h4 tabindex="0" class="title-daftarMenu">Daftar Menu :</h4>
    <div class="menu-restaurant">
      <div class="Foods">
        <span tabindex="0">Foods</span>
        <ul tabindex="0" id="Food"></ul>
      </div>
      <div class="Drinks">
        <span tabindex="0">Drinks</span>
        <ul tabindex="0" id="Drink"></ul>
      </div>
    </div>
    <h4 tabindex="0">Customer Reviews<h4>
    <div tabindex="0" class="reviews"></div>
    <h4 tabindex="0">Comments Review</h4>
    <form class="form-reviewer">
        <div class="form-name">
          <label for="inputName" class="form-label">Name</label><br>
          <input type="text" name="inputName" class="form-control" id="inputName" placeholder="Enter your name..">
        </div>
        <div class="form-review">
          <label for="inputReview" class="form-label">Review</label><br>
          <textarea name="inputReview" class="form-control" id="inputReview" placeholder="Enter your review.."></textarea>
        </div>
        <button type="submit" id="submit-review">Kirim</button>
    </form>
  </div>    
`;

const categoriesMenuList = (category) => `${category.name} <br>`;

const foodsListTemplated = (food) => `<li>${food.name}</li>`;

const drinkListTemplated = (drink) => `<li>${drink.name}</li>`;

const customerReviewsList = (customerReview) =>
  `<div class="customer-item">
    <h5>${customerReview.name}</h5>
    <p>${customerReview.review}</p>
    <p class="date">${customerReview.date}</p>
  </div>`;

// button icon templated

const createLikeButtonTemplate = () => `
  <div class="container">
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  </div>
`;

const createLikedButtonTemplate = () => `
  <div class="container">
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  </div>
`;

export {
  RestaurantItemTemplate,
  restaurantDetailTemplate,
  categoriesMenuList,
  foodsListTemplated,
  drinkListTemplated,
  customerReviewsList,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
