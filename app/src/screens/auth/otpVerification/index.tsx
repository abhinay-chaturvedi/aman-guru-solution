import { connect } from 'react-redux';
import { addUserCredentials, addUserDetails } from '../../../redux/modules/account/actions';
import InputOTPScreen from './InputOTPScreen';

const mapStateToProps = (state:any) => ({
    account: state.account,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
      addUserDetails: (user: any) => dispatch(addUserDetails(user)),
      addUserCredentials: (credentials: any) => dispatch(addUserCredentials(credentials)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(InputOTPScreen);
