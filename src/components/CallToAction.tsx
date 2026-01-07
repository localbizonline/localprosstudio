import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-0">
              Get a personalized growth strategy session - completely free!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg text-base sm:text-lg font-medium text-primary-700 hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-lg text-base sm:text-lg font-medium text-white hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              Learn More
              <Rocket className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;