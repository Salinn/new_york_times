//React
import React from 'react';
import {} from 'prop-types';
//Component
import TextInput from '../common/TextInput';
import { Row } from 'reactstrap';
//CSS
import '../../assets/stylesheets/articles.css'

const Search = ({ onChange, searchMeta, searchFields }) => {
    const keys = Object.keys(searchMeta).filter(key => key !== 'api-key' && key !== 'page');

    return (
        <div>
            <h2 className="articleTag">Search</h2>
            <Row>
                { keys.map( key => {
                    let fieldInfo = { ...searchMeta[key], ...searchFields[key] };
                    return <TextInput key={key} onChange={ onChange } fieldInfo={ fieldInfo } />
                })}
            </Row>
        </div>
    );
};

Search.PropTypes = {};

export default Search