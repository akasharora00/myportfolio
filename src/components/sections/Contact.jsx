import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { VscMail, VscLocation, VscDeviceMobile, VscInfo, VscChromeClose } from 'react-icons/vsc';
import { profile } from '../../data/profile';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";

export default function Contact({ startLine = 171 }) {
  const lines = Array.from({ length: 32 }, (_, i) => i + startLine);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setShowToast(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("❌ Failed to send message. Please try again.");
  }
};
  return (
    <div className="flex select-text font-vscode relative">
      {/* Editor Line Numbers Gutter */}
      <div className="hidden sm:flex flex-col text-right pr-4 pl-3 select-none text-vscode-textSecondary text-[11px] leading-6 border-r border-vscode-border/30 w-12 font-mono text-opacity-40 overflow-hidden min-h-0">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-6 py-5 w-full">
        {/* Comment block header */}
        <div className="mb-4 font-mono text-xs text-vscode-textSecondary select-none">
          <span className="syntax-comment">// src/components/sections/Contact.jsx</span>
          <br />
          <span className="syntax-comment">// Get in touch for collaboration or project queries</span>
        </div>

        <h2 className="text-xl font-bold font-vscode text-vscode-textPrimary mb-6 flex items-center select-none">
          <span className="syntax-keyword mr-1.5 font-normal">const</span>
          <span className="text-vscode-primary font-normal mr-1.5">contactDetails</span>
          <span className="syntax-punctuation font-normal mr-1.5">=</span>
          <span className="text-vscode-textPrimary font-normal font-mono">{'{}'}</span>
          <span className="syntax-punctuation font-normal">;</span>
        </h2>

        {/* Contact Info Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 font-prose">
          <div className="flex items-center space-x-3 p-3.5 bg-vscode-card border border-vscode-border rounded-lg group hover:border-vscode-primary/40 transition-colors duration-300">
            <VscMail className="w-5 h-5 text-vscode-primary flex-shrink-0 group-hover:scale-105 transition-transform" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-vscode-textSecondary font-mono">Email</p>
              <a href={`mailto:${profile.contact.email}`} className="text-xs sm:text-sm text-vscode-textPrimary hover:text-vscode-primary transition-colors truncate block">
                {profile.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3.5 bg-vscode-card border border-vscode-border rounded-lg group hover:border-vscode-primary/40 transition-colors duration-300">
            <VscDeviceMobile className="w-5 h-5 text-vscode-primary flex-shrink-0 group-hover:scale-105 transition-transform" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-vscode-textSecondary font-mono">Phone</p>
              <a href={`tel:${profile.contact.phone}`} className="text-xs sm:text-sm text-vscode-textPrimary hover:text-vscode-primary transition-colors truncate block">
                {profile.contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3.5 bg-vscode-card border border-vscode-border rounded-lg group hover:border-vscode-primary/40 transition-colors duration-300">
            <VscLocation className="w-5 h-5 text-vscode-primary flex-shrink-0 group-hover:scale-105 transition-transform" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-vscode-textSecondary font-mono">Location</p>
              <span className="text-xs sm:text-sm text-vscode-textPrimary block truncate">
                {profile.contact.location}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3.5 bg-vscode-card border border-vscode-border rounded-lg group hover:border-vscode-primary/40 transition-colors duration-300">

  {/* Social Icons */}
 {/* Social Icons */}
<div className="flex items-center gap-2">

  {/* GitHub */}
  <a
    href={profile.contact.github}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-md hover:bg-vscode-editor transition-all duration-300"
    title="GitHub"
  >
    <FaGithub className="w-5 h-5 text-vscode-primary hover:text-vscode-textPrimary" />
  </a>

  {/* LinkedIn */}
  <a
    href={profile.contact.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-md hover:bg-vscode-editor transition-all duration-300"
    title="LinkedIn"
  >
    <FaLinkedin className="w-5 h-5 text-vscode-primary hover:text-vscode-textPrimary" />
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/akashdeep_2004/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-md hover:bg-vscode-editor transition-all duration-300"
    title="LeetCode"
  >
    <SiLeetcode className="w-5 h-5 text-vscode-primary hover:text-vscode-textPrimary" />
  </a>

</div>

  {/* Text */}
  <div>


  </div>

</div>
        </div>

        {/* Message Form */}
        <h3 className="text-sm font-semibold text-vscode-textSecondary font-mono mb-4 uppercase tracking-wider select-none">// Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs text-vscode-textPrimary">
          <div>
            <label htmlFor="name" className="block text-vscode-textSecondary mb-1.5">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-vscode-card border border-vscode-border p-3 rounded-lg outline-hidden focus:border-vscode-primary text-vscode-textPrimary transition-colors"
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-vscode-textSecondary mb-1.5">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-vscode-card border border-vscode-border p-3 rounded-lg outline-hidden focus:border-vscode-primary text-vscode-textPrimary transition-colors"
              placeholder="e.g. jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-vscode-textSecondary mb-1.5">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-vscode-card border border-vscode-border p-3 rounded-lg outline-hidden focus:border-vscode-primary text-vscode-textPrimary transition-colors resize-none"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-vscode-primary hover:bg-vscode-accentHover text-white font-semibold rounded-full shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
          >
            Send Message
          </button>
        </form>
        
      </div>

      {/* VS Code Style Toast Notification Popup */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-10 right-4 bg-vscode-card border border-vscode-border text-vscode-textPrimary text-xs font-vscode w-[320px] shadow-2xl rounded-lg p-4 z-50 flex items-start space-x-3 backdrop-blur-md"
          >
            <VscInfo className="w-5 h-5 text-vscode-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-vscode-textPrimary mb-1">Portfolio Notification</p>
              <p className="text-vscode-textSecondary text-[11px] leading-normal font-prose">
                Thank you! Your message was submitted successfully.
              </p>
              <div className="flex justify-end space-x-2 mt-3 font-mono">
                <button 
                  onClick={() => setShowToast(false)}
                  className="bg-vscode-primary hover:bg-vscode-accentHover text-white px-3 py-1 rounded-full transition-colors cursor-pointer text-[10px]"
                >
                  OK
                </button>
              </div>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-vscode-textSecondary hover:text-vscode-textPrimary p-0.5 rounded cursor-pointer"
            >
              <VscChromeClose className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
