import React from "react";
import Square from "./Square.js";
import "./Game.css";

class Board extends React.Component{
    
    renderSquareNoStyle(i){
        return(<Square value={this.props.squares[i]} onClick = {()=>this.props.onClick(i)} ></Square>);
    }
    renderSquareStyle(i){
        return(<Square value={this.props.squares[i]} style={"style"} onClick = {()=>this.props.onClick(i)}></Square>);
    }

    render(){
        let board = [];
        if(this.props.arrayWinner){
            for(let i = 0; i < 20; i++){
                let row = [];
                for(let j = 0; j < 20; j++){
                    let k = i * 20 + j;
                    let check = false;
                    for(let h = 0; h < 5; h++){
                        if(k === this.props.arrayWinner[h]){
                            row.push(this.renderSquareStyle(k));
                            check = true;
                            break;
                        }
                    }
                    if(!check){  
                        row.push(this.renderSquareNoStyle(k));
                    }
                }
                board.push(row);
            }
        }
        else{
            for(let i = 0; i < 20; i++){
                let row = [];
                for(let j = 0; j < 20; j++){
                    let k = i * 20 + j;
                    row.push(this.renderSquareNoStyle(k));
                }
                board.push(row);
            }
        }
        let renderBoard = board.map((value)=><div className="row">{value}</div>)
        return(
           <div> {renderBoard} </div>
        );
    }
} 

export default Board;