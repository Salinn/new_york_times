//React
import React from 'react';
import { func, object, } from 'prop-types';
//Component
import InputField from '../common/InputField';
import { Row } from 'reactstrap';
//CSS
import '../../assets/stylesheets/articles.css'

const Search = ({ onChange, searchMeta, searchFields }) => {
    const keys = Object.keys(searchMeta).filter(key => key !== 'api-key' && key !== 'page');

    return (
        <div>
            <Row>
                { keys.map( key => {
                    let fieldInfo = { ...searchMeta[key], ...searchFields[key] };
                    return <InputField key={key} onChange={ onChange } fieldInfo={ fieldInfo } />
                })}
            </Row>
        </div>
    );
};

Search.PropTypes = {
    onChange: func.isRequired,
    searchMeta: object.isRequired,
    searchFields: object.isRequired,
};

export default Search