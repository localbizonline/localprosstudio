import React from 'react';
import { Star } from 'lucide-react';
import ReviewsGrid from './ReviewsGrid';

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <span className="text-sm font-medium text-white">Our Customers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from real business owners who use our services every day
          </p>
        </div>

        <div className="mt-16">
          <ReviewsGrid />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;