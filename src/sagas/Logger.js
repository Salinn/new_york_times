import { select, take } from 'redux-saga/effects'

function* logAllActions() {
    while(true) { 
        const action = yield take()
        const state = yield select()
        console.log('ACTION: ', action)
        console.log('STATE: ', state)
    }
}

export {
    logAllActions
}