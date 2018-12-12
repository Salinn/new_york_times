//React
import React, { Component } from 'react';
import { array, func } from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ArticleActions from '../actions/ArticleActions';
import * as types from '../actions/ActionTypes'
//Components
import App from '../components/layouts/App';

export class ArticleScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.nextSetOfArticles = this.nextSetOfArticles.bind(this);
        this.lastSetOfArticles = this.lastSetOfArticles.bind(this);
        this.toggleFullArticle = this.toggleFullArticle.bind(this);
        this.changeArticles = this.changeArticles.bind(this);
        this.searchInput = this.searchInput.bind(this);
    }

    nextSetOfArticles() {
        this.props.actions.nextSetOfArticles();
    }

    lastSetOfArticles() {
        this.props.actions.lastSetOfArticles();
    }

    toggleFullArticle(web_url) {
        this.props.actions.toggleFullArticle({ web_url });
    }

    changeArticles({ pageName }) {
        this.props.actions.changeArticles({ pageName });
        this.props.dispatch({ type: types.FIND_ARTICLES });
    }

    searchInput(event) {
        this.props.actions.searchTermChanged(
            {
                value: event.target.value,
            }
        )
        this.props.actions.changeArticles({ pageName: 'More' })
        this.props.dispatch({ type: types.FIND_ARTICLES });
    }

    render() {
        const { articles } = this.props;

        return (
            <App articles={ articles }
                 nextSetOfArticles={ this.nextSetOfArticles }
                 lastSetOfArticles={ this.lastSetOfArticles }
                 toggleFullArticle={ this.toggleFullArticle }
                 changeArticles={ this.changeArticles }
                 searchInput={ this.searchInput } />
        );
    }
}

ArticleScreen.PropTypes = {
    articles: array.isRequired,
    nextSetOfArticles: func.isRequired,
    lastSetOfArticles: func.isRequired,
    toggleFullArticle: func.isRequired,
    changeArticles: func.isRequired,
    searchInput: func.isRequired,
    fetchDocs: func.isRequired,
};

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        actions: bindActionCreators(ArticleActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)