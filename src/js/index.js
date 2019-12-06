'use strict';

import '../sass/main.sass';
import { fetchForecastForCity, fetchCurrentWeatherForCity, fetchForecastWithLocation, fetchCurrentWeatherWithLocation } from './api';
import CurrentWeather from './components/renderCurrent';
import ForecastTime from './components/forecastTime';
import ForecastDays from './components/forecastDays';
import { getLocation } from './utils/location';
import { futureDaysMap } from './utils/daysMap';
import { getCity } from './utils/getCity';

const currentWeather = new CurrentWeather();
const forecastTime = new ForecastTime();
const forecastDays = new ForecastDays();

getLocation((lat, lon) => {
    fetchCurrentWeatherWithLocation(lat, lon)
        .then(data => {
            currentWeather.render(data);
            return data;
        })
        .catch(err => console.error(err));
});

getLocation((lat, lon) => {
    fetchForecastWithLocation(lat, lon)
        .then(({ list }) => {
            const filteredList = futureDaysMap(list);
            forecastTime.render(list);
            forecastDays.render(filteredList);

            return list;
        })
        .catch(err => console.error(err));
});



