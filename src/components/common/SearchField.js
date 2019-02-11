//React
import React from 'react';
import { func } from 'prop-types';
//Component
import SearchIcon from 'react-icons/lib/fa/search';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


const SearchField = ({ onChange }) => {
    return (
        <InputGroup>
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
            <Input type='text' onChange={ onChange } />
        </InputGroup>
    );
};

SearchField.PropTypes = {
    onChange: func.isRequired
};

export default SearchField