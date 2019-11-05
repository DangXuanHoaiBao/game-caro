import {connect} from 'react-redux';
import userActions from '../../actions/user';
import Login from '../../components/user/login';

const mapStateToProps = state => ({
    isLogining: state.userLoginReducer.isLogining,
    isLogined: state.userLoginReducer.isLogined,
    username: state.userLoginReducer.username,
    error: state.userLoginReducer.error
});

const actionCreator = {
    loginLocal: userActions.loginLocal,
    loginFacebook: userActions.loginFacebook
}

export default connect(
    mapStateToProps,
    actionCreator
)( Login);