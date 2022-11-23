import {put, select, takeLatest, call} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@redux/actions';
import {handleFormData} from '@utils';
import api from '@utils/api';

import {URL_API} from '../common';

function* sendQuestion(action) {
  const userToken = yield select(state => state.user.userToken);
  const body = yield handleFormData(action.body);

  try {
    yield api.postFormData(URL_API.supportCenter.sendQuestion, body, {
      user: userToken,
    });

    yield put({
      type: _onSuccess(action.type),
    });
    action.onSuccess?.();
  } catch (error) {
    action.onFail?.(error.data.message);
    yield put({type: _onFail(action.type)});
  }
}

export function* watchSupportCenterSagas() {
  yield takeLatest(actions.SEND_QUESTION, sendQuestion);
}
