import * as types from '../actions/ActionTypes'
import { put, takeEvery, select, take, cancel, fork, call, delay } from 'redux-saga/effects'
import { getFetchArticleInfo } from '../selectors'
import { fetchApiRequest } from './Fetch'

function* fetchArticles(props) {
    const { currentPage, paginationPage, searchTerm } = yield select(getFetchArticleInfo)

    const apiRequest=`get${currentPage}Articles`
    const apiParams = { searchTerm, paginationPage }

    return yield call(fetchApiRequest, { apiRequest, apiParams })
}

function* findArticles(props) {
    const { response, error } = yield call(fetchArticles, props)
    
    if(response) {
        const stories = response.data.response.docs
        yield put({ type: types.NEW_TOAST, message: 'Succenn', color: 'success' })
        yield put({ type: types.FETCH_ARTICLES_SUCCESS, stories })
    } else {
        yield put({ type: types.ERROR_OCCURERED, error })
    }
}

function* watchFindArticles() {
    let task
    while (true) {
        yield take(types.FIND_ARTICLES)
        
        yield delay(2000)
        if (task) {
            yield cancel(task)
        }
        task = yield fork(findArticles)
    }
}

export {
    fetchArticles,
    watchFindArticles
}