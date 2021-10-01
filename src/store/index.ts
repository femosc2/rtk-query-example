import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { combineReducers } from 'redux';

import { pokemonApi } from '../services/api';

export interface IStore {
  }
  
  export const reducers = combineReducers<IStore>({
  });
  
  export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  })
  
  setupListeners(store.dispatch)