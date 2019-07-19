//Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

import './scss/main.scss'

ReactDOM.hydrate(<Home />, document.getElementById('root'))