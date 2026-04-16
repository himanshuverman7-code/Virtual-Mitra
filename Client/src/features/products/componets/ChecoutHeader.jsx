import React from "react";
import { PiLockFill, PiPlusBold } from "react-icons/pi";

const ChecoutHeader = () => {
  return (
    <div className='mb-10 flex items-center gap-3'>
      <div className='w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center'>
        <PiPlusBold className="w-4 h-4 text-white"/>
      </div>
      <span className='text-sm font-semibold text-slate-400 tracking-widest uppercase'>
        Secure Checkout
      </span>
      <div className='ml-auto flex items-center gap-2 text-xs text-slate-500'>
        <PiLockFill className="w-4 h-4 text-emerald-400"/>
        <span className='text-emerald-400 font-medium'>SSL Encrypted</span>
      </div>
    </div>
  );
};

export default ChecoutHeader;
