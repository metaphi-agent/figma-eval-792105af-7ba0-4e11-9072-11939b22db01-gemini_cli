import React from 'react';
import { FeatureSection } from '../ui/FeatureSection';

export const WorkManagement: React.FC = () => {
  return (
    <>
      <FeatureSection
        title="Project Management"
        description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        bgColor="bg-white"
        // Placeholder for 5-34707 which was a colored block
        children={
            <div className="w-full h-[400px] bg-[#C4DEFD] rounded-lg"></div>
        }
      />
      
      <FeatureSection
        title="Work together"
        description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        imageSrc="./assets/images/5-34925.png"
        imageAlt="Work together illustration"
        reverse={true}
        bgColor="bg-white"
      />
    </>
  );
};
