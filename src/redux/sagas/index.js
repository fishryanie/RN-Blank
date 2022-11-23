import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './watchSagas/userSagas';
import {watchTokenSagas} from './watchSagas/tokenSagas';
import {watchSupportCenterSagas} from './watchSagas/supportCenterSagas';

export default function* rootSaga() {
  yield all([
    fork(watchTokenSagas),
    fork(watchUserSagas),
    fork(watchSupportCenterSagas),
  ]);
}
