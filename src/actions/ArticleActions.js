//Loads Action Types
import * as types from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI.prod';
//Validation
import { validator } from '../utils/validator';

export const fetchArticles = ({ searchFields, value='', currentPage='More' }) => async dispatch => {
    try {
        dispatch(fetchArticlesStarted());
        const updatedFields = { ...searchFields, q: value };

        let payload = await ArticleAPI.fetchArticles({ searchFields: updatedFields, currentPage });

        const stories = payload.data.response.docs;

        dispatch(fetchArticlesSuccess({ stories }));
    } catch (error) {
        console.log(error);
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

export const inputChanged = ({ name, value, pattern }) => {
    const { isError, errorMessage } = validator({ value, pattern });

    return { type: types.INPUT_CHANGED, name, value, isError, errorMessage }
};

export const changeArticles = ({ searchFields, pageName }) => dispatch => {
    dispatch(fetchArticles({ searchFields, currentPage: pageName }));
    dispatch(changePage({ pageName }));
};

export const changePage = ({ pageName }) => {
    return { type: types.CHANGE_PAGE, pageName };
};

export const searchInput = ({ searchFields, value }) => dispatch => {
    dispatch(changePage({ pageName: 'More' }));
    dispatch(fetchArticles({ searchFields, value }));
};