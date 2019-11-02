import history from '../helpers/history';

function register(user){
    const {username, password, fullName} = user;
    function registerRequest(){
        return {
            type: 'REGISTER_REQUEST'
        }
    }
    
    function registerSuccess(data){
        return{
            type: 'REGISTER_SUCCESS',
            data
        }
    }
    
    function registerFail(error){
        return {
            type: 'REGISTER_FAIL',
            error
        }
    }
    return dispatch => {
        dispatch(registerRequest());
        // eslint-disable-next-line no-undef
        fetch('https://api-passport-jwt.herokuapp.com/user/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'username': username,
              'password': password,
              'fullName': fullName
            })
        })
        .then(res => {
            res.text().then(text=> {
                if(res.status >= 200 && res.status < 300){
                    const data = JSON.parse(text)
                    dispatch(registerSuccess(data));
                }
                else{
                    const error = (JSON.parse(text)).message;
                    dispatch(registerFail(error));
                }
            });
        })
        .catch(error => console.log(error));
    }
};

function login(user){
    const {username, password} = user;
    function loginRequest(){
        return {
            type: 'LOGIN_REQUEST'
        }
    }
    function loginSuccess(userInfor){
        return {
            type: 'LOGIN_SUCCESS',
            userInfor
        }
    }
    function loginFail(error){
        return {
            type: 'LOGIN_FAIL',
            error
        }
    }
    return dispatch => {
         dispatch(loginRequest());
        // eslint-disable-next-line no-undef
        fetch('https://api-passport-jwt.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
            })
        })
        .then(res => {
            res.text().then(text => {
                if(res.status >= 200 && res.status < 300){
                    const userInfor = JSON.parse(text);
                    localStorage.setItem('res', userInfor.token);
                    dispatch(loginSuccess(userInfor));
                    history.push('/play-game');
                }
                else{
                    const error = (JSON.parse(text)).message;
                    dispatch(loginFail(error));
                }
            })
        })
        .catch(error => console.log(error));
    }   
}

function logout(){
    localStorage.removeItem('res');
    return {
        type: 'LOGOUT'
    }
}

function authenticationHeader(){
    const token = localStorage.getItem('res');
    if (token) {
        return { 'Authorization': `Bearer  ${token}` };
    }
    return null;
}

function getInforUser(){
    function getInforUserRequest(){
        return {
            type: 'GET_INFOR_USER_REQUEST'
        }
    }
    function getInforUserSuccess(userInfor){
        return {
            type: 'GET_INFOR_USER_SUCCESS',
            userInfor
        }
    }
    function getInforUserFail(error){
        return {
            type: 'GET_INFOR_USER_FAIL',
            error
        }
    }
    return dispatch => {
        dispatch(getInforUserRequest());
        // eslint-disable-next-line no-undef
        fetch('https://api-passport-jwt.herokuapp.com/user/me', {
            method: 'GET',
            headers: authenticationHeader()
        })
        .then(res => {
            res.text().then(text => {
                if(res.status >= 200 && res.status < 300){
                    const userInfor = JSON.parse(text);
                    dispatch(getInforUserSuccess(userInfor));
                }
                else{
                    const error = (JSON.parse(text)).message;
                    dispatch(getInforUserFail(error));
                }
            })
        })
        .catch(error => console.log(error));
    } 
}

function updateUserInfor(username, newUser){
    const {newUsername, newFullName} = newUser;
    function updateUserInforRequest(){
        return {
            type: 'UPDATE_USER_INFOR_REQUEST'
        }
    }
    
    function updateUserInforSuccess(userInfor){
        return{
            type: 'UPDATE_USER_INFOR_SUCCESS',
            userInfor
        }
    }
    
    function updateUserInforFail(error){
        return {
            type: 'UPDATE_USER_INFOR_FAIL',
            error
        }
    }
    return dispatch => {
        dispatch(updateUserInforRequest());
        // eslint-disable-next-line no-undef
        fetch('https://api-passport-jwt.herokuapp.com/user/update', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
              'newUsername': newUsername,
              'newFullName': newFullName
            })
        })
        .then(res => {
            res.text().then(text=> {
                if(res.status >= 200 && res.status < 300){
                    const userInfor = JSON.parse(text)
                    dispatch(updateUserInforSuccess(userInfor));
                    dispatch(logout());
                    history.push('/login');
                }
                else{
                    const error = (JSON.parse(text)).message;
                    dispatch(updateUserInforFail(error));
                }
            });
        })
        .catch(error => console.log(error));
    }
}

const userActions = {
    register,
    login,
    logout,
    getInforUser,
    updateUserInfor
};
export default userActions;
