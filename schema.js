const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().trim().min(3).max(100).required(),

        description: Joi.string().trim().min(10).required(),

        location: Joi.string().trim().required(),

        country: Joi.string().trim().required(),

        price: Joi.number().min(0).required(),

        category: Joi.string().trim().required(),

        image: Joi.any()
    }).required()
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),

        comment: Joi.string().trim().min(2).max(1000).required()
    }).required()
});

module.exports = {
    listingSchema,
    reviewSchema
};