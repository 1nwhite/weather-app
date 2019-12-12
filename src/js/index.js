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
import { errorApi } from './utils/error';

const searchBtn = get('.weather-header-search__btn');
const currentWeather = new CurrentWeather();
const forecastTime = new ForecastTime();
const forecastDays = new ForecastDays();


getLocation((lat, lon) => {
    Promise.all([
        fetchCurrentWeatherWithLocation(lat, lon),
        fetchForecastWithLocation(lat, lon),
        get('.preloader').style.display = 'flex'
    ])
        .then(([weatherMap, weatherListMap]) => {
            const filteredList = futureDaysMap(weatherListMap.list)

            currentWeather.render(weatherMap);
            forecastTime.render(weatherListMap.list);
            forecastDays.render(filteredList);
            get('.preloader').style.display = 'none';
        })
        .catch(err => errorApi())

})


searchBtn.addEventListener('click', function () {
    const cityName = getCity();
    Promise.all([
        fetchCurrentWeatherForCity(cityName),
        fetchForecastForCity(cityName),
        get('.preloader').style.display = 'flex'
    ])
        .then(([weatherMap, weatherListMap]) => {
            const filteredList = futureDaysMap(weatherListMap.list)

            currentWeather.render(weatherMap);
            forecastTime.render(weatherListMap.list);
            forecastDays.render(filteredList);
            get('.preloader').style.display = 'none';
        })
        .catch(err => errorApi())


});

document.addEventListener('keyup', function (e) {
    e = e || window.event;
    if (e.keyCode !== 13) {
        return false;
    }
    const cityName = getCity();
    Promise.all([
        fetchCurrentWeatherForCity(cityName),
        fetchForecastForCity(cityName),
        get('.preloader').style.display = 'flex'
    ])
        .then(([weatherMap, weatherListMap]) => {

            const filteredList = futureDaysMap(weatherListMap.list)

            currentWeather.render(weatherMap);
            forecastTime.render(weatherListMap.list);
            forecastDays.render(filteredList);
            get('.preloader').style.display = 'none';
        })
        .catch(err => errorApi())


});

slider('#days');
slider('#time');