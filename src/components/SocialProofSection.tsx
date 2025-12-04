import React from 'react';
import ReviewsGrid from './ReviewsGrid';

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="section bg-neutral-50">
      <div className="container-lg">
        <div className="text-center mb-16">
          <span className="badge mb-4">Customer Reviews</span>
          <h2 className="text-neutral-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Real feedback from real business owners who trust us with their digital presence.
          </p>
        </div>

        <ReviewsGrid />
      </div>
    </section>
  );
};

export default SocialProofSection;
