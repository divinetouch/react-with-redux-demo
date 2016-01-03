import React from 'react';
import Checkout from '../../app/views/checkout';
import CheckoutItem from '../../app/components/checkout/checkout-item';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../app/reducers/reducers';
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
        renderer.render(<Checkout store={ store } />);
        const actual = renderer.getRenderOutput();
        const expected = 'this is item 1';

        expect(actual).toIncludeJSX(expected);
    });

    it('should render checkout page - test with renderToStaticMarkup', () => { 

        store.dispatch({ 
            type: 'ADD_TO_CART',
            item: item,
            quantity: 5
        });

        let elementMarkUp = React.renderToStaticMarkup(<Provider store={store}><Checkout /></Provider>);
        const actual = elementMarkUp;
        const expected = item.name;

        expect(actual).toIncludeJSX(expected);
    });

    it('should render CheckItem component', () => { 
        store.dispatch({ 
            type: 'ADD_TO_CART',
            item,
            quantity: 5
        });

        let element = TestUtils.renderIntoDocument(<Provider store={ store }><Checkout /></Provider>);
        let actual = TestUtils.findRenderedComponentWithType(element, CheckoutItem);
        
        expect(actual).toExist();
    });
});
