import React from 'react';
import { Star, Quote } from 'lucide-react';
import helloPeterLogo from '../assets/images/hellopeterlogo.png';

const reviews = [
  {
    name: "Terenzio T.",
    business: "BugBombers",
    content: "Local pros have helped me elevate my business to the next level, the leads they source are legit and any valid disputes are settled instantly without hesitation. As a young entrepreneur I highly recommend signing up!",
    date: "2 months ago",
    stars: 5
  },
  {
    name: "Vicky D.", 
    business: "Home Services",
    content: "We've been working with Local Pros, and we're extremely impressed with the results. They provide high-quality leads that convert, and their customer service is top-notch.",
    date: "1 month ago",
    stars: 5
  },
  {
    name: "Takudzwa T.",
    business: "Pool Services", 
    content: "Local Pros Team is wonderful. Their quality leads and customer centric approach has brought our pool business to where we are now. Definitely Partners for growth.",
    date: "3 months ago",
    stars: 5
  },
  {
    name: "Sharief V.",
    business: "Contractor",
    content: "What a fantastic bunch of people to work with, just professional all-round. The leads are really credible and deals are easily closed. Will highly recommend.",
    date: "2 weeks ago", 
    stars: 5
  },
  {
    name: "Daphne I.",
    business: "Service Provider",
    content: "Since signing up with them, we have only experienced exceptional service, amazing rates and a knowledgeable team. I highly recommend advertising your company through Local Pro's.",
    date: "1 week ago",
    stars: 5
  },
  {
    name: "Willy B.", 
    business: "Home Services",
    content: "I have been with Local Pros for 5 years now, and am very happy with their services. Very efficient and reliable.",
    date: "3 weeks ago",
    stars: 5
  }
];

const ReviewsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
        >
          {/* Quote icon */}
          <Quote className="w-8 h-8 text-neutral-200 mb-4" />

          {/* Review content */}
          <p className="text-neutral-700 text-sm leading-relaxed mb-6">
            "{review.content}"
          </p>

          {/* Author info */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white mr-3">
                <span className="text-sm font-medium">{review.name.charAt(0)}</span>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 text-sm">{review.name}</h4>
                <p className="text-neutral-500 text-xs">{review.business}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center">
              {[...Array(review.stars)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 text-amber-400 fill-current" 
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>

          {/* HelloPeter badge */}
          <div className="flex items-center mt-4 pt-4 border-t border-neutral-100">
            <img
              src={helloPeterLogo}
              alt="HelloPeter"
              className="h-4 w-auto opacity-50 mr-2"
            />
            <span className="text-xs text-neutral-400">Verified on HelloPeter</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsGrid;
