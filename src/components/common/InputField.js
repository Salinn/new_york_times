//React
import React from 'react';
import { func, shape, string, bool } from 'prop-types';
//ReactStrap
import { Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
//validation
import { validationColor } from '../../utils/validator';

const InputField = ( { onChange, fieldInfo } ) => {
    return (
        <Col xs={ 12 } sm={ 6 }>
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

InputField.propTypes = {
    onChange: func.isRequired,
    fieldInfo: shape({
        name: string.isRequired,
        label: string.isRequired,
        type: string.isRequired,
        value: string.isRequired,
        pattern: string.isRequired,
        isError: bool,
        errorMessage: string.isRequired,
    })
};

export default InputField;