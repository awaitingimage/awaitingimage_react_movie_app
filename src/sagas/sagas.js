import { takeLatest, call, put, all } from "redux-saga/effects";
import {watcherSaga} from './movieSaga';

export default function* rootSaga() {
    yield all([
        watcherSaga()
    ])
  }