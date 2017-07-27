//React
import React from 'react';
//Component
import Footer from '../../../components/layouts/Footer';
//Testing
import { shallow, } from 'enzyme';

describe('Footer', () => {
    let wrapper, props;

    beforeEach(() => {
        props = { };

        wrapper = shallow(<Footer { ...props } />);
    });

    it('should container the footer text', () => {
        const text = wrapper.find('footer').text();

        expect(text).toBe('This website was created by Paul Darragh');
    });
});