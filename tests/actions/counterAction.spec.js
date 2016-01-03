import expect from 'expect';
import reducers from '../../app/reducers/reducers';
import { createStore } from 'redux';
import { INCREMENT, DECREMENT } from '../../app/actions/countActions';

describe('Counter Action', () => { 
    let store = createStore(reducers);

    it('should increment', () => { 
        store.dispatch({ 
            type: INCREMENT
        });

        let actual = store.getState().counter.count;
        let expected = 1;
        expect(expected).toEqual(actual);
    });

    it('should decrement', () => { 
        store.dispatch({ 
            type: DECREMENT
        });

        let actual = store.getState().counter.count;
        let expected = 0;

        expect(expected).toEqual(actual);
    });

});

