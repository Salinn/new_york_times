//React
import React, {Component, PropTypes} from 'react';
import {} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ArticleActions from '../actions/ArticleActions';
//Components
import Articles from '../components/articles/Articles';

class ArticleScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.nextSetOfArticles = this.nextSetOfArticles.bind(this);
        this.lastSetOfArticles = this.lastSetOfArticles.bind(this);
    }

    componentDidMount() {
        console.log(this.props.articles);
        this.props.actions.fetchArticles({ page: this.props.articles.search.page });
    }

    nextSetOfArticles() {
        this.props.actions.nextSetOfArticles({ page: this.props.articles.search.page });
    }

    lastSetOfArticles() {
        this.props.actions.lastSetOfArticles({ page: this.props.articles.search.page });
    }

    render() {
        const { articles } = this.props;

        return (
            <Articles stories={ articles.stories }
                      nextSetOfArticles={ this.nextSetOfArticles }
                      lastSetOfArticles={ this.lastSetOfArticles } />
        );
    }
}

ArticleScreen.PropTypes = {};

function mapStateToProps(state) {
    return {
        articles: state.articles,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ArticleActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)