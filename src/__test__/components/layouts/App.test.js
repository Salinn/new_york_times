//React
import React from 'react';
//Component
import App from '../../../components/layouts/App';
//Testing
import { shallow, } from 'enzyme';

describe('App', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            articles: [],
            nextSetOfArticles: jest.fn(),
            lastSetOfArticles: jest.fn(),
            toggleFullArticle: jest.fn(),
            changeArticles: jest.fn(),
            searchInput: jest.fn()
        };

        wrapper = shallow(<App { ...props } />);
    });

    it('should only have one header', () => {
        const headers = wrapper.find('Header');

        expect(headers.length).toBe(1);
    });

    it('should only have one article screen container', () => {
        const articles = wrapper.find('Articles');

        expect(articles.length).toBe(1);
    });

    it('should only have one footer', () => {
        const footers = wrapper.find('Footer');

        expect(footers.length).toBe(1);
    });
});