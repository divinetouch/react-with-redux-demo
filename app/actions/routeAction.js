/**
 * This action can be expanded to handle all routing for the application
 *
 * All the logic of which page the user can go to and what to do before leaving a page and entering the new page should be
 * implemented here. For example, save the the current state to the sessionStorage before leaving the page and read the 
 * state back after loading the new page.
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
