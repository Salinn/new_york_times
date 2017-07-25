//React
import React, { Component } from 'react';
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
        this.toggleFullArticle = this.toggleFullArticle.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchArticles({ search: this.props.articles.search });
    }

    nextSetOfArticles() {
        this.props.actions.nextSetOfArticles({ search: this.props.articles.search });
    }

    lastSetOfArticles() {
        this.props.actions.lastSetOfArticles({ search: this.props.articles.search });
    }

    toggleFullArticle(web_url) {
        this.props.actions.toggleFullArticle({ web_url });
    }

    render() {
        const { articles } = this.props;

        return (
            <Articles articles={ articles }
                      nextSetOfArticles={ this.nextSetOfArticles }
                      lastSetOfArticles={ this.lastSetOfArticles }
                      toggleFullArticle={ this.toggleFullArticle }/>
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