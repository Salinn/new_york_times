//React
import React from 'react';
import { array, func } from 'prop-types';
//Component
import { Row, } from 'reactstrap';
import Article from './Article';
import FullArticle from './FullArticle'
import PaginationButtons from './PaginationButtons';
import '../../assets/stylesheets/articles.css'

const Articles = ({ articles, nextSetOfArticles, lastSetOfArticles, toggleFullArticle }) => {
    return (
        <div>
            <Row>
                { articles.stories.map( (article, index) => {
                    return <Article key={ index } article={ article } toggle={ toggleFullArticle } />
                })}
            </Row>

            <PaginationButtons nextSetOfArticles={ nextSetOfArticles }
                               lastSetOfArticles={ lastSetOfArticles }
                               currentPage={ articles.searchFields.page } />

            <FullArticle web_url={ articles.fullArticle.web_url }
                         isOpen={ articles.fullArticle.isOpen }
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