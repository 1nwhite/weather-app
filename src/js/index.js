'use strict';

import '../sass/main.sass';
import img from '../img/bird.png';
import { get } from './helpers';
import { fetchForecastForCity, fetchCurrentWeatherForCity, fetchForecastWithLocation, fetchCurrentWeatherWithLocation } from './api';
import CurrentWeather from './components/renderCurrent';
import ForecastTime from './components/renderForecastTime';
import { getLocation } from './utils/location';
import { checkHours } from './utils/timeHandlers';


getLocation((lat, lon) => {
    fetchCurrentWeatherWithLocation(lat, lon)
        .then(data => {
            // console.log(data);
            const currentWeather = new CurrentWeather();
            currentWeather.render(data);
        })
});

getLocation((lat, lon) => {
    fetchForecastWithLocation(lat, lon)
        .then(function ({ list }) {
            const forecastTime = new ForecastTime();
            forecastTime.render(list)
        })

})

