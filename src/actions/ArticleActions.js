//Loads Action Types
import {
    FETCH_ARTICLES_STARTED,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILED,
} from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI';

export const fetchArticles = (props) => async (dispatch, getState) => {
    const {
        page: {
            currentPage,
            searchTerm
        },
        meta: {
            apiKey
        }
    } = getState()

    try {
        dispatch({ type: FETCH_ARTICLES_STARTED });

        const searchFields = { q: searchTerm, 'api-key': apiKey };

        let payload = await ArticleAPI.fetchArticles({ searchFields, currentPage });

        dispatch({ 
            type: FETCH_ARTICLES_SUCCESS, 
            stories: payload.data.response.docs 
        })
    } catch (error) {
        dispatch({ type: FETCH_ARTICLES_FAILED });
    }
};

