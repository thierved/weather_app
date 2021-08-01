import { combineReducers } from 'redux';
import fetchDataReducer from './fetch_data_reducer';

const rootReducer = combineReducers({
    weatherData: fetchDataReducer
});

export default rootReducer;
