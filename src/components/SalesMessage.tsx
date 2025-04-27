import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const fears = [
  "What if I pay thousands for a website that brings zero customers?",
  "What if they take forever and I miss opportunities?",
  "What if they don't understand my business?",
  "What if I'm trapped paying maintenance fees for eternity?",
  "What if they disappear when I need changes?"
];

const benefits = [
  {
    title: "Proven Results",
    description: "Our templates have generated over 100,000 leads across hundreds of businesses just like yours"
  },
  {
    title: "Rapid Delivery",
    description: "Your professional website will be live in 3-5 days, not months"
  },
  {
    title: "We Handle Everything",
    description: "One call and we take care of content, images, and even a basic logo if needed"
  },
  {
    title: "Transparent Pricing",
    description: "Starting at just R4,900 once-off with no hidden fees"
  },
  {
    title: "Established Team",
    description: "Not a freelancer who might vanish – a reliable company with hundreds of referrals"
  }
];

const SalesMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            "I Need a Website But After Hours of Searching...
            <span className="block text-primary-600">
              How Do I Know Who Won't Waste My Money?"
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            You've been at this for hours now. Tab after tab. Website after website. Each one promising the world.
          </p>
        </div>

        {/* Pain Points */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium italic">
            You've got quotes ranging from suspiciously cheap to outrageously expensive. Your inbox is filling up with follow-up emails.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            That <span className="italic">"quick search"</span> for a website designer has turned into a research project, and you're still not sure who to trust. The more you look, the more confused you get.
          </p>
          <p className="text-lg md:text-xl text-gray-900 font-semibold mb-4">
            And there's that deadline looming – you needed this website yesterday.
          </p>
        </div>

        {/* Real Fears Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            The Real Fears Keeping You Scrolling:
          </h3>
          <div className="space-y-4">
            {fears.map((fear, index) => (
              <div key={index} className="flex items-start bg-red-50 p-4 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-red-700">{fear}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why Hundreds of Business Owners Choose Netly:
          </h3>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-primary-300 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesMessage;