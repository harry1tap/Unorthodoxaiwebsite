import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    services: [] as string[],
    timeline: '',
    challenge: '',
    budget: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const setSelection = (field: 'timeline' | 'budget', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Proceed to show Calendly
    setIsSubmitted(true);
  };

  // Load Calendly script when isSubmitted becomes true
  useEffect(() => {
    if (isSubmitted) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isSubmitted]);

  const servicesOptions = [
    "AI Agents",
    "Process Automation",
    "Custom Development"
  ];

  const timelineOptions = [
    "ASAP / Next 30 Days",
    "In the next 3 months",
    "3-6 months",
    "Just researching"
  ];

  const budgetOptions = [
    "$50,000+",
    "$25,000 - $50,000",
    "$10,000 - $25,000",
    "Under $10,000 / Still determining budget"
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-t border-white/5">
        {/* Decorative noise/texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] invert pointer-events-none"></div>
        {/* Glow effect */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        <Reveal width="100%">
          <div className="text-white sticky top-24">
            <div className="text-accent font-mono text-sm mb-4 tracking-wider font-bold">006</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Start Your <br /> <span className="text-accent">AI Journey</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
              Ready to transform your business with AI? Let's discuss how Unorthodox AI can accelerate your digital transformation.
            </p>
            
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,223,116,0.1)] transition-colors hover:border-accent/30">
                     <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#00DF74]"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Free Consultation</h3>
                  <p className="text-gray-500 text-sm">30-minute strategy session</p>
                </div>
              </div>
              
              {/* Item 2 */}
               <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,223,116,0.1)] transition-colors hover:border-accent/30">
                     <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#00DF74]"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Custom Proposal</h3>
                  <p className="text-gray-500 text-sm">Tailored solution roadmap</p>
                </div>
              </div>

              {/* Item 3 */}
               <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 mt-1">
                   <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,223,116,0.1)] transition-colors hover:border-accent/30">
                     <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#00DF74]"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Rapid Implementation</h3>
                  <p className="text-gray-500 text-sm">Fast-track to AI success</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.3}>
          <div className="bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl transition-all duration-500 ease-in-out">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">Book Your Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-600"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  {/* Website */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-400 mb-2">Company Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-600"
                      placeholder="yourcompany.com"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-600"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  {/* Services Of Interest (Checkboxes) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-3">Services Of Interest</label>
                    <div className="space-y-3">
                      {servicesOptions.map((service) => (
                        <div 
                          key={service} 
                          onClick={() => toggleService(service)}
                          className="flex items-center space-x-3 cursor-pointer group select-none"
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                            formData.services.includes(service) 
                              ? 'bg-accent border-accent text-background' 
                              : 'border-white/20 bg-background group-hover:border-accent/50'
                          }`}>
                            {formData.services.includes(service) && <Check size={14} strokeWidth={3} />}
                          </div>
                          <span className={`${formData.services.includes(service) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Timeline (Radio) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-3">Project Timeline</label>
                    <div className="space-y-3">
                      {timelineOptions.map((option) => (
                        <div 
                          key={option} 
                          onClick={() => setSelection('timeline', option)}
                          className="flex items-center space-x-3 cursor-pointer group select-none"
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            formData.timeline === option
                              ? 'border-accent' 
                              : 'border-white/20 bg-background group-hover:border-accent/50'
                          }`}>
                            {formData.timeline === option && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                          </div>
                          <span className={`${formData.timeline === option ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                            {option}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Primary Business Challenge */}
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-400 mb-2">Primary Business Challenge</label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={3}
                      value={formData.challenge}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-600"
                      placeholder="Tell us about your current challenges..."
                    />
                  </div>

                  {/* Estimated Budget (Radio) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-3">Estimated Budget for this Project</label>
                    <div className="space-y-3">
                      {budgetOptions.map((option) => (
                        <div 
                          key={option} 
                          onClick={() => setSelection('budget', option)}
                          className="flex items-center space-x-3 cursor-pointer group select-none"
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            formData.budget === option
                              ? 'border-accent' 
                              : 'border-white/20 bg-background group-hover:border-accent/50'
                          }`}>
                            {formData.budget === option && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                          </div>
                          <span className={`${formData.budget === option ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                            {option}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="primary" fullWidth className="mt-8">
                    Book Consultation
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Or email us directly at <a href="mailto:hello@unorthodox.ai" className="text-accent hover:underline">hello@unorthodox.ai</a>
                  </p>
                </form>
              </>
            ) : (
              <div className="min-h-[700px]">
                <h3 className="text-2xl font-bold text-white mb-2">Great! Let's schedule it.</h3>
                <p className="text-gray-400 mb-6">Please select a time that works best for you.</p>
                {/* Calendly Inline Widget Container */}
                <div 
                  className="calendly-inline-widget w-full h-full" 
                  data-url="https://calendly.com/harry-unorthodoxai/30min" 
                  style={{ minWidth: '320px', height: '700px' }} 
                />
              </div>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
};