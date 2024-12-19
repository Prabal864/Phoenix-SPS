import { NextFunction, Request, Response } from "express";
import { body,ValidationChain, validationResult } from "express-validator";


export const validate = (validations: ValidationChain[] ) => {
    return async (req: Request, res: Response, next : NextFunction) => {
        for(const validation of validations){
            const result = await validation.run(req);
            if(!result.isEmpty()){
                break;
            }
           
        }
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        res.status(422).json({errors:errors.array()});
    };
};


export const loginValidator = [
   
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({min:6}).withMessage("Password should Contain atleast 6 Characters"),
];

export const signupValidator = [
    body("name").notEmpty().withMessage("Name is Required"),
    ...loginValidator,
];

export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is Required"),
];

