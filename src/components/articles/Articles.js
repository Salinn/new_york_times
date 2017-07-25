//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Button, Row } from 'reactstrap';
import Article from './Article';
import Search from './Search';
import FullArticle from './FullArticle'

const Articles = ({ articles, nextSetOfArticles, lastSetOfArticles, toggleFullArticle }) => {
    return (
        <div>
            <h1>Articles</h1>
            <Search search={ articles.search } />
            <Button onClick={ lastSetOfArticles }>Last Pages</Button>
            <Button onClick={ nextSetOfArticles }>Next Pages</Button>
            <Row>
                { articles.stories.map( (article, index) => {
                    return <Article key={ index } article={ article } toggle={ toggleFullArticle } />
                })}
            </Row>
            <FullArticle web_url={ articles.fullArticle.web_url } isOpen={ articles.fullArticle.isOpen } toggle={ toggleFullArticle } />
        </div>
    );
};

Articles.PropTypes = {};

export default Articles