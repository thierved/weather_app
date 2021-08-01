import axios from 'axios';
import {API_KEY} from '../API_KEYS';
import { FETCH_WEATHER_DATA } from './actionsType';

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

export function fetchWeatherData(city) {
    console.log("called....")
    const url = `${ROOT_URL}${city}&appid=${API_KEY}`;
    
    return (dispatch) => {
        axios.get(url).then(data => {
            dispatch({
                type: FETCH_WEATHER_DATA,
                payload: data
            });
        });
    }    
}