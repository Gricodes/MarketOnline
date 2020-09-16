export const SIGNIN_USER_REQUEST = "SIGNIN_USER_REQUEST";
export const SIGNIN_USER_SUCCESS = "SIGNIN_USER_SUCCESS";
export const SIGNIN_USER_FAIL = "SIGNIN_USER_FAIL";
export const SIGNIN_REGISTER_REQUEST = "SIGNIN_USER_REQUEST";
export const SIGNIN_REGISTER_SUCCESS = "SIGNIN_USER_SUCCESS";
export const SIGNIN_REGISTER_FAIL = "SIGNIN_USER_FAIL";


const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case  SIGNIN_USER_REQUEST :
            return {
                loading: true
            }
        case  SIGNIN_USER_SUCCESS :
            return {
                loading: false,
                userInfo: action.payload
            }
        case  SIGNIN_USER_FAIL :
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case  SIGNIN_USER_REQUEST :
            return {
                loading: true
            }
        case  SIGNIN_USER_SUCCESS :
            return {
                loading: false,
                userInfo: action.payload
            }
        case  SIGNIN_USER_FAIL :
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export {
    userSigninReducer,userRegisterReducer
}