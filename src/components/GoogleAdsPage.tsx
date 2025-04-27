import React from 'react';
import { ArrowRight, CheckCircle2, Target, TrendingUp, Users, DollarSign, LineChart, Shield } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const benefits = [
  {
    icon: Target,
    title: "Reach Ready-to-Buy Customers",
    description: "Show up exactly when local customers are searching for your services"
  },
  {
    icon: TrendingUp,
    title: "Fast Results",
    description: "Start getting leads within days, not months like traditional marketing"
  },
  {
    icon: Users,
    title: "Target Your Local Area",
    description: "Only pay for clicks from customers in your service area"
  },
  {
    icon: DollarSign,
    title: "Control Your Budget",
    description: "Start small and scale up as you see results"
  },
  {
    icon: LineChart,
    title: "Track Every Rand",
    description: "See exactly how many leads and sales your ads generate"
  },
  {
    icon: Shield,
    title: "No Long-Term Contracts",
    description: "Flexible month-to-month management with no lock-in"
  }
];

const successStories = [
  {
    business: "Local Plumber",
    location: "Cape Town",
    before: "Struggling to compete with larger companies",
    after: "Now booking 15-20 new jobs per week from Google Ads",
    roi: "R8.50 return for every R1 spent"
  },
  {
    business: "Electrician",
    location: "Johannesburg",
    before: "Relying only on word-of-mouth referrals",
    after: "Doubled monthly revenue within 3 months",
    roi: "R7.20 return for every R1 spent"
  },
  {
    business: "Security Company",
    location: "Durban",
    before: "Wasting budget on poorly targeted ads",
    after: "Cut cost per lead by 64% while increasing quality",
    roi: "R9.30 return for every R1 spent"
  }
];

const packages = [
  {
    name: "Starter",
    price: "R2,499/month",
    adBudget: "R5,000 - R10,000",
    ideal: "Perfect for small local service businesses",
    features: [
      "Campaign setup & optimization",
      "Keyword research & targeting",
      "Ad copywriting",
      "Monthly performance report",
      "Phone & email support",
      "Lead tracking setup"
    ]
  },
  {
    name: "Growth",
    price: "R3,999/month",
    adBudget: "R10,000 - R25,000",
    ideal: "Best for established businesses ready to scale",
    features: [
      "Everything in Starter",
      "Advanced conversion tracking",
      "Competitor analysis",
      "A/B testing",
      "Landing page recommendations",
      "Bi-weekly optimization",
      "Priority support"
    ],
    recommended: true
  },
  {
    name: "Premium",
    price: "Custom",
    adBudget: "R25,000+",
    ideal: "For businesses with multiple locations/services",
    features: [
      "Everything in Growth",
      "Multiple campaign management",
      "Custom reporting dashboard",
      "Weekly strategy calls",
      "Landing page design",
      "Cross-platform remarketing",
      "Dedicated account manager"
    ]
  }
];

const GoogleAdsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Background gradient circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl mb-8">
              <h1 className="text-base sm:text-sm font-sans">Google Ads Management</h1>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get More Local Customers with Google Ads
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Show up first when customers search for your services. Our clients see an average of
              <span className="font-semibold text-primary-300"> 300% return on ad spend</span>.
            </p>
            <div className="flex flex-col gap-4 justify-center mb-8 sm:mb-16">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 transition-colors w-full sm:w-auto"
                >
                  Get Your Free Ad Strategy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#success-stories"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  See Success Stories
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative mx-auto max-w-5xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
                alt="Google Ads Analytics Dashboard"
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tired of...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800">Watching competitors show up above you in Google searches?</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800">Waiting for the phone to ring while your crew sits idle?</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800">Wasting money on marketing that doesn't bring results?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Google Ads Work for Local Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in front of customers actively looking for your services, right when they need you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="inline-block p-3 bg-indigo-50 rounded-lg text-indigo-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Local Businesses Like Yours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other service businesses are growing with Google Ads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{story.business}</h3>
                  <p className="text-indigo-600">{story.location}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Before:</h4>
                    <p className="text-gray-600">{story.before}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">After:</h4>
                    <p className="text-green-600 font-medium">{story.after}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg font-bold text-indigo-600">{story.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All packages include campaign setup, management, and regular optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg border ${
                  pkg.recommended ? 'border-indigo-600' : 'border-gray-100'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-indigo-600">{pkg.price}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{pkg.ideal}</p>
                  <p className="text-sm text-gray-500 mb-6">Recommended ad budget: {pkg.adBudget}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center px-6 py-3 rounded-lg transition-colors ${
                      pkg.recommended
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Get a free Google Ads strategy session and competitor analysis worth R2,500. No obligations, just actionable insights for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Book Your Free Strategy Session
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProofSection />

    </div>
  );
};

export default GoogleAdsPage;