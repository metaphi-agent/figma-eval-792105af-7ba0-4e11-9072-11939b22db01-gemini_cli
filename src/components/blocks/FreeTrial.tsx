import React from 'react';
import { Button } from '../ui/Button';

export const FreeTrial: React.FC = () => {
  return (
    <section className="bg-secondary py-16 md:py-32 px-4 md:px-8 lg:px-32 text-white text-center">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          Try Whitepace today
        </h2>
        <div className="flex flex-col gap-2 max-w-lg">
            <p className="text-white text-2xl font-light">
              Get started for free.
            </p>
            <p className="text-white text-2xl font-light">
                Add your whole team as your needs grow.
            </p>
        </div>
        
        <div className="pt-8">
          <Button variant="primary" size="lg" rightIcon={<span>&rarr;</span>}>
            Try Whitepace free
          </Button>
        </div>
        
        <p className="text-lg">
            On a big team? <a href="#" className="font-bold underline">Contact sales</a>
        </p>

        <div className="flex justify-center gap-8 pt-8 opacity-80">
            <img src="./assets/icons/apple.svg" className="h-8 w-auto invert brightness-0" alt="iOS" />
            <img src="./assets/icons/microsoft.svg" className="h-8 w-auto invert brightness-0" alt="Windows" />
            <img src="./assets/icons/google.svg" className="h-8 w-auto invert brightness-0" alt="Android" />
        </div>
      </div>
    </section>
  );
};