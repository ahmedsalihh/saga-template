import { delay, put, takeEvery } from 'redux-saga/effects';
import { increaseCounter } from '../actions/counterActions';
import { INCREASE_COUNTER_ACTION_ASYNC } from '../types/counterActionTypes';

export function* incrementAsync() {
  yield delay(1000);
  yield put(increaseCounter());
}

export default function* watchIncrementAsync() {
  yield takeEvery(INCREASE_COUNTER_ACTION_ASYNC, incrementAsync);
}
