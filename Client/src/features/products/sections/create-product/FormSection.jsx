import React from "react";

const FormSection = ({ icon, title, subtitle, children }) => {
  return (
    <div className='bg-slate-900/70 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-5'>
      <div className='flex items-center gap-3 pb-3 border-b border-slate-800/60'>
        <div className='w-9 h-9 rounded-xl bg-violet-600/20 flex items-center justify-center'>
          {icon}
        </div>
        <div>
          <h3 className='text-sm font-semibold text-slate-200'>{title}</h3>
          {subtitle && (
            <p className='text-xs text-slate-500 mt-0.5'>{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default FormSection;
