import React from 'react';
import { Button } from '../ui/Button';

export const YourWork: React.FC = () => {
  return (
    <section className="bg-secondary py-16 md:py-32 px-4 md:px-8 lg:px-32 text-white text-center">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          Your work, everywhere you are
        </h2>
        <p className="text-white/80 text-lg max-w-3xl leading-relaxed">
          Access your notes from your computer, phone or tablet. Sync with other apps in real-time.
        </p>
        <div className="pt-8">
          <Button variant="primary" size="lg" rightIcon={<span>&rarr;</span>}>
            Try Whitepace free
          </Button>
        </div>
      </div>
    </section>
  );
};