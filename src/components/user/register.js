/* eslint-disable no-undef */
import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../../css/loader.css';
import '../../css/user-page.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            fullName : '',
            errors: {
                username: '',
                password: '',
                fullName: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        const {errors} = this.state;
        if(name === 'username'){
            errors.username = (value.length < 1 || value[0] === ' ') ? '(username bắt buộc)' : '';
        }
        if(name === 'password'){
            errors.password = value.length < 8 ? '(password phải dài hơn 8 kí tự)' : '';
        }
        if(name === 'fullName'){
            errors.fullName = value.length < 1 ? '(fullName bắt buộc)' : '';
        }
        this.setState({
            errors,
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const {register} = this.props;
        const {username, password, fullName, errors} = this.state;
        const newUser = {
            username,
            password,
            fullName
        }
        if(errors.username === '' && errors.password === '' && errors.fullName === '' &&
           username.length !== 0 && password.length !== 0 && fullName.length !== 0){
            this.setState({errors: {}, username: '', password: '', fullName: ''});
            register(newUser);
        }
    }

    render(){

        const {username, password, fullName, errors} = this.state;
        const {isRegistering, isRegistered, error} = this.props;
        let notification = '';
        if(isRegistering === false && isRegistered === false){ notification = <Form.Control className='text-danger' type="text" value={error} readOnly />}
        return(
            <div className="container form border border-danger mt-5">
                <div className='row justify-content-md-center'>
                    <h2 className="mt-4">Đăng Kí</h2>
                </div>
                <div className='row'><br/><br/></div>
                <div className='row justify-content-md-center'>
                    <div className='col-md-4 mb-5'>
                        { notification }
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username <span className="text-danger"> {errors.username} </span> </Form.Label>
                                <Form.Control type="text" placeholder="Enter username" name="username" value={username} onChange={this.handleChange} />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password <span className="text-danger"> {errors.password} </span> </Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicFullName">
                                <Form.Label>Full name <span className="text-danger"> {errors.fullName} </span> </Form.Label>
                                <Form.Control type="text" placeholder="Enter full name" name="fullName" value={fullName} onChange={this.handleChange}/>
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Button className="w-100" variant="primary" type="submit" disabled = {isRegistering}>
                                Đăng Kí
                            </Button>
                            { isRegistering && <div className="loader" /> }
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
