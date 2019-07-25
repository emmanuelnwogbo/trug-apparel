import express from 'express';
import renderer from './helpers/renderer';
const app = express();
/*
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();
*/
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(renderer());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});