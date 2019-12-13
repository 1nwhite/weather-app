import { get } from '../helpers';
import { preloader } from '../index';
export const weatherBody = get('.weather-body');
export const errorContainer = document.createElement('div');

export const errorApi = () => {
    get('.weather-wrapper').classList.add('hidden');
    errorContainer.className = 'error-container';
    errorContainer.innerHTML = `<h3>Not found</h3>`;
    weatherBody.contains(errorContainer) ? true : weatherBody.appendChild(errorContainer);
    preloader.classList.add('hidden');
}