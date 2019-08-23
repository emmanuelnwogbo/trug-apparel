//Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

import Home from './components/Home';
import './scss/main.scss';
import reducers from './redux/reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk, logger))

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>, document.getElementById('root'))