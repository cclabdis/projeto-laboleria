import joi from "joi";

export const orderSchema = joi.object({
    quantity: joi.string().min(1).max(4).required()
    });
