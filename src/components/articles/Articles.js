//React
import React from 'react';
import { array, func } from 'prop-types';
//Component
import { Row, } from 'reactstrap';
import Article from './Article';
import FullArticle from './FullArticle'
import PaginationButtons from './PaginationButtons';
import '../../assets/stylesheets/articles.css'

const Articles = (props) => {
    const {
        articles,
        page,
        nextSetOfArticles,
        lastSetOfArticles,
        toggleFullArticle
    } = props

    return (
        <div>
            <Row>
                { articles.map( (article, index) => {
                    return (
                        <Article
                            key={ index }
                            article={ article }
                            toggle={ toggleFullArticle }
                        />
                    )
                })}
            </Row>

            <PaginationButtons 
                nextSetOfArticles={ nextSetOfArticles }
                lastSetOfArticles={ lastSetOfArticles }
                pagination={page.pagination } />

            <FullArticle 
                web_url={ page.fullArticle.web_url }
                isOpen={ page.fullArticle.isOpen }
                toggle={ toggleFullArticle } />
        </div>
    );
};

Articles.PropTypes = {
    articles: array.isRequired,
    nextSetOfArticles: func.isRequired,
    lastSetOfArticles: func.isRequired,toggleFullArticle: func.isRequired,
    onUserInput: func.isRequired,
};

export default Articles