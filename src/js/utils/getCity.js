import { get } from '../helpers';
const searchInp = get('.weather-header-search__inp');
const searchWrap = get('.weather-header-search');

export const getCity = () => {
    if (!searchInp.value) {
        searchWrap.classList.add('error');
        return false;
    }

    searchWrap.classList.remove('error');
    return searchInp.value;
};