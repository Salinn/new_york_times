//React
import React from 'react';
//Components
import { mapStateToProps } from '../../containers/Articles';

describe('Article Container', () => {
    it('should return the correct props from state', () => {
        const given = {
            page: {
                pagination: {
                    current: 3,
                    min: 0,
                    max: 120
                }
            },
            stories: [
                {
                    title: 'Patriots Win their 6th!',
                    content: 'Bill and Tom....'
                },
            ]
        };

        const expected = {
            page: {
                pagination: {
                    current: 3,
                        min: 0,
                            max: 120
                }
            },
            articles: [
                {
                    title: 'Patriots Win their 6th!',
                    content: 'Bill and Tom....'
                },
            ]
        };

        expect(mapStateToProps(given)).toEqual(expected)
    });
});