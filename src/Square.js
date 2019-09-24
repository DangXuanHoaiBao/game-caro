import React from "react";
import "./Game.css";

function Square(props){
    return(
        <button className= {props.style} id="square" onClick = {props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;