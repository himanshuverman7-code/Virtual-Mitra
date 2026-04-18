import React from 'react'
import { PiStarFill } from 'react-icons/pi';

const StarRating = ({ rating, size = "sm" }) => {
  const sz = size === "sm" ? "text-sm" : "text-base";
  return (
    <span className={`flex items-center gap-0.5 ${sz}`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <PiStarFill key={s} className={`w-4 h-4 ${
            s <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-600 text-slate-600"
          }`} />
      ))}
    </span>
  );
};

export default StarRating