//External Libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
//Internal Files
import * as actions from '../../actions/ArticleActions';
import * as types from '../../actions/ActionTypes';
import initialState from '../../store/initialState';
import {
    MORE_ARTICLE_ENDPOINT,
    HOME_ARTICLE_ENDPOINT,
    getParams
} from '../../utils/api/ArticleAPI.prod';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

afterEach(() => {
    mock.reset();
});

describe('Search Actions', () => {
    //Actions
    // it('should create an action for starting to search for an article', () => {
    //     const expectedAction = { type: types.FETCH_ARTICLES_STARTED };

    //     expect(actions.fetchArticlesStarted()).toEqual(expectedAction)
    // });

    // //Thunks
    it('should pass when trying to search for articles', async () => {
        const store = mockStore(initialState);
        const stories = [1, 2, 3];
        const searchFields = { q: '', 'api-key': initialState.meta.apiKey }
        const toast = { 
            id: "1", 
            message: 'We successfully fetched new stories on the Home page!', 
            color: "success"
        }

        mock.onGet(HOME_ARTICLE_ENDPOINT + getParams({ searchFields })).reply(200, {
            response: {
                docs: [1, 2, 3]
            }
        });

        const expectedDispatchedActions = [
            { type: types.FETCH_ARTICLES_STARTED },
            { type: types.FETCH_ARTICLES_SUCCESS, stories },
            { type: types.CREATE_TOAST, toast }
        ];

        await store.dispatch(actions.fetchArticles());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should fail when trying to search for articles', async () => {
        const store = mockStore(initialState);
        const toast = { color: "danger", id: "2", message: "We had a small snag =(" }

        mock.onGet(HOME_ARTICLE_ENDPOINT).reply(400);

        const expectedDispatchedActions = [
            { type: types.FETCH_ARTICLES_STARTED },
            { type: types.FETCH_ARTICLES_FAILED },
            { type: types.CREATE_TOAST, toast }
        ];

        await store.dispatch(actions.fetchArticles());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });
});