import React from "react";

const Stats = () => {
  return (
    <section className='relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-slate-800/50'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
          {[
            { label: "Digital Products", value: "500+" },
            { label: "Active Buyers", value: "25K+" },
            { label: "Total Sales", value: "100K+" },
            { label: "Avg Rating", value: "4.9★" },
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <p className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2'>
                {stat.value}
              </p>
              <p className='text-slate-400 font-medium'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
