import React from "react";
import { sampleProduct as product } from "../data/productData";
import { PiCheckBold } from "react-icons/pi";

const SuccessState = () => {
  return (
    <div className='bg-slate-900/80 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center gap-5'>
      <div className='w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center'>
        <PiCheckBold className="w-10 h-10 text-emerald-400"/>
      </div>
      <div>
        <h2 className='text-2xl font-bold text-white mb-2'>You're all set!</h2>
        <p className='text-slate-400 text-sm leading-relaxed max-w-sm'>
          Your account has been created and your purchase of{" "}
          <span className='text-violet-300 font-medium'>{product.title}</span>{" "}
          is being processed.
        </p>
      </div>
      <div className='w-full bg-slate-800/60 rounded-xl p-4 flex items-center justify-between'>
        <span className='text-sm text-slate-400'>Amount charged</span>
        <span className='text-lg font-bold text-violet-300'>
          ${product.price} {product.currency}
        </span>
      </div>
      <p className='text-xs text-slate-500'>
        A confirmation email will be sent to{" "}
        <span className='text-slate-300'>your email</span>
      </p>
    </div>
  );
};

export default SuccessState;
