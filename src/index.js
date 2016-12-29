
import React from 'react';

import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {Router, browserHistory} from 'react-router'
import thunk from 'redux-thunk';
// antd
import '../lib/antd/antd.min.css'
// reset
import './theme/reset.scss'

import rootRouters from './routes'
import reducer from './reducers'
console.log(reducer)

let store = createStore(reducer, applyMiddleware(thunk));



render((
    <Provider store={store}>
        <Router history={browserHistory} routes={rootRouters}/>
    </Provider>), 
    document.getElementById('app')
)