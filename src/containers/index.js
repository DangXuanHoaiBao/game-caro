import { connect } from 'react-redux';
import Game from '../components/Game';
import {handleClick, jumpTo, previousClick, nextClick} from '../actions'

const mapStateToProps = state => ({
    history: state.history, 
    winnerHistory: state.winnerHistory,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber
})

const mapDispatchProps = dispatch =>({
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
    mapDispatchProps
)(Game)

