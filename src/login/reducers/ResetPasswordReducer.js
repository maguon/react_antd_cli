import {handleActions} from 'redux-actions';
import {ResetPasswordActionTypes} from '../types';

const initialState = {
    username: 'TestUser',
    captcha:'',
    password: ''
};

export default handleActions(
    {
        [ResetPasswordActionTypes.resetInit]: (state, action) => {
            return {
                ...state,
                data: action.payload
            }
        },
        [ResetPasswordActionTypes.setUserName]: (state, action) => {
            return {
                ...state,
                userName: action.payload
            }
        },
        [ResetPasswordActionTypes.setCaptcha]: (state, action) => {
            return {
                ...state,
                captcha: action.payload
            }
        },
        [ResetPasswordActionTypes.setPassword]: (state, action) => {
            return {
                ...state,
                password: action.payload
            }
        }

    }, initialState)