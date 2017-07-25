//Loads Action Types
import * as types from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI.prod';
//Validation
import { validator } from '../utils/validator';

export const fetchArticles = ({ searchFields }) => async dispatch => {
    try {
        dispatch(fetchArticlesStarted());
        let payload = await ArticleAPI.fetchArticles({ searchFields });

        const { docs } = payload.data.response;

        console.log(docs);

        dispatch(fetchArticlesSuccess({ stories: docs }));
    } catch (error) {
        console.log(error);
        dispatch(fetchArticlesFailed());
    }
};

export const nextSetOfArticles = ({ searchFields }) => dispatch => {
    const newPage = (searchFields.page.value < 120) ? searchFields.page.value + 1 : 120;

    dispatch(setPage({ page: newPage }));
};
export const lastSetOfArticles = ({ searchFields }) => dispatch => {
    const newPage = (searchFields.page.value > 0) ? searchFields.page.value - 1 : 0;

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

export const inputChanged = ({ name, value, pattern, searchFields }) => dispatch => {
    const { isError, errorMessage } = validator({ value, pattern });
    if (name === 'page') value = isNaN(parseInt(value)) ? 0 : parseInt(value);

    dispatch(changedInput({ name, value, isError, errorMessage }));
};

export const changedInput = ({ name, value, isError, errorMessage }) => {
    return { type: types.INPUT_CHANGED, name, value, isError, errorMessage }
};