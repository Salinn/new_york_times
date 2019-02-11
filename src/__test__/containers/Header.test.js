//React
import React from 'react';
//Components
import { mapStateToProps } from '../../containers/Header';

describe('Header Container', () => {
    it('should return the correct props from state', () => {
        const given = {
            page: {
                currentPage: 'Home'
            },
            sections: ['USA', 'Boston', 'Patriots']
        };

        const expected = {
            currentPage: 'Home',
            pages: ['USA', 'Boston', 'Patriots']
        }

        expect(mapStateToProps(given)).toEqual(expected)
    });
});