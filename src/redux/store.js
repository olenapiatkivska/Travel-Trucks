import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { campersReducer } from './catalog/slice.js';
import { filtersReducer } from './filters/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const persistFavoriteConfig = {
//   key: 'favorite',
//   storage,
//   whitelist: ['items'],
// };

// const persistedFavoritesReducer = persistReducer(
//   persistFavoriteConfig,
//   favoritesReducer,
// );

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    // favorite: persistedFavoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
