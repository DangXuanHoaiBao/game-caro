import React from 'react';
import {Form, Button} from 'react-bootstrap';
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
        const {login} = this.props;
        const user = {
            username,
            password
        }
        if(errors.username === '' && errors.password === '' && username.length !== 0 && password.length !== 0){
            this.setState({username: '', password: '', errors: {}});
            login(user);
        }
    }

    render(){
        const {username, password, errors} = this.state;
        const {isLogining, isLogined, userInfor, error} = this.props;
        let loading = '';
        if(isLogining === true){
            loading = <div className="loader" />
        }
        let notification = '';
        if(isLogining === false && isLogined === true){
            notification = <Form.Control className='text-danger' type="text" value={userInfor.user} readOnly />
        }
        if(isLogining === false && isLogined === false){
            notification = <Form.Control className='text-danger' type="text" value={error} readOnly />
        }
        return(
            <div className="container form border border-danger mt-5">
                <div className='row justify-content-md-center'>
                    <h2 className='mt-4'>Đăng Nhập</h2>
                </div>
                <br/><br/>
                <div className='row justify-content-md-center'>
                    <div className='col-md-5 mb-5'>
                        {notification}
                        <Form onSubmit = {this.handleSubmit}>
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
                            {loading}
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;