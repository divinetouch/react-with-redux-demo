export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';

export const addToCart = (item, quantity) => { 
    return {type: ADD_TO_CART, item, quantity };
};

//compact version which works the same as addToCart
export const removeFromCart = (item) => ({ type: REMOVE_FROM_CART, item });

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });
