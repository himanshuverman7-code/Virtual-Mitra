import mongoose from "mongoose";

const { Schema } = mongoose;

// Sub-schema for testimonials
const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  { _id: false }
);

// Sub-schema for FAQ
const faqSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

// Main Product Schema
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      uppercase: true,
      default: "INR",
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    preview_url: {
      type: String,
    },

    file_url: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    features: [
      {
        type: String,
        trim: true,
      },
    ],

    includes: [
      {
        type: String,
        trim: true,
      },
    ],

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    reviews_count: {
      type: Number,
      default: 0,
      min: 0,
    },

    testimonials: [testimonialSchema],

    faq: [faqSchema],

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;