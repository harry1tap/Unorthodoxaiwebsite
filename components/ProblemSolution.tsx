import React from 'react';
import { Clock, MessageSquareWarning, Zap, CalendarCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const ProblemSolution: React.FC = () => {
  const cards = [
    {
      type: 'problem',
      icon: Clock,
      title: "The Speed Gap",
      description: "Leads contact you at 9pm, you respond at 9am. By then, they've already booked with a competitor.",
      stat: "Losing 40-60% of leads"
    },
    {
      type: 'problem',
      icon: MessageSquareWarning,
      title: "Manual Burnout",
      description: "Your team is overwhelmed managing leads across Instagram, Email, and SMS. Follow-ups get missed.",
      stat: "Inconsistent follow-up"
    },
    {
      type: 'solution',
      icon: Zap,
      title: "Instant Engagement",
      description: "Our AI agents respond in under 60 seconds, 24/7. Qualify and nurture leads while you sleep.",
      stat: "Zero wait time"
    },
    {
      type: 'solution',
      icon: CalendarCheck,
      title: "Auto-Booking",
      description: "Seamlessly guide qualified leads directly to your calendar. Stop chasing, start closing.",
      stat: "Full calendar"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-surface/30 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal width="100%">
             <div className="text-accent font-mono text-sm mb-4 tracking-wider font-bold">002</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-red-500">Problem</span> & The <span className="text-accent">Solution</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Why traditional sales processes are failing and how AI fixes the broken loop.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className={`h-full border rounded-xl p-8 transition-all duration-300 group hover:-translate-y-1 flex flex-col ${
                card.type === 'problem' 
                  ? 'bg-surface border-white/5 hover:border-red-500/30' 
                  : 'bg-surface border-white/5 hover:border-accent/30'
              }`}>
                <div className={`p-3 rounded-lg w-fit mb-6 ${
                  card.type === 'problem' 
                    ? 'bg-red-500/10 text-red-500' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  <card.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                <div className={`text-xs font-bold uppercase tracking-wider py-2 px-3 rounded border w-fit ${
                   card.type === 'problem'
                   ? 'border-red-500/20 text-red-500 bg-red-500/5'
                   : 'border-accent/20 text-accent bg-accent/5'
                }`}>
                  {card.stat}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};