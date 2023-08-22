import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().required(),
    adress: joi.string().required(),
    phone: joi.string().length(10,11)
});
