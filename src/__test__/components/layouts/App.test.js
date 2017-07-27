//React
import React from 'react';
//Component
import App from '../../../components/layouts/App';
//Testing
import { shallow, } from 'enzyme';

describe('App', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {};

        wrapper = shallow(<App { ...props } />);
    });

    it('should only have one article screen container', () => {
        const articleScreens = wrapper.find('Connect(ArticleScreen)');

        expect(articleScreens.length).toBe(1);
    });

    it('should only have one footer', () => {
        const footers = wrapper.find('Footer');

        expect(footers.length).toBe(1);
    });
});