import Joi from "joi";

export const validateUserData = async(req, res, next) =>{
    const UserSchema = Joi.object(
        {
            name:Joi.string().required(),
            role:Joi.string().required()
        });
    const dataValidation = await UserSchema.validate(req.body[0]);
    if(dataValidation.hasOwnProperty('error')){
        res.status(400).send({message:dataValidation.error.details[0].message});
    }
    else if(dataValidation.value){
        next();
    }
}