import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './store/taskSlice';
import themeReducer from './store/themeSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
