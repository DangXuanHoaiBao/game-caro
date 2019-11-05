import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import {Router} from 'react-router';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import Register from '../containers/user/register';
import Login from '../containers/user/login';
import Home from './home';
import HomeGame from './game/homeGame';
import history from '../helpers/history';
import userActions from '../actions/user';
import InforUser from './user/inforUser';

// const io = require('socket.io-client');

class App extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     socket: null
        // }
        this.handleClickLink = this.handleClickLink.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);
    }

    // componentDidMount(){
    //     const socket = io('http://localhost:3001/');
    //     this.setState({ socket });
    // }

    // eslint-disable-next-line class-methods-use-this
    handleClickLink(e){
        e.preventDefault();
        const {username} = this.props;
        if(username){
            history.push('/play-game');
        }
        else{
            history.push('/login');
        }
    }

    handleClickButton(e){
        e.preventDefault();
        const {logout} = this.props;
        logout();
        history.push('/login');
    }

    render(){
        const {username} = this.props;

        // if(username){
        //     socket.emit('add-player')
        // }

        return(
            <Router history={history}>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand><Link to='/'> Trang Chủ </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link to='/play-game' onClick={this.handleClickLink}>Chơi Game</Nav.Link>
                        </Nav>
                        { !username &&
                            <Nav>
                                <Link to='/register'><Button variant="outline-info">Đăng Kí</Button></Link>
                                &nbsp;
                                <Link to='/login'> <Button variant="outline-info">Đăng Nhập</Button></Link>
                            </Nav>
                        }

                        { username &&
                            <Nav>
                                <Button onClick={this.handleClickButton} variant="outline-info">Đăng Xuất</Button>
                                &nbsp;
                                <Link to='/infor-user'> <Button variant="outline-info">{username}</Button></Link>
                            </Nav>
                        }

                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    <Switch>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/play-game' component={HomeGame} />
                        <Route exact path='/infor-user' component={InforUser}/>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    username: state.userLoginReducer.username
})

const actionCreator = {
    logout: userActions.logout
}

export default connect(mapStateToProps, actionCreator)(App);




