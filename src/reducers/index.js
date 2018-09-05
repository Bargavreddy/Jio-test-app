import {combineReducers} from 'redux';
import {addFavPersonReducer} from './favitem.reducer';

const rootReducers = combineReducers({addFavP: addFavPersonReducer});

export default rootReducers;
