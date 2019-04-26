//Redux
import {connect} from 'react-redux';
import {
    removeToast
} from '../actions/ToastsActions'
//Components
import ToastComponent from '../components/toasts';

export const mapStateToProps = (state) => {
    return {
        toasts: state.toasts
    };
}

export const mapDispatchToProps = {
    removeToast
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastComponent)