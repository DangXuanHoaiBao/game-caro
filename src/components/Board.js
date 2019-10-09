import React from 'react'
import Square from './Square'
import '../Game.css'

const Board = ({ squares, onClick, arrayWinner }) => {
    const renderSquareNoStyle = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />
    }

    const renderSquareStyle = (i) => {
        const style = 'style'
        return (
            <Square
                value={squares[i]}
                styleSquare={style}
                onClick={() => onClick(i)}
            />
        )
    }

    const board = []
    if (arrayWinner) {
        for (let i = 0; i < 20; i += 1) {
            const row = []
            for (let j = 0; j < 20; j += 1) {
                const k = i * 20 + j
                let check = false
                for (let h = 0; h < 5; h += 1) {
                    if (k === arrayWinner[h]) {
                        row.push(renderSquareStyle(k))
                        check = true
                        break
                    }
                }
                if (!check) {
                    row.push(renderSquareNoStyle(k))
                }
            }
            board.push(row)
        }
    } else {
        for (let i = 0; i < 20; i += 1) {
            const row = []
            for (let j = 0; j < 20; j += 1) {
                const k = i * 20 + j
                row.push(renderSquareNoStyle(k))
            }
            board.push(row)
        }
    }
    const renderBoard = board.map((value) => <div className="row">{value}</div>)
    return <div> {renderBoard} </div>
}

export default Board
