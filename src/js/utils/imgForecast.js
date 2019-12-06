export const forecastImg = (icon) => {
    const url = `https://openweathermap.org/img/wn/${icon}@2x.png`
    return `<img class='weather-forecast__img' src='${url}'>`
}