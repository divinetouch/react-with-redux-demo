
import { updateApplicationState } from './applicationStateAction';

export const loadInitialData = () => { 
    return (dispatch) => { 
        setTimeout(() => { 
            dispatch(updateApplicationState({ 
                isReady: true
            }));
        }, 2000);
    };
};
