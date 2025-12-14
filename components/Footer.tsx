import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 tracking-wider mb-2">UNORTHODOX AI</h3>
          <p className="text-gray-500 text-sm">
            Helping high-ticket businesses book more appointments.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/company/udoxai" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-50 border border-gray-200 rounded-full text-gray-500 hover:text-accent hover:border-accent/50 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:harry@unorthodoxai.co" 
            className="p-3 bg-gray-50 border border-gray-200 rounded-full text-gray-500 hover:text-accent hover:border-accent/50 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Unorthodox AI. All rights reserved.
      </div>
    </footer>
  );
};