//React
import React from 'react';
//Component
import HeaderSection from '../../../components/layouts/HeaderSection';
//Testing
import { mount } from 'enzyme';

describe('Header', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            page: 'USA',
            currentPage: 'Home',
            changeSection: jest.fn(),
        };

        wrapper = mount(<HeaderSection {...props} />);
    });

    it('should have the correct title', () => {
        const linkName = wrapper.find('NavLink').text()

        expect(linkName).toBe('USA')
    })

    it('should click the more link', () => {
        wrapper.find('NavLink').first().simulate('click');

        expect(props.changeSection).toHaveBeenCalledWith({ pageName: 'USA' });
    });

    it('should not be underlined when it is the current page', () => {
        const isCurrentLink = wrapper.find('NavLink').hasClass('activeTab')

        expect(isCurrentLink).toBe(false)
    })

    it('should be underlined when it is the current page', () => {
        props = {
            page: 'Home',
            currentPage: 'Home',
            changeSection: jest.fn(),
        };

        wrapper = mount(<HeaderSection {...props} />);

        const isCurrentLink = wrapper.find('NavLink').hasClass('activeTab')

        expect(isCurrentLink).toBe(true)
    })
})