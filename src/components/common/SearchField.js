//React
import React from 'react';
import {} from 'prop-types';
//Component
import SearchIcon from 'react-icons/lib/fa/search';
import { Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';


const SearchField = ({ fieldInfo, onChange }) => {
    return (
        <Col xs={ 12 }>
            <InputGroup>
                <InputGroupAddon>
                        <SearchIcon />
                </InputGroupAddon>
                <Input type='text'/>
            </InputGroup>
        </Col>
    );
};

SearchField.PropTypes = {};

export default SearchField