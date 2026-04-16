import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().min(10).max(10).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().trim().email().required(),
});

export const otpSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  otp: Joi.string().trim().min(4).max(4).required(),
});