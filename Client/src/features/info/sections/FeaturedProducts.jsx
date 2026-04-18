import React from "react";
import useProduct from "@/features/products/hooks/useProduct";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "@/features/info/components/ProductCard";

const FeaturedProducts = () => {
  const { products } = useProduct();
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12'>
          <div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3'>
              Featured & Trending
            </h2>
            <p className='text-slate-400 text-lg'>
              Most popular digital products this week
            </p>
          </div>
          <a
            href='/products'
            className='inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold mt-4 sm:mt-0 transition-colors'
          >
            View All
            <FiArrowRight />
          </a>
        </div>

        {/* Products Grid */}
        {products ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {products.map((product, index) => (
              <div key={index} className='group relative'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300' />

                <div className='relative'>
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No products there!"
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
