import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/head';
import Hero from './components/herobanner';
import Ads from './components/videoad';
import Altbox from './components/alternatebox';
import Features from './components/features';
import Socials from './components/social';
import Partner from './components/partners';
import Longbreak from './components/break';
import Foot from './components/fotter';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Hero />, document.getElementById('banner'));
ReactDOM.render(<Ads />, document.getElementById('ads'));
ReactDOM.render(<Features />, document.getElementById('featuresect'));
ReactDOM.render(<Altbox />, document.getElementById('benefits'));
ReactDOM.render(<Socials />, document.getElementById('socialsect'));
ReactDOM.render(<Partner />, document.getElementById('partnersect'));
ReactDOM.render(<Longbreak />, document.getElementById('breaksect'));
ReactDOM.render(<Foot />, document.getElementById('footer'));


serviceWorker.unregister();
