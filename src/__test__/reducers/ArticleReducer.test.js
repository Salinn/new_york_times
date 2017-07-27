//Reducer
import articleReducer from '../../reducers/ArticleReducer';
//Action Types
import * as types from '../../actions/ActionTypes';
//State
import initialState from '../../reducers/initialState';

const articlesInitialState = initialState.articles;

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect( articleReducer(undefined, {}) ).toEqual( articlesInitialState )
    });

    it('should not affect state', () => {
        expect( articleReducer(articlesInitialState, { type: 'NOT_EXISTING' } ) ).toEqual( articlesInitialState )
    });

    it('fetched articles started', () => {
        const action = { type: types.FETCH_ARTICLES_STARTED, };
        const nextState = articleReducer(articlesInitialState, action );

        const expectedState = { ...articlesInitialState, };

        expect( nextState ).toEqual( expectedState );
    });

    it('fetched articles success', () => {
        const action = { type: types.FETCH_ARTICLES_SUCCESS, stories: [1, 2, 3] };
        const nextState = articleReducer(articlesInitialState, action );

        const expectedState = { ...articlesInitialState, stories: [1, 2, 3] };

        expect( nextState ).toEqual( expectedState );
    });

    it('fetched articles failed', () => {
        const action = { type: types.FETCH_ARTICLES_FAILED, };
        const nextState = articleReducer(articlesInitialState, action );

        const expectedState = { ...articlesInitialState, };

        expect( nextState ).toEqual( expectedState );
    });

    it('update which result page you are on', () => {
        const action = { type: types.SET_PAGE, page: 5, };
        const nextState = articleReducer(articlesInitialState, action );

        const expectedState = {
            ...articlesInitialState,
            searchFields: {
                ...articlesInitialState.searchFields,
                page: { ...articlesInitialState.searchFields.page, value: 5 }
            }
        };

        expect( nextState ).toEqual( expectedState );
    });

    it('open the modal with the article', () => {
        const action = { type: types.TOGGLE_FULL_ARTICLE, web_url: 'www.somewebsite.com/articles/1' };
        const nextState = articleReducer(articlesInitialState, action );

        const expectedState = {
            ...articlesInitialState,
            fullArticle: {
                ...articlesInitialState.fullArticle,
                web_url: 'www.somewebsite.com/articles/1',
                isOpen: true,
            }
        };

        expect( nextState ).toEqual( expectedState );
    });

    it('should update the state based on an input', () => {
        const action = { type: types.INPUT_CHANGED, name: 'q', value: 'star', isError: false, errorMessage: ''};
        const nextState = articleReducer(articlesInitialState, action );

        const expectedState = {
            ...articlesInitialState,
            searchFields: {
                ...articlesInitialState.searchFields,
                q: { ...articlesInitialState.searchFields.q, value: 'star', isError: false }
            }
        };

        expect( nextState ).toEqual( expectedState );
    });
});