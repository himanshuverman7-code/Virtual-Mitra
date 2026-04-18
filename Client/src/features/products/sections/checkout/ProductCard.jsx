import StarRating from "@/features/products/componets/StarRating";
import { PiCheck, PiCheckCircleBold } from "react-icons/pi";

const ProductCard = ({ product }) => {
  return (
    <div className='bg-slate-900/70 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl'>
      {/* Thumbnail */}
      <div className='relative h-56 overflow-hidden bg-slate-800'>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='w-full h-full object-cover opacity-80'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <span className='absolute top-4 left-4 bg-violet-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full'>
          {product.category}
        </span>
        <div className='absolute bottom-4 left-4 right-4'>
          <div className='flex items-end justify-between gap-2'>
            <h1 className='text-xl font-bold text-white leading-tight'>
              {product.title}
            </h1>
            <div className='text-right shrink-0'>
              <p className='text-2xl font-extrabold text-violet-300'>
                ₹{product.price}
              </p>
              <p className='text-xs text-slate-400'>{product.currency}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className='p-6 space-y-5'>
        {/* Rating & Author */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <StarRating rating={product.rating} />
            <span className='text-sm font-semibold text-amber-400'>
              {product.rating}
            </span>
            <span className='text-xs text-slate-500'>
              ({product.reviews_count} reviews)
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 rounded-full bg-violet-700 flex items-center justify-center text-xs font-bold text-white'>
              V
            </div>
            <span className='text-xs text-slate-400'>Virtual Mitra</span>
          </div>
        </div>

        {/* Description */}
        <p className='text-sm text-slate-400 leading-relaxed'>
          {product.description}
        </p>

        {/* Features */}
        <div>
          <h3 className='text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3'>
            Features
          </h3>
          <ul className='space-y-2'>
            {product.features.map((f) => (
              <li
                key={f}
                className='flex items-start gap-2.5 text-sm text-slate-300'
              >
                <PiCheck />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Includes */}
        <div className='bg-slate-800/60 rounded-xl p-4'>
          <h3 className='text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3'>
            What's Included
          </h3>
          <div className='flex flex-wrap gap-2'>
            {product.includes.map((item) => (
              <span
                key={item}
                className='flex items-center gap-1.5 bg-slate-700/60 border border-slate-600/50 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg'
              >
                <PiCheckCircleBold />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
