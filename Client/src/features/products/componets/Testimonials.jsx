import React from "react";
import StarRating from "./StarRating";

const Testimonials = ({product}) => {
  return (
    <div className='bg-slate-900/70 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-xl'>
      <h3 className='text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4'>
        What Customers Say
      </h3>
      <div className='space-y-4'>
        {product.testimonials.map((t) => (
          <div
            key={t.name}
            className='bg-slate-800/50 border border-slate-700/40 rounded-xl p-4'
          >
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center gap-2.5'>
                <div className='w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white'>
                  {t.name.charAt(0)}
                </div>
                <span className='text-sm font-semibold text-slate-200'>
                  {t.name}
                </span>
              </div>
              <StarRating rating={t.rating} />
            </div>
            <p className='text-sm text-slate-400 pl-10 italic'>"{t.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
