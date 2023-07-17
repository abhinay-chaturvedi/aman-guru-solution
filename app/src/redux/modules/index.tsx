
import { combineReducers } from 'redux';
import accountReducer from './account/reducer';

const reducers = {
    account: accountReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
