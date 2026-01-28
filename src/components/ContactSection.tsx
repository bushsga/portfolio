'use client'; // This component uses React hooks, so it must be a Client Component

import { useState, FormEvent, ChangeEvent } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Github, CheckCircle } from 'lucide-react';
import { ContactFormData } from '@/app/types';
// Import the Formspree hooks
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  // Initialize the Formspree form with your FORM_ID
  const [state, handleSubmit] = useForm("xpqdekej"); 
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to handle the final form submission
  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Let Formspree handle the submission
    await handleSubmit(e); // Pass the event to Formspree's handler
  };

  // Show a success message after submission
  if (state.succeeded) {
    return (
      <section id="contact" className="responsive-container py-16">
        <div className="max-w-2xl mx-auto text-center bg-gray-900 p-8 sm:p-12 rounded-2xl border border-green-500/30">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for your message, Ibrahim. I'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  // The main contact form
  return (
    <section id="contact" className="responsive-container py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Looking for a dedicated frontend developer? Let&apos;s build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 bg-gray-900 p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800">
            <form onSubmit={onFormSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500 text-sm sm:text-base"
                    placeholder="John Doe"
                    disabled={state.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500 text-sm sm:text-base"
                    placeholder="john@example.com"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-500 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project, timeline, and requirements..."
                  disabled={state.submitting}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>
              
              {/* Display general form errors */}
              <ValidationError errors={state.errors} className="text-red-400 text-sm" />
              
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm sm:text-base group"
              >
                {state.submitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Your existing contact info sidebar remains unchanged here */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg mr-3 sm:mr-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 text-sm sm:text-base">Email</h3>
                  <a href="mailto:ibrahimjamiuakeem@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
                    ibrahimjamiuakeem@gmail.com
                  </a>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg mr-3 sm:mr-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 text-sm sm:text-base">Phone</h3>
                  <a href="tel:07087353925" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
                    07087353925
                  </a>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Also: 07039693146</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg mr-3 sm:mr-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 text-sm sm:text-base">Location</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Nigeria</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Available for remote work</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-4 sm:p-6 rounded-xl border border-gray-800">
              <h3 className="font-bold text-white mb-3 sm:mb-4 text-base sm:text-lg">Connect With Me</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://linkedin.com/in/ibrahim-jamiu-akeem-880a6b34b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2.5 sm:p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors group text-sm sm:text-base"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bushsga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2.5 sm:p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors group text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}