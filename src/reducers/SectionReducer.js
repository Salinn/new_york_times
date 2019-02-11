//Initial Data
import initialState from '../store/initialState';

export default (state = initialState.sections, action) => {
    switch (action.type) {
        default:
            return state;
    }
}