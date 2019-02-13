//Redux
import {connect} from 'react-redux';
import {
    removeToast
} from '../actions/ToastActions'
//Components
import ToastContainer from '../components/toasts/ToastContainer';

export const mapStateToProps = (state) => {
    return {
        toasts: state.toasts,
    };
}

export const mapDispatchToProps = {
    removeToast
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer)