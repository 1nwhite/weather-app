import { get } from '../helpers';

export const errorApi = () => {
    const weatherBody = get('.weather-body')
    get('.weather-wrapper').style.display = 'none';
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-container';
    errorContainer.innerHTML = `<h3>Not found</h3>`;
    weatherBody.contains(get('.error-container')) ? true : weatherBody.appendChild(errorContainer);
    get('.preloader').style.display = 'none';
}