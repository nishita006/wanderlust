const geocodeLocation = async (location, country) => {
    const token = process.env.MAPBOX_TOKEN;

    if (!token) {
        throw new Error("MAPBOX_TOKEN is missing in .env file.");
    }

    const query = `${location}, ${country}`;

    const url = new URL(
        "https://api.mapbox.com/search/geocode/v6/forward"
    );

    url.searchParams.set("q", query);
    url.searchParams.set("access_token", token);
    url.searchParams.set("limit", "1");

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Mapbox geocoding request failed.");
    }

    const data = await response.json();

    if (!data.features || data.features.length === 0) {
        throw new Error(
            `Location "${query}" could not be found. Please enter a valid location.`
        );
    }

    const coordinates = data.features[0].geometry.coordinates;

    return {
        type: "Point",
        coordinates: coordinates
    };
};

module.exports = geocodeLocation;