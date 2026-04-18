import React from 'react'

const CTA = () => {
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='max-w-4xl mx-auto'>
          <div className='relative rounded-2xl overflow-hidden bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-600/20 backdrop-blur-sm p-8 sm:p-12 text-center'>
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
              <div className='absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10'>
              <h3 className='text-3xl sm:text-4xl font-black text-white mb-4'>
                Ready to Shop Premium Assets?
              </h3>
              <p className='text-slate-300 text-lg mb-8 max-w-2xl mx-auto'>
                Instant downloads, lifetime access, and commercial licenses. No
                subscriptions required. Own your digital products.
              </p>
              <button className='px-8 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/50'>
                Start Shopping Now
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTA