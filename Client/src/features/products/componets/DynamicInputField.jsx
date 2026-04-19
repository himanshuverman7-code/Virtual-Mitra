import React from "react";
import { PiPlusBold } from "react-icons/pi";
import SecondaryButton from "@/shared/components/SecondaryButton";

const InputField = ({ value, setValue, onClick, label, children }) => {
  return (
    <div className='flex items-end gap-2'>
      <div className='flex-1'>
        <label className='text-sm font-medium text-slate-300 block mb-1.5'>
          {label}
        </label>
        <input
          id='create-feature-input'
          type='text'
          value={value}
          onInput={(e) => setValue(e.target.value)}
          placeholder={children}
          className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
        />
      </div>
      <SecondaryButton type='button' onClick={onClick}>
        <PiPlusBold className='w-4 h-4' />
        Add
      </SecondaryButton>
    </div>
  );
};

export default InputField;
