import { filterDays, getDateFromDt } from './timeHandlers'

export const futureDaysMap = (list) => filterDays(list).reduce((days, { dt, dt_txt, main, weather }) => {
    const day = getDateFromDt(dt_txt);
    !days[day] ? (days[day] = []) : days[day].push({ dt, dt_txt, main, weather });
    return days;
}, {});