import { lazy } from "react";

const ProductCard = lazy(() => import("@/features/info/components/ProductCard"));
const Hero = lazy(() => import("@/features/info/sections/Hero"));
const FeaturedProducts = lazy(() => import("@/features/info/sections/FeaturedProducts"));
const Stats = lazy(() => import("@/features/info/sections/Stats"));
const CTA = lazy(() => import("@/features/info/sections/CTA"));

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Stats Section */}
      <Stats />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;
