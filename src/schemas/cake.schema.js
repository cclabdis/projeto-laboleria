import joi from "joi";

export const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.string()
    .regex(/^\d+(\.\d{1,2})?$/)
    .custom((value, helpers) => {
        if (parseFloat(value) <= 0) {
            return helpers.message('O preço deve ser maior que zero');
        }
        return value;
    })
    .required(),
    image: joi.string().uri().required(),
    description: joi.string().allow('').optional(),
    flavourId: joi.string().required()
});
