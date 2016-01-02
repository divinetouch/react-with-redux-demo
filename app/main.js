//BOOTSTRAP IMPORT
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// BOOTSTRAP IMPORT END

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import { logger } from './logger/logger';
import { syncReduxAndRouter } from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { updateApplicationState } from './actions/applicationStateAction';

import * as View from './views';
import Template from './components/template';
import {Router, Route, IndexRoute} from 'react-router';

const store = applyMiddleware(logger, thunk)(createStore)(reducers);
const history = createBrowserHistory();
syncReduxAndRouter(history, store);

// The first page the user first landed on
store.dispatch(updateApplicationState({ 
    currentActiveRoute: store.getState().routing.path
}));

ReactDOM.render(
        <Provider store={ store }>
            <Router history={ history }>  
                <Route path="/" component={ Template }>
                    <IndexRoute component={ View.Home } />
                    <Route path="about" component={ View.About } />
                    <Route path="contact" component={ View.Contact } />
                    <Route path="item/:id" component={ View.Item } />
                    <Route path="checkout" component={ View.Checkout } />
                </Route>
            </Router>
        </Provider>, 
        document.getElementById('app')
    );
