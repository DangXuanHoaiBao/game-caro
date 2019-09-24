import React from "react";
import Board from "./Board.js";
import "./bootstrap.css";
import "./Game.css";

class Game extends React.Component{

    constructor(props){
        super(props);
        this.state={
            history: [{
               squares: Array(400).fill(null)
            }],
            xIsNext: true,
            winnerHistory: [{
                arrayWinner:  Array().fill(null),
            }],
            stepNumber: 0
        }
    }

    checkWinOnRow(squares, index){
        let arrayWin = [] // mảng lưu lại chỉ số của ô thắng.
        arrayWin.push(index);
        let count = 1; // biến đếm số lượng con giống nhau.
        let x1 = index - 1; // biến chỉ số lùi 1
        let x2 = index + 1; // biến chỉ số tăng 1
        let divIndex = Math.floor(index/20); 
        let divX1 = Math.floor(x1/20);
        let divX2 = Math.floor(x2/20);
        while(squares[index] === squares[x1] && squares[index] === squares[x2] && x1 >= 0 && x2 < 400 && divIndex === divX1 && divIndex === divX2){
            count = count + 2;
            arrayWin.push(x1);
            arrayWin.push(x2);
            x1 = x1 - 1;
            x2 = x2 + 1;
            divX1 = Math.floor(x1/20);
            divX2 = Math.floor(x2/20);
            if(count === 5){
                if (squares[x1] !== null && squares[x1] !== squares[index] && squares[x2] !== null && squares[x2] !== squares[index]){
                    console.log("x1: " + squares[x1] + ", x2: " + squares[x2]);
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[x1] === squares[index] && x1 >= 0 && divIndex === divX1){
            count = count + 1;
            arrayWin.push(x1);
            x1 = x1 - 1;
            divX1 = Math.floor(x1/20);
            if(count === 5){
                if (squares[x1] !== null && squares[x1] !== squares[index] && squares[x2] !== null && squares[x2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[x2] === squares[index] && x2 < 400 && divIndex === divX2){
            count = count + 1;
            arrayWin.push(x2);
            x2 = x2 + 1;
            divX2 = Math.floor(x2/20);
            if(count === 5){
                if (squares[x1] !== null && squares[x1] !== squares[index] && squares[x2] !== null && squares[x2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        return null;
    }

    checkWinOnColumn(squares, index){
        let arrayWin = [];
        arrayWin.push(index);
        let count = 1;
        let y1 = index - 20;
        let y2 = index + 20;
        while(squares[y1] === squares[index] && squares[y2] === squares[index] && y1 >= 0 && y2 < 400){
            arrayWin.push(y1);
            arrayWin.push(y2);
            count = count + 2;
            y1 = y1 - 20;
            y2 = y2 + 20;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[y1] === squares[index] && y1 >= 0){
            arrayWin.push(y1);
            count = count + 1;
            y1 = y1 - 20;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[y2] === squares[index] && y2 < 400){
            arrayWin.push(y2);
            count = count + 1;
            y2 = y2 + 20;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        return null;
    }

    checkWinOnDiagonationFirst(squares, index){
        let arrayWin = [];
        arrayWin.push(index);
        let count = 1;
        let y1 = index - 21;
        let y2 = index + 21;
        while(squares[y1] === squares[index] && squares[y2] === squares[index] && y1 >= 0 && y2 < 400){
            arrayWin.push(y1);
            arrayWin.push(y2);
            count = count + 2;
            y1 = y1 - 21;
            y2 = y2 + 21;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[y1] === squares[index] && y1 >= 0){
            arrayWin.push(y1);
            count = count + 1;
            y1 = y1 - 21;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[y2] === squares[index] && y2 < 400){
            arrayWin.push(y2);
            count = count + 1;
            y2 = y2 + 21;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        return null;
    }

    checkWinOnDiagonationSecond(squares, index){
        let arrayWin = [];
        arrayWin.push(index);
        let count = 1;
        let y1 = index - 19;
        let y2 = index + 19;
        while(squares[y1] === squares[index] && squares[y2] === squares[index] && y1 >= 0 && y2 < 400){
            arrayWin.push(y1);
            arrayWin.push(y2);
            count = count + 2;
            y1 = y1 - 19;
            y2 = y2 + 19;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[y1] === squares[index] && y1 >= 0){
            arrayWin.push(y1);
            count = count + 1;
            y1 = y1 - 19;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        while(squares[y2] === squares[index] && y2 < 400){
            arrayWin.push(y2);
            count = count + 1;
            y2 = y2 + 19;
            if(count === 5){
                if (squares[y1] !== null && squares[y1] !== squares[index] && squares[y2] !== null && squares[y2] !== squares[index]){
                    return null;
                }
                else return arrayWin;
            }
        }
        return null;
    }

    calculateWinner(squares,index){
        if(this.checkWinOnRow(squares, index)){
            return this.checkWinOnRow(squares, index);
        }
        if(this.checkWinOnColumn(squares, index)){
            return this.checkWinOnColumn(squares, index);
        }
        if(this.checkWinOnDiagonationFirst(squares, index)){
            return this.checkWinOnDiagonationFirst(squares, index);
        }
        if(this.checkWinOnDiagonationSecond(squares, index)){
            return this.checkWinOnDiagonationSecond(squares, index);
        }
        return;
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winnerHistory = this.state.winnerHistory.slice(0, this.state.stepNumber);
        const currentWinner = winnerHistory[winnerHistory.length - 1];

        if(squares[i] || currentWinner){
            return;
        }

        squares[i] = this.state.xIsNext ? 'x' : 'o';

        if(this.calculateWinner(squares, i)){
            this.setState({
                history: history.concat([{squares: squares}]),
                winnerHistory: winnerHistory.concat([{arrayWinner: this.calculateWinner(squares, i)}]),
                stepNumber: history.length
            })
        }
        else{
            this.setState({
                history: history.concat([{squares: squares}]),
                winnerHistory: winnerHistory.concat([null]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext
            });
        }

    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0 
        })
    }

    previousClick(){
        let step = this.state.stepNumber - 1;
        if(step >= 0 && step <= this.state.stepNumber){
            this.setState({
                stepNumber: step,
                xIsNext: step % 2 === 0
            })
        }
    }

    nextClick(){
        let step = this.state.stepNumber + 1;
        let history = this.state.history.slice();
        let length = history.length;
        if(step < length)
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        })
    }
    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        let moves = history.map((step, move)=>{
            const desc = move ? "Go to move #" + move : "Go to game start";
            if(this.state.stepNumber === move){
                return(
                    <li key = {move}>    
                        <button className="background-powderblue width-200" onClick={()=>this.jumpTo(move)}>{desc}</button>
                    </li>
                )
            }
            else{
                return(
                    <li key = {move}>
                        <button className="width-200" onClick={()=>this.jumpTo(move)}>{desc}</button>
                    </li>
                )
            }
        })
        const winnerHistory = this.state.winnerHistory;
        const winnerCurrent = winnerHistory[this.state.stepNumber-1];
        let arrayWinner;
        let player;
        let status;
        if(winnerCurrent){
            arrayWinner = winnerCurrent.arrayWinner.slice();
            player = this.state.stepNumber % 2 ? 'x' : 'o';
            status = "Winner: " + player;
        }
        else{
            player = this.state.xIsNext ? 'x' : 'o';
            status = "Player next: " + player;
        }
        return(
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-8">
                        <h2 className="ml-170">Game Caro VietNam</h2>
                        <Board squares = {current.squares} arrayWinner = {arrayWinner}  onClick = {i=>this.handleClick(i)}></Board>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h3>{status}</h3>
                        <span>
                            <button className="mt-3 mb-3 ml-4" onClick={()=>this.previousClick()}>Previous</button>
                            <button onClick={()=>this.nextClick()}>Next</button>
                        </span>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Game;
