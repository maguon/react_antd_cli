import { handleActions } from 'redux-actions';
import {PageHeaderTypes} from '../../types/';
const initialState = {
    userInfo :{
        userId:10000
    }
}
export default handleActions({
    [PageHeaderTypes.getUserInfo]: (state, action) => {

        return {
            ...state,
            userInfo: action.payload
        }
    }} , initialState)