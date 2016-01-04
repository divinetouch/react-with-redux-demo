import CartAPI from '../cart-api/cartAPI';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

let initialState = {
    allItems: CartAPI.getAllItems([]),
    cartItems: [],
    shouldResetItem: {}
};

export default(state=initialState, action) => { 
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
