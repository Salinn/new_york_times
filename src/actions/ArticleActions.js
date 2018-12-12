//Loads Action Types
import * as types from './ActionTypes';
//Article API
import * as ArticleAPI from '../api/ArticleAPI';

export const fetchArticles = ({ searchFields }) => async (dispatch, getState) => {
    try {
        dispatch(fetchArticlesStarted());
        const { 
            articles: { 
                searchTerm,
            }, 
            meta: {
                currentPage,
                apiKey
            }
        } = getState()
        const updatedFields = { apiKey, q: searchTerm };

        let payload = await ArticleAPI.fetchArticles({ searchFields: updatedFields, currentPage });

        const stories = payload.data.response.docs;

        dispatch(fetchArticlesSuccess({ stories }));
    } catch (error) {
        dispatch(fetchArticlesFailed());
    }
};

export const changeSearchTerm = ({ value }) => (dispatch, getState) => {
    dispatch({ type: types.CHANGED_SEARCH_TERM, value })
}

export const nextSetOfArticles = () => (dispatch, getState) => {
    const { meta: { paginationPage } } = getState()

    const newPage = (paginationPage < 120) ? paginationPage + 1 : 120;

    dispatch(setPage({ page: newPage }));
};
export const lastSetOfArticles = () => (dispatch, getState) => {
    const { meta: { paginationPage } } = getState()

    const newPage = (paginationPage > 0) ? paginationPage - 1 : 0;

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

export const changeArticles = ({ pageName }) => async dispatch => {
    await dispatch(changePage({ pageName }));
    await dispatch(newToast({ color: 'success', message: `Sucessfull fetched articles from ${pageName}`}));
};

export const changePage = ({ pageName }) => {
    return { type: types.CHANGE_PAGE, pageName };
};

export const searchTermChanged = ({ value }) => dispatch => {
    dispatch({ type: types.CHANGED_SEARCH_TERM, value })
}

export const newToast = ({ message, color }) => {
    return { type: types.NEW_TOAST, message, color }
}

export const searchInput = ({ value }) => async dispatch => {
    await dispatch(changePage({ pageName: 'More' }));
    await dispatch(changeSearchTerm({ value }))
    await dispatch(fetchArticles());
};