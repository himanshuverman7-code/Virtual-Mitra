import React, { useState } from 'react'
import { PiArrowCircleDownLeftBold } from 'react-icons/pi';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-700/60 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-700/30 transition-colors duration-200"
      >
        <span className="text-sm font-medium text-slate-200">{question}</span>
        <PiArrowCircleDownLeftBold  className={`font-5xl w-5 h-5 text-violet-400 shrink-0 transition-transform duration-300 ${open ? "" : "rotate-45"}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-slate-700/60 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem