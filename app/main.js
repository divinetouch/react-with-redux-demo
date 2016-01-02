import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import { logger } from './logger/logger';

const store = applyMiddleware(logger, thunk)(createStore)(reducers);

ReactDOM.render(
        <Provider store={ store }>
            <App/>
        </Provider>, 
        document.getElementById('app')
    );
