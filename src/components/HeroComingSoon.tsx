/*
Changes made:
- Removed duplicate export default statement at the end of the file
*/

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import HeroImage from './HeroImage';

import iPhoneImage from '../assets/images/mockups/white-iphone-6-plus-being-held-by-a-black-man-a10999 (1) (1) (1).png';

const HeroComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="relative pt-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto relative z-10 flex flex-col h-full px-4">
          {/* Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Rocket className="w-4 h-4 text-primary-400 mr-2" />
              <span className="text-sm font-medium text-white">Launching June 2025</span>
            </div>
          </div>
          
          {/* Main Heading with enhanced styling */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 sm:mb-10 leading-tight text-center">
            <span className="inline-block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent pb-2">
              Introducing
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Local Pros Studio
            </span>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full"></div>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            We're building something new to help you win more jobs and simplify your business. Local Pros Studio combines practical tools for managing leads, creating professional quotes, building your online presence, and collecting reviews - all designed based on your feedback.
          </p>
          
          {/* Email signup form */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex justify-center">
              <a
                href="https://wa.me/27787869161?text=Interested%20in%20Local%20Pros%20Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:from-primary-500 hover:to-secondary-500 transition-all"
              >
                Chat on WhatsApp
                <Sparkles className="ml-2 w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Chat with us to learn more about Local Pros Studio
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mt-12">
            {/* Decorative glow effect */}
            <div className="absolute -bottom-10 inset-x-0 h-40 bg-gradient-to-t from-primary-500/30 to-transparent blur-2xl rounded-full"></div>
            
            <HeroImage
              src={iPhoneImage}
              alt="iPhone showcase"
              className="mx-auto relative z-10 transform transition-all duration-700 hover:scale-105 flex justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComingSoon;