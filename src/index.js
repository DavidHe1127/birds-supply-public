import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path='/' component={App} />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
