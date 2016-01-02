import { INCREMENT, DECREMENT } from '../actions/countActions';
let initialCounterState = { 
    count: 0
};

export default(state=initialCounterState, action) => { 
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, { ...state, count: state.count+1 });
        case DECREMENT:
            return Object.assign({}, { ...state, count: state.count === 0 ? 0 : state.count-1 });
        default:
            return state; 
    }
};
