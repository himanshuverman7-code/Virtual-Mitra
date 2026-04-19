import React from 'react'

const ToggleSwitch = ({ checked, onChange, label, description }) => {
  return (
    <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-slate-200'>{label}</p>
          {description && (
            <p className='text-xs text-slate-500 mt-0.5'>{description}</p>
          )}
        </div>
        <button
          type='button'
          onClick={() => onChange(!checked)}
          className={`relative w-12 h-7 rounded-full transition-all duration-300 ${
            checked
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-600/30"
              : "bg-slate-700"
          }`}
        >
          <span
            className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
              checked ? "left-[calc(100%-1.625rem)]" : "left-0.5"
            }`}
          />
        </button>
      </div>
  )
}

export default ToggleSwitch