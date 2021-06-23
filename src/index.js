import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import firebaseConfig from './helpers/apiKeys';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
