import { pushPath } from 'redux-simple-router';

export const changeRoute = (newRoute) => { 
    return (dispatch) => { 
        dispatch(pushPath(newRoute.toLowerCase()));
    };
};
