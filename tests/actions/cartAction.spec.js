import expect from 'expect';
import reducers from '../../app/reducers/reducers';
import { createStore } from 'redux';

describe('Cart Action', () => { 
    let store = createStore(reducers);
    let item = { 
        id: 1,
        name: 'item 1',
        cost: 5,
        description: 'this is item 1'
    };

    it('should add new item to cart', () => { 
        store.dispatch({ 
            type: 'ADD_TO_CART',
            item: item,
            quantity: 5
        });

        let actual = store.getState().merchandize.cartItems[0].name;
        let expected = item.name;
        expect(expected).toEqual(actual);

        actual = store.getState().merchandize.cartItems[0].quantity;
        expected = 5;
        expect(expected).toEqual(actual);
    });

    it('should remove item from cart', () => { 
        store.dispatch({ 
            type: 'REMOVE_FROM_CART',
            item
        });

        let actual = store.getState().merchandize.cartItems.length;
        let expected = 0;

        expect(expected).toEqual(actual);
    });

});
