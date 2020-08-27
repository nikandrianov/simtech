import { LOG_IN, LOG_ERR} from '../actions/types';

const initialState = {
    user: null,
    errorMsg: ''
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {...state, user: {name: action.payload.name}};
        case LOG_ERR:
            return {...state, errorMsg: action.payload.errorMsg};
        default:
            return state;
    }
}