import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().min(10).max(11)
});
