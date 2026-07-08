import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Github, CheckCircle2, MapPin, Globe, Sparkles } from 'lucide-react';
import { USER_INFO } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    // Simulate server ingestion
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section
      id="contact-section"
      className="relative w-full py-24 sm:py-32 px-6 bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
    >
      {/* Background design elements */}
      <div className="absolute inset-0 cyber-grid opacity-[0.01] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-stone-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-stone-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-stone-900 border border-white/10 text-[9px] font-sans uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
            <Mail size={10} className="text-stone-500" />
            <span>Connect</span>
          </div>
          <h2 className="font-serif font-light text-3xl sm:text-5xl tracking-tight italic text-stone-100 mb-3">
            Initiate Contact
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed font-sans">
            Want to talk about software architecture, engineering craft, or just say hi? Send a direct dispatch below.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Communication cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Contact Info */}
            <div className="bg-[#121212]/40 border border-white/10 p-8 rounded-2xl relative overflow-hidden group flex-grow">
              <h3 className="font-serif italic font-light text-xl text-stone-100 mb-6">
                Credentials Hub
              </h3>

              <div className="space-y-6">
                
                {/* Email card */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded bg-stone-900 border border-white/10 text-stone-300 mt-1">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 block mb-0.5">
                      Direct Mail
                    </span>
                    <a
                      href={`mailto:${USER_INFO.email}`}
                      className="text-stone-300 hover:text-stone-100 font-sans text-sm sm:text-base transition-colors duration-200"
                    >
                      {USER_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Github card */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded bg-stone-900 border border-white/10 text-stone-300 mt-1">
                    <Github size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 block mb-0.5">
                      Source Repository
                    </span>
                    <a
                      href={USER_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-300 hover:text-stone-100 font-sans text-sm sm:text-base transition-colors duration-200"
                    >
                      github.com/vj-rahavan
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded bg-stone-900 border border-white/10 text-stone-300 mt-1">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 block mb-0.5">
                      Current Node Address
                    </span>
                    <span className="text-stone-300 font-sans text-sm sm:text-base block">
                      Earth (UTC +05:30)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Aesthetic card for motivation quotes */}
            <div className="bg-[#121212]/40 border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-4 right-6 text-stone-500/20">
                <Sparkles size={24} />
              </div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
                Engineering Principle
              </h4>
              <p className="text-stone-400 font-light text-xs sm:text-sm italic leading-relaxed">
                "Simplicity is the soul of technical excellence. Beautiful interfaces mean nothing without structured, high-performance architectures behind them."
              </p>
            </div>

          </div>

          {/* Right Block: Message Dispatcher Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212]/40 border border-white/10 p-8 sm:p-10 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!sentSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 block mb-2">
                          Identity Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded bg-stone-950 border border-white/5 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 text-stone-200 text-sm outline-none transition-all duration-300"
                          placeholder="your name..."
                          id="contact-name-input"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 block mb-2">
                          Email Endpoint
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded bg-stone-950 border border-white/5 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 text-stone-200 text-sm outline-none transition-all duration-300"
                          placeholder="name@email.com..."
                          id="contact-email-input"
                        />
                      </div>

                    </div>

                    {/* Message input */}
                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 block mb-2">
                        Dispatch Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-stone-950 border border-white/5 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 text-stone-200 text-sm outline-none transition-all duration-300 resize-none"
                        placeholder="write your message description here..."
                        id="contact-message-input"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 px-6 rounded bg-stone-100 text-stone-900 hover:bg-stone-200 font-sans font-semibold text-xs uppercase tracking-widest active:scale-98 disabled:opacity-50 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                      id="contact-submit-btn"
                    >
                      {isSending ? (
                        <div className="flex items-center space-x-2">
                          <span className="w-4 h-4 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
                          <span>Streaming Dispatch...</span>
                        </div>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send size={14} className="transform hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    
                    <h3 className="font-serif italic font-light text-2xl text-stone-100 mb-2">
                      Transmission Confirmed
                    </h3>
                    
                    <p className="text-slate-400 text-sm font-light max-w-sm mb-8 leading-relaxed">
                      Your message has bypassed local filters and successfully landed in Vijayarahavan's mail servers. Thank you for connecting!
                    </p>

                    <button
                      onClick={() => setSentSuccess(false)}
                      className="font-mono text-xs text-stone-400 hover:text-stone-300 underline cursor-pointer"
                      id="contact-reset-btn"
                    >
                      Send another transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Global Footer Area */}
        <hr className="border-white/5 my-20" />
        
        <footer className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 font-mono text-[10px] text-stone-600 tracking-[0.2em] uppercase">
          <div>
            <span>Vijayarahavan's Scrollytelling Portal</span>
            <span className="mx-2 text-stone-800">|</span>
            <span>All Systems Stable</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>Powered by</span>
            <span className="text-stone-400">React 19</span>
            <span>&</span>
            <span className="text-stone-400">Motion</span>
          </div>
        </footer>

      </div>
    </section>
  );
}
