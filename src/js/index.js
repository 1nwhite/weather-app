'use strict';

import '../sass/main.sass';
import { get } from './helpers';
import { fetchForecastForCity, fetchCurrentWeatherForCity, fetchForecastWithLocation, fetchCurrentWeatherWithLocation } from './api';
import CurrentWeather from './components/weather-current-render';
import { getLocation } from './utils/location';
import { checkHours } from './utils/utility';


getLocation((lat, lon) => {
    fetchCurrentWeatherWithLocation(lat, lon)
        .then(weather => {
            console.log(weather);
            const currentWeather = new CurrentWeather();
            currentWeather.render(weather);
        })
});

