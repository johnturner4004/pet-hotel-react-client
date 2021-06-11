import { combineReducers } from 'redux';
import getPets from './getPet.reducer'
import ownerListReducer from './ownerList.reducer';

const rootReducer = combineReducers({
  getPets,
  ownerListReducer,
});

export default rootReducer;
