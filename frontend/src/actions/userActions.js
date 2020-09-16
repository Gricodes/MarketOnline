import axios from "axios";
import {
    SIGNIN_REGISTER_FAIL,
    SIGNIN_REGISTER_REQUEST, SIGNIN_REGISTER_SUCCESS,
    SIGNIN_USER_FAIL,
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS
} from "../reducers/userReducers";
import Cookie from 'js-cookie';

const signin = (email, password) => async (dispatch) => {
    dispatch({type: SIGNIN_USER_REQUEST, payload: {email, password}});
    try {
        const {data} = await axios.post("api/users/signin", {email, password});
        dispatch({type: SIGNIN_USER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({type: SIGNIN_USER_FAIL, payload: error.message});
    }
}
const register = (name, email, password) => async (dispatch) => {
    dispatch({type: SIGNIN_REGISTER_REQUEST, payload: {name, email, password}});
    try {
        const {data} = await axios.post("api/users/register", {name, email, password});
        dispatch({type: SIGNIN_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({type: SIGNIN_REGISTER_FAIL, payload: error.message});
    }
}
export {signin,register}