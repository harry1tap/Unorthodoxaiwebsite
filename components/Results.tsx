import React from 'react';
import { Reveal } from './Reveal';

const StatCard: React.FC<{ value: string; label: string; sub: string }> = ({ value, label, sub }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 text-center group">
    <div className="text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform duration-300">{value}</div>
    <div className="text-lg font-semibold text-white mb-2">{label}</div>
    <div className="text-sm text-gray-400">{sub}</div>
  </div>
);

export const Results: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surfaceLight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl font-bold text-white mb-4">Real Results</h2>
            <p className="text-accent text-lg font-medium tracking-wide uppercase">Solar Installation Company</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <Reveal delay={0.2} width="100%">
            <StatCard 
              value="60s" 
              label="Response Speed" 
              sub="Under 60 seconds vs 2-8 hours before" 
            />
          </Reveal>
          <Reveal delay={0.4} width="100%">
            <StatCard 
              value="+42%" 
              label="Booking Conversion" 
              sub="More appointments from same lead volume" 
            />
          </Reveal>
          <Reveal delay={0.6} width="100%">
            <StatCard 
              value="£0" 
              label="Hiring Costs" 
              sub="Didn't need 2 additional sales people" 
            />
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.8}>
          <div className="bg-gradient-to-r from-surface to-surfaceLight border border-white/5 p-8 lg:p-12 rounded-2xl relative">
            <div className="text-6xl text-accent absolute top-4 left-6 opacity-20 font-serif">"</div>
            <blockquote className="relative z-10 text-center max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic">
                "We're booking significantly more appointments from the same lead volume. It's like we hired a sales person who never sleeps."
              </p>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
};