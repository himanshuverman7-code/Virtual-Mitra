import React from 'react'

const TestimonialsCard = ({ testimonial, onRemove, index }) => {
  return (
    <div className='bg-slate-800/50 border border-slate-700/40 rounded-xl p-4 group animate-fadeIn'>
        <div className='flex items-start justify-between mb-2'>
          <div className='flex items-center gap-2.5'>
            <div className='w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white'>
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <span className='text-sm font-semibold text-slate-200 block'>
                {testimonial.name}
              </span>
              <div className='flex items-center gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <PiStarBold
                    key={i}
                    className={`w-3 h-3 ${
                      i < testimonial.rating ? "text-amber-400" : "text-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <button
            type='button'
            onClick={() => onRemove(index)}
            className='p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-200 opacity-0 group-hover:opacity-100'
          >
            <PiTrashBold className='w-4 h-4' />
          </button>
        </div>
        <p className='text-sm text-slate-400 pl-10 italic'>
          &ldquo;{testimonial.comment}&rdquo;
        </p>
      </div>
  )
}

export default TestimonialsCard