import React from 'react';
import CartItem from '../../../../app/components/sidebar/cart/cart-item';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createStore } from 'redux';
import reducers from '../../../../app/reducers/reducers';
import ReactDOM from 'react-dom';
expect.extend(expectJSX);

describe('Cart Item Component', () => { 
    let store = createStore(reducers);

    it('should render an item', () => { 

        let element = TestUtils.renderIntoDocument(<CartItem store={ store } item={ store.getState().merchandize.allItems[0] } />);
        let actual = ReactDOM.findDOMNode(element).textContent.includes('Item name 1 - qty:');
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('should simulate click on remove item', () => { 
        store.dispatch({ 
            type: 'ADD_TO_CART',
            item: store.getState().merchandize.allItems[0],
            quantity: 5
        });
        let element = TestUtils.renderIntoDocument(<CartItem store={ store } item={ store.getState().merchandize.cartItems[0] } />);

        let actual = store.getState().merchandize.cartItems.length;
        let expected = 1;

        //before remove
        expect(actual).toEqual(expected);
        
        //Afte click on remove 
        let button = TestUtils.findRenderedDOMComponentWithTag(element, 'span');
        TestUtils.Simulate.click(button);

        actual = store.getState().merchandize.cartItems.length;
        expected = 0;

        expect(actual).toEqual(expected);

    });
});
