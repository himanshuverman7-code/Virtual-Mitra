import React from "react";
import StarRating from "./StarRating";

const Testimonial = ({t}) => {
  return (
    <div
      key={t.name}
      className='bg-slate-800/50 border border-slate-700/40 rounded-xl p-4'
    >
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2.5'>
          <div className='w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white'>
            {t.name.charAt(0)}
          </div>
          <span className='text-sm font-semibold text-slate-200'>{t.name}</span>
        </div>
        <StarRating rating={t.rating} />
      </div>
      <p className='text-sm text-slate-400 pl-10 italic'>"{t.comment}"</p>
    </div>
  );
};

export default Testimonial;
