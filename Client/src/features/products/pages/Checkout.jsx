import { lazy, useState } from "react";
import { sampleProduct as product } from "../data/productData";

// Import Componets
const CheckoutForm = lazy(()=>import("../componets/CheckoutForm"));
const ChecoutHeader = lazy(()=>import("../componets/ChecoutHeader"));
const ProductCard = lazy(()=>import("../componets/ProductCard"));
const Testimonials = lazy(()=>import("../componets/Testimonials"));
const SuccessState = lazy(() => import("../componets/SuccessState"));
const FAQ = lazy(() => import("../componets/FAQ"));

/* ─── Main Page ────────────────────────────────────────────── */
const Checkout = () => {

  return (
    <div>
      {/* Background decorative blobs */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/5 rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 py-10 lg:py-16'>
        {/* Header */}
        <ChecoutHeader />

        {/* Two-column layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          {/* ── LEFT: Product Panel ── */}
          <div className='lg:sticky lg:top-8'>
            <div className='bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden'>
      <div>
        {/* Order Summary */}
          <div className='bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 space-y-2'>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-slate-400'>Product</span>
              <span className='text-slate-200 font-medium truncate max-w-[180px] text-right'>
                {product.title}
              </span>
            </div>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-slate-400'>Price</span>
              <span className='text-slate-200'>
                ${product.price} {product.currency}
              </span>
            </div>
            <div className='border-t border-slate-700/60 pt-2 flex justify-between items-center'>
              <span className='text-sm font-semibold text-white'>Total</span>
              <span className='text-lg font-extrabold text-violet-300'>
                ${product.price}
              </span>
            </div>
          </div>
              <CheckoutForm
                product={product}
              />
              </div>
    </div>
          </div>

          {/* ── RIGHT: Registration Form ── */}
          <div className='space-y-6'>
            {/* Product Card */}
            <ProductCard />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
