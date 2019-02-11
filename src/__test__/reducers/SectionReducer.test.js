//Reducer
import sectionReducer from '../../reducers/SectionReducer';
//Action Types
import * as types from '../../actions/ActionTypes';
//State
import initialState from '../../store/initialState';

const articlesInitialState = initialState.sections;

describe('section reducer', () => {
    it('should return the initial state', () => {
        expect( sectionReducer(undefined, {}) ).toEqual( articlesInitialState )
    });

    it('should not affect state', () => {
        expect( sectionReducer(articlesInitialState, { type: 'NOT_EXISTING' } ) ).toEqual( articlesInitialState )
    });
});