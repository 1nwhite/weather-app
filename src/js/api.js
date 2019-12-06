import { BASE_URL, APP_ID } from './constants';

const fetchForecastForCity = (cityName) => {
    const url = `${BASE_URL}/forecast?q=${cityName}&appid=${APP_ID}`;
    return fetch(url)
        .then(res => res.json());
};

const fetchCurrentWeatherForCity = (cityName) => {
    const url = `${BASE_URL}/weahter?q=${cityName}&appid=${APP_ID}`;
    return fetch(url)
        .then(res => res.json());
};

const fetchForecastWithLocation = (lat, lon) => {
    const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}`;
    return fetch(url)
        .then(res => res.json())
};

const fetchCurrentWeatherWithLocation = (lat, lon) => {
    const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}`;
    return fetch(url)
        .then(res => res.json())
};

export {
    fetchForecastForCity,
    fetchCurrentWeatherForCity,
    fetchForecastWithLocation,
    fetchCurrentWeatherWithLocation
};

