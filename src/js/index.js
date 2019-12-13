'use strict';

import '../sass/main.sass';
import { get } from './helpers';
import { fetchForecastForCity, fetchCurrentWeatherForCity, fetchForecastWithLocation, fetchCurrentWeatherWithLocation } from './api';
import CurrentWeather from './components/renderCurrent';
import ForecastTime from './components/forecastTime';
import ForecastDays from './components/forecastDays';
import { getLocation } from './utils/location';
import { futureDaysMap } from './utils/daysMap';
import { getCity } from './utils/getCity';
import { slider } from './utils/slider';
import { errorApi, weatherBody, errorContainer } from './utils/error';

const searchBtn = get('.weather-header-search__btn');
const weatherWrapper = get('.weather-wrapper');
export const preloader = get('.preloader');

const currentWeather = new CurrentWeather();
const forecastTime = new ForecastTime();
const forecastDays = new ForecastDays();


getLocation((lat, lon) => {
    preloader.classList.remove('hidden');
    weatherWrapper.classList.remove('hidden');
    weatherBody.contains(errorContainer) ? weatherBody.removeChild(errorContainer) : false;

    Promise.all([
        fetchCurrentWeatherWithLocation(lat, lon),
        fetchForecastWithLocation(lat, lon),
    ])
        .then(([weatherMap, weatherListMap]) => {
            const filteredList = futureDaysMap(weatherListMap.list)

            currentWeather.render(weatherMap);
            forecastTime.render(weatherListMap.list);
            forecastDays.render(filteredList);

            preloader.classList.add('hidden');
        })
        .catch(err => errorApi())
})


searchBtn.addEventListener('click', function () {
    const cityName = getCity();
    preloader.classList.remove('hidden');
    weatherWrapper.classList.remove('hidden');
    weatherBody.contains(errorContainer) ? weatherBody.removeChild(errorContainer) : false;

    Promise.all([
        fetchCurrentWeatherForCity(cityName),
        fetchForecastForCity(cityName),
    ])
        .then(([weatherMap, weatherListMap]) => {
            const filteredList = futureDaysMap(weatherListMap.list)

            currentWeather.render(weatherMap);
            forecastTime.render(weatherListMap.list);
            forecastDays.render(filteredList);


            preloader.classList.add('hidden');
        })
        .catch(err => errorApi())
});

document.addEventListener('keyup', function (e) {
    e = e || window.event;
    if (e.keyCode !== 13) {
        return false;
    }
    const cityName = getCity();
    preloader.classList.remove('hidden');
    weatherWrapper.classList.remove('hidden');
    weatherBody.contains(errorContainer) ? weatherBody.removeChild(errorContainer) : false;

    Promise.all([
        fetchCurrentWeatherForCity(cityName),
        fetchForecastForCity(cityName),

    ])
        .then(([weatherMap, weatherListMap]) => {

            const filteredList = futureDaysMap(weatherListMap.list)

            currentWeather.render(weatherMap);
            forecastTime.render(weatherListMap.list);
            forecastDays.render(filteredList);

            preloader.classList.add('hidden');
        })
        .catch(err => errorApi())
});

slider('#days');
slider('#time');