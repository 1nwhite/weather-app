import { get, getAll, sortWeatherByDay } from '../helpers';
import { checkHours, getSunTime, getDayWeek } from '../utils/timeHandlers';
import { forecastImg } from '../utils/imgForecast';

export default class ForecastDays {
    constructor() {
        const container = get('.weather-forecast-days');

        this.items = getAll('.weather-forecast-days-item', container);
    }
    render(weather) {
        const weatherArray = sortWeatherByDay(Object.entries(weather));


        this.items.forEach((elem, i) => {

            const [, weatherByDay] = weatherArray[i];
            const [morning, , , daytime, , evening] = weatherByDay;
            const { date, day, month } = getDayWeek(morning.dt);
            const dayTimeTemperatureToshow = daytime ? Math.round(daytime.main.temp - 273) : 'N/A';
            const eveningTemperatureToShow = evening ? Math.round(evening.main.temp - 273) : 'N/A';

            elem.innerHTML = (`
            <div class="weather-forecast-days-item-header">

                <h3 class="weather-forecast-days-item-header__day">${day}</h3>
                <h3 class="weather-forecast-days-item-header__date">${date}</h3>
                <h3 class="weather-forecast-days-item-header__month">${month}</h3>

            </div>

            <div class="weather-forecast-days-item-body">
                ${forecastImg(daytime.weather[0]['icon'])}
                <p class='weather-forecast-days-item-body__desc'>${daytime.weather[0]['description']}</p>
                <span class='weather-forecast-days-item-body__temp weather-forecast-days-item-body__temp_morning'>${Math.round(morning.main.temp - 273)} &deg;C</span>
                <span class='weather-forecast-days-item-body__temp weather-forecast-days-item-body__temp_daytime'>${dayTimeTemperatureToshow} &deg;C</span>
                <span class='weather-forecast-days-item-body__temp weather-forecast-days-item-body__temp_evening'>${eveningTemperatureToShow} &deg;C</span>
            </div>
            `);
        })
    }
}