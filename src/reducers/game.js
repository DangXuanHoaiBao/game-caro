
const defaultState = {
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

const gameReducer = (state = defaultState, action) => {
    const index = action.i
    switch(action.type){
        case 'HANDLE_CLICK': {
            const historyCopy = state.history.slice(0, state.stepNumber + 1)
            const current = historyCopy[historyCopy.length - 1]
            const squares = current.squares.slice()
            const winnerHistoryCopy = state.winnerHistory.slice(0, state.stepNumber)
            const currentWinner = winnerHistoryCopy[winnerHistoryCopy.length - 1]

            if (squares[index] || currentWinner) {
                return state
            }

            squares[index] = state.xIsNext ? 'x' : 'o'

            if (calculateWinner(squares, index)) {
                return {
                    history: historyCopy.concat([{ squares }]),
                    winnerHistory: winnerHistoryCopy.concat([
                        { arrayWinner: calculateWinner(squares, index) }
                    ]),
                    stepNumber: historyCopy.length
                }
            }
            return {
                history: historyCopy.concat([{ squares }]),
                winnerHistory: winnerHistoryCopy.concat([null]),
                stepNumber: historyCopy.length,
                xIsNext: !state.xIsNext
            }
        }

        case 'JUMPTO': {
            return {
                ...state,
                stepNumber: action.step,
                xIsNext: action.step % 2 === 0
            }
        }
        case 'PREVIOUS_CLICK':  {
            const step = state.stepNumber - 1;
            if(step >= 0 && step <= state.stepNumber){
                return {
                    ...state,
                    stepNumber: step,
                    xIsNext: step % 2 === 0
                }
            }
            return state
        }
        case 'NEXT_CLICK':{
            const step = state.stepNumber + 1;
            const historyCopy = state.history.slice();
            const {length} = historyCopy;
            if(step < length){
                return {
                    ...state,
                    stepNumber: step,
                    xIsNext: step % 2 === 0
                }
            }
            return state;
        }  
        default: 
            return state;
    }
}
export default gameReducer;