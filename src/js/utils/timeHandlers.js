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
