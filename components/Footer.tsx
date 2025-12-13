import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white tracking-wider mb-2">UNORTHODOX AI</h3>
          <p className="text-gray-400 text-sm">
            Helping high-ticket businesses book more appointments.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="p-3 bg-surface rounded-full text-gray-400 hover:text-accent hover:bg-white/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:hello@unorthodox.ai" 
            className="p-3 bg-surface rounded-full text-gray-400 hover:text-accent hover:bg-white/10 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Unorthodox AI. All rights reserved.
      </div>
    </footer>
  );
};