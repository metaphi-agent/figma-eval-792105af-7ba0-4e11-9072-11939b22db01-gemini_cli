import React from 'react';
import { Button } from '../ui/Button';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, isHighlighted = false }) => {
  return (
    <div className={`p-8 rounded-xl border flex flex-col gap-6 transition-all duration-300 ${
      isHighlighted 
        ? 'bg-secondary text-white border-secondary shadow-2xl scale-105 transform z-10' 
        : 'bg-white text-gray-900 border-yellow-400/20 shadow-lg'
    }`}>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">{plan}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${isHighlighted ? 'text-accent' : 'text-gray-900'}`}>{price}</span>
          {price !== 'Free' && <span className="text-sm font-light">/ month</span>}
        </div>
        <p className={`text-base leading-snug ${isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>
          Capture ideas and find them quickly
        </p>
      </div>

      <ul className="flex flex-col gap-4 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-base">
            <span className={`mt-1 ${isHighlighted ? 'text-accent' : 'text-gray-900'}`}>
              <svg className="w-4 h-4" viewBox="0 0 18 13" fill="none">
                 <path d="M17 1L6 12L1 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={isHighlighted ? 'primary' : 'outline'} 
        className={`w-full ${!isHighlighted && 'border-yellow-400 text-gray-900 hover:bg-yellow-50'}`}
      >
        Get Started
      </Button>
    </div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-32 px-4 md:px-8 lg:px-32">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16 lg:gap-20">
        
        <div className="text-center max-w-2xl flex flex-col gap-6">
          <h2 className="text-secondary text-4xl md:text-5xl lg:text-[64px] font-bold">
            Choose Your Plan
          </h2>
          <p className="text-gray-800 text-lg">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-center">
          <PricingCard 
            plan="Free"
            price="$0"
            features={[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
              "Connect primary Google Calendar account",
              "Add due dates, reminders, and notifications to your tasks"
            ]}
          />
          <PricingCard 
            plan="Personal"
            price="$11.99"
            features={[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
              "Connect primary Google Calendar account",
              "Add due dates, reminders, and notifications to your tasks"
            ]}
            isHighlighted={true}
          />
          <PricingCard 
            plan="Organization"
            price="$49.99"
            features={[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
              "Connect primary Google Calendar account",
              "Add due dates, reminders, and notifications to your tasks"
            ]}
          />
        </div>

      </div>
    </section>
  );
};