document.addEventListener(
    "DOMContentLoaded",
    () => {

        const mapElement =
            document.getElementById("map");

        if (!mapElement) {
            return;
        }

        const token =
            window.wanderlustMapToken;

        if (!token) {
            console.error(
                "Mapbox token is missing."
            );

            return;
        }

        const longitude =
            Number(
                mapElement.dataset.longitude
            );

        const latitude =
            Number(
                mapElement.dataset.latitude
            );

        if (
            !Number.isFinite(longitude) ||
            !Number.isFinite(latitude)
        ) {
            console.error(
                "Invalid map coordinates."
            );

            return;
        }

        mapboxgl.accessToken = token;

        const map =
            new mapboxgl.Map({
                container: "map",

                style:
                    "mapbox://styles/mapbox/streets-v12",

                center: [
                    longitude,
                    latitude
                ],

                zoom: 12
            });

        map.addControl(
            new mapboxgl.NavigationControl(),
            "top-right"
        );

        new mapboxgl.Marker({
            color: "#fe424d"
        })
            .setLngLat([
                longitude,
                latitude
            ])
            .setPopup(
                new mapboxgl.Popup({
                    offset: 25
                }).setHTML(
                    "<strong>WanderLust Location</strong>"
                )
            )
            .addTo(map);
    }
);