//React
import React from 'react';
import { } from 'prop-types';
//ReactStrap
import { Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
//validation
import { validationColor } from '../../utils/validator';

const TextInput = ( { onChange, fieldInfo } ) => {
    return (
        <Col sm={ 6 }>
            <FormGroup row color={ validationColor( fieldInfo.isError ) }>
                <Col sm={ 3 }>
                    <Label for={ fieldInfo.name } className="float-right labelTitle">{ fieldInfo.label }</Label>
                </Col>
                <Col sm={ 6 }>
                    <Input type={ fieldInfo.type }
                           name={ fieldInfo.name }
                           value={ fieldInfo.value }
                           pattern={ fieldInfo.pattern }
                           onChange={ onChange }
                           state={ validationColor(fieldInfo.isError) }
                    />
                    { fieldInfo.isError ? <FormFeedback>{ fieldInfo.errorMessage }</FormFeedback> : null }
                </Col>
            </FormGroup>
        </Col>
    );
};

TextInput.propTypes = {};

export default TextInput;