//Redux
import { connect } from 'react-redux';
//Actions
import { changeSection, searchInput } from '../actions/PageActions'
//Components
import Header from '../components/layouts/Header';

export const mapStateToProps = (state) => {
    return {
        currentPage: state.page.currentPage,
        pages: state.sections
    };
}

export const mapDispatchToProps = {
    changeSection,
    searchInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)