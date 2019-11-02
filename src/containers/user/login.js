import {connect} from 'react-redux';
import userActions from '../../actions/user';
import Login from '../../components/user/login';

const mapStateToProps = state => ({
    isLogining: state.userLoginReducer.isLogining,
    isLogined: state.userLoginReducer.isLogined,
    userInfor: state.userLoginReducer.userInfor,
    error: state.userLoginReducer.error
});

const actionCreator = {
    login: userActions.login
}

export default connect(
    mapStateToProps,
    actionCreator
)( Login);