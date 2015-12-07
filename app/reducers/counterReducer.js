import { INCREMENT, DECREMENT } from '../actions/actions';
let initialCounterState = { 
    count: 0
};

export default(state=initialCounterState, action) => { 
    switch (action.type) {
        case INCREMENT:
            console.log('increment action'); 
            return Object.assign({}, { ...state, count: state.count+1 });
        case DECREMENT:
            console.log('decrement action');
            return Object.assign({}, { ...state, count: state.count === 0 ? 0 : state.count-1 });
        default:
            return state; 
    }
};
