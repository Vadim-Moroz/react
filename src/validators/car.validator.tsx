import * as Joi from "joi";

const carValidator= Joi.object({
    brand: Joi.string().required().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({
        'string.pattern.base':'your brand not match pattern',
    }),
    price: Joi.number().integer().required().min(1).max(1000000).messages({
        'number.min':'min price is 1',
        'number.max':'max price is 10000000',
    }),
    year: Joi.number().integer().required().min(1990).max(2026).messages({
        'number.min':'min year is 1990',
        'number.max':'max year is 2026',
    }),
})
export {
    carValidator,
}
