import { get } from '../helpers';

const searchBtn = get('.weather-header-search__btn');
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

// searchBtn.addEventListener('click', getCity);

// document.onkeyup = function (e) {
//     e = e || window.event;
//     if (e.keyCode === 13) {
//         getCity()
//     }
//     return false;
// };

// export const 