import { connect } from 'react-redux';
import MachineGame from '../components/game/machineGame';
import gameActions from '../actions/game'

const mapStateToProps = state => ({
    history: state.gameReducer.history, 
    winnerHistory: state.gameReducer.winnerHistory,
    xIsNext: state.gameReducer.xIsNext,
    stepNumber: state.gameReducer.stepNumber
})

// const mapDispatchToProps = dispatch =>({
//     handleClick: i => {
//        dispatch(handleClick(i))
//     },
//     randomClick: () =>{
//        dispatch(randomClick())
//     },
//     jumpTo: step => {
//         dispatch(jumpTo(step))
//     },
//     previousClick: () =>{
//         dispatch(previousClick())
//     },
//     nextClick: () =>{
//         dispatch(nextClick())
//     }
// });

const actionCreator = {
    clickAction: gameActions.clickAction,
    jumpTo: gameActions.jumpTo,
    previousClick: gameActions.previousClick,
    nextClick: gameActions.nextClick
}

export default connect(
    mapStateToProps,
    actionCreator
)(MachineGame)

