// import React from 'react';
// import {Button} from 'react-bootstrap';
// import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
// import '../../css/bootstrap.css';
// import MachineGame from '../../containers/game';
// import OnlineGame from '../../components/game/onlineGame';
// import history from '../../helpers/history';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import MachineGame from '../../containers/game';
import OnlineGame from './onlineGame';

const HomeGame = () => {
    return(
        <div>
            <Router>

                <Link to='/machine-game'>Chơi với máy</Link>
                <Link to='/online-game'>Chơi online</Link>

                <Switch>
                    <Route exact path='/machine-game'><MachineGame/></Route>
                    <Route exact path='/machine-online'><OnlineGame/></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default HomeGame
