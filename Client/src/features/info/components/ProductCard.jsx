// import { sampleProduct as product } from "../../products/data/productData.js";
import Button from "@/shared/components/Button";
import StarRating from "../../products/componets/StarRating";
import { FiShoppingCart } from "react-icons/fi";
import { PiEye } from "react-icons/pi";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className='group bg-slate-900/70 backdrop-blur-sm border border-slate-800/80 rounded-lg overflow-hidden shadow-lg hover:shadow-violet-500/20 transition-all duration-300'>
      {/* Thumbnail */}
      <div className='relative h-70 overflow-hidden bg-slate-800'>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent' />
        <span className='absolute top-2 left-2 bg-violet-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full'>
          {product.category}
        </span>
      </div>

      {/* Body */}
      <div className='p-4 space-y-3'>
        {/* Title */}
        <h3 className='text-sm font-bold text-white line-clamp-2 group-hover:text-violet-300 transition-colors'>
          {product.title}
        </h3>
        {/* Rating */}
        <div className='flex items-center gap-1.5'>
          <StarRating rating={product.rating} />
          <span className='text-xs font-semibold text-amber-400'>
            {product.rating}
          </span>
          <span className='text-xs text-slate-500'>
            ({product.reviews_count})
          </span>
        </div>

        {/* Price & Button */}
        <div className='flex items-center justify-between pt-4 border-t border-slate-700/50'>
          <div>
            <p className='text-lg font-bold text-violet-300'>
              ${product.price}
            </p>
          </div>
          <div
            className='w-fit'
            onClick={() => {
              console.log(product);

              navigate(product.preview_url);
            }}
          >
            <Button className='flex items-center justify-center'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
