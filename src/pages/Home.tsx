import React from 'react';
import { Header } from '../components/blocks/Header';
import { Hero } from '../components/blocks/Hero';
import { WorkManagement } from '../components/blocks/WorkManagement';
import { CustomiseSection } from '../components/blocks/CustomiseSection';
import { YourWork } from '../components/blocks/YourWork';
import { YourData } from '../components/blocks/YourData';
import { Sponsors } from '../components/blocks/Sponsors';
import { AppsSection } from '../components/blocks/AppsSection';
import { Footer } from '../components/blocks/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <WorkManagement />
        <CustomiseSection />
        <YourWork />
        <YourData />
        <Sponsors />
        <AppsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
