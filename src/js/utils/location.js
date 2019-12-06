const getLocation = (success, error) => {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
            success(latitude, longitude);
        }
    );
};

export { getLocation };