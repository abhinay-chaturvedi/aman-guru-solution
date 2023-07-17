import { connect } from 'react-redux';
import Authentication from './Authentication';
import { addUserCredentials, addUserDetails } from '../../../redux/modules/account/actions';

const mapStateToProps = (state:any) => ({
    account: state.account,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
      addUserDetails: (user: any) => dispatch(addUserDetails(user)),
      addUserCredentials: (credentials: any) => dispatch(addUserCredentials(credentials)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
