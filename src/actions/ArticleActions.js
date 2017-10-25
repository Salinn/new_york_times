//Loads Action Types
import * as types from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI';
import { actions } from 'component-calc-core'

export const fetchArticles = ({ searchFields, value='', currentPage='More' }) => async dispatch => {
    try {
        const updatedFields = { ...searchFields, q: value };

        let payload = await ArticleAPI.fetchArticles({ searchFields: updatedFields, currentPage });

        const stories = payload.data.response.docs;

        dispatch(actions.assocIn([{ path: ['articles', 'stories'], value: stories }]));
    } catch (error) {
        console.log(error)
    }
};

export const nextSetOfArticles = ({ page }) => dispatch => {
    const newPage = (page < 120) ? page + 1 : 120;

    dispatch(actions.assocIn([{ path: ['articles', 'searchFields', 'page'], value: newPage }]));
};
export const lastSetOfArticles = ({ page }) => dispatch => {
    const newPage = (page > 0) ? page - 1 : 0;

    dispatch(actions.assocIn([{ path: ['articles', 'searchFields', 'page'], value: newPage }]));
};

export const toggleFullArticle = ({ web_url }) => (dispatch, getState) => {
  let state = getState();
  let articles = state.get('articles').toJS();
    dispatch(actions.assocIn([
      { path: ['articles', 'fullArticle', 'web_url'], value: web_url },
      { path: ['articles', 'fullArticle', 'isOpen'], value: !articles.fullArticle.isOpen },
    ]));
};

export const changeArticles = ({ searchFields, pageName }) => async dispatch => {
    dispatch(actions.assocIn([{ path: ['articles', 'currentPage'], value: pageName }]));
    dispatch(fetchArticles({ searchFields, currentPage: pageName }));
};

export const changePage = ({ pageName }) => {
    return { type: types.CHANGE_PAGE, pageName };
};

export const searchInput = ({ searchFields, value }) => async dispatch => {
    dispatch(actions.assocIn([{ path: ['articles', 'currentPage'], value: 'More' }]));
    dispatch(fetchArticles({ searchFields, value }));
};
