import joi from "joi";

export const flaworSchema = joi.object({
    name: joi.string().min(2).required()
    });
