import { createStore } from 'redux';
import rootReducer from './rootReducer';
//créer un store avec la fonction createStore en fonction du reducer 
const store = createStore(rootReducer);
export default store;
