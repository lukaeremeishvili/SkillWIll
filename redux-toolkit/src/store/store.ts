import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './actions/navbarSlice';
import dataReducer from './data/dataSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    data: dataReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
