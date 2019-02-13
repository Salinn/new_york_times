//React
import React from 'react';
//Component
import ToastContainer from '../../../components/toasts/ToastContainer';
//Testing
import { mount } from 'enzyme';

describe('ToastContainer', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            toasts: [
                { id: 1, color: "success", message: "hi" },
                { id: 2, color: "success", message: "bye" },
                { id: 3, color: "success", message: "hello" }
            ],
            removeToast: jest.fn(),
        };

        wrapper = mount(<ToastContainer { ...props } />);
    });

    it('should have three toasts', () => {
        const toasts = wrapper.find('Alert');
        const expected = 3

        expect(toasts.length).toBe(expected);
    });

    it('should return the correct id if I click the first toast', () => {
        const a = wrapper.find('button').first().simulate('click')
        const expected = { id: 1}

        expect(props.removeToast).toHaveBeenCalledWith(expected);
    });
});