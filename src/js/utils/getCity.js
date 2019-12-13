import { get } from '../helpers';
const searchInp = get('.weather-header-search__inp');

export const getCity = () => {
    if (!searchInp.value) {
        searchInp.classList.add('error');
        return 'London';
    }

    searchInp.classList.remove('error');
    return searchInp.value;
};