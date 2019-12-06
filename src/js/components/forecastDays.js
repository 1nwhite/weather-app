import { get, getAll, sortWeatherByDay } from '../helpers';
import { checkHours, getSunTime, getDayWeek } from '../utils/timeHandlers';
import { forecastImg } from '../utils/imgForecast';

export default class ForecastDays {
    constructor() {
        const container = get('.weather-forecast-days');

        this.items = getAll('.weather-forecast-days-items', container);
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
            <div class="weather-forecast-days-header">

                <h3 class="weather-days-block__day">${day}</h3>
                <h3 class="weather-days-block__date">${date}</h3>
                <h3 class="weather-days-block__month">${month}</h3>

            </div>

            <div class="weather-forecast-days-body">
                ${forecastImg(daytime.weather[0]['icon'])}
                <p class='desc'>${daytime.weather[0]['description']}</p>
                <span class='morning'>${Math.round(morning.main.temp - 273)} &deg;C</span>
                <span class='daytime'>${dayTimeTemperatureToshow} &deg;C</span>
                <span class='evening'>${eveningTemperatureToShow} &deg;C</span>
            </div>
            `);
        })
    }
}