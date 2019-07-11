import { combineReducers } from 'redux';
import PlanetReducer from './planetReducer';

const rootReducer = combineReducers({
  planets: PlanetReducer
});

export default rootReducer;
