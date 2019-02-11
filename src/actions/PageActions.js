//Loads Action Types
import {
    TOGGLE_FULL_ARTICLE,
    CHANGE_PAGE,
    SET_PAGE,
} from './ActionTypes';
import { fetchArticles } from './ArticleActions'

//Actions
export const toggleFullArticle = ({ web_url }) => {

    return { type: TOGGLE_FULL_ARTICLE, web_url }
};

export const changePage = ({ pageName }) => {

    return { type: CHANGE_PAGE, pageName };
};

export const setPage = ({ page }) => {
    return { type: SET_PAGE, page }
};

//Thunks
export const changeSection = (props) => async dispatch => {
    const { pageName } = props

    dispatch(changePage({ pageName }));
    dispatch(fetchArticles());
};

export const searchInput = (props) => async dispatch => {
    const { searchTerm='' } = props

    await dispatch(changePage({ pageName: 'More', searchTerm }));
    await dispatch(fetchArticles());
};

export const nextSetOfArticles = () => (dispatch, getState) => {
    const {
        page: {
            pagination: {
                max,
                current
            }
        }
    } = getState()

    const newPage = (current < max) ? current + 1 : max;

    dispatch(setPage({ page: newPage }));
};

export const lastSetOfArticles = () => (dispatch, getState) => {
    const {
        page: {
            pagination: {
                min,
                current
            }
        }
    } = getState()

    const newPage = (current > min) ? current - 1 : min;

    dispatch(setPage({ page: newPage }));
};