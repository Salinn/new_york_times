import * as types from '../actions/ActionTypes'
import { put, select, call } from 'redux-saga/effects'
import { getApiToken } from '../selectors'
import * as apiRoutes from '../api/ArticleAPI'

function* fetchApiRequest(props) {
    const apiRequestInfo = {
        ...props,
        START_REQUEST: types.FETCH_REQUEST_STARTED,
        END_REQUEST: types.FETCH_REQUEST_FINISHED
    }

    return yield call(makeApiRequest, apiRequestInfo)
}

function* infiniteScrollRequest(props) {
    const apiRequestInfo = {
        ...props,
        START_REQUEST: types.INFINITE_SCROLL_REQUEST_STARTED,
        END_REQUEST: types.INFINITE_SCROLL_REQUEST_FINISHED
    }

    return yield call(makeApiRequest, apiRequestInfo)
}

function* paginationApiRequest(props) {
    const apiRequestInfo = {
        ...props,
        START_REQUEST: types.PAGINATION_REQUEST_STARTED,
        END_REQUEST: types.PAGINATION_REQUEST_FINISHED
    }

    return yield call(makeApiRequest, apiRequestInfo)
}

function* makeApiRequest(props) {
    const {
        apiRequest,
        apiParams,
        START_REQUEST, 
        END_REQUEST 
    } = props

    try {
        yield put({ type: START_REQUEST })

        const { apiKey } = yield select(getApiToken)
        const apiParamsWithAccessToken = { ...apiParams, apiKey }

        const payload = yield call([apiRoutes, apiRequest], apiParamsWithAccessToken)
        
        return { response: payload }
    } catch(error) {
        return { error }
    } finally {
        yield put({ type: END_REQUEST })
    }
}

export {
    fetchApiRequest,
    infiniteScrollRequest,
    paginationApiRequest
}