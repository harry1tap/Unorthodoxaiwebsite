import React from 'react';
import { Reveal } from './Reveal';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, features }) => (
  <div className="relative p-8 sm:p-10 rounded-[2rem] bg-surface/20 border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col group overflow-hidden">
    
    {/* Top Row: Number and Indicator */}
    <div className="flex justify-between items-start mb-8">
      <div className="text-accent font-mono text-xl font-bold tracking-widest">{number}</div>
      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors bg-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,223,116,0.8)]" />
      </div>
    </div>
    
    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-400 mb-10 leading-relaxed text-base">
      {description}
    </p>

    <div className="mt-auto space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4 group/item">
          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_5px_#00DF74] group-hover/item:scale-125 transition-transform" />
          <span className="text-gray-300 text-sm font-medium tracking-wide group-hover/item:text-white transition-colors">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "AI Agents",
      description: "Bespoke AI agents designed and trained specifically for your unique business challenges.",
      features: [
        "Appointment Booking Agents",
        "Sales Agents",
        "Internal Process Agents",
        "Content Creation Agents",
        "Lead Generation Agents",
        "& More!"
      ]
    },
    {
      number: "02",
      title: "Custom Ai Automations",
      description: "Streamline your business with production solutions that scale with your business.",
      features: [
        "CRM Automations",
        "Lead Generation Automations",
        "Financial Automations",
        "Process Automations",
        "& More!"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-visible border-t border-white/5">
       {/* Background Glow */}
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <Reveal width="100%">
            <div className="text-accent font-mono text-sm mb-4 tracking-wider font-bold">002</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Comprehensive AI solutions tailored to accelerate your growth and efficiency.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.15} width="100%">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};