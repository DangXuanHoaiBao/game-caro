export const userRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case 'REGISTER_REQUEST': {
            return {
                ...state,
                isRegistering: true,
                isRegistered: false
            }
        }
        case 'REGISTER_SUCCESS': {
            return {
                ...state,
               isRegistering: false,
               isRegistered: true,
            }
        }
        case 'REGISTER_FAIL': {
            return {
                ...state,
                isRegistering: false,
                isRegistered: false,
                error: action.error
            }
        }
        default: return state;
    }
}

const res = localStorage.getItem('res');
const initialState = res? { isLogining: false, isLogined: true, username: res.username } : {};
export const userLoginReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_REQUEST': {
            return {
                ...state,
                isLogining: true,
                isLogined: false
            }
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                isLogining: false,
                isLogined: true,
                username: action.username
            }
        }
        case 'LOGIN_FAIL': {
            return {
                ...state,
                isLogining: false,
                isLogined: false,
                error: action.error
            }
        }
        case 'LOGOUT': {
            return {}
        }
        default: return state;
    }
}

export const getInforUserReducer = (state={}, action) => {
    switch(action.type){
        case 'GET_INFOR_USER_REQUEST': {
            return {
                ...state,
                isGetting: true,
                isGetted: false
            }
        }
        case 'GET_INFOR_USER_SUCCESS': {
            return {
                ...state,
                isGetting: false,
                isGetted: true,
                userInfor: action.userInfor
            }
        }
        case 'GET_INFOR_USER_FAIL': {
            return {
                ...state,
                isGetting: false,
                isGetted: false,
                error: action.error
            }
        }
        default: return state;
    }
}

export const updateUserInforReducer = (state = {}, action) =>{
    switch(action.type){
        case 'UPDATE_USER_INFOR_REQUEST':{
            return {
                ...state,
                isUpdating: true,
                isUpdated: false
            }
        }
        case 'UPDATE_USER_INFOR_SUCCESS':{
            return {
                ...state,
                isUpdating: false,
                isUpdated: true,
                userInfor: action.userInfor
            }
        }
        case 'UPDATE_USER_INFOR_FAIL': {
            return{
                ...state,
                isUpdating: false,
                isUpdated: false,
                error: action.error
            }
        }
        default: return state;
    }
}
