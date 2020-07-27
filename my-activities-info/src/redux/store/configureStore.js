import _ from 'lodash';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as sagas from '../modules/sagas';
import rootReducer from '../modules/index';

const sagaMiddleWare = createSagaMiddleware();

export default function configureStore(initialState){
    let store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(sagaMiddleWare)),
    );
    _.values(sagas).forEach(sagaMiddleWare.run);
    return store;
}