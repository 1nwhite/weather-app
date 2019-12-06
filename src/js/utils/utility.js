export const checkHours = (value) => (value < 10 ? `0${value}` : value);

export const getSunTime = unixDate => {
    const sunDate = new Date(unixDate * 1000)

    return {
        hours: sunDate.getHours(),
        minutes: sunDate.getMinutes()
    };
}
