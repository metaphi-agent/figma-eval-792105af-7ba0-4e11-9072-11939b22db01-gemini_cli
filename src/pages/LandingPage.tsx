import React from 'react';
import { Navbar } from '../components/blocks/Navbar';
import { Hero } from '../components/blocks/Hero';
import { WorkManagement } from '../components/blocks/WorkManagement';
import { Extension } from '../components/blocks/Extension';
import { Customise } from '../components/blocks/Customise';
import { Pricing } from '../components/blocks/Pricing';
import { YourWork } from '../components/blocks/YourWork';
import { YourData } from '../components/blocks/YourData';
import { Sponsors } from '../components/blocks/Sponsors';
import { Apps } from '../components/blocks/Apps';
import { Testimonial } from '../components/blocks/Testimonial';
import { FreeTrial } from '../components/blocks/FreeTrial';
import { Footer } from '../components/blocks/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WorkManagement />
        <Extension />
        <Customise />
        <Pricing />
        <YourWork />
        <YourData />
        <Sponsors />
        <Apps />
        <Testimonial />
        <FreeTrial />
      </main>
      <Footer />
    </div>
  );
};