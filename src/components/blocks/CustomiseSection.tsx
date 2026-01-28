import React from 'react';
import { FeatureSection } from '../ui/FeatureSection';

export const CustomiseSection: React.FC = () => {
  return (
    <FeatureSection
      title="Customise it to your needs"
      description="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
      imageSrc="./assets/images/5-36296.png"
      imageAlt="Customise illustration"
      bgColor="bg-white"
      reverse={true}
    />
  );
};
