import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import MachineGame from '../../containers/game';
import Room from './room';


const HomeGame = () => {
    
    return(
        <div className="container">
            <div className="row justify-content-md-center mt-2">
                <Router>
                    <Link to='/machine-game'><Button className="mr-2">Chơi với máy</Button></Link>
                    <Link to='/room-player'><Button>Chơi online</Button></Link>
                    <Switch>
                        <Route exact path='/machine-game'><MachineGame/></Route>
                        <Route exact path='/room-player'><Room/></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );

}

export default HomeGame
