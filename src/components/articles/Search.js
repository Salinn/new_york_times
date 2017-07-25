//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Input } from 'reactstrap';

const Search = ({ search }) => {
    const keys = Object.keys(search);

    return (
        <div>
            <h2>Search</h2>
            { keys.map( key => { return key })}
        </div>
    );
};

Search.PropTypes = {};

export default Search