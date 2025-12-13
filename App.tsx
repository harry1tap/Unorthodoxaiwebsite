import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Approach';
import { Results } from './components/Results';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// @ts-ignore
import { createChat } from '@n8n/chat';

function App() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.endlesslybooked.com/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: true,
      initialMessages: [
        'Hi there! 👋',
        'How can I help you automate your business today?'
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
  }, []);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-accent selection:text-background font-sans">
      
      {/* Navbar Placeholder - Simple Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-wider">UNORTHODOX AI</div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-surface hover:bg-surfaceLight text-sm px-4 py-2 rounded-md border border-white/10 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      <main className="flex flex-col">
        <Hero />
        <Services />
        <Results />
        <Contact />
      </main>
      
      <Footer />
      <div id="n8n-chat"></div>
    </div>
  );
}

export default App;