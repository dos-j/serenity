import React from 'react';
import 'models';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { App1 } from 'components/index';
render((
  <Router history={browserHistory}>
    <Route path="/" component={App1} />
  </Router>
), document.getElementById('app'));

