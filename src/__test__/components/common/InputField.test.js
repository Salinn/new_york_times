//React
import React from 'react';
//Component
import InputField from '../../../components/common/InputField';
//Initial State
import initialState from '../../../reducers/initialState';
//Testing
import { shallow, } from 'enzyme';

describe('Input Fields', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            fieldInfo:{
                ...initialState.articles.searchFields.q,
                ...initialState.articles.searchMeta.q
            },
            onChange: jest.fn(),
        };

        wrapper = shallow(<InputField { ...props } />);
    });

    it('should only have one form group', () => {
        const formGroups = wrapper.find('FormGroup');

        expect(formGroups.length).toBe(1);
    });

    it('should only have one label', () => {
        const labels = wrapper.find('Label');

        expect(labels.length).toBe(1);
    });

    it('should only have one input field', () => {
        const inputs = wrapper.find('Input');

        expect(inputs.length).toBe(1);
    });

    it('should not show an error message when the page initially loads', () => {
        const formFeedbacks = wrapper.find('FormFeedback');

        expect(formFeedbacks.length).toBe(0);
    });

    it('should show the error message when the input is invalid', () => {
        props = {
            ...props,
            fieldInfo: { ...props.fieldInfo, isError: true, errorMessage: 'To many characters entered' }
        };
        wrapper = shallow(<InputField { ...props } />);

        const formFeedbacks = wrapper.find('FormFeedback');

        expect(formFeedbacks.length).toBe(1);
    });

    it('should call onChange when there is user input', () => {
        wrapper.find('Input').first().simulate('change', { target: { value: '2' } });

        expect(props.onChange).toHaveBeenCalledWith({ target: { value: '2' } } );
    });
});