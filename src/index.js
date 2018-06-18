import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import AppContainer from './containers/AppContainer';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
