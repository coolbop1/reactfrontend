import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/head';
import Hero from './components/herobanner';
import Ads from './components/videoad';
import Altbox from './components/alternatebox';
import Features from './components/features';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Hero />, document.getElementById('banner'));
ReactDOM.render(<Ads />, document.getElementById('ads'));
ReactDOM.render(<Features />, document.getElementById('featuresect'));
ReactDOM.render(<Altbox />, document.getElementById('benefits'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
