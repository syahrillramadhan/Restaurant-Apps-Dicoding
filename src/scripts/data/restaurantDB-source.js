import ENDPOINT_API from '../globals/endpoint-API';
import CONFIG from '../globals/config';

class restaurantDBSource {
  static async restaurantList() {
    const response = await fetch(ENDPOINT_API.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(ENDPOINT_API.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(dataInput) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': CONFIG.CONTENT_TYPE,
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(dataInput),
    };
    const response = await fetch(ENDPOINT_API.ADD_REVIEW, options);
    const responseJson = await response.json();
    console.log(responseJson.customerReviews);
    return responseJson.cusomterReviews;
    this.detailRestaurant();
  }
  catch(error) {
    showResponseMessage(error);
  }
}

export default restaurantDBSource;
