//React
import React from 'react';
import { validator, validationColor } from '../../utils/validator';
import * as patterns from '../../utils/types/patternTypes';
//time
import moment from 'moment';

describe('validation', () => {
    //if an empty value is passed in
    it('should return isError and errorMessage if the field is too short', () => {
        const { value, pattern } = { value: '', pattern: 'NOX_EXISTANT' };
        const expectedAction = { isError: null, errorMessage: '' };
        expect(validator({ value, pattern })).toEqual(expectedAction);
    });

    //date test
    it('should return isError and errorMessage if the field is too short', () => {
        const aDate = moment().startOf('day').add(10,'d').format('YYYYMMDD');
        const { value, pattern } = {  value: aDate, pattern: patterns.DATE  };
        const expectedAction = { isError: true, errorMessage: 'Please choose a date not in the future.' };
        expect(validator({ value, pattern })).toEqual(expectedAction);
    });

    it('should return isError and errorMessage if the field is too short', () => {
        const aDate = moment().startOf('day').subtract(10,'d').format('YYYYMMDD');
        const { value, pattern } = {  value: aDate, pattern: patterns.DATE  };
        const expectedAction = { isError: true, errorMessage: 'Please choose a date within the last week.' };
        expect(validator({ value, pattern })).toEqual(expectedAction);
    });

    it('should return isError and errorMessage if the field is too short', () => {
        const aDate = moment().startOf('day').format('YYYYMMDD');
        const { value, pattern } = {  value: aDate, pattern: patterns.DATE  };
        const expectedAction = { isError: false, errorMessage: '' };
        expect(validator({ value, pattern })).toEqual(expectedAction);
    });
});

//Colors
describe('validation color', () => {
    it('return danger if isError is true', () => {
        expect(validationColor(true)).toEqual('danger');
    });

    it('return success if isError is false', () => {
        expect(validationColor(false)).toEqual('success');
    });

    it('return null if isError is false', () => {
        expect(validationColor(null)).toEqual(null);
    });
});
