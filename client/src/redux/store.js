import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
// todo: правила для redux-persist
// eslint-disable-next-line import/no-extraneous-dependencies
import storage from 'redux-persist/lib/storage';
// eslint-disable-next-line import/no-extraneous-dependencies
import { persistReducer } from 'redux-persist';
import modalSlice from './slices/modalSlice';
import productsSlice from './slices/productsSlice';
import authorizationSlice from './slices/authorizationSlice';
import userSlice from './slices/userSlice';
import partnersSlice from './slices/partnersSlice';
import searchSlice from './slices/searchSlice';
import errorSlice from './slices/errorSlice';
import reviewsSlice from './slices/reviewsSlice';
import favouriteSlice from './slices/favouriteSlice';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';
import filterSlice from './slices/filterSlice';
import scrollAnchorSlice from './slices/scrollAnchorSlice';

const authPersistConfig = {
  key: 'authorization',
  version: 1,
  storage,
};

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
};

const productPersistConfig = {
  key: 'products',
  version: 1,
  storage,
};

const searchPersistConfig = {
  key: 'search',
  version: 1,
  storage,
};
const favouritePersistConfig = {
  key: 'favorites',
  version: 1,
  storage,
};
const reviewsPersistConfig = {
  key: 'reviews',
  version: 1,
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  version: 1,
  storage,
};

const cartPersistConfig = {
  key: 'cart',
  version: 1,
  storage,
};
/*
    todo: - ЗВЕРНІТЬ УВАГУ!
      якщо вам потрібно щоб ваш стейт не зникав після перезавантаження
      то юзайте підхід як authorization і user,
      якщо ж ні то варіант написання як для modal всередині reducer
      Якщо що пишіть @Ihor_Kacher
*/
const reducer = combineReducers({
  error: errorSlice,
  modal: modalSlice,
  partners: partnersSlice,
  authorization: persistReducer(authPersistConfig, authorizationSlice),
  user: persistReducer(userPersistConfig, userSlice),
  products: persistReducer(productPersistConfig, productsSlice),
  search: persistReducer(searchPersistConfig, searchSlice),
  order: orderSlice,
  reviews: persistReducer(reviewsPersistConfig, reviewsSlice),
  favourites: persistReducer(favouritePersistConfig, favouriteSlice),
  filter: persistReducer(filterPersistConfig, filterSlice),
  cart: persistReducer(cartPersistConfig, cartSlice),
  scrollAnchor: scrollAnchorSlice,
});

const middleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer,
  middleware,
});

export default store;
