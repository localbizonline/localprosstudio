import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const PainPoints = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Organic connecting lines for desktop */}
          <svg className="absolute hidden md:block w-full h-full top-0 left-0 z-0 pointer-events-none" 
               style={{ transform: 'translateY(20%)' }}>
            <path
              d="M200,50 C300,50 350,150 450,150 C550,150 600,250 700,250"
              stroke="#e0e7ff"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8,8"
            />
          </svg>

          {/* Pain Point 1 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -top-4 -right-4 bg-red-100 w-12 h-12 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl">😤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                Tired of watching competitors claim the
                <span className="relative inline-block px-2">
                  top spots
                  <div className="absolute inset-x-0 bottom-0 h-3 bg-yellow-200 opacity-50 transform -rotate-1"></div>
                </span>
                in Google while you're stuck on page 2?
              </h3>
              <ArrowDownRight className="w-6 h-6 text-indigo-400 md:hidden mt-4" />
            </div>
          </div>

          {/* Pain Point 2 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:translate-y-8">
              <div className="absolute -top-4 -right-4 bg-red-100 w-12 h-12 rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl">😫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                Frustrated with crews standing by while your
                <span className="relative inline-block px-2">
                  phone stays silent
                  <div className="absolute inset-x-0 bottom-0 h-3 bg-red-200 opacity-50 transform rotate-1"></div>
                </span>
                ?
              </h3>
              <ArrowDownRight className="w-6 h-6 text-indigo-400 md:hidden mt-4" />
            </div>
          </div>

          {/* Pain Point 3 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:translate-y-16">
              <div className="absolute -top-4 -right-4 bg-red-100 w-12 h-12 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl">🤬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                Had enough of throwing money at marketing that
                <span className="relative inline-block px-2">
                  promises big but delivers little
                  <div className="absolute inset-x-0 bottom-0 h-3 bg-indigo-200 opacity-50 transform -rotate-1"></div>
                </span>
                ?
              </h3>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <a href="#contact" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                  Let's fix this together →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;