//Reducer
import storyReducer from '../../reducers/StoryReducer';
//Action Types
import * as types from '../../actions/ActionTypes';
//State
import initialState from '../../store/initialState';

const storyInitialState = initialState.stories;

describe('story reducer', () => {
    it('should return the initial state', () => {
        expect( storyReducer(undefined, {}) ).toEqual( storyInitialState )
    });

    it('should not affect state', () => {
        expect( storyReducer(storyInitialState, { type: 'NOT_EXISTING' } ) ).toEqual( storyInitialState )
    });

    it('fetched articles success', () => {
        const action = { type: types.FETCH_ARTICLES_SUCCESS, stories: [1, 2, 3] };
        const nextState = storyReducer(storyInitialState, action );

        const expectedState = [1, 2, 3];

        expect( nextState ).toEqual( expectedState );
    });
});