//React
import React from 'react';
//Component
import PaginationButtons from '../../../components/articles/PaginationButtons';
//Testing
import { shallow, } from 'enzyme';

describe('Pagination Buttons', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            nextSetOfArticles: jest.fn(),
            lastSetOfArticles: jest.fn(),
            pagination: {
                current: 2,
                min: 0,
                max: 120
            }
        };

        wrapper = shallow(<PaginationButtons { ...props } />);
    });

    it('should say we are on page 3', () => {
        const text = wrapper.find('h4').text();

        expect(text).toBe('On page 3');
    });

    it('should only have two Buttons', () => {
        const buttons = wrapper.find('Button');

        expect(buttons.length).toBe(2);
    });

    it('should call the back button', () => {
        wrapper.find('Button').first().simulate('click');

        expect(props.lastSetOfArticles).toHaveBeenCalled();
    });

    it('should call the next button', () => {
        wrapper.find('Button').last().simulate('click');

        expect(props.nextSetOfArticles).toHaveBeenCalled();
    });
});