//React
import React from 'react';
//Component
import Header from '../../../components/layouts/Header';
//Testing
import { shallow, } from 'enzyme';

describe('Header', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            pages: ['A', 'B', 'C'],
            currentPage: 'Home',
            changeSection: jest.fn(),
            searchInput: jest.fn(),
        };

        wrapper = shallow(<Header { ...props } />);
    });

    it('should have a main navagation ribbon', () => {
        const navbars = wrapper.find('Navbar');

        expect(navbars.length).toBe(1);
    });

    it('should have a second navagation ribbon', () => {
        const navs = wrapper.find('Nav');

        expect(navs.length).toBe(1);
    });

    it('should have six nav links', () => {
        const navs = wrapper.find('HeaderSection');

        expect(navs.length).toBe(3);
    });

    it('should have the time as a title', () => {
        const headerText = wrapper.find('h4.headerTitle').text();

        expect(headerText).toBe("The Time's");
    });

    it('should have a searchField', () => {
        const navs = wrapper.find('SearchField');

        expect(navs.length).toBe(1);
    });
});