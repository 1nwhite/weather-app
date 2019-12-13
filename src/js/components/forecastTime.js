import { get, getAll } from '../helpers';
import { forecastImg } from '../utils/imgForecast';
import { checkHours, getSunTime, getDayWeek } from '../utils/timeHandlers';


export default class ForecastTime {
    constructor() {
        const container = get('.weather-forecast-time');

        this.items = getAll('.weather-forecast-time-item', container);
    }
    render(list) {
        this.items.forEach((elem, i) => {
            const { dt: forecastDate, weather, main, wind } = list[i];
            const [weatherData] = weather;
            const { hours } = getSunTime(forecastDate);

            elem.innerHTML = (`
                <h5 class="weather-forecast-time-item__hours">${checkHours(hours)}:00</h5>
                <h4 class="weather-forecast-time-item__temp">
                    ${forecastImg(weatherData.icon)} 
                    ${Math.round(main.temp - 273)} &deg;C
                </h4>
                <h5 class="weather-forecast-time-item__wind">${wind.speed} m/s,</h5>
                <h5 class="weather-forecast-time-item__pressure">${main.pressure}</h5>
            `)
        })

    }
}