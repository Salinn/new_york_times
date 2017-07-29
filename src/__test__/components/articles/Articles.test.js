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
                        web_url: 'http://www.somewebsite.com/articles/a-cool-article',
                        byline: {
                            original: 'By Paul Darragh'
                        },
                        multimedia: [
                            {
                                url: 'images/2017/07/29/world/28venezuela-embassy-1/28venezuela-embassy-1-articleLarge.jpg'
                            },
                        ],
                    },
                    {
                        headline: {
                            main: 'New game of thrones spoiler!'
                        },
                        pub_date: "2017-07-26T23:55:18+0000",
                        snippet: "I am just kidding that would be cruel and unusual, " +
                        "but I am certainly looking forward to the next few episodes!",
                        web_url: 'http://www.somewebsite.com/articles/a-cool-article',
                        byline: {
                            original: 'By Paul Darragh'
                        },
                        multimedia: [
                            {
                                url: 'images/2017/07/29/world/28venezuela-embassy-1/28venezuela-embassy-1-articleLarge.jpg'
                            },
                        ],
                    },
                    {
                        headline: {
                            main: 'New game of thrones spoiler!'
                        },
                        pub_date: "2017-07-26T23:55:18+0000",
                        snippet: "I am just kidding that would be cruel and unusual, " +
                        "but I am certainly looking forward to the next few episodes!",
                        web_url: 'http://www.somewebsite.com/articles/a-cool-article',
                        byline: {
                            original: 'By Paul Darragh'
                        },
                        multimedia: [
                            {
                                url: 'images/2017/07/29/world/28venezuela-embassy-1/28venezuela-embassy-1-articleLarge.jpg'
                            },
                        ],
                    },
                ],

            },
            nextSetOfArticles: jest.fn(),
            lastSetOfArticles: jest.fn(),
            toggleFullArticle: jest.fn(),
        };

        wrapper = shallow(<Articles { ...props } />);
    });

    it('should only have 3 articles', () => {
        const articles = wrapper.find('Article');

        expect(articles.length).toBe(3);
    });

    it('should only have a pagination component at the top and bottom', () => {
        const paginationButtons = wrapper.find('PaginationButtons');

        expect(paginationButtons.length).toBe(1);
    });

    it('should only have one one modal for viewing articles', () => {
        const fullArticles = wrapper.find('FullArticle');

        expect(fullArticles.length).toBe(1);
    });
});