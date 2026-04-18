import React from "react";
import StarRating from "../../pages/componets/StarRating";
import Testimonial from "../../pages/componets/Testimonial";

const Testimonials = ({ product }) => {
  return (
    <div className='bg-slate-900/70 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-xl'>
      <h3 className='text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4'>
        What Customers Say
      </h3>
      <div className='space-y-4'>
        {product.testimonials.map((t) => (
          <Testimonial t={t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
