import { all, fork } from 'redux-saga/effects';
import counter from './counterSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(counter),
    //   fork(counter) -- add all sagas like this
  ]);
}
