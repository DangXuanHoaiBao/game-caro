import history from '../helpers/history';

function register(user){
    const {username, password, fullName} = user;
    function registerRequest(){
        return {
            type: 'REGISTER_REQUEST'
        }
    }
    
    function registerSuccess(){
        return{
            type: 'REGISTER_SUCCESS'
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
                    dispatch(registerSuccess());
                    history.push('/login');
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

function loginRequest(){
    return {
        type: 'LOGIN_REQUEST'
    }
}
function loginSuccess(username){
    return {
        type: 'LOGIN_SUCCESS',
        username
    }
}
function loginFail(error){
    return {
        type: 'LOGIN_FAIL',
        error
    }
}

function loginLocal(user){
    return dispatch => {
         dispatch(loginRequest());
        // eslint-disable-next-line no-undef
        fetch('https://api-passport-jwt.herokuapp.com/user/login-local', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': user.username,
                'password': user.password,
            })
        })
        .then(res => {
            res.text().then(text => {
                if(res.status >= 200 && res.status < 300){
                    const data = JSON.parse(text);
                    const {username} = data;
                    localStorage.setItem('res', JSON.stringify(data));
                    dispatch(loginSuccess(username));
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

function loginFacebook(accessToken){
    return dispatch => {
         dispatch(loginRequest());
        // eslint-disable-next-line no-undef
        fetch('https://api-passport-jwt.herokuapp.com/user/oauth/facebook', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'access_token': accessToken
            })
        })
        .then(res => {
            res.text().then(text => {
                if(res.status >= 200 && res.status < 300){

                    const data = JSON.parse(text);
                    // const {token} = data;
                    const username = data.user.fullName;
                    localStorage.setItem('res', JSON.stringify(text));
                    dispatch(loginSuccess(username));
                    history.push('/play-game');

                }
                else{
                    const error = text.message;
                    dispatch(loginFail(error));
                    history.push('/login');
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
    const data = JSON.parse(localStorage.getItem('res'));
    if (data.token) {
        return { 'Authorization': `Bearer  ${data.token}` };
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
                    console.log(userInfor);
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
    loginLocal,
    loginFacebook,
    logout,
    getInforUser,
    updateUserInfor
};
export default userActions;
