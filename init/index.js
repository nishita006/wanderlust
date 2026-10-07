require("dotenv").config();

const mongoose = require("mongoose");

const Listing =
    require("../models/listing.js");

const initData =
    require("./data.js");

const geocodeLocation =
    require("../utils/geocode.js");

const MONGO_URL =
    process.env.ATLASDB_URL ||
    "mongodb://127.0.0.1:27017/wanderlust";


async function main() {

    await mongoose.connect(
        MONGO_URL
    );

    console.log(
        "Connected to DB for initialization."
    );

    await initDB();

    await mongoose.connection.close();

    console.log(
        "Database connection closed."
    );
}


async function initDB() {

    await Listing.deleteMany({});

    const listings =
        [];

    for (
        const item of initData.data
    ) {

        const listing =
            {
                ...item,

                category:
                    item.category ||
                    "Trending"
            };

        if (
            process.env.MAPBOX_TOKEN &&
            listing.location &&
            listing.country
        ) {

            try {

                listing.geometry =
                    await geocodeLocation(
                        listing.location,
                        listing.country
                    );

            } catch (error) {

                console.log(
                    `Could not geocode ${listing.location}: ${error.message}`
                );

            }

        }

        listings.push(listing);
    }

    await Listing.insertMany(
        listings
    );

    console.log(
        `${listings.length} listings inserted.`
    );
}


main().catch((err) => {

    console.error(
        "Initialization failed:",
        err
    );

    process.exit(1);

});