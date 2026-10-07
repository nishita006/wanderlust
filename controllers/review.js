const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.createReview = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        throw new ExpressError(
            404,
            "Listing not found."
        );
    }

    const newReview = new Review(
        req.body.review
    );

    newReview.author = req.user._id;

    listing.reviews.push(newReview._id);

    await newReview.save();
    await listing.save();

    req.flash(
        "success",
        "Review added successfully!"
    );

    res.redirect(`/listings/${id}`);
};

module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        throw new ExpressError(
            404,
            "Listing not found."
        );
    }

    await Listing.findByIdAndUpdate(
        id,
        {
            $pull: {
                reviews: reviewId
            }
        }
    );

    await Review.findByIdAndDelete(reviewId);

    req.flash(
        "success",
        "Review deleted successfully!"
    );

    res.redirect(`/listings/${id}`);
};