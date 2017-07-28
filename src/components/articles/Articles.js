//React
import React from 'react';
import { shape, array, object, bool, string, func } from 'prop-types';
//Component
import { Row, } from 'reactstrap';
import Article from './Article';
import Search from './Search';
import FullArticle from './FullArticle'
import PaginationButtons from './PaginationButtons';
import '../../assets/stylesheets/articles.css'

const Articles = ({ articles, nextSetOfArticles, lastSetOfArticles, toggleFullArticle, onUserInput }) => {
    return (
        <div>
            <Row>
                { articles.stories.map( (article, index) => {
                    return <Article key={ index } article={ article } toggle={ toggleFullArticle } />
                })}
            </Row>

            <PaginationButtons nextSetOfArticles={ nextSetOfArticles }
                               lastSetOfArticles={ lastSetOfArticles }
                               pageNumber={ articles.searchFields.page.value }/>
            <FullArticle web_url={ articles.fullArticle.web_url }
                         isOpen={ articles.fullArticle.isOpen }
                         toggle={ toggleFullArticle } />
        </div>
    );
};

Articles.PropTypes = {
    article: shape({
        stories: array.isRequired,
        searchMeta: object.isRequired,
        fullArticle: shape({
            isOpen: bool.isRequired,
            web_url: string.isRequired,
        }),
        searchFields: object.isRequired
    }),
    nextSetOfArticles: func.isRequired,
    lastSetOfArticles: func.isRequired,toggleFullArticle: func.isRequired,
    onUserInput: func.isRequired,
};

export default Articles