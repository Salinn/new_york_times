//React
import React, { Component } from 'react';
import {} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ArticleActions from '../actions/ArticleActions';
//Components
import App from '../components/layouts/App';

export class ArticleScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.nextSetOfArticles = this.nextSetOfArticles.bind(this);
        this.lastSetOfArticles = this.lastSetOfArticles.bind(this);
        this.toggleFullArticle = this.toggleFullArticle.bind(this);
        this.onUserInput = this.onUserInput.bind(this);
        this.changeArticles = this.changeArticles.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchArticles(
            {
                searchFields: this.props.articles.searchFields,
                currentPage: this.props.articles.currentPage,
            }
        );
    }

    nextSetOfArticles() {
        this.props.actions.nextSetOfArticles({ page: this.props.articles.pagination.currentPage });
    }

    lastSetOfArticles() {
        this.props.actions.lastSetOfArticles({ page: this.props.articles.pagination.currentPage });
    }

    toggleFullArticle(web_url) {
        this.props.actions.toggleFullArticle({ web_url });
    }

    onUserInput(event) {
        const eventInfo = {
            name: event.target.name,
            value: event.target.value,
            pattern: event.target.pattern,
        };
        this.props.actions.inputChanged(eventInfo);
    };

    changeArticles({ pageName }) {
        this.props.actions.changeArticles({ searchFields: this.props.articles.searchFields, pageName });
    }

    render() {
        const { articles } = this.props;

        return (
            <App articles={ articles }
                 nextSetOfArticles={ this.nextSetOfArticles }
                 lastSetOfArticles={ this.lastSetOfArticles }
                 toggleFullArticle={ this.toggleFullArticle }
                 onUserInput={ this.onUserInput }
                 changeArticles={ this.changeArticles } />
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