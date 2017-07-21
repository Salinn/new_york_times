//React
import React, {Component, PropTypes} from 'react';
import {} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ArticleActions from '../actions/ArticleActions';
//Components
import Articles from '../components/article/Articles';

class ArticleScreen extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { article } = this.props;
        return (
            <Articles />
        );
    }
}

ArticleScreen.PropTypes = {};

function mapStateToProps(state) {
    return {
        article: state.article,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ArticleActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)