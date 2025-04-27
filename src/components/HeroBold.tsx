import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroImage from './HeroImage';

import iPhoneImage from '../assets/images/Compressed/White iPhone 6 Plus held.png';

const HeroBold = () => {
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
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-white">New features launching in April</span>
            </div>
          </div>
          
          {/* Main Heading with enhanced styling */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 sm:mb-10 leading-tight text-center">
            <span className="inline-block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent pb-2">
              Grow And Automate
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Your Business
            </span>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full"></div>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Growing and managing a business is hard. Make it easier and more profitable with the Local Pros Studio range of Apps and Services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-16">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all mx-auto"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Hero Image with enhanced presentation */}
          <div className="relative mt-4">
            {/* Decorative glow effect */}
            <div className="absolute -bottom-10 inset-x-0 h-40 bg-gradient-to-t from-primary-500/30 to-transparent blur-2xl rounded-full"></div>
            
            <HeroImage
              src={iPhoneImage}
              alt="iPhone showcase"
              className="-mx-4 sm:mx-auto px-4 sm:px-0 relative z-10 transform transition-all duration-700 hover:scale-105"
              maxWidth={1200}
              aspectRatio={1.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBold;