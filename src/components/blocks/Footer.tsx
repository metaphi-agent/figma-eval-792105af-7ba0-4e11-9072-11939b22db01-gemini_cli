import React from 'react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 md:pt-32 pb-8 px-4 md:px-8 lg:px-32 text-white">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {/* Logo & Desc */}
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <img src="./assets/icons/logo-icon.svg" alt="Whitepace" className="w-8 h-8" />
                    <span className="text-white text-2xl font-bold">whitepace</span>
                </div>
                <p className="text-white/80 leading-relaxed text-sm">
                    whitepace was created for the new ways we live and work. We make a better workspace around the world
                </p>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-lg">Product</h4>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Overview</a>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Pricing</a>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Customer stories</a>
            </div>

             {/* Resources */}
             <div className="flex flex-col gap-4">
                <h4 className="font-bold text-lg">Resources</h4>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Blog</a>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Guides & tutorials</a>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Help center</a>
            </div>

             {/* Company */}
             <div className="flex flex-col gap-4">
                <h4 className="font-bold text-lg">Company</h4>
                <a href="#" className="text-white/80 hover:text-accent text-sm">About us</a>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Careers</a>
                <a href="#" className="text-white/80 hover:text-accent text-sm">Media kit</a>
            </div>

             {/* Try It */}
             <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
                <h4 className="font-bold text-lg">Try It Today</h4>
                <p className="text-white/80 leading-relaxed text-sm">
                    Get started for free. Add your whole team as your needs grow.
                </p>
                <Button variant="primary" rightIcon={<span>&rarr;</span>}>
                    Start today
                </Button>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8 text-sm text-white/80">
                <a href="#">English</a>
                <a href="#">Terms & privacy</a>
                <a href="#">Security</a>
                <a href="#">Status</a>
                <span>©2021 Whitepace LLC.</span>
            </div>
            
            <div className="flex items-center gap-6">
                 {/* Social Icons Placeholder */}
                 <a href="#" className="hover:text-accent">Facebook</a>
                 <a href="#" className="hover:text-accent">Twitter</a>
                 <a href="#" className="hover:text-accent">Linkedin</a>
            </div>
        </div>

      </div>
    </footer>
  );
};