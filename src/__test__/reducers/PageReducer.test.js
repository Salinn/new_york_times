//Reducer
import pageReducer from '../../reducers/PagesReducer';
//Action Types
import * as types from '../../actions/ActionTypes';
//State
import initialState from '../../store/initialState';

const pageInitialState = initialState.page;

describe('page reducer', () => {
    it('should return the initial state', () => {
        expect( pageReducer(undefined, {}) ).toEqual( pageInitialState )
    });
    it('should not affect state', () => {
        expect( pageReducer(pageInitialState, { type: 'NOT_EXISTING' } ) ).toEqual( pageInitialState )
    });
    it('update which result page you are on', () => {
        const action = { type: types.SET_PAGE, page: 5, };
        const nextState = pageReducer(pageInitialState, action );

        const expectedState = {
            ...pageInitialState,
            pagination: {
                ...pageInitialState.pagination,
                current: 5
            }
        };

        expect( nextState ).toEqual( expectedState );
    });

    it('open the modal with the article', () => {
        const action = { type: types.TOGGLE_FULL_ARTICLE, web_url: 'www.somewebsite.com/articles/1' };
        const nextState = pageReducer(pageInitialState, action );

        const expectedState = {
            ...pageInitialState,
            fullArticle: {
                ...pageInitialState.fullArticle,
                web_url: 'www.somewebsite.com/articles/1',
                isOpen: true,
            }
        };

        expect( nextState ).toEqual( expectedState );
    });

    it('should change the current page', () => {
        const action = { type: types.CHANGE_PAGE, pageName: 'World', searchTerm: "" };
        const nextState = pageReducer(pageInitialState, action );

        const expectedState = { 
            ...pageInitialState, 
            currentPage: 'World',
            searchTerm: ""
        };

        expect( nextState ).toEqual( expectedState );
    });
});