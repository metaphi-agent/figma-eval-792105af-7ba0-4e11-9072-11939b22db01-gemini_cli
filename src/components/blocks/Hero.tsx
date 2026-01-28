import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#043873] text-white py-[140px] px-4 lg:px-[220px] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <img src="./assets/images/5-34423.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-start gap-6">
                <h1 className="text-5xl lg:text-[64px] font-bold leading-tight">
                    Get More Done with whitepace
                </h1>
                <p className="text-lg text-[#F7F7F7] leading-relaxed max-w-xl">
                    Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>
                <Button variant="primary" size="lg" className="bg-[#4F9CF9] hover:bg-[#2F7CD9] text-white">
                    Try Whitepace free <span className="ml-2">→</span>
                </Button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
                <div className="w-full h-auto flex items-center justify-center">
                     <img 
                        src="./assets/images/5-34499.png" 
                        alt="Hero Illustration" 
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};
