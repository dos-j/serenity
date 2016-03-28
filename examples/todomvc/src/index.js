import 'models';
import { App } from 'components/index';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('app'));

