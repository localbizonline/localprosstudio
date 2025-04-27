import React from 'react';
import { Star } from 'lucide-react';
import helloPeterLogo from '../assets/images/hellopeterlogo.png';

const gradientPairs = [
  ['from-indigo-500', 'to-indigo-600'],
  ['from-blue-500', 'to-blue-600'],
  ['from-purple-500', 'to-purple-600'],
  ['from-teal-500', 'to-teal-600'],
  ['from-cyan-500', 'to-cyan-600'],
  ['from-rose-500', 'to-rose-600'],
  ['from-emerald-500', 'to-emerald-600'],
  ['from-fuchsia-500', 'to-fuchsia-600']
];

const getRandomGradient = () => {
  const index = Math.floor(Math.random() * gradientPairs.length);
  return gradientPairs[index];
};

const reviews = [
  {
    name: "Terenzio T.",
    title: "Local pros & BugBombers",
    content: "Local pros have helped me elevate my business to the next level, the leads they source are legit and any valid disputes are settled instantly without hesitation. As a young entrepreneur I highly recommend signing up with local pros!!!!",
    date: "2 months ago",
    stars: 5
  },
  {
    name: "Vicky D.", 
    title: "Great Company",
    content: "We've been working with this Local Pros, and we're extremely impressed with the results. They provide high-quality leads that convert, and their customer service is top-notch. Their team really understands our business and targets the right audience.",
    date: "1 month ago",
    stars: 5
  },
  {
    name: "Takudzwa T.",
    title: "Quality Leads and Customer Satisfaction", 
    content: "Local Pros Team is wonderful. Their quality leads and customer centric approach has brought our pool business to where we are now. Definitely Partners for growth and we will highly recommend them to anyone looking for quality leads and customers looking for home services contractors in South Africa.",
    date: "3 months ago",
    stars: 5
  },
  {
    name: "Sharief V.",
    title: "Local Pros keep up good work!!!",
    content: "What a fantastic bunch of people to work with, just professional all-round. The leads are really credible and deals are easily closed. Will highly recommend to all trying to grow their business.",
    date: "2 weeks ago", 
    stars: 5
  },
  {
    name: "Daphne I.",
    title: "Happy Client",
    content: "Since signing up with them, we have only experienced exceptional service, amazing rates and a knowledgeable team. I highly recommend advertising your company through Local Pro's, you won't regret it for a moment.",
    date: "1 week ago",
    stars: 5
  },
  {
    name: "Willy B.", 
    title: "Local Pros excellent service.",
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
          className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg transition-all duration-300 group"
        >
          <div className="flex items-center mb-4">
            {(() => {
              const [fromColor, toColor] = getRandomGradient();
              return (
                <div className={`w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white mr-3`}>
                  <span className="text-lg font-semibold">{review.name.charAt(0)}</span>
                </div>
              );
            })()}
            <div>
              <h3 className="font-medium text-gray-900">{review.name}</h3>
              <div className="flex items-center">
                {[...Array(review.stars)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-current" 
                    strokeWidth={0}
                  />
                ))}
                <span className="text-gray-500 text-sm ml-2">{review.date}</span>
              </div>
            </div>
          </div>
          <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
          <p className="text-gray-600 text-sm flex-grow leading-relaxed">{review.content}</p>
          <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
            <img
              src={helloPeterLogo}
              alt="HelloPeter"
              className="h-5 w-auto mr-2"
            />
            <span className="text-xs text-gray-500">Verified Review on HelloPeter</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsGrid;