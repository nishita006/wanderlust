const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        url: String,
        filename: String
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    location: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    category: {
        type: String,
        default: "Trending"
    },

    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },

        coordinates: {
            type: [Number],
            default: undefined
        }
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.index({
    title: "text",
    location: "text",
    country: "text"
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({
            _id: {
                $in: listing.reviews
            }
        });
    }
});

module.exports = mongoose.model("Listing", listingSchema);