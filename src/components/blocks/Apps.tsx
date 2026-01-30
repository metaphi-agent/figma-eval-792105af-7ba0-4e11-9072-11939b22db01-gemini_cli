import React from 'react';
import { Button } from '../ui/Button';

export const Apps: React.FC = () => {
  return (
    <section className="bg-secondary py-16 md:py-32 px-4 md:px-8 lg:px-32 text-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image */}
        <div className="relative flex justify-center">
            <img src="./assets/images/apps-illustration.png" alt="Apps Integration" className="max-w-full h-auto" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
            Work with Your Favorite Apps
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" rightIcon={<span>&rarr;</span>}>
              Read more
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};