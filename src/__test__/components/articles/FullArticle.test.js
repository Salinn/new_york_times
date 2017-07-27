//React
import React from 'react';
//Component
import FullArticle from '../../../components/articles/FullArticle';
//Testing
import { shallow, } from 'enzyme';

describe('Full Article', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            web_url: 'http://www.somewebsite.com/articles/a-cool-article',
            isOpen: false,
            toggle: jest.fn(),
        };

        wrapper = shallow(<FullArticle { ...props } />);
    });

    it('should only have one modal', () => {
        const modals = wrapper.find('Modal');

        expect(modals.length).toBe(1);
    });

    it('should only have one iframe to show the story', () => {
        const iframes = wrapper.find('iframe');

        expect(iframes.length).toBe(1);
    });

    it('should only have one modal footer', () => {
        const modalFooters = wrapper.find('ModalFooter');

        expect(modalFooters.length).toBe(1);
    });

    it('should only have one Button', () => {
        const buttons = wrapper.find('Button');

        expect(buttons.length).toBe(1);
    });

    it('should close the modal when called', () => {
        wrapper.find('Button').first().simulate('click');

        expect(props.toggle).toHaveBeenCalled();
    });
});