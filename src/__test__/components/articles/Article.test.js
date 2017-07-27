//React
import React from 'react';
//Component
import Article from '../../../components/articles/Article';
//Testing
import { shallow, } from 'enzyme';

describe('Article', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            article: {
                headline: {
                    main: 'New game of thrones spoiler!'
                },
                pub_date: "2017-07-26T23:55:18+0000",
                snippet: "I am just kidding that would be cruel and unusual, " +
                         "but I am certainly looking forward to the next few episodes!",
                web_url: 'http://www.somewebsite.com/articles/a-cool-article'
            },
            toggle: jest.fn(),
        };

        wrapper = shallow(<Article { ...props } />);
    });

    it('should only have one Card', () => {
        const cards = wrapper.find('Card');

        expect(cards.length).toBe(1);
    });

    it('should only have one Card Title', () => {
        const cardTitles = wrapper.find('CardTitle');

        expect(cardTitles.length).toBe(1);
    });

    it('should only have one italicized date', () => {
        const is = wrapper.find('i');

        expect(is.length).toBe(1);
    });

    it('should only have one Card Text', () => {
        const cardTexts = wrapper.find('CardText');

        expect(cardTexts.length).toBe(1);
    });

    it('should only have one Button', () => {
        const buttons = wrapper.find('Button');

        expect(buttons.length).toBe(1);
    });

    it('should call the modal and pass it the web_url', () => {
        wrapper.find('Button').first().simulate('click');

        expect(props.toggle).toHaveBeenCalledWith('http://www.somewebsite.com/articles/a-cool-article');
    });
});