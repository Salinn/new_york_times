import { all } from 'redux-saga/effects'
import { watchFindArticles } from './Article'
import { watchForErrors } from './Error'
import { logAllActions } from './Logger'
import { watchCreateToast } from './Toast'
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchFindArticles(),
        watchForErrors(),
        logAllActions(),
        watchCreateToast(),
    ])
}