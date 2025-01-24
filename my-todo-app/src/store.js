import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer,
  },
});

export default store;