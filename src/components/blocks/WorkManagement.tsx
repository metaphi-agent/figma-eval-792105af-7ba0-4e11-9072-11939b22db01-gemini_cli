import React from 'react';
import { Button } from '../ui/Button';

export const WorkManagement: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-32 px-4 md:px-8 lg:px-32">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-24 lg:gap-32">
        
        {/* Block 1: Project Management */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-secondary text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
              Project Management
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <div className="pt-4">
              <Button variant="primary" size="lg" rightIcon={<span>&rarr;</span>}>
                Get Started
              </Button>
            </div>
          </div>
          <div className="bg-[#C4DEFD] w-full aspect-[4/3] rounded-lg"></div> 
          {/* Placeholder for missing asset, color picked from design */}
        </div>

        {/* Block 2: Work Together */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <div className="order-2 lg:order-1 bg-white border border-gray-100 shadow-xl w-full aspect-[4/3] rounded-lg p-8 flex items-center justify-center">
              <img src="./assets/images/feature-1.png" alt="Work Together" className="max-w-full h-auto" />
           </div>
           
           <div className="order-1 lg:order-2 flex flex-col gap-6">
            <h2 className="text-secondary text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
              Work together
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              With whitepace, share your notes with your colleagues and collaborate on them. Publish a note to the internet and share the URL with others.
            </p>
            <div className="pt-4">
              <Button variant="primary" size="lg" rightIcon={<span>&rarr;</span>}>
                Try it now
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};