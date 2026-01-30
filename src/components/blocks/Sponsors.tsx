import React from 'react';

export const Sponsors: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-32 text-center">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        <h2 className="text-secondary text-4xl md:text-5xl lg:text-[72px] font-bold">
          Our sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
          <img src="./assets/icons/apple.svg" alt="Apple" className="h-12 md:h-16 w-auto" />
          <img src="./assets/icons/microsoft.svg" alt="Microsoft" className="h-12 md:h-16 w-auto" />
          <img src="./assets/icons/slack.svg" alt="Slack" className="h-12 md:h-16 w-auto" />
          <img src="./assets/icons/google.svg" alt="Google" className="h-12 md:h-16 w-auto" />
        </div>
      </div>
    </section>
  );
};