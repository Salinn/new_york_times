//Loads Action Types
import * as types from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI.prod';

export const fetchArticles = ({ page }) => async dispatch => {
    try {
        dispatch(fetchArticlesStarted());
        let payload = await ArticleAPI.fetchArticles({ page });

        const { docs } = payload.data.response;

        dispatch(fetchArticlesSuccess({ stories: docs }));
    } catch (error) {
        dispatch(fetchArticlesFailed());
    }
};

export const nextSetOfArticles = ({ page }) => dispatch => {
    const newPage = page + 1;

    dispatch(setPage({ page: newPage }));
    dispatch(fetchArticles({ page: newPage }));
};
export const lastSetOfArticles = ({ page }) => dispatch => {
    const newPage = page > 0 ? page - 1 : 0;

    dispatch(setPage({ page: newPage }));
    dispatch(fetchArticles({ page: newPage }));
};

export const setPage = ({ page }) => {
    return { type: types.SET_PAGE, page }
};

export const fetchArticlesStarted = () => { return { type: types.FETCH_ARTICLES_STARTED } };
export const fetchArticlesSuccess = ({ stories }) => { return { type: types.FETCH_ARTICLES_SUCCESS, stories } };
export const fetchArticlesFailed = () => { return { type: types.FETCH_ARTICLES_FAILED} };