export const get = (selector, node = undefined) => (node && node.querySelector(selector)) || document.querySelector(selector);

export const getAll = (selector, node = undefined) => (node && node.querySelectorAll(selector)) || document.querySelectorAll(selector);

export const element = tag => document.createElement(tag);

export const sortWeatherByDay = (weather) => {
    const weatherCopy = JSON.parse(JSON.stringify(weather));
    weatherCopy.sort((a, b) => {
        return (a[0] - b[0]);
    })
    return weatherCopy;
}