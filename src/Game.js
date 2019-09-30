import React from 'react'
import Board from './Board'
import './bootstrap.css'
import './Game.css'

const checkWinOnRow = (squares, index) => {
    const arrayWin = [] // mảng lưu lại chỉ số của ô thắng.
    arrayWin.push(index)
    let count = 1 // biến đếm số lượng con giống nhau.
    let x1 = index - 1 // biến chỉ số lùi 1
    let x2 = index + 1 // biến chỉ số tăng 1
    const divIndex = Math.floor(index / 20)
    let divX1 = Math.floor(x1 / 20)
    let divX2 = Math.floor(x2 / 20)
    while (
        squares[index] === squares[x1] &&
        squares[index] === squares[x2] &&
        x1 >= 0 &&
        x2 < 400 &&
        divIndex === divX1 &&
        divIndex === divX2
    ) {
        count += 2
        arrayWin.push(x1)
        arrayWin.push(x2)
        x1 -= 1
        x2 += 1
        divX1 = Math.floor(x1 / 20)
        divX2 = Math.floor(x2 / 20)
        if (count === 5) {
            if (
                squares[x1] !== null &&
                squares[x1] !== squares[index] &&
                squares[x2] !== null &&
                squares[x2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[x1] === squares[index] && x1 >= 0 && divIndex === divX1) {
        count += 1
        arrayWin.push(x1)
        x1 -= 1
        divX1 = Math.floor(x1 / 20)
        if (count === 5) {
            if (
                squares[x1] !== null &&
                squares[x1] !== squares[index] &&
                squares[x2] !== null &&
                squares[x2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[x2] === squares[index] && x2 < 400 && divIndex === divX2) {
        count += 1
        arrayWin.push(x2)
        x2 += 1
        divX2 = Math.floor(x2 / 20)
        if (count === 5) {
            if (
                squares[x1] !== null &&
                squares[x1] !== squares[index] &&
                squares[x2] !== null &&
                squares[x2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    return null
}

const checkWinOnColumn = (squares, index) => {
    const arrayWin = []
    arrayWin.push(index)
    let count = 1
    let y1 = index - 20
    let y2 = index + 20
    while (
        squares[y1] === squares[index] &&
        squares[y2] === squares[index] &&
        y1 >= 0 &&
        y2 < 400
    ) {
        arrayWin.push(y1)
        arrayWin.push(y2)
        count += 2
        y1 -= 20
        y2 += 20
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[y1] === squares[index] && y1 >= 0) {
        arrayWin.push(y1)
        count += 1
        y1 -= 20
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[y2] === squares[index] && y2 < 400) {
        arrayWin.push(y2)
        count += 1
        y2 += 20
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    return null
}

const checkWinOnDiagonationFirst = (squares, index) => {
    const arrayWin = []
    arrayWin.push(index)
    let count = 1
    let y1 = index - 21
    let y2 = index + 21
    while (
        squares[y1] === squares[index] &&
        squares[y2] === squares[index] &&
        y1 >= 0 &&
        y2 < 400
    ) {
        arrayWin.push(y1)
        arrayWin.push(y2)
        count += 2
        y1 -= 21
        y2 += 21
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[y1] === squares[index] && y1 >= 0) {
        arrayWin.push(y1)
        count += 1
        y1 -= 21
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[y2] === squares[index] && y2 < 400) {
        arrayWin.push(y2)
        count += 1
        y2 += 21
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    return null
}

const checkWinOnDiagonationSecond = (squares, index) => {
    const arrayWin = []
    arrayWin.push(index)
    let count = 1
    let y1 = index - 19
    let y2 = index + 19
    while (
        squares[y1] === squares[index] &&
        squares[y2] === squares[index] &&
        y1 >= 0 &&
        y2 < 400
    ) {
        arrayWin.push(y1)
        arrayWin.push(y2)
        count += 2
        y1 -= 19
        y2 += 19
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[y1] === squares[index] && y1 >= 0) {
        arrayWin.push(y1)
        count += 1
        y1 -= 19
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    while (squares[y2] === squares[index] && y2 < 400) {
        arrayWin.push(y2)
        count += 1
        y2 += 19
        if (count === 5) {
            if (
                squares[y1] !== null &&
                squares[y1] !== squares[index] &&
                squares[y2] !== null &&
                squares[y2] !== squares[index]
            ) {
                return null
            }
            return arrayWin
        }
    }
    return null
}

const calculateWinner = (squares, index) => {
    if (checkWinOnRow(squares, index)) {
        return checkWinOnRow(squares, index)
    }
    if (checkWinOnColumn(squares, index)) {
        return checkWinOnColumn(squares, index)
    }
    if (checkWinOnDiagonationFirst(squares, index)) {
        return checkWinOnDiagonationFirst(squares, index)
    }
    if (checkWinOnDiagonationSecond(squares, index)) {
        return checkWinOnDiagonationSecond(squares, index)
    }
    return null
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
                {
                    squares: Array(400).fill(null)
                }
            ],
            xIsNext: true,
            winnerHistory: [
                {
                    arrayWinner: Array(0).fill(null)
                }
            ],
            stepNumber: 0
        }
    }

    handleClick(i) {
        const { history, stepNumber, winnerHistory, xIsNext } = this.state
        const historyCopy = history.slice(0, stepNumber + 1)
        const current = historyCopy[historyCopy.length - 1]
        const squares = current.squares.slice()
        const winnerHistoryCopy = winnerHistory.slice(0, stepNumber)
        const currentWinner = winnerHistoryCopy[winnerHistoryCopy.length - 1]
        if (squares[i] || currentWinner) {
            return
        }

        squares[i] = xIsNext ? 'x' : 'o'

        if (calculateWinner(squares, i)) {
            this.setState({
                history: historyCopy.concat([{ squares }]),
                winnerHistory: winnerHistoryCopy.concat([
                    { arrayWinner: calculateWinner(squares, i) }
                ]),
                stepNumber: historyCopy.length
            })
        } else {
            this.setState({
                history: historyCopy.concat([{ squares }]),
                winnerHistory: winnerHistoryCopy.concat([null]),
                stepNumber: historyCopy.length,
                xIsNext: !xIsNext
            })
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        })
    }

    previousClick() {
        const { stepNumber } = this.state
        const step = stepNumber - 1
        if (step >= 0 && step <= stepNumber) {
            this.setState({
                stepNumber: step,
                xIsNext: step % 2 === 0
            })
        }
    }

    nextClick() {
        const { stepNumber, history } = this.state
        const step = stepNumber + 1
        const historyCopy = history.slice()
        const { length } = historyCopy
        if (step < length)
            this.setState({
                stepNumber: step,
                xIsNext: step % 2 === 0
            })
    }

    render() {
        const { history, stepNumber, winnerHistory, xIsNext } = this.state
        const current = history[stepNumber]
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : 'Go to game start'
            if (stepNumber === move) {
                return (
                    <li key={move.toString()}>
                        <button
                            type="button"
                            className="background-powderblue width-200"
                            onClick={() => this.jumpTo(move)}
                        >
                            {desc}
                        </button>
                    </li>
                )
            }

            return (
                <li key={move.toString()}>
                    <button
                        type="button"
                        className="width-200"
                        onClick={() => this.jumpTo(move)}
                    >
                        {desc}
                    </button>
                </li>
            )
        })
        const winnerCurrent = winnerHistory[stepNumber - 1]
        let arrayWinner
        let player
        let status
        if (winnerCurrent) {
            arrayWinner = winnerCurrent.arrayWinner.slice()
            player = stepNumber % 2 ? 'x' : 'o'
            status = `Winner: ${player}`
        } else {
            player = xIsNext ? 'x' : 'o'
            status = `Player next: ${player}`
        }
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-8">
                        <h2 className="ml-170">Game Caro VietNam</h2>
                        <Board
                            squares={current.squares}
                            arrayWinner={arrayWinner}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className="col-md-4 mt-5">
                        <h3>{status}</h3>
                        <span>
                            <button
                                type="button"
                                className="mt-3 mb-3 ml-4"
                                onClick={() => this.previousClick()}
                            >
                                Previous
                            </button>
                            <button type="button" onClick={() => this.nextClick()}>
                                Next
                            </button>
                        </span>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game
