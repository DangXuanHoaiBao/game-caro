import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Game from '../containers/index';

const App = ({store}) => {
    return(
        <div className='container'>
            <div className='row justify-content-md-center mt-5'>
                <div className='col-md-12'>
                    <Provider store={store}>
                        <Router>
                            <div>
                                <ul>
                                    <li><Link to='/register'> Register </Link></li>
                                    <li><Link to='/login'> Login </Link></li>
                                    <li><Link to='/play-game'> Play Game</Link></li>
                                    <li><Link to='/'> Home </Link></li>
                                </ul>
                                <Switch>
                                    <Route path='/register' component={Register} />
                                    <Route path='/login' component={Login} />
                                    <Route path='/play-game' component={Game} />
                                    <Route exact path='/' component={Home} />
                                </Switch>
                            </div>
                        </Router>
                    </Provider>
                </div>
            </div>
        </div>
    );
}

export default App;