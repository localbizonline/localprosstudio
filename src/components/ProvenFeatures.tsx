import React from 'react';
import { Phone, Star, Camera, MapPin, Search, FileCheck, Users, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: FileCheck,
    title: "Proven Design Templates",
    description: "Get a website based on years of optimization and industry best practices. Don't gamble with unproven designs - our battle-tested websites consistently outperform the competition.",
  },
  {
    icon: Phone,
    title: "Capture More Leads",
    description: "Smart features that make it easy for visitors to become leads. Prominent click-to-call buttons allow mobile users to contact you instantly, while easy-to-fill forms capture visitor information efficiently.",
  },
  {
    icon: Star,
    title: "Build Trust with Reviews",
    description: "Boost sales by up to 380% with strategically placed reviews. Our automated email system prompts customers for feedback, while our design showcases reviews from Google, Facebook, and more in one place.",
  },
  {
    icon: Camera,
    title: "Project Galleries",
    description: "Showcase your expertise with stunning before-and-after photos in our portfolio pages. Inspire confidence in your skills with visual proof of your outstanding work.",
  },
  {
    icon: MapPin,
    title: "Display Service Areas",
    description: "Appeal to your local market with clear service area definitions. Our maps and content clearly define your coverage zones, reducing out-of-area inquiries and focusing on relevant local leads.",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Climb to the top of local search results with our SEO-optimized designs. We incorporate location-specific keywords and optimize for 'near me' searches to capture immediate-need clients.",
  }
];

const ProvenFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tested and Proven Features
          </h2>
          <p className="text-xl text-gray-600">
            Skip the guesswork. Get a powerful, all-in-one solution backed by years of industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mb-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">380%</div>
            <p className="text-gray-600">Increase in conversions with review integration</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">250%</div>
            <p className="text-gray-600">More calls with mobile-optimized design</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <p className="text-gray-600">Lead capture with automated systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenFeatures;