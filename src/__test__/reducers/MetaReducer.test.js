//Reducer
import metaReducer from '../../reducers/MetaReducer';
//Action Types
import * as types from '../../actions/ActionTypes';
//State
import initialState from '../../store/initialState';

const metaInitialState = initialState.meta;

describe('meta reducer', () => {
    it('should return the initial state', () => {
        expect( metaReducer(undefined, {}) ).toEqual( metaInitialState )
    });

    it('should not affect state', () => {
        expect( metaReducer(metaInitialState, { type: 'NOT_EXISTING' } ) ).toEqual( metaInitialState )
    });

    it('fetched articles started', () => {
        const action = { type: types.FETCH_ARTICLES_STARTED, };
        const nextState = metaReducer(metaInitialState, action );

        const expectedState = {
            ...metaInitialState,
            isLoading: true
        };

        expect( nextState ).toEqual( expectedState );
    });

    it('fetched articles success', () => {
        const action = { type: types.FETCH_ARTICLES_SUCCESS, stories: [1, 2, 3] };
        const nextState = metaReducer(metaInitialState, action );

        const expectedState = {
            ...metaInitialState,
            isLoading: false
        };

        expect( nextState ).toEqual( expectedState );
    });

    it('fetched articles failed', () => {
        const action = { type: types.FETCH_ARTICLES_FAILED, };
        const nextState = metaReducer(metaInitialState, action );

        const expectedState = { 
            ...metaInitialState, 
            isLoading: false 
        };

        expect( nextState ).toEqual( expectedState );
    });
});