import { combineReducers } from 'redux';
import userReducer from './userReducer';
import matchReducer from './matchReducer';

export default combineReducers({
    user: userReducer,
    match: matchReducer
})