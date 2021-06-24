import CONFIG from './config';

const ENDPOINT_API = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default ENDPOINT_API;
