export const _onSuccess = action => action + '_SUCCESS';
export const _onFail = action => action + '_FAIL';
export const _onUnmount = action => action + '_UNMOUNT';

export default {
  //User
  GET_TOKEN: 'GET_TOKEN',
  UNMOUNT_USER: 'UNMOUNT_USER',
  SAVE_USER_INFO: 'SAVE_USER_INFO',
  SAVE_USER_TOKEN: 'SAVE_USER_TOKEN',
  GET_USER: 'GET_USER',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_PASS: 'UPDATE_PASS',
  UPDATE_AVATAR: 'UPDATE_AVATAR',
  SAVE_AVATAR: 'SAVE_AVATAR',
  LOG_OUT: 'LOG_OUT',
  SAVE_ACCOUNT: 'SAVE_ACCOUNT',

  //LoginScreen
  SIGN_IN_USER: 'SIGN_IN_USER',
  FORGET_PASS: 'FORGET_PASS',

  //RegisterScreen
  SIGN_UP_USER: 'SIGN_UP_USER',

  //Support Center
  SEND_QUESTION: 'SEND_QUESTION',
};
