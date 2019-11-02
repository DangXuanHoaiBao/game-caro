import React from 'react'
import '../../css/game.css'

const Square = ({ styleSquare, onClick, value }) => {
    return (
        <button type="button" className={styleSquare} id="square" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
