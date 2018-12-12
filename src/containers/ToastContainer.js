import ToastMessages from '../components/toasts'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        toasts: state.toasts,
    };
}

export default connect(mapStateToProps)(ToastMessages)