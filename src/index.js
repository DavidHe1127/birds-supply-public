import React from 'react';
import ReactDOM from 'react-dom';
import App from './App-ui';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path='/' component={App} />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
