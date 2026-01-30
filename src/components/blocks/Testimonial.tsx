import React from 'react';

const TestimonialCard: React.FC<{
  text: string;
  name: string;
  role: string;
  avatarColor: string;
}> = ({ text, name, role, avatarColor }) => (
  <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg flex flex-col gap-8 min-w-[320px] md:min-w-[400px]">
    <div className="flex border-b pb-8 border-gray-100">
      <div className="flex text-yellow-400">
        {'★'.repeat(5)}
      </div>
    </div>
    <p className="text-gray-800 text-lg leading-relaxed flex-1">
      "{text}"
    </p>
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-full ${avatarColor}`}></div>
      <div>
        <h4 className="font-bold text-secondary text-lg">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

export const Testimonial: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        <h2 className="text-secondary text-4xl md:text-5xl lg:text-[64px] font-bold text-center">
          What Our Clients Says
        </h2>
        
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
          <TestimonialCard 
            text="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
            name="Oberon Shaw, MCH"
            role="Head of Talent Acquisition, North America"
            avatarColor="bg-blue-200"
          />
          <TestimonialCard 
            text="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
            name="Oberon Shaw, MCH"
            role="Head of Talent Acquisition, North America"
            avatarColor="bg-primary"
          />
          <TestimonialCard 
            text="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
            name="Oberon Shaw, MCH"
            role="Head of Talent Acquisition, North America"
            avatarColor="bg-blue-400"
          />
        </div>

        <div className="flex justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};