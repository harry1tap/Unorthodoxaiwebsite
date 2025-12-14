import React from 'react';
import { Reveal } from './Reveal';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, features }) => (
  <div className="relative p-8 sm:p-10 rounded-[2rem] bg-white border border-gray-100 hover:border-accent/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 h-full flex flex-col group overflow-hidden shadow-sm">
    
    {/* Top Row: Number and Indicator */}
    <div className="flex justify-between items-start mb-8">
      <div className="text-accent font-mono text-xl font-bold tracking-widest">{number}</div>
      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-accent/30 transition-colors bg-gray-50">
        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,223,116,0.3)]" />
      </div>
    </div>
    
    <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-600 mb-10 leading-relaxed text-base">
      {description}
    </p>

    <div className="mt-auto space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4 group/item">
          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover/item:scale-125 transition-transform" />
          <span className="text-gray-600 text-sm font-medium tracking-wide group-hover/item:text-gray-900 transition-colors">{feature}</span>
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
        "Lead Nurture Agents",
        "Sales Agents",
        "Customer Support Agents",
        "Internal Process Agents",
        "& More!"
      ]
    },
    {
      number: "02",
      title: "Marketing Automations",
      description: "Amplify your marketing efforts with automations that generate, distribute, and optimise your content and outreach at scale.",
      features: [
        "Outreach Automations",
        "Content Repurposing",
        "Social Media Automations",
        "Email Marketing Automations",
        "Review & Reputation Automations",
        "& More!"
      ]
    },
    {
      number: "03",
      title: "Process Automations",
      description: "Eliminate manual busywork and keep your operations running smoothly with automations that handle the repetitive tasks your team shouldn't be doing.",
      features: [
        "Client Onboarding Automations",
        "Invoice & Document Processing",
        "HR & Hiring Automations",
        "CRM & Database Syncing",
        "Internal Workflow Automations",
        "& More!"
      ]
    },
    {
      number: "04",
      title: "Sales Automations",
      description: "Close more deals with automations that keep your pipeline moving, your CRM updated, and your sales team focused on selling",
      features: [
        "CRM Automations (pipeline management, deal tracking, task creation)",
        "Proposal & Quote Generation",
        "Sales Call Prep & Follow-up",
        "Lead Scoring & Qualification",
        "Sales Reporting & Forecasting",
        "& More!"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface relative overflow-visible border-t border-gray-100">
       {/* Background Glow */}
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <Reveal width="100%">
            <div className="text-accent font-mono text-sm mb-4 tracking-wider font-bold">002</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI & Automation <span className="text-accent">Services</span>
            </h2>
            <div className="text-gray-600 text-lg max-w-4xl space-y-4">
              <p>
                Scaling your business no longer means growing your headcount. With large enterprises already reducing their workforce and tech leaders predicting the first one-person $1 billion company, AI-powered infrastructure is quickly becoming essential. Small and medium businesses must adopt AI now to stay competitive.
              </p>
              <p>
                Our solutions are simple. Maximise ROI, boosting productivity, increasing revenue per employee, and improving profit margins. We simplify AI adoption, delivering clear, actionable strategies that add measurable value and keep you ahead of the competition.
              </p>
            </div>
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