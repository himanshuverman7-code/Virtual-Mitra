import React from 'react'
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className='relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl' />
        </div>

        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <div className='inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-600/30 mb-8'>
            <FiTrendingUp className='text-violet-400 text-lg' />
            <span className='text-sm font-semibold text-violet-300'>
              Premium Digital Products
            </span>
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight'>
            Discover{" "}
            <span className='bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>
              High-Quality Digital Assets
            </span>
          </h1>

          <p className='text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Shop from our curated marketplace of design assets, templates, UI
            kits, and digital resources. Instant downloads, lifetime access, and
            commercial licenses included.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <button className='group relative px-8 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-violet-500/50'>
              Browse Products
              <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
            </button>
            <button className='px-8 py-3 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm'>
              View Categories
            </button>
          </div>
        </div>
      </section>
  )
}

export default Hero