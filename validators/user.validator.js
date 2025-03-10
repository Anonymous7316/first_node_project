import Joi from "joi";

/**
 * Validates user data against a schema.
 * Uses Joi validation to ensure the request body contains required name and role fields.
 * 
 * @param {Object} req - Express request object containing user data in body
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void} Sends 400 response if validation fails, calls next() if successful
 * 
 * @throws {Object} Returns 400 status with error message if validation fails
 */
export const validateUserData = async(req, res, next) => {
    const UserSchema = Joi.array().items(Joi.object(
        {
            name: Joi.string().required(),
            role: Joi.string().required()
        }));
    
    const dataValidation = await UserSchema.validate(req.body);
    if(dataValidation.hasOwnProperty('error')){
        res.status(400).send({message: dataValidation.error.details[0].message.split('\"').join('')});
    }
    else if(dataValidation.value){
        next();
    }
}
