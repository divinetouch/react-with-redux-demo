/**
 * This action can be used to make an AJAX call to the server to get the initial data
 */
import { updateApplicationState } from './applicationStateAction';

export const loadInitialData = () => { 
    return (dispatch) => { 
        //TODO: properly implement this method
        setTimeout(() => { 
            dispatch(updateApplicationState({ 
                isReady: true
            }));
        }, 2000);
    };
};
