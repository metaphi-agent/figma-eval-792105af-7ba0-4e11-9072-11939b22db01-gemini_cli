import React from 'react';
import { Button } from '../ui/Button';

export const YourWork: React.FC = () => {
  return (
    <section className="w-full bg-[#043873] text-white py-[140px] px-4 lg:px-[220px] flex flex-col items-center text-center gap-10">
        <h2 className="text-5xl lg:text-[72px] font-bold leading-tight">
            Your work, everywhere you are
        </h2>
        <p className="text-lg text-[#F7F7F7] max-w-3xl leading-relaxed text-center">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
        <Button variant="primary" size="lg" className="bg-[#4F9CF9] text-white hover:bg-[#2F7CD9] px-10 py-5 text-lg">
            Try Taskey <span className="ml-2">→</span>
        </Button> 
    </section>
  );
};
