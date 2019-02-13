//Reducer
import toastReducer from '../../reducers/ToastReducer';
//Action Types
import * as types from '../../actions/ActionTypes';
//State
import initialState from '../../store/initialState';

const toastInitialState = initialState.toasts;

describe('toast reducer', () => {
    it('should return the initial state', () => {
        expect( toastReducer(undefined, {}) ).toEqual( toastInitialState )
    });

    it('should not affect state', () => {
        expect( toastReducer(toastInitialState, { type: 'NOT_EXISTING' } ) ).toEqual( toastInitialState )
    });

    it('create a new toast', () => {
        const toast = { id: 1, color: "success", message: "hi" }
        const action = { type: types.CREATE_TOAST, toast };
        const nextState = toastReducer(toastInitialState, action );

        const expectedState = [toast];

        expect( nextState ).toEqual( expectedState );
    });

    it('remowe a new toast', () => {
        const testInitialState = [
            { id: 1, color: "success", message: "hi" },
            { id: 2, color: "success", message: "bye" },
            { id: 3, color: "success", message: "hello" }
        ]
        const action = { type: types.REMOVE_TOAST, id: 2 };
        const nextState = toastReducer(testInitialState, action);

        const expectedState = [
            { id: 1, color: "success", message: "hi" },
            { id: 3, color: "success", message: "hello" }
        ];

        expect(nextState).toEqual(expectedState);
    });
});