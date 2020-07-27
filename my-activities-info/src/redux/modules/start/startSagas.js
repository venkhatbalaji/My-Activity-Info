import {
    LOGINPAGE_LANDED,
    LOGINPAGE_LANDED_ASYNC
} from './start.js';
import { put, fork, all, takeLatest } from 'redux-saga/effects';

export function* landedOnLoginWatcher() {
    yield takeLatest(LOGINPAGE_LANDED_ASYNC, landedOnLoginWorker)
}

export function* landedOnLoginWorker({ payload: { landed } }) {
    console.log(landed);
    yield put({
        type: LOGINPAGE_LANDED,
        payload: {
            landed
        }
    });
}

export default function* startSagas() {
    yield all([fork(landedOnLoginWatcher)]);
}