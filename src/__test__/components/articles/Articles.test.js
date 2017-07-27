//React
import React from 'react';
//Component
import Articles from '../../../components/articles/Articles';
//initial state
import initialState from '../../../reducers/initialState';
//Testing
import { shallow } from 'enzyme';

describe('Articles', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            articles: {
                ...initialState.articles,
                stories: [
                    {
                        headline: {
                            main: 'New game of thrones spoiler!'
                        },
                        pub_date: "2017-07-26T23:55:18+0000",
                        snippet: "I am just kidding that would be cruel and unusual, " +
                        "but I am certainly looking forward to the next few episodes!",
                    },
                    {
                        headline: {
                            main: 'New game of thrones spoiler!'
                        },
                        pub_date: "2017-07-26T23:55:18+0000",
                        snippet: "I am just kidding that would be cruel and unusual, " +
                        "but I am certainly looking forward to the next few episodes!",
                    },
                ],

            },
            nextSetOfArticles: jest.fn(),
            lastSetOfArticles: jest.fn(),
            toggleFullArticle: jest.fn(),
            onUserInput: jest.fn(),
        };

        wrapper = shallow(<Articles { ...props } />);
    });

    it('should only have one header', () => {
        const h2s = wrapper.find('h2');

        expect(h2s.length).toBe(1);
    });

    it('should only have one Search component', () => {
        const searches = wrapper.find('Search');

        expect(searches.length).toBe(1);
    });

    it('should only have a pagination component at the top and bottom', () => {
        const paginationButtons = wrapper.find('PaginationButtons');

        expect(paginationButtons.length).toBe(2);
    });

    it('should only have two Articles', () => {
        const articles = wrapper.find('Article');

        expect(articles.length).toBe(2);
    });

    it('should only have one one modal for viewing articles', () => {
        const fullArticles = wrapper.find('FullArticle');

        expect(fullArticles.length).toBe(1);
    });
});