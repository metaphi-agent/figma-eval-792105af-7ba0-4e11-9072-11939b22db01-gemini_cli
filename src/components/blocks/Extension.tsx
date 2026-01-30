import React from 'react';
import { Button } from '../ui/Button';

export const Extension: React.FC = () => {
  return (
    <section className="bg-secondary py-16 md:py-32 px-4 md:px-8 lg:px-32 text-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
            Use as Extension
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" rightIcon={<span>&rarr;</span>}>
              Let's Go
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="bg-[#C4DEFD] w-full aspect-[4/3] rounded-lg flex items-center justify-center">
             {/* Using feature-2 which seemed to be the 2nd illustration */}
             <img src="./assets/images/feature-2.png" alt="Extension" className="max-w-full h-auto" />
        </div>

      </div>
    </section>
  );
};