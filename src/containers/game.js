import { connect } from 'react-redux';
import Game from '../components/game/index';
import {handleClick, jumpTo, previousClick, nextClick} from '../actions/game'

const mapStateToProps = state => ({
    history: state.gameReducer.history, 
    winnerHistory: state.gameReducer.winnerHistory,
    xIsNext: state.gameReducer.xIsNext,
    stepNumber: state.gameReducer.stepNumber
})

const mapDispatchToProps = dispatch =>({
    handleClick: i => {
        dispatch(handleClick(i))
    },
    jumpTo: step => {
        dispatch(jumpTo(step))
    },
    previousClick: () =>{
        dispatch(previousClick())
    },
    nextClick: () =>{
        dispatch(nextClick())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

