//Redux
import {connect} from 'react-redux';
import {
    lastSetOfArticles,
    nextSetOfArticles,
    toggleFullArticle
} from '../actions/PageActions'
//Components
import Articles from '../components/articles/Articles';

export const mapStateToProps = (state) => {
    return {
        articles: state.stories,
        page: state.page
    };
}

export const mapDispatchToProps = {
    nextSetOfArticles,
    lastSetOfArticles,
    toggleFullArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)