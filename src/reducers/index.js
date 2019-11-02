import {combineReducers} from 'redux';
import gameReducer from './game';
import {userRegisterReducer, userLoginReducer, getInforUserReducer, updateUserInforReducer} from './user';

export default combineReducers({
    gameReducer,
    userRegisterReducer,
    userLoginReducer,
    getInforUserReducer,
    updateUserInforReducer
});
