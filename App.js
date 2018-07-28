import React from 'react';
import Root from './src/native/index';
import configureStore from './src/store/index';

const { persistor, store } = configureStore();

function App() {
  return <Root store={store} persistor={persistor} />;
}

import StorybookUIHMRRoot from './storybook';

module.exports = (process.env.REACT_NATIVE_ENVIORMENT == 'storybook') ? StorybookUIHMRRoot : App;
