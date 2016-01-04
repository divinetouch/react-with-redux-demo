import expect from 'expect';
import cartReducer from '../../app/reducers/cartReducer';
import CartAPI from '../../app/cart-api/cartAPI';

describe('Cart Reducer', () => { 
    let item1 = { 
        id: 1,
        cost: 40,
        name: 'item name 1',
        description: 'This is item number 1',
        quantity: 2
    };

    let item2 = { 
        id: 2,
        price: 50,
        name: 'item name 2',
        description: 'This is item number 2'
    };

    it('should return a proper state after adding a new item', () => { 
        let initialState = { 
            allItems: [],
            shouldResetItem: {},
            cartItems: [item1]
        };

        let action = { 
            type: 'ADD_TO_CART',
            item: item2,
            quantity: 3
        };

        let actual = cartReducer(initialState, action);
        let expected = {
            allItems: [],
            shouldResetItem: {},
            cartItems: [item1, Object.assign({}, { ...item2, quantity:3 })]
        };

        expect(actual).toEqual(expected);

    });

    it('should return a proper state after removing an item', () => { 
        let initialState = { 
            allItems: [],
            shouldResetItem: {},
            cartItems: [item1, item2]
        };

        let action = { 
            type: 'REMOVE_FROM_CART',
            item: item2
        };

        let actual = cartReducer(initialState, action);
        let expected = {
            allItems: [],
            shouldResetItem: item2,
            cartItems: [item1]
        };

        expect(actual).toEqual(expected);

    });

    it('should remove a correct item', () => { 
        let initialState = { 
            allItems: [],
            shouldResetItem: {},
            cartItems: [item1, item2]
        };

        let item3 = { 
            id: 3,
            name: 'Item name 3',
            description: 'This is item number 3',
            price: 3
        };

        let action = { 
            type: 'REMOVE_FROM_CART',
            item: item3
        };

        let actual = cartReducer(initialState, action);
        let expected = {
            allItems: [],
            shouldResetItem: item3,
            cartItems: [item1, item2]};

        expect(actual).toEqual(expected);

    });
});
