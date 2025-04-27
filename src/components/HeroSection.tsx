import React from 'react';
import { getCdnUrl } from '../lib/cdn';
import GradientButton from './GradientButton';
import BrowserMockup from './BrowserMockup';
import HeroImage from './HeroImage';

import iPhoneImage from '../assets/images/Compressed/White iPhone 6 Plus held.png';

const HeroSection = () => {
  return (
    <div className="relative pt-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto relative z-10 flex flex-col h-full px-4">
          <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl mb-8">
            <h1 className="text-base sm:text-sm font-sans">Local Pros Studio</h1>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Grow And Automate Your Business
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Growing and managing a business is hard, our goal is to make it easier and more profitable. Choose from our range of services to help grow and manage your business.
          </p>
          <div className="flex flex-col gap-4 justify-center mb-8 sm:mb-16">
            <GradientButton href="#audit" className="mx-auto">
              Get Your Free Demo
            </GradientButton>
          </div>

          {/* Hero Image */}
          <HeroImage
            src={iPhoneImage}
            alt="iPhone showcase"
            className="-mx-4 sm:mx-auto px-4 sm:px-0"
            maxWidth={1200}
            aspectRatio={1.5}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;