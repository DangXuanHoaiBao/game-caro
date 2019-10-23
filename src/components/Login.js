import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Login =() => {

    return(
        <div className='container'>
            <div className='row justify-content-md-center'>
                <h2>Login</h2>
            </div>
            <div className='row'><br/><br/></div>
            <div className='row justify-content-md-center'>
                <div className='col-md-5' >
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Login;