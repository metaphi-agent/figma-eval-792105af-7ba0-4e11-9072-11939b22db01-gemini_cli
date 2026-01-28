import React from 'react';
import { FeatureSection } from '../ui/FeatureSection';

export const YourData: React.FC = () => {
  return (
    <FeatureSection
        title="100% your data"
        description="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
        imageSrc="./assets/images/5-36722.png"
        imageAlt="Data security illustration"
        bgColor="bg-white"
    />
  );
};
