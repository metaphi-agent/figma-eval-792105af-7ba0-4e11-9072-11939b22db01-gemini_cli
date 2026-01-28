import React from 'react';
import { Button } from '../ui/Button';

export const AppsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#043873] text-white py-[140px] px-4 lg:px-[220px] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <img src="./assets/images/5-36842.png" alt="" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
             <div className="flex justify-center lg:justify-start">
                <img 
                    src="./assets/images/5-36909.png" 
                    alt="Apps illustration" 
                    className="w-full max-w-xl h-auto object-contain"
                />
            </div>
            
            <div className="flex flex-col items-start gap-6">
                <h2 className="text-5xl lg:text-[72px] font-bold leading-tight">
                    Work with Your Favorite Apps
                </h2>
                <p className="text-lg text-[#F7F7F7] leading-relaxed">
                    Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                </p>
                <Button variant="primary" size="lg" className="bg-[#4F9CF9] text-white mt-8">
                    Read more <span className="ml-2">→</span>
                </Button>
            </div>
        </div>
    </section>
  );
};
