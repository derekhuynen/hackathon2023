import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsers, fetchUsersSuccess } from '../slice/userSlice';
import { User } from 'types/user';
import { getUserService } from 'service/user-service';

export function* fetchUserSaga() {
  yield takeLatest(fetchUsers.type, handleGetUsers);
}

export function* handleGetUsers() {
  try {
    const response: Array<User> = yield call(getUserService);
    yield put(fetchUsersSuccess(response));
  } catch (err: any) {
    console.log(err);
  }
}
