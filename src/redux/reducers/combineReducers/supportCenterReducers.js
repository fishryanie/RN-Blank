import actions from '@redux/actions';
import {reducerDefault} from '@redux/common/reducers';

export const sendQuestion = (...props) => {
  return reducerDefault(...props, actions.SEND_QUESTION);
};
