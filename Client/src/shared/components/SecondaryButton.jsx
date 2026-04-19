import React from 'react'

const SecondaryButton = ({onClick, children, type}) => {
  return (
  <button
    type={type}
    onClick={onClick}
    className='h-11 px-4 bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 text-violet-400 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-sm font-medium'
  >
    {children}
  </button>
);
}

export default SecondaryButton