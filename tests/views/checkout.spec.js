import React from 'react';
import Checkout from '../../app/views/checkout';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createStore } from 'redux';
import reducers from '../../app/reducers/reducers';
expect.extend(expectJSX);

describe('checkout page component', () => { 
    it('should render checkout page', () => { 
        const renderer = TestUtils.createRenderer();
        renderer.render(<Checkout store={ createStore(reducers) } />);
        const actual = renderer.getRenderOutput();
        const expected = '<CheckoutItem />';

        expect(actual).toIncludeJSX(expected);
    });
});
