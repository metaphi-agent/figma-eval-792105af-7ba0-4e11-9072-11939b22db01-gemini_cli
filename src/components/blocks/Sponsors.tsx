import React from 'react';

export const Sponsors: React.FC = () => {
  const sponsors = [
    { name: 'Apple', src: './assets/icons/5-36813.svg' },
    { name: 'Microsoft', src: './assets/icons/5-36818.svg' },
    { name: 'Slack', src: './assets/icons/5-36825.svg' },
    { name: 'Google', src: './assets/icons/5-36833.svg' },
  ];

  return (
    <section className="w-full bg-white py-[100px] px-4 lg:px-[220px] flex flex-col items-center gap-[100px]">
        <h2 className="text-5xl font-bold text-[#212529] text-center">Our sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-[100px]">
            {sponsors.map((sponsor) => (
                <img key={sponsor.name} src={sponsor.src} alt={sponsor.name} className="h-16 w-auto object-contain" />
            ))}
        </div>
    </section>
  );
};
