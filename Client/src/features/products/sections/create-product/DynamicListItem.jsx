import { PiCheckCircleBold, PiTrashBold } from "react-icons/pi";

const DynamicListItem = ({ value, onRemove, index }) => (
  <div className='flex items-center gap-2 group animate-fadeIn'>
    <div className='flex-1 bg-slate-800/60 border border-slate-700/70 rounded-xl px-4 py-2.5 text-sm text-slate-200 flex items-center gap-2'>
      <PiCheckCircleBold className='w-4 h-4 text-violet-400 shrink-0' />
      <span className='truncate'>{value}</span>
    </div>
    <button
      type='button'
      onClick={() => onRemove(index)}
      className='p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-200'
    >
      <PiTrashBold className='w-4 h-4' />
    </button>
  </div>
);

export default DynamicListItem;
