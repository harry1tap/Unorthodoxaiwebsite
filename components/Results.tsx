import React from 'react';
import { Reveal } from './Reveal';

export const Results: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <div className="text-accent font-mono text-sm mb-4 tracking-wider font-bold">003</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how we're helping businesses automate their growth.
            </p>
          </Reveal>
        </div>

        {/* Testimonials Grid - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Reveal width="100%" delay={0.2} overflow="visible" className="h-full" fullHeight>
            <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl relative shadow-lg h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl text-accent absolute top-6 left-6 opacity-20 font-serif leading-none">"</div>
              <blockquote className="relative z-10 pt-6 flex-grow">
                <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                  "Harry helped us engineer a workflow processing system from the ground up. One in a million resource, if you need someone who can not only build it but help you think through it properly, he's your guy"
                </p>
              </blockquote>
              <div className="pt-6 border-t border-gray-100">
                <div className="font-bold text-gray-900">Client</div>
                <div className="text-sm text-gray-500">Workflow Automation</div>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.3} overflow="visible" className="h-full" fullHeight>
            <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl relative shadow-lg h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl text-accent absolute top-6 left-6 opacity-20 font-serif leading-none">"</div>
              <blockquote className="relative z-10 pt-6 flex-grow">
                <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                  "Harry was great to work with - incredibly knowledgeable and flexible in his approach. Would recommend him to anyone looking for assistance with any AI-related project"
                </p>
              </blockquote>
              <div className="pt-6 border-t border-gray-100">
                <div className="font-bold text-gray-900">Client</div>
                <div className="text-sm text-gray-500">AI Consulting</div>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.4} overflow="visible" className="h-full" fullHeight>
            <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl relative shadow-lg h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl text-accent absolute top-6 left-6 opacity-20 font-serif leading-none">"</div>
              <blockquote className="relative z-10 pt-6 flex-grow">
                <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                  "Harry's work is probably going to save my company over 100 hours this year. He listened to my suggestions, fixed what I messed up, and never gave up when I was ready to throw in the towel. Great experience - I'm definitely hiring him again"
                </p>
              </blockquote>
              <div className="pt-6 border-t border-gray-100">
                <div className="font-bold text-gray-900">Business Owner</div>
                <div className="text-sm text-gray-500">Operations Automation</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};