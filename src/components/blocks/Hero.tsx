import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="bg-secondary py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6 lg:gap-8 z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
            Get More Done with whitepace
          </h1>
          <p className="text-white/80 text-lg font-medium leading-relaxed max-w-xl">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" className="w-full md:w-auto" rightIcon={<span>&rarr;</span>}>
              Try Whitepace free
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10 flex justify-center lg:justify-end">
             {/* Using the exported hero image which is likely a placeholder or illustration */}
            <img 
              src="./assets/images/hero-image.png" 
              alt="Team collaboration" 
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl"
              width={824}
              height={549}
              loading="eager"
            />
        </div>
      </div>
      
      {/* Background decoration (Element 9:6482) - faint overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/assets/images/hero-bg-pattern.svg')] opacity-30 pointer-events-none"></div>
    </section>
  );
};