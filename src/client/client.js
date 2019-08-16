//Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'deblftxe5zjg',
  accessToken: '2WG9t8vIqQKelVBrXii2gXvoUZwFGqwo0oEWM2pv8ek' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields.category)
    }
  })
})

import Home from './components/Home';
import './scss/main.scss'

ReactDOM.hydrate(
  <BrowserRouter>
    <Home />
  </BrowserRouter>, document.getElementById('root'))