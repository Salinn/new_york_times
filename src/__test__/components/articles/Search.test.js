//React
import React from 'react';
//Component
import Search from '../../../components/articles/Search';
//Initial State
import initialState from '../../../reducers/initialState';
//Testing
import { shallow, } from 'enzyme';

describe('Search', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            searchMeta: { ...initialState.articles.searchMeta },
            searchFields: { ...initialState.articles.searchFields },
            onChange: jest.fn(),
        };

        wrapper = shallow(<Search { ...props } />);
    });

    it('should only have two Inputs', () => {
        const inputFields = wrapper.find('InputField');

        expect(inputFields.length).toBe(2);
    });
});