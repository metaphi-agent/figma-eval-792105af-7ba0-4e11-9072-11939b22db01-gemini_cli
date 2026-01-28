import React from 'react';
import { Button } from './Button';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  bgColor?: string;
  children?: React.ReactNode;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  bgColor = 'bg-white',
  children
}) => {
  return (
    <section className={`w-full ${bgColor} py-[140px] px-4 lg:px-[220px]`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center`}>
             <div className={`flex flex-col items-start gap-6 ${reverse ? 'lg:order-2' : ''}`}>
                <h2 className="text-5xl lg:text-[72px] font-bold leading-tight text-[#212529]">
                    {title}
                </h2>
                <p className="text-lg text-[#212529] leading-relaxed">
                    {description}
                </p>
                <Button variant="primary" size="lg" className="bg-[#4F9CF9] text-white mt-8">
                    Get Started <span className="ml-2">→</span>
                </Button>
            </div>
             <div className={`flex justify-center ${reverse ? 'lg:order-1' : ''}`}>
                {imageSrc ? (
                    <img 
                        src={imageSrc} 
                        alt={imageAlt || ''} 
                        className="w-full max-w-xl h-auto object-contain"
                    />
                ) : children}
            </div>
        </div>
    </section>
  );
};
