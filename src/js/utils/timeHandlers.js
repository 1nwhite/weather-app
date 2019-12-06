export const checkHours = (value) => (value < 10 ? `0${value}` : value);

export const getSunTime = unixDate => {
    const sunDate = new Date(unixDate * 1000)

    return {
        hours: sunDate.getHours(),
        minutes: sunDate.getMinutes()
    };
}

export const getDayWeek = unixDay => {
    const dayWeek = new Date(unixDay * 1000);
    // console.log(dayWeek);


    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    return {
        day: dayNames[dayWeek.getDay()],
        date: dayWeek.getDate(),
        month: monthNames[dayWeek.getMonth()]
    }

}


const parseDt = str => str.split(' ')[0];

const getCurrentStrDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getUTCFullYear();
    return `${year}-${month}-${day < 10 ? `0${day}` : day}`;
};

export const filterDays = (arr) => {
    const date = new Date();
    return arr.filter(elem => getCurrentStrDate(date) !== parseDt(elem.dt_txt));
}

export const getDateFromDt = dtText => parseDt(dtText).split('-').reverse()[0];
