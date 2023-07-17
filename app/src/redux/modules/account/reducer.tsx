import { ADD_USER_CREDENTIALS, ADD_USER_DETAILS } from './constant';
import initialState from './initialState';


const accountReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_USER_DETAILS: {
            return {
                ...state,
                user: action.payload,
            };
        }
        case ADD_USER_CREDENTIALS: {
            return {
                ...state,
                credentials: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
export default accountReducer;
