import joi from "joi";

export const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.string().min(0.01).required(),
    image: joi.string().uri().required(),   
    description: joi.string().allow('').optional(),
});
