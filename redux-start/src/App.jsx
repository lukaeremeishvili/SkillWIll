import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/router';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
