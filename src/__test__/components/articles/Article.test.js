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
            toggle: jest.fn(),
        };

        wrapper = shallow(<Article { ...props } />);
    });

    it('should only have one Card', () => {
        const cards = wrapper.find('Card');

        expect(cards.length).toBe(1);
    });

    it('should only have one image', () => {
        const images = wrapper.find('Media.mediaImage');

        expect(images.length).toBe(1);
    });

    it('should only have one italicized date', () => {
        const is = wrapper.find('i');

        expect(is.length).toBe(1);
    });

    it('should only have one Button', () => {
        const buttons = wrapper.find('Button');

        expect(buttons.length).toBe(1);
    });

    it('should call the modal and pass it the web_url', () => {
        wrapper.find('Button').first().simulate('click');

        expect(props.toggle).toHaveBeenCalledWith({ web_url: 'http://www.somewebsite.com/articles/a-cool-article' });
    });

    //Edge Cases
    it('should only have a default image', () => {
        props = { ...props, article: { ...props.article, multimedia: [] } };
        wrapper = shallow(<Article { ...props } />);
        const images = wrapper.find('Media.mediaImage');

        expect(images.length).toBe(1);
    });

    it('should render with no author', () => {
        props = { ...props, article: { ...props.article, byline: null } };
        wrapper = shallow(<Article { ...props } />);
        const cards = wrapper.find('Card');

        expect(cards.length).toBe(1);
    });
});