import { combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
//Combine les différents reducers en un seul reducer
const rootReducer = combineReducers({
 counter: counterReducer,
}); export default rootReducer;
