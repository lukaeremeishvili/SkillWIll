import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navbarReducer from './actions/navbarSlice';
import dataReducer from './data/dataSlice';
import navigationReducer from './actions/navigationSlice';
import { BeerApi } from './beer/beer.api';

export const rootReducer = combineReducers({
  navbar: navbarReducer,
  data: dataReducer,
  navigation: navigationReducer,
  [BeerApi.reducerPath]: BeerApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(BeerApi.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
