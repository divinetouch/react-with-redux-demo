import React from 'react';
import CartItems from '../../../../app/components/sidebar/cart/cart-items';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createStore } from 'redux';
import reducers from '../../../../app/reducers/reducers';
expect.extend(expectJSX);

describe('checkout page component', () => { 
    let store = createStore(reducers);
    let item = { 
        id: 1,
        name: 'item 1',
        cost: 5,
        description: 'this is item 1'
    };

    it('should render checkout page', () => { 

        store.dispatch({ 
            type: 'ADD_TO_CART',
            item: item,
            quantity: 5
        });

        const renderer = TestUtils.createRenderer();
        renderer.render(<CartItems store={ store } />);
        const actual = renderer.getRenderOutput();
        const expected = 'this is item 1';

        expect(actual).toIncludeJSX(expected);
    });
});
