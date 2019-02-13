//React
import React from 'react';
//Components
import { mapStateToProps } from '../../containers/Toasts';

describe('Toast Container', () => {
    it('should return the correct props from state', () => {
        const given = {
            toasts: [
                { id: 1, color: "success", message: "hi" },
                { id: 2, color: "success", message: "bye" },
                { id: 3, color: "success", message: "hello" }
            ]
        };

        const expected = {
            toasts: [
                { id: 1, color: "success", message: "hi" },
                { id: 2, color: "success", message: "bye" },
                { id: 3, color: "success", message: "hello" }
            ]
        };

        expect(mapStateToProps(given)).toEqual(expected)
    });
});