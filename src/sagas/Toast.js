import * as types from '../actions/ActionTypes'
import { put, takeEvery, delay, select, take } from 'redux-saga/effects'
import _ from 'lodash'

function* createToast(props) {
    const {
        message = 'Please Email Us at help@massmutual.com for help',
        color = 'info',
        delayedTime = 3000
    } = props

    const id = _.uniqueId()

    yield put({ type: types.CREATE_TOAST_MESSAGE, toast: { id, message, color } })
    yield delay(delayedTime)
    yield put({ type: types.REMOVE_TOAST_MESSAGE, id })
}

function* watchCreateToast() {
    yield takeEvery(types.NEW_TOAST, createToast)
}

export {
    watchCreateToast
}