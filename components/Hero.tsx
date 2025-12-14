import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-background">
      {/* Background Orbs - slightly lighter for light mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <Reveal width="100%">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            We help you build a more productive, profitable business with <br />
            <span className="text-accent drop-shadow-[0_0_15px_rgba(0,223,116,0.2)]">
              AI & Automation
            </span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            From strategy to implementation, our practical AI and Automation infrastructures drive measurable results for small to medium businesses
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6} overflow="visible">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8 px-4">
            {/* @ts-ignore - passing custom data attributes */}
            <Button 
              data-fillout-id="pL7MPwgFPkus"
              data-fillout-embed-type="popup"
              data-fillout-dynamic-resize="true"
              data-fillout-inherit-parameters="true"
              data-fillout-popup-size="medium"
              withIcon
            >
              Book a Consultation Call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};