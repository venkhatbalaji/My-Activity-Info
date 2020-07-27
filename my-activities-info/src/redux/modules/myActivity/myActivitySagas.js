import { FETCH_ACTIVITY_INFO, FETCH_ACTIVITY_INFO_ASYNC } from './myActivity';
import { put, fork, takeLatest, all } from 'redux-saga/effects';

export function* fetchActivityWatcher() {
    yield takeLatest(FETCH_ACTIVITY_INFO_ASYNC, fetchActivityWorker);
};

export function* fetchActivityWorker() {
    const content = require('./mockResponse.json');
    if (content.ok) {
        yield put({
            type: FETCH_ACTIVITY_INFO,
            payload: {
                content: content.members,
            }
        });
    }
};

export default function* myActivitySagas() {
    yield all([
        fork(fetchActivityWatcher)
    ]);
}
