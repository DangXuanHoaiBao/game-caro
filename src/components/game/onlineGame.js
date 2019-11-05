import React from 'react'
import Board from './board'
import '../../css/bootstrap.css'
import '../../css/game.css'

// const socketIO = require('socket.io-client');

const OnlineGame = () => {
   
    // componentDidMount(){
    //     const socket = socketIO('http://localhost:3001/');
    //     socket.emit('greeting', {content: 'hello'});
    // }
    
    return (
        <div className="container form border border-info mt-4">
            <div className="row mt-2 ml-2 mb-2">
                <div className="col-md-8 justify-content-md-center">
                    <h2>Game Caro VietNam</h2>
                    <Board
                        squares={1}
                        arrayWinner={[]}
                        onClick={()=>(1)}
                    />
                </div>
                <div className="col-md-4 mt-5">
                    Trang thai
                </div>
            </div>
        </div>
    )
}

export default OnlineGame;
