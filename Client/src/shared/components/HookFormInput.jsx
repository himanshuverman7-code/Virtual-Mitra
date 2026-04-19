import React from 'react'

const HookFormInput = ({ id, label, type = "text", placeholder, icon, error, registration, ...rest }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-slate-300">
      {label}
    </label>
    <div className="relative">
      {icon && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
          {icon}
        </span>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...registration}
        {...rest}
        className={`w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none
          focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200
          ${icon ? "pl-10" : ""}
          ${error ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20" : ""}`}
      />
    </div>
    {error && (
      <p className="text-xs text-rose-400">{error}</p>
    )}
  </div>
)

export default HookFormInput