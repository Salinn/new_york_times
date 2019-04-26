//External Libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
//Internal Files
import * as actions from '../../actions/PageActions';
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

describe('Page Actions', () => {
    //Actions
    it('should create an action for when we go to the next set of articles', () => {
        const expectedAction = { type: types.SET_PAGE, page: 3 };

        expect(actions.setPage({ page: 3 })).toEqual(expectedAction)
    });

    it('should create an action for when an article is being displayed or hidden', () => {
        const expectedAction = { type: types.TOGGLE_FULL_ARTICLE, web_url: 'www.somewebsite.com/articles/1' };

        expect(actions.toggleFullArticle({ web_url: 'www.somewebsite.com/articles/1' })).toEqual(expectedAction)
    });

    it('should create an action for when the user changes the page', () => {
        const expectedAction = { type: types.CHANGE_PAGE, pageName: 'World' };

        expect(actions.changePage({ pageName: 'World' })).toEqual(expectedAction)
    });

    //Thunks
    it('should change to the next page', async () => {
        const state = {
            ...initialState,
            page: {
                ...initialState.page,
                pagination: {
                    ...initialState.page.pagination,
                    current: 101
                }
            }
        }

        const store = mockStore(state);

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 102 },
        ];

        await store.dispatch(actions.nextSetOfArticles());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should change to the next page when the page is past what the api allows', async () => {
        const state = {
            ...initialState,
            page: {
                ...initialState.page,
                pagination: {
                    ...initialState.page.pagination,
                    current: 121
                }
            }
        }
        const store = mockStore(state);

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 120 },
        ];

        await store.dispatch(actions.nextSetOfArticles());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should change to the last page', async () => {
        const state = {
            ...initialState,
            page: {
                ...initialState.page,
                pagination: {
                    ...initialState.page.pagination,
                    current: 101
                }
            }
        }
        const store = mockStore(state);

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 100 },
        ];

        await store.dispatch(actions.lastSetOfArticles());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should change to the last page when the page is before what the api allows', async () => {
        const state = {
            ...initialState,
            page: {
                ...initialState.page,
                pagination: {
                    ...initialState.page.pagination,
                    current: -1
                }
            }
        }
        const store = mockStore(state);

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 0 },
        ];

        await store.dispatch(actions.lastSetOfArticles());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should search for articles with a search term', async () => {
        const state = {
            ...initialState,
            page: {
                ...initialState.page,
                searchTerm: 'Patriots'
            }
        }

        const searchFields = { q: 'Patriots', 'api-key': initialState.meta.apiKey }

        const store = mockStore(state);
        const stories = [1, 2, 3];

        mock.onGet(MORE_ARTICLE_ENDPOINT + getParams({ searchFields })).reply(200, {
            response: {
                docs: [1, 2, 3]
            }
        });

        const expectedDispatchedActions = [
            { type: types.CHANGE_PAGE, pageName: 'More' },
            { type: types.FETCH_ARTICLES_STARTED },
            { type: types.FETCH_ARTICLES_SUCCESS, stories },
        ];

        await store.dispatch(actions.searchInput({ searchTerm: 'Patriots' }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should search for new articles when the page changes', async () => {
        const store = mockStore(initialState);
        const stories = [1, 2, 3];
        const searchFields = { q: '', 'api-key': initialState.meta.apiKey }

        mock.onGet(HOME_ARTICLE_ENDPOINT + getParams({ searchFields })).reply(200, {
            response: {
                docs: [1, 2, 3]
            }
        });

        const expectedDispatchedActions = [
            { type: types.CHANGE_PAGE, pageName: 'World' },
            { type: types.FETCH_ARTICLES_STARTED },
        ];

        await store.dispatch(actions.changeSection({ pageName: 'World' }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should search for articles with no value', async () => {
        const store = mockStore(initialState);
        const stories = [1, 2, 3];
        const searchFields = { q: '', 'api-key': initialState.meta.apiKey }

        mock.onGet(MORE_ARTICLE_ENDPOINT + getParams({ searchFields })).reply(200, {
            response: {
                docs: [1, 2, 3]
            }
        });

        const expectedDispatchedActions = [
            { type: types.CHANGE_PAGE, pageName: 'More' },
            { type: types.FETCH_ARTICLES_STARTED },
            { type: types.FETCH_ARTICLES_SUCCESS, stories },
        ];

        await store.dispatch(actions.searchInput({ searchFields }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });
});