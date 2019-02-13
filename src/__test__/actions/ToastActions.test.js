//Internal Files
import * as actions from '../../actions/ToastActions';
import * as types from '../../actions/ActionTypes';
import initialState from '../../store/initialState';
//External Libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.useFakeTimers();

describe('Toast Actions', () => {
    //Actions
    it('should create an action for when we go to the next set of articles', () => {
        const given = { id: 1 }
        const expectedAction = { type: types.REMOVE_TOAST, id: 1 };

        expect(actions.removeToast(given)).toEqual(expectedAction)
    });
    //Thunks
    it('should create and remove the toast after 6 seconds', async () => {
        const store = mockStore(initialState);
        const props = {
            color: "info",
            message: "almost done testing",
            duration: 0,
        }
        const toast = {
            id: "1",
            color: "info",
            message: "almost done testing"
        }

        const expectedDispatchedActions = [
            { type: types.CREATE_TOAST, toast },
            { type: types.REMOVE_TOAST, id: "1"}
        ];

        await store.dispatch(actions.createToast(props));
        jest.runAllTimers();

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should create and remove the toast after 6 seconds with no props', async () => {
        const store = mockStore(initialState);
        const props = {}
        const toast = {
            id: "2",
            color: "info",
            message: "Send me a message!"
        }

        const expectedDispatchedActions = [
            { type: types.CREATE_TOAST, toast },
            { type: types.REMOVE_TOAST, id: "2" }
        ];

        await store.dispatch(actions.createToast(props));
        jest.runAllTimers();

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });
});