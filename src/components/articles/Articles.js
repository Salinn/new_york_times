//React
import React, {PropTypes} from 'react';
import {} from 'prop-types';
//Component
import { Button } from 'reactstrap';

const Articles = ({ stories, nextSetOfArticles, lastSetOfArticles }) => {
    return (
        <div>
            <h1>
                articles
            </h1>

            <Button onClick={ lastSetOfArticles }>Last Pages</Button>
            <Button onClick={ nextSetOfArticles }>Next Pages</Button>
            { stories.map( article => {
                return (<div><h4>{ article.headline.print_headline }</h4><p>{ article.snippet }</p></div>)
            })}
        </div>
    );
};

Articles.PropTypes = {};

export default Articles