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

            const morningTemperatureToshow = morning ? Math.round(morning.main.temp - 273) : 'N/A';
            const dayTimeTemperatureToshow = daytime ? Math.round(daytime.main.temp - 273) : 'N/A';
            const eveningTemperatureToShow = evening ? Math.round(evening.main.temp - 273) : 'N/A';

            elem.innerHTML = (`
            <div class="weather-forecast-days-item-header">

                <h4 class="weather-forecast-days-item-header__day">${day}</h4>
                <h4 class="weather-forecast-days-item-header__date">${date}</h4>
                <h4 class="weather-forecast-days-item-header__month">${month}</h4>

            </div>

            <div class="weather-forecast-days-item-body">
                ${forecastImg(morning.weather[0]['icon'])}
                <p class='weather-forecast-days-item-body__desc'>${morning.weather[0]['description']}</p>
                <div class='weather-forecast-days-item-body-temp'>
                <span class='weather-forecast-days-item-body__temp weather-forecast-days-item-body__temp_morning'>${morningTemperatureToshow} &deg;C</span>
                <span class='weather-forecast-days-item-body__temp weather-forecast-days-item-body__temp_daytime'>${dayTimeTemperatureToshow} &deg;C</span>
                <span class='weather-forecast-days-item-body__temp weather-forecast-days-item-body__temp_evening'>${eveningTemperatureToShow} &deg;C</span>
                </div>
            </div>
            `);
        })
    }
}