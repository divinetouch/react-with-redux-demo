/**
 * reduce can be split to multiple reducer for example cartItem, profile, purchase history, etc.
 * To test this I created a simple counter that will be combined with merchansize reducer.
 */
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import cartReducer from './cartReducer';
import updateApplicationStateReducer from './applicationStateReducer';

/**
 * When we first land on the home page, this is the initial state
 */
export default combineReducers({ 
    merchandize: cartReducer,
    counter: counterReducer,
    routing: routeReducer,
    applicationState: updateApplicationStateReducer
});
