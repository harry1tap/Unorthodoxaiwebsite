import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <Reveal width="100%">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            We help high-ticket businesses <br className="hidden md:block" />
            turn more leads into <br />
            <span className="text-accent drop-shadow-[0_0_15px_rgba(0,223,116,0.5)]">
              booked appointments
            </span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Without missing opportunities to slow response times and without adding headcount.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} withIcon>
              Book a Discovery Call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};