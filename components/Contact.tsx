import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-t border-gray-100">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        <div className="lg:col-span-5 sticky top-24">
          <Reveal width="100%" overflow="visible">
            <div className="text-dark">
              <div className="text-accent font-mono text-sm mb-4 tracking-wider font-bold">006</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                Start Your <br /> <span className="text-accent">AI Journey</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
                Ready to transform your business with AI? Let's discuss how Unorthodox AI can accelerate your digital transformation.
              </p>
              
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md transition-colors hover:border-accent/50">
                       <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(0,223,116,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Free Consultation</h3>
                    <p className="text-gray-500 text-sm">30-minute strategy session</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                 <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md transition-colors hover:border-accent/50">
                       <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(0,223,116,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Custom Proposal</h3>
                    <p className="text-gray-500 text-sm">Tailored solution roadmap</p>
                  </div>
                </div>

                {/* Item 3 */}
                 <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md transition-colors hover:border-accent/50">
                       <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(0,223,116,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Rapid Implementation</h3>
                    <p className="text-gray-500 text-sm">Fast-track to AI success</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal width="100%" delay={0.3}>
            <div className="bg-white border border-gray-100 rounded-2xl p-12 shadow-xl flex flex-col items-center justify-center text-center">
               <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to automate your sales?</h3>
               <p className="text-gray-600 mb-10 max-w-lg">
                 Book a free 30-minute consultation call with our team. We'll discuss your current processes and identify the best opportunities for automation.
               </p>
               {/* @ts-ignore - passing custom data attributes */}
               <Button 
                 data-fillout-id="pL7MPwgFPkus"
                 data-fillout-embed-type="popup"
                 data-fillout-dynamic-resize="true"
                 data-fillout-inherit-parameters="true"
                 data-fillout-popup-size="medium"
                 variant="primary" 
                 withIcon
               >
                 Book a Call
               </Button>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};