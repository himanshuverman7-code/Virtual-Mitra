import Joi from "joi";

// Sub-schema for testimonials
const testimonialSchema = Joi.object({
  name: Joi.string().trim().min(1).required(),
  comment: Joi.string().trim().min(1).required(),
  rating: Joi.number().min(1).max(5).required(),
});

// Sub-schema for FAQ
const faqSchema = Joi.object({
  question: Joi.string().trim().min(1).required(),
  answer: Joi.string().trim().min(1).required(),
});

// Main Product Validation Schema
export const createProductSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  price: Joi.number().min(0).required(),
  currency: Joi.string().uppercase().trim().default("INR"),
  category: Joi.string().trim().min(1).required(),
  file_url: Joi.string().uri().required(),
  preview_url: Joi.string().required(),
  description: Joi.string().min(1).required(),
  features: Joi.array().items(Joi.string().trim()).default([]),
  includes: Joi.array().items(Joi.string().trim()).default([]),
  rating: Joi.number().min(0).max(5).default(0),
  reviews_count: Joi.number().min(0).default(0),
  testimonials: Joi.array().items(testimonialSchema).default([]),
  faq: Joi.array().items(faqSchema).default([]),
  is_active: Joi.boolean().default(true),
});

export const updateProductSchema = Joi.object({
  title: Joi.string().trim().min(1),
  price: Joi.number().min(0),
  currency: Joi.string().uppercase().trim(),
  category: Joi.string().trim().min(1),
  thumbnail: Joi.string().uri(),
  file_url: Joi.string(),
  preview_url: Joi.string().uri().required(),
  description: Joi.string().min(1),
  features: Joi.array().items(Joi.string().trim()),
  includes: Joi.array().items(Joi.string().trim()),
  rating: Joi.number().min(0).max(5),
  reviews_count: Joi.number().min(0),
  testimonials: Joi.array().items(testimonialSchema),
  faq: Joi.array().items(faqSchema),
  is_active: Joi.boolean(),
})
  .min(1)
  .options({ stripUnknown: true });
