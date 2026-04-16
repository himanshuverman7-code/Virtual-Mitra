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
              <CheckoutForm
                product={product}
              />
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
