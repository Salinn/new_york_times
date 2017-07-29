//React
import React from 'react';
import {} from 'prop-types';
//Component
import SearchIcon from 'react-icons/lib/fa/search';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


const SearchField = ({ fieldInfo, onChange }) => {
    return (
        <InputGroup>
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
            <Input type='text' onChange={ onChange } />
        </InputGroup>
    );
};

SearchField.PropTypes = {};

export default SearchField