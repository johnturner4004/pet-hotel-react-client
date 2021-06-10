import { combineReducers } from 'redux';
import getPets from './getPet.reducer'

const rootReducer = combineReducers({
  getPets,
});

export default rootReducer;
