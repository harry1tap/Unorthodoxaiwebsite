import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Approach';
import { Results } from './components/Results';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// @ts-ignore
import { createChat } from '@n8n/chat';

function App() {
  useEffect(() => {
    // Load n8n chat
    try {
      createChat({
        webhookUrl: 'https://n8n.endlesslybooked.com/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
        target: '#n8n-chat',
        mode: 'window',
        showWelcomeScreen: true,
        initialMessages: [
          'Welcome to Unorthodox AI 👋 We help you become an AI first company and scale up a more productive, profitable business with innovative AI systems',
          'How can I assist you in transforming your business with AI today?'
        ],
        i18n: {
          en: {
            title: 'Unorthodox AI',
            subtitle: 'Ask us about our agents & automations',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question...',
          },
        },
      });
    } catch (error) {
      console.error("Failed to initialize chat:", error);
    }

    // Load Fillout script
    const script = document.createElement('script');
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-accent selection:text-white font-sans">
      
      {/* Navbar Placeholder - Simple Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-wider text-gray-900">UNORTHODOX AI</div>
          <button 
            data-fillout-id="pL7MPwgFPkus"
            data-fillout-embed-type="popup"
            data-fillout-dynamic-resize
            data-fillout-inherit-parameters
            data-fillout-popup-size="medium"
            className="bg-gray-50 hover:bg-gray-100 text-gray-900 text-sm px-4 py-2 rounded-md border border-gray-200 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      <main className="flex flex-col">
        <Hero />
        <Services />
        <Results />
        <Pricing />
        <Contact />
      </main>
      
      <Footer />
      <div id="n8n-chat"></div>
    </div>
  );
}

export default App;