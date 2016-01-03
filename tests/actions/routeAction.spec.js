import expect from 'expect';
import reducers from '../../app/reducers/reducers';
import { createStore } from 'redux';

describe('Route Action', () => { 
    let store = createStore(reducers);

    it('should update current active route', () => { 
        store.dispatch({ 
            type: 'UPDATE_APPLICATION_STATE',
            args: { currentActiveRoute: 'home' }
        });

        let actual = store.getState().applicationState.currentActiveRoute;
        let expected = 'home';
        expect(expected).toEqual(actual);
    });

    it('should update application state to is ready', () => { 
        store.dispatch({ 
            type: 'UPDATE_APPLICATION_STATE',
            args: { isReady: true }
        });

        let actual = store.getState().applicationState.isReady;
        let expected = true;

        expect(expected).toEqual(actual);
    });

});
