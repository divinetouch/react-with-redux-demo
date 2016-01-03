import React from 'react';
import CatalogItem from '../../../app/components/catalog/catalog-item';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createStore } from 'redux';
import reducers from '../../../app/reducers/reducers';
import ReactDOM from 'react-dom';
expect.extend(expectJSX);

describe('Catalog Item Component', () => { 
    let store = createStore(reducers);

    it('should render an catalog item', () => { 

        let element = TestUtils.renderIntoDocument(<CatalogItem store={ store } item={ store.getState().merchandize.allItems[0] } />);

        let actual = ReactDOM.findDOMNode(element).textContent.includes('Item name 1');
        let expected = true;

        expect(actual).toEqual(expected);
    });
});
