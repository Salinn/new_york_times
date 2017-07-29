//Loads Action Types
import * as types from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI.prod';

export const fetchArticles = ({ searchFields, value='', currentPage='More' }) => async dispatch => {
    try {
        dispatch(fetchArticlesStarted());
        const updatedFields = { ...searchFields, q: value };

        let payload = await ArticleAPI.fetchArticles({ searchFields: updatedFields, currentPage });

        const stories = payload.data.response.docs;

        dispatch(fetchArticlesSuccess({ stories }));
    } catch (error) {
        dispatch(fetchArticlesFailed());
    }
};

export const nextSetOfArticles = ({ page }) => dispatch => {
    const newPage = (page < 120) ? page + 1 : 120;

    dispatch(setPage({ page: newPage }));
};
export const lastSetOfArticles = ({ page }) => dispatch => {
    const newPage = (page > 0) ? page - 1 : 0;

    dispatch(setPage({ page: newPage }));
};

export const setPage = ({ page }) => {
    return { type: types.SET_PAGE, page }
};

export const fetchArticlesStarted = () => {
    return { type: types.FETCH_ARTICLES_STARTED }
};

export const fetchArticlesSuccess = ({ stories }) => {
    return { type: types.FETCH_ARTICLES_SUCCESS, stories }
};

export const fetchArticlesFailed = () => {
    return { type: types.FETCH_ARTICLES_FAILED }
};

export const toggleFullArticle = ({ web_url }) => {
    return { type: types.TOGGLE_FULL_ARTICLE, web_url }
};

export const changeArticles = ({ searchFields, pageName }) => async dispatch => {
    await dispatch(changePage({ pageName }));
    await dispatch(fetchArticles({ searchFields, currentPage: pageName }));
};

export const changePage = ({ pageName }) => {
    return { type: types.CHANGE_PAGE, pageName };
};

export const searchInput = ({ searchFields, value }) => async dispatch => {
    await dispatch(changePage({ pageName: 'More' }));
    await dispatch(fetchArticles({ searchFields, value }));
};