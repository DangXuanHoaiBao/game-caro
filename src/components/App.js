import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import {Router} from 'react-router';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import Register from '../containers/user/register';
import Login from '../containers/user/login';
import Home from './home';
import Game from '../containers/game';
import history from '../helpers/history';
import userActions from '../actions/user';
import InforUser from './user/inforUser';

class App extends React.Component {
    constructor(props){
        super(props);
        this.handleClickLink = this.handleClickLink.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    handleClickLink(e){
        e.preventDefault();
        const {userInfor} = this.props;
        if(userInfor){
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
        const {userInfor} = this.props;
        return(
            <Router history={history}>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand><Link to='/'> Home </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link to='/play-game' onClick={this.handleClickLink}>Play Game</Nav.Link>
                        </Nav>
                        { !userInfor &&
                            <Nav>
                                <Link to='/register'><Button variant="outline-info">Sign-up</Button></Link>
                                &nbsp;
                                <Link to='/login'> <Button variant="outline-info">Login</Button></Link>
                            </Nav>
                        }

                        { userInfor &&
                            <Nav>
                                <Button className="w-50" onClick={this.handleClickButton} variant="outline-info">Logout</Button>
                                &nbsp;
                                <Link to='/infor-user'> <Button variant="outline-info">{userInfor.user}</Button></Link>
                            </Nav>
                        }

                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    <Switch>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/play-game' component={Game} />
                        <Route exact path='/infor-user' component={InforUser}/>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    userInfor: state.userLoginReducer.userInfor
})

const actionCreator = {
    logout: userActions.logout
}

export default connect(mapStateToProps, actionCreator)(App);




