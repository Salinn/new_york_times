//React
import React from 'react';
import {} from 'prop-types';
//Component
import TextInput from '../common/TextInput';
import { Row } from 'reactstrap';

const Search = ({ onChange, searchMeta, searchFields }) => {
    const keys = Object.keys(searchMeta).filter(key => key !== 'api-key');

    return (
        <div>
            <h2>Search</h2>
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