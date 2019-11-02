import {connect} from 'react-redux';
import userActions from '../../actions/user';
import Register from '../../components/user/register';

const mapStateToProps = state => ({
    isRegistering: state.userRegisterReducer.isRegistering,
    isRegistered: state.userRegisterReducer.isRegistered,
    error: state.userRegisterReducer.error
});

const actionCreator = {
    register: userActions.register
};

export default connect(
    mapStateToProps,
    actionCreator
)(Register);