import listRestaurant from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail-restaurant';
import favorite from '../views/pages/favorite';

const routes = {
  '/': listRestaurant, // default page
  '/home': listRestaurant,
  '/detail/:id': Detail,
  '/favorite': favorite,
};

export default routes;
