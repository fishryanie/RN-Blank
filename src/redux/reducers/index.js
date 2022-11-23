import {combineReducers} from 'redux';

import * as userReducers from './combineReducers/userReducers';
import * as tokenReducers from './combineReducers/tokenReducers';
import * as supportCenterReducers from './combineReducers/supportCenterReducers';

const rootReducer = combineReducers({
  ...userReducers,
  ...tokenReducers,
  ...supportCenterReducers,
});

export default rootReducer;
