//React
import React from 'react';
import {} from 'prop-types';
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
            <Search searchMeta={ articles.searchMeta }
                    searchFields={ articles.searchFields }
                    onChange={ onUserInput } />

            <h2 className="articleTag">Articles</h2>

            <Row>
                { articles.stories.map( (article, index) => {
                    return <Article key={ index } article={ article } toggle={ toggleFullArticle } />
                })}
            </Row>

            <FullArticle web_url={ articles.fullArticle.web_url }
                         isOpen={ articles.fullArticle.isOpen }
                         toggle={ toggleFullArticle } />

            <hr />
            <PaginationButtons nextSetOfArticles={ nextSetOfArticles }
                               lastSetOfArticles={ lastSetOfArticles } />
        </div>
    );
};

Articles.PropTypes = {};

export default Articles