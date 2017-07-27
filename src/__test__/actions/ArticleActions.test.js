//External Libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
//Internal Files
import * as actions from '../../actions/ArticleActions';
import * as types from '../../actions/ActionTypes';
import initialState from '../../reducers/initialState';
import { ARTICLE_ENDPOINT, getParams } from '../../utils/api/ArticleAPI.prod';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

afterEach(() => {
    mock.reset();
});

describe('Search Actions', () => {
    //Actions
    it('should create an action for starting to search for an article', () => {
        const expectedAction = { type: types.FETCH_ARTICLES_STARTED };

        expect(actions.fetchArticlesStarted()).toEqual(expectedAction)
    });

    it('should create an action for when searching for an article failed', () => {
        const expectedAction = { type: types.FETCH_ARTICLES_SUCCESS, stories: [1, 2, 3] };

        expect(actions.fetchArticlesSuccess({ stories: [1, 2, 3] })).toEqual(expectedAction)
    });

    it('should create an action for when searching for an article failed', () => {
        const expectedAction = { type: types.FETCH_ARTICLES_FAILED };

        expect(actions.fetchArticlesFailed()).toEqual(expectedAction)
    });

    it('should create an action for when we go to the next set of articles', () => {
        const expectedAction = { type: types.SET_PAGE, page: 3 };

        expect(actions.setPage({ page: 3 })).toEqual(expectedAction)
    });

    it('should create an action for when an article is being displayed or hidden', () => {
        const expectedAction = { type: types.TOGGLE_FULL_ARTICLE, web_url: 'www.somewebsite.com/articles/1' };

        expect(actions.toggleFullArticle({ web_url: 'www.somewebsite.com/articles/1' })).toEqual(expectedAction)
    });

    it('should create an action for when a user inputs new information', () => {
        const props = {  name: 'q', value: 'star', isError: false, errorMessage: '' };
        const expectedAction = { type: types.INPUT_CHANGED, ...props };

        expect(actions.inputChanged({ name: 'q', value: 'star', pattern: 'DEFAULT' })).toEqual(expectedAction)
    });

    //Thunks
    it('should pass when trying to search for articles', async () => {
        const stories = [1, 2, 3];
        const searchFields = initialState.articles.searchFields;

        mock.onGet(ARTICLE_ENDPOINT + getParams({ searchFields })).reply(200, {
            response: {
                docs: [1, 2, 3]
            }
        });

        const store = mockStore();

        const expectedDispatchedActions = [
            { type: types.FETCH_ARTICLES_STARTED },
            { type: types.FETCH_ARTICLES_SUCCESS, stories }
        ];

        await store.dispatch(actions.fetchArticles({ searchFields }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should fail when trying to search for articles', async () => {
        const searchFields = initialState.articles.searchFields;

        mock.onGet(ARTICLE_ENDPOINT + getParams({ searchFields })).reply(400);

        const store = mockStore();

        const expectedDispatchedActions = [
            { type: types.FETCH_ARTICLES_STARTED },
            { type: types.FETCH_ARTICLES_FAILED }
        ];

        await store.dispatch(actions.fetchArticles({ searchFields }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should change to the next page', async () => {
        const store = mockStore();
        const searchFields = {
            ...initialState.articles.searchFields,
            page: { ...initialState.articles.searchFields.page, value: 101 }
        };

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 102 },
        ];

        await store.dispatch(actions.nextSetOfArticles({ searchFields }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should change to the next page when the page is past what the api allows', async () => {
        const store = mockStore();
        const searchFields = {
            ...initialState.articles.searchFields,
            page: { ...initialState.articles.searchFields.page, value: 121 }
        };

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 120 },
        ];

        await store.dispatch(actions.nextSetOfArticles({ searchFields }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should change to the last page', async () => {
        const store = mockStore();
        const searchFields = {
            ...initialState.articles.searchFields,
            page: { ...initialState.articles.searchFields.page, value: 101 }
        };

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 100 },
        ];

        await store.dispatch(actions.lastSetOfArticles({ searchFields }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should change to the last page when the page is before what the api allows', async () => {
        const store = mockStore();
        const searchFields = {
            ...initialState.articles.searchFields,
            page: { ...initialState.articles.searchFields.page, value: -1 }
        };

        const expectedDispatchedActions = [
            { type: types.SET_PAGE, page: 0 },
        ];

        await store.dispatch(actions.lastSetOfArticles({ searchFields }));

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });
});