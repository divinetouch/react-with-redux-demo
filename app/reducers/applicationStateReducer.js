import { UPDATE_APPLICATION_STATE } from '../actions/applicationStateAction';

let initialState = { 
    hasError: false,
    errorMessage: undefined,
    isReady: false,
    currentActiveRoute: undefined
};

export default(state=initialState, action) => { 
    switch(action.type) { 
        case UPDATE_APPLICATION_STATE:
            return Object.assign({}, { 
                ...state,
                isReady: action.args.isReady ? action.args.isReady : state.isReady,
                currentActiveRoute: action.args.currentActiveRoute ? action.args.currentActiveRoute.replace(/\/|#/g,'') : state.currentActiveRoute,
                hasError: action.args.hasError ? action.args.hasError : state.hasError,
                errorMessage: action.args.errorMessage ? action.args.errorMessage: state.errorMessage
            });
        default:
            return state;
    }
};
