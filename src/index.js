// if(process.env.NODE_ENV === 'dev') {
//   if (module.hot) {
//     module.hot.accept();
//   }
// }


import React from 'react';

import {render} from 'react-dom';

import {Router, browserHistory} from 'react-router'
import '../lib/antd/antd.min.css'

import rootRouters from './routes'

render((<Router history={browserHistory} routes={rootRouters}/>), document.getElementById('app'))