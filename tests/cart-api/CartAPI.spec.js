import expect from 'expect';
import CartAPI from '../../app/cart-api/cartAPI';


describe('Test Cart Api', () => { 
    let cartItems = [];
    let item = { 
        name: 'item 1',
        id: 1,
        description: 'item number 1',
        cost: 500
    };

    afterEach(() => { 
        cartItems = [];
    });

    it('should add item to the cart', () => { 
        let actual = CartAPI.addToCart(cartItems, item, 1);

        expect(1).toEqual(actual.length);
        expect(item.id).toEqual(actual[0].id);
        expect(1).toEqual(actual[0].quantity);

        actual = CartAPI.addToCart(cartItems, item, 5);
        expect(5).toEqual(actual[0].quantity);
    });

    it('should remove an item from the cart', () => { 
        let items = CartAPI.addToCart(cartItems, item, 5);
        let actual = CartAPI.removeFromCart(items, item);

        expect(0).toEqual(actual.length);
    });

    it('should do nothing when remove item that is not in the cart', () => { 
        let items = CartAPI.addToCart(cartItems, item, 5);
        let actual = CartAPI.removeFromCart(items, { 
            name: 'item 2',
            id: 2,
            cost: 4
        });

        expect(1).toEqual(actual.length);
    });

    it('should calculate total cost of items in the cart', () => { 
        let items = CartAPI.addToCart(cartItems, item, 5);
        let actual = CartAPI.getTotal(items);
        let expected = 5*item.cost;

        expect(expected).toEqual(actual);
    });
    
});
