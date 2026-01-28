import React from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#043873] text-white pt-[140px] pb-8 px-4 lg:px-[220px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-20">
        <div className="lg:col-span-1">
          <Logo className="text-white mb-4 filter brightness-0 invert" />
          <p className="text-[#F7F7F7] text-sm leading-relaxed mb-6">
            whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Product</h4>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Overview</a>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Pricing</a>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Customer stories</a>
        </div>

        <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Resources</h4>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Blog</a>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Guides & tutorials</a>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Help center</a>
        </div>

        <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Company</h4>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">About us</a>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Careers</a>
            <a href="#" className="text-[#F7F7F7] hover:text-[#FFE492] text-sm">Media kit</a>
        </div>

        <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Try It Today</h4>
            <p className="text-[#F7F7F7] text-sm mb-4">Get started for free. Add your whole team as your needs grow.</p>
            <Button variant="primary" size="md">Start today <span className="ml-2">→</span></Button>
        </div>
      </div>

      <div className="border-t border-[#2E4E73] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-8 text-sm text-[#F7F7F7]">
            <a href="#">English</a>
            <a href="#">Terms & privacy</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
            <p>©2021 Whitepace LLC.</p>
        </div>
        <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};
