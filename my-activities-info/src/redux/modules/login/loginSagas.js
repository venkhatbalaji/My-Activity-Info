import {
    UPDATE_USER,
    UPDATE_USER_ASYNC
} from './login.js';
import { put, fork, takeLatest, all } from 'redux-saga/effects';

export function* updateLoginUserWatcher() {
    yield takeLatest(UPDATE_USER_ASYNC, updateLoginUserWorker)
}

export function* updateLoginUserWorker({ payload: { userName, isLoggedIn } }) {
    console.log(userName, isLoggedIn);
    yield put({
        type: UPDATE_USER,
        payload: {
            userName,
            isLoggedIn
        }
    });
}

export default function* loginSagas() {
    yield all([fork(updateLoginUserWatcher)]);
}