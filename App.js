import React from 'react';
import Root from './src/native/index';
import configureStore from './src/redux/store/index';

const { persistor, store } = configureStore();

const App = () => <Root store={store} persistor={persistor} />;

export default App;
