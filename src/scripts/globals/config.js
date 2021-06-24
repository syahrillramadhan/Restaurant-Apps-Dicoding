const CONFIG = {
  API_KEY: '12345',
  CONTENT_TYPE: 'application/json',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-apps-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
};

export default CONFIG;
