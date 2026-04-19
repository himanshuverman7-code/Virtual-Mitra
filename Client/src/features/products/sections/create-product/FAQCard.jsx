import React from "react";

const FAQCard = ({ faq, onRemove, index }) => {
  return (
    <div className='border border-slate-700/60 rounded-xl overflow-hidden group animate-fadeIn'>
      <div className='px-5 py-4 flex items-start justify-between'>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-slate-200'>{faq.question}</p>
          <p className='text-xs text-slate-400 mt-1 leading-relaxed'>
            {faq.answer}
          </p>
        </div>
        <button
          type='button'
          onClick={() => onRemove(index)}
          className='p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-200 opacity-0 group-hover:opacity-100 shrink-0 ml-3'
        >
          <PiTrashBold className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
};

export default FAQCard;
