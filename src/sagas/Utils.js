import { take, call, delay } from 'redux-saga/effects'


function* takeAndWait(props) {
    const { type, callback, waitTime = 2000 } = props

    while(true) {
        yield take(type)
        yield call(callback)
        yield delay(waitTime)
    }
}

export {
    takeAndWait
}