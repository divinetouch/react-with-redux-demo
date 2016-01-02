/**
 * reduce can be split to multiple reducer for example cartItem, profile, purchase history, etc.
 * To test this I created a simple counter that will be combined with merchansize reducer.
 */
import CartAPI from '../cart-api/cartAPI';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actions';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

/**
 * When we first land on the home page, this is the initial state
 */
let initialState = {
    allItems: CartAPI.getAllItems([]),
    cartItems: [],
    shouldResetItem: {}
};

const merchandizeReducer = (state=initialState, action) => { 
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({},
                {
                    ...state,
                    cartItems: CartAPI.addToCart(state.cartItems, action.item, action.quantity)
                }
            );
        case REMOVE_FROM_CART:
            return Object.assign({}, { ...state, cartItems: CartAPI.removeFromCart(state.cartItems, action.item), shouldResetItem: action.item});
        default:
            return state;
    }
};

export default combineReducers({ 
    merchandize: merchandizeReducer,
    counter: counterReducer
});
