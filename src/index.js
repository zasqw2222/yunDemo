import React from 'react';

import ReactDom from 'react-dom';

import App from './App';

import M1 from './components/M1/M1';
import M2 from './components/M2/M2';
import Home from './components/Home/Home';


import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'



ReactDom.render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="/m1" component={M1} />
      <Route path="/m2" component={M2} />
    </Route>
  </Router>
)
    ,
    document.getElementById('app')
);