import axios from 'axios';


let baseUrl = "http://localhost:5000/api/weather";

const getWeatherByLocation = (location) => {
    return axios.get(`${baseUrl}?location=${location}`);
}


export { getWeatherByLocation };