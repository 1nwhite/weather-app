import { get } from '../helpers';
import { checkHours, getSunTime, getDayWeek } from '../utils/timeHandlers';
import { forecastImg } from '../utils/imgForecast';
import { degToCard } from '../utils/convertingDegrees';

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

    render(data) {
        const { sys: { sunrise, sunset }, weather } = data;
        const [weatherData] = weather;
        const { hours: sunriseHours, minutes: sunriseMinutes } = getSunTime(sunrise);
        const { hours: sunsetHours, minutes: sunsetMinutes } = getSunTime(sunset);
        const { hours: currentHours, minutes: currentMinutes } = getSunTime(data.dt);
        const { date } = getDayWeek(data.dt);
        const { month } = getDayWeek(data.dt);

        this.city.innerHTML = `Weather in ${data.name}, ${data.sys.country}`;
        this.date.innerHTML = `${checkHours(currentHours)}:${checkHours(currentMinutes)} ${month} ${date}`;
        this.temp.innerHTML = `${forecastImg(weatherData.icon)} ${Math.round(data.main.temp - 273)} &deg;C`;
        this.desc.innerHTML = data.weather[0]['description'];
        this.wind.innerHTML = `${data.wind.speed} m/s, ${degToCard(data.wind.deg)} ( ${data.wind.deg} )`;
        this.pressure.innerHTML = `${data.main.pressure} hpa`;
        this.humidity.innerHTML = `${data.main.humidity} %`;
        this.sunrise.innerHTML = `0${sunriseHours}:${sunriseMinutes}`;
        this.sunset.innerHTML = `${sunsetHours}:${sunsetMinutes}`;
    }
}

