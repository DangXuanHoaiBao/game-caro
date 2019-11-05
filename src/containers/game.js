import { connect } from 'react-redux';
import MachineGame from '../components/game/machineGame';
import gameActions from '../actions/game'

const mapStateToProps = state => ({
    history: state.gameReducer.history, 
    winnerHistory: state.gameReducer.winnerHistory,
    xIsNext: state.gameReducer.xIsNext,
    stepNumber: state.gameReducer.stepNumber
})

const actionCreator = {
    clickAction: gameActions.clickAction,
    jumpTo: gameActions.jumpTo,
    previousClick: gameActions.previousClick,
    nextClick: gameActions.nextClick
}

export default connect(
    mapStateToProps,
    actionCreator
)(MachineGame);

