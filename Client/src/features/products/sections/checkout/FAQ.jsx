// import { sampleProduct as product } from "../data/productData";
import React from "react";
import FAQItem from "../../pages/componets/FAQItem";

const FAQ = ({ product }) => {
  return (
    <div className='bg-slate-900/70 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-xl'>
      <h3 className='text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4'>
        Frequently Asked Questions
      </h3>
      <div className='space-y-3'>
        {product.faq.map((f) => (
          <FAQItem key={f.question} question={f.question} answer={f.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
