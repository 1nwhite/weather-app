const getLocation = (success) => {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
            success(latitude, longitude);
        },
        error => success(51.51, -0.13)
    );
};

export { getLocation };