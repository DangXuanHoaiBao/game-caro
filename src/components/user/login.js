import React from 'react';
import {Form, Button} from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import '../../css/loader.css';
import '../../css/user-page.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {
                username: '',
                password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        const {errors} = this.state;
        if(name === 'username'){
            errors.username = (value.length ===0) ? '(username bắt buộc)' : '';
        }
        if(name === 'password'){
            errors.password = (value.length === 0) ? '(password bắt buộc)' : '';
        }
        this.setState({
            [name]: value,
            errors
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const {username, password, errors} = this.state;
        const {loginLocal} = this.props;
        const user = {
            username,
            password
        }
        if(errors.username === '' && errors.password === '' && username.length !== 0 && password.length !== 0){
            this.setState({username: '', password: '', errors: {}});
            loginLocal(user);
        }
    }
    
    async responseFacebook(res) {
        const {loginFacebook} = this.props;
        loginFacebook(res.accessToken);
    }

    render(){

        const {username, password, errors} = this.state;
        const {isLogining, isLogined, error} = this.props;
        let notification = '';
        if(isLogining === false && isLogined === false){ notification = <Form.Control className='text-danger' type="text" value={error} readOnly /> }
        return(
            <div className="container form border border-danger mt-5">
                <div className='row justify-content-md-center'>
                    <h2 className='mt-4'>Đăng Nhập</h2>
                </div>
                <br/><br/>
                <div className='row justify-content-md-center'>
                    <div className='col-md-4 mb-5'>
                        { notification }
                        <Form onSubmit = {this.handleSubmit} className="mb-2">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username <span className="text-danger"> {errors.username} </span></Form.Label>
                                <Form.Control type="text" placeholder="Enter username" name="username" value={username} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password <span className="text-danger"> {errors.password} </span></Form.Label>
                                <Form.Control type="password" placeholder="Password"  name="password" value={password} onChange={this.handleChange}/>
                            </Form.Group>
                            <Button className="w-100" variant="primary" type="submit">
                                Đăng Nhập
                            </Button>
                            { isLogining && <div className="loader" /> }
                        </Form>
                        <FacebookLogin
                            appId="725705244576219"
                            autoLoad
                            icon="fa-facebook"
                            cssClass="btn btn-outline-primary"
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;

// client secret: bjVGSxu2rlMVe2-7dBDRCOyN