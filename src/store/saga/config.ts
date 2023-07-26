import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './userSaga';

export default function* rootSaga() {
  yield all([fetchUserSaga()]);
}
