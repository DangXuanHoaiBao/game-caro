import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import userActions from '../../actions/user';

class InforUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newUsername: '',
            newFullName: '',
            errors: {
                newUsername: '',
                newFullName: ''
            },
            isUserInforGetted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    componentWillMount() {
        const {getInforUser} = this.props;
        getInforUser();
        this.setState({
            isUserInforGetted: true
        })
    }

    handleChange(e){
        const {name, value} = e.target;
        const {errors} = this.state;

        if(name === 'newUsername'){
            errors.newUsername = (value.length < 1 || value[0] === ' ') ? '(username bắt buộc)' : '';
        }
        if(name === 'newFullName'){
            errors.newFullName = (value.length < 1 || value[0] === ' ') ? '(fullName bắt buộc)' : '';
        }
        this.setState({
            errors,
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const {updateUserInfor, userInforGet} = this.props;
        const {newUsername, newFullName, errors} = this.state;
        if(errors.newUsername === '' && errors.newFullName === '' && 
           (newUsername !== userInforGet.username || newFullName !== userInforGet.fullName) &&
           newUsername.length !== 0 && newFullName.length !== 0){
            const newUser = { newUsername, newFullName }
            updateUserInfor(userInforGet.username, newUser);
            this.componentWillMount();
        }
    }

    render(){
        const {newUsername, newFullName, isUserInforGetted, errors} = this.state;
        const {isUpdating, isUpdated, errorUpdate} = this.props;
        if(isUserInforGetted){
            const {userInforGet} = this.props;
            if(userInforGet){
                this.setState({
                    newUsername: userInforGet.username,
                    newFullName: userInforGet.fullName,
                    isUserInforGetted: false
                })
            }
        }
        
        return(
            <div className="container form border border-danger mt-5">
                <div className='row justify-content-md-center'>
                    <h2 className="mt-4">Cập Nhật</h2>
                </div>
                { (!isUpdating && !isUpdated) && <Form.Control className='text-danger' type="text" value={errorUpdate} readOnly /> }
                <br/><br/>
                <div className='row justify-content-md-center'>
                    <div className='col-md-4 mb-5'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicFullName">
                                <Form.Label>Full name <span className="text-danger"> {errors.newFullName} </span> </Form.Label>
                                <Form.Control type="text" value={newFullName} name="newFullName" onChange={this.handleChange}/>
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username <span className="text-danger"> {errors.newUsername} </span></Form.Label>
                                <Form.Control type="text" value={newUsername} name="newUsername" onChange={this.handleChange} />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Button className="w-100" variant="primary" type="submit" disabled={isUpdating}>
                                Cập Nhật
                            </Button>
                            { isUpdating && <div className="loader" /> }
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    isGetting: state.getInforUserReducer.isGetting,
    isGetted: state.getInforUserReducer.isGetted,
    userInforGet: state.getInforUserReducer.userInfor,
    errorGet: state.getInforUserReducer.error,

    isUpdating: state.updateUserInforReducer.isUpdating,
    isUpdated: state.updateUserInforReducer.isUpdated,
    userInforUpdate: state.updateUserInforReducer.userInfor,
    errorUpdate: state.updateUserInforReducer.error
})

const actionCreator = {
    getInforUser: userActions.getInforUser,
    updateUserInfor: userActions.updateUserInfor
}

export default connect(mapStateToProps, actionCreator)(InforUser);
