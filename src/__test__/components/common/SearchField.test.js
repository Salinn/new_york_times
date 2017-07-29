//React
import React from 'react';
//Component
import SearchField from '../../../components/common/SearchField';
//Testing
import { shallow, } from 'enzyme';

describe('SearchField', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            onChange: jest.fn(),
        };

        wrapper = shallow(<SearchField { ...props } />);
    });

    it('should only search icon', () => {
        const searchIcons = wrapper.find('FaSearch');

        expect(searchIcons.length).toBe(1);
    });

    it('should only have one input field', () => {
        const inputs = wrapper.find('Input');

        expect(inputs.length).toBe(1);
    });

    it('should call onChange when there is user input', () => {
        wrapper.find('Input').first().simulate('change', { target: { value: '2' } });

        expect(props.onChange).toHaveBeenCalledWith({ target: { value: '2' } } );
    });
});