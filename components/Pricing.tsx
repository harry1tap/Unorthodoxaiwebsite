import React from 'react';
import { Reveal } from './Reveal';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  subtext: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, subtext }) => (
  <div className="relative p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-accent/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col h-full group shadow-sm">
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
      {description}
    </p>
    
    <div className="mt-auto pt-8 border-t border-gray-100 group-hover:border-accent/10 transition-colors">
      <div className="text-sm text-gray-400 font-medium mb-1">From</div>
      <div className="text-4xl font-bold text-accent mb-4 tracking-tight">{price}</div>
      <p className="text-sm text-gray-500 leading-snug">
        {subtext}
      </p>
    </div>
  </div>
);

export const Pricing: React.FC = () => {
  const pricingOptions = [
    {
      title: "Automation Strategy",
      description: "Discover new ways to optimise your tech stack & resources to maximise ROI",
      price: "£3,200",
      subtext: "Best for businesses seeking all-round efficiency gains or unsure where to start"
    },
    {
      title: "Automation Set-Up",
      description: "We build and launch custom automation systems to meet your requirements",
      price: "£800",
      subtext: "Best for companies / teams with a specific need and clearly defined scope"
    },
    {
      title: "AI Agents",
      description: "Delegate work to AI through digital agents that can take actions autonomously",
      price: "£3,000",
      subtext: "Best for organisations ready to deploy autonomous workforce capabilities"
    },
    {
      title: "Custom Dashboards",
      description: "Connect your data sources into a custom dashboard for real-time reporting",
      price: "£2,500",
      subtext: "Best for data-driven businesses needing clear visibility on key metrics"
    },
    {
      title: "Retained Services",
      description: "Drive ongoing growth with a flexible pot of time each month",
      price: "£500/month",
      subtext: "Best for new and existing clients looking for continuous growth and improvement"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <Reveal width="100%">
            <div className="text-accent font-mono text-sm mb-4 tracking-wider font-bold">004</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent, Affordable <span className="text-accent">Pricing</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Simple, transparent pricing with no hidden fees. We build custom solutions that pay for themselves.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingOptions.map((option, index) => (
            <Reveal key={index} delay={index * 0.15} width="100%">
              <PricingCard {...option} />
            </Reveal>
          ))}
        </div>

        <Reveal width="100%" delay={0.2}>
          <p className="mt-8 text-center text-sm text-gray-500">
            All costs subject to scope. Excludes software usage fees (where applicable).
          </p>
        </Reveal>
      </div>
    </section>
  );
};