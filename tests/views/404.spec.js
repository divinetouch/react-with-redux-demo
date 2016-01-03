import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PageNotFound from '../../app/views/404';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('404 page not found component', () => { 
    it('should render page not found', () => { 
        const renderer = TestUtils.createRenderer();
        renderer.render(<PageNotFound />);
        const actual = renderer.getRenderOutput();
        const expected = '<h2> Page not found </h2>';

        expect(actual).toIncludeJSX(expected);
    });
});
