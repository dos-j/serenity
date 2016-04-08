import React from 'react';
import 'models';
import { App1, App2 } from 'components/index';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App1} />
    <Route path="/about" component={App2} />
  </Router>
), document.getElementById('app'));

