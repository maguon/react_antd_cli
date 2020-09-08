import {combineReducers} from 'redux';

import LoginReducer from './LoginReducer';
import ResetPasswordReducer from './ResetPasswordReducer';

export default combineReducers({
    LoginReducer ,ResetPasswordReducer
})