import { pushPath } from 'redux-simple-router';
import { updateApplicationState } from './applicationStateAction';

export const changeRoute = (newRoute) => { 
    return (dispatch) => { 
        dispatch(pushPath(newRoute.toLowerCase()));
        dispatch(updateApplicationState({ 
            currentActiveRoute: newRoute.toLowerCase()
        }));
    };
};
