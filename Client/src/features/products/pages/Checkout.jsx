import { lazy, useEffect, useState } from "react";
import useProduct from "@/features/products/hooks/useProduct";
import { useParams } from "react-router";
import FullPageLoader from "@/shared/components/Loader";
import NotFound from "@/shared/components/NotFound";
import OrderSummary from "@/features/products/sections/checkout/OrderSummary";

// Import Componets
const CheckoutForm = lazy(() => import("@/features/products/sections/checkout/CheckoutForm"));
const ChecoutHeader = lazy(() => import("@/features/products/sections/checkout/ChecoutHeader"));
const ProductCard = lazy(() => import("@/features/products/sections/checkout/ProductCard"));
const Testimonials = lazy(() => import("@/features/products/sections/checkout/Testimonials"));
// const SuccessState = lazy(() => import("@/features/products/sections/checkout/SuccessState"));
const FAQ = lazy(() => import("@/features/products/sections/checkout/FAQ"));

/* ─── Main Page ────────────────────────────────────────────── */
const Checkout = () => {
  const { id } = useParams();
  const { product, loading, handleGetProductById } = useProduct();
  useEffect(() => {
    handleGetProductById(id);
  }, []);
  if (loading) return <FullPageLoader />;
  if (!product) return <NotFound />;
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
        <ChecoutHeader product={product} />

        {/* Two-column layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          {/* ── LEFT: Product Panel ── */}
          <div className='lg:sticky lg:top-8'>
            <div className='bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden'>
              <OrderSummary product={product} />
              <CheckoutForm product={product} />
            </div>
          </div>

          {/* ── RIGHT: Registration Form ── */}
          <div className='space-y-6'>
            <ProductCard product={product} />
            <Testimonials product={product} />
            <FAQ product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
