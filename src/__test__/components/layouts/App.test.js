//React
import React from 'react';
//Component
import App from '../../../components/App';
//Testing
import { shallow, } from 'enzyme';

describe('App', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {};

        wrapper = shallow(<App { ...props } />);
    });

    it('should only have one header', () => {
        const headers = wrapper.find('Connect(Header)');

        expect(headers.length).toBe(1);
    });

    it('should only have one article screen container', () => {
        const articles = wrapper.find('Connect(Articles)');

        expect(articles.length).toBe(1);
    });

    it('should only have one footer', () => {
        const footers = wrapper.find('Connect(Footer)');

        expect(footers.length).toBe(1);
    });
});