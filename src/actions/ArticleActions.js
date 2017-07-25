//Loads Action Types
import * as types from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI.prod';

export const fetchArticles = ({ search }) => async dispatch => {
    try {
        dispatch(fetchArticlesStarted());
        let payload = await ArticleAPI.fetchArticles({ search });

        const { docs } = payload.data.response;

        dispatch(fetchArticlesSuccess({ stories: docs }));
    } catch (error) {
        console.log(error);
        dispatch(fetchArticlesFailed());
    }
};

export const nextSetOfArticles = ({ search }) => dispatch => {
    const newPage = (search.page < 120) ? search.page + 1 : 120;

    dispatch(setPage({ page: newPage }));
    dispatch(fetchArticles({ search }));
};
export const lastSetOfArticles = ({ search }) => dispatch => {
    const newPage = (search.page > 0) ? search.page - 1 : 0;

    dispatch(setPage({ page: newPage }));
    dispatch(fetchArticles({ search }));
};

export const setPage = ({ page }) => {
    return { type: types.SET_PAGE, page }
};

export const fetchArticlesStarted = () => { return { type: types.FETCH_ARTICLES_STARTED } };
export const fetchArticlesSuccess = ({ stories }) => { return { type: types.FETCH_ARTICLES_SUCCESS, stories } };
export const fetchArticlesFailed = () => { return { type: types.FETCH_ARTICLES_FAILED} };

export const toggleFullArticle = ({ web_url }) => { return { type: types.TOGGLE_FULL_ARTICLE, web_url } };