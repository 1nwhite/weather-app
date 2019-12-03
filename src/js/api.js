import { BASE_URL, APP_ID } from './constants';

const fetchForecastForCity = (cityName) => {
    const url = `${BASE_URL}/forecast?q=${cityName}&appid=${APP_ID}`;
    return fetch(url)
        .then(res => res.json());
};

const fetchCurrentWeatherForCity = (cityName) => { };

const fetchForecastWithLocation = ({ lat, lon }) => { }

const fetchCurrentWeatherWithLocation = ({ lat, lon }) => { }

export {
    fetchForecastForCity,
    fetchCurrentWeatherForCity,
    fetchForecastWithLocation,
    fetchCurrentWeatherWithLocation
};