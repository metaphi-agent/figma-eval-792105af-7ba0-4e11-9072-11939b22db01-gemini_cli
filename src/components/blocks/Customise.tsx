import React from 'react';
import { Button } from '../ui/Button';

export const Customise: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-32 px-4 md:px-8 lg:px-32">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image */}
        <div className="bg-[#C4DEFD] w-full aspect-[4/3] rounded-lg"></div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-secondary text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
            Customise it to your needs
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" rightIcon={<span>&rarr;</span>}>
              Let's Go
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};