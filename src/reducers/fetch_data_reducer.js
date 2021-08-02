import { FETCH_WEATHER_DATA } from '../actions/actionsType'

export default function fetchDataReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_WEATHER_DATA:
            return [action.payload.data];
        default:
            return state;
    }
}