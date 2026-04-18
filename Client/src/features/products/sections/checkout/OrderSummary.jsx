import React from "react";

const OrderSummary = ({ product }) => {
  return (
    <div className='bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 space-y-2'>
      <div className='flex justify-between items-center text-sm'>
        <span className='text-slate-400'>Product</span>
        <span className='text-slate-200 font-medium truncate max-w-[180px] text-right'>
          {product.title}
        </span>
      </div>
      <div className='flex justify-between items-center text-sm'>
        <span className='text-slate-400'>Price</span>
        <span className='text-slate-200'>
          ₹{product.price} {product.currency}
        </span>
      </div>
      <div className='border-t border-slate-700/60 pt-2 flex justify-between items-center'>
        <span className='text-sm font-semibold text-white'>Total</span>
        <span className='text-lg font-extrabold text-violet-300'>
          ₹{product.price}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
