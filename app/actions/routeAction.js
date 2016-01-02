/**
 * This action can be expanded to handle all routing for the application
 */
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
