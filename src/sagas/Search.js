import * as types from '../actions/ActionTypes'
import { put, takeEvery, throttle, all, select, call } from 'redux-saga/effects'
// import { getChatParams, getConversations, sendNewMessageParams } from '../selectors'
import { fetchCall } from './Fetch'

function* searchFor(props) {
    yield put({ type: types.CHANGE_PAGE, pageName: 'More' })
}