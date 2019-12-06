import { get } from '../helpers';
import { checkHours, getSunTime } from '../utils/utility';

export default class CurrentWeather {
    constructor() {
        const container = get('.weather-current');

        this.city = get('.weather-current__city', container);
        this.date = get('.weather-current__date', container);
        this.temp = get('.weather-current__temp', container);
        this.desc = get('.weather-current__desc', container);
        this.wind = get('.weather-widget-wind', container);
        this.pressure = get('.weather-widget-pressure', container);
        this.humidity = get('.weather-widget-humidity', container);
        this.sunrise = get('.weather-widget-sunrise', container);
        this.sunset = get('.weather-widget-sunset', container);
    }

    render(weather) {
        this.city.innerHTML = `Weather in ${weather.name}, ${weather.sys.country}`;
        this.date.innerHTML = `${checkHours(currentHours)}:${checkHours(currentMinutes)} ${month} ${date}`;

    }
}

