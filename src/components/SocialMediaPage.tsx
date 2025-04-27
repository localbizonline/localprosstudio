import React from 'react';
import { ArrowRight, CheckCircle2, Facebook, Instagram, BarChart3, Star, Clock, Users, Award } from 'lucide-react';
import SocialProofSection from './SocialProofSection';
import GradientButton from './GradientButton';

const planFeatures = {
  aiAssisted: [
    "Save hours every week - Our AI creates and posts content automatically",
    "Stay visible consistently - Weekly posting schedule keeps your business in front of customers",
    "Showcase your reputation - We turn your reviews into eye-catching graphics",
    "Never miss opportunities - Special holiday posts to keep your business relevant",
    "Posts to Facebook and Instagram - Reach customers on multiple platforms",
    "Weekly service highlights - Showcase what makes your business special"
  ],
  fullyManaged: [
    "Custom social strategy - Tailored plan aligned with your business goals",
    "Professional graphics - Custom-designed visuals that make you look established",
    "Comprehensive content mix - Showcase your work, testimonials, services, and offers",
    "2-3 quality posts weekly - Consistent high-quality content with zero effort from you",
    "Response management - We'll handle customer comments and questions",
    "Monthly performance reports - See exactly how your social media is growing",
    "Content planning sessions - Quarterly strategy meetings to align with your business goals"
  ]
};

const testimonials = [
  {
    quote: "Since starting the AI posting service, my Facebook page looks professional and I'm getting new enquiries every week without having to do anything myself.",
    author: "John M., Plumbing Services",
    service: "AI-Assisted Posting"
  },
  {
    quote: "The team completely transformed our social media presence. Now when customers get quotes from us and other companies, they often tell us they chose us because our Facebook page made us look more professional and trustworthy.",
    author: "Sarah K., Kitchen Renovations",
    service: "Fully Managed Social Media"
  }
];

const stats = [
  {
    value: "90%",
    label: "of customers check social media before choosing a service",
    icon: Users
  },
  {
    value: "67%",
    label: "more jobs won by businesses with active social media",
    icon: BarChart3
  },
  {
    value: "15-20%",
    label: "higher prices charged by businesses with professional content",
    icon: Award
  }
];

const workflowSteps = [
  {
    title: "Initial Consultation",
    description: "We'll discuss your business, services, and target customers"
  },
  {
    title: "Strategy Development",
    description: "We create a customized posting plan for your business"
  },
  {
    title: "Content Creation",
    description: "Our team develops posts that highlight your services"
  },
  {
    title: "Consistent Posting",
    description: "Regular content keeps your business visible"
  },
  {
    title: "Growth Monitoring",
    description: "We track engagement and adjust strategy as needed"
  }
];

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-900 to-purple-900 overflow-hidden">
        {/* Background gradient circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10 flex flex-col h-full py-16">
            <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl mb-8">
              <h1 className="text-base sm:text-sm font-sans">Social Media Management</h1>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Boost Your Business with Professional Social Media Management
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Stand out from your competitors, build immediate trust, and get more jobs with a professional, active social media presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <GradientButton href="#packages" className="mx-auto">
                View Our Packages
              </GradientButton>
            </div>
            
            {/* Hero Image */}
            <div className="relative mx-auto max-w-5xl mt-8">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200"
                alt="Social Media Management Dashboard"
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Social Media Matters for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital world, a strong social media presence is essential for service businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the option that best fits your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI-Assisted Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-indigo-100 transition-all hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <Facebook className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI-Assisted Posting</h3>
                  <p className="text-indigo-600 font-medium">R1,500 per month</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Perfect for small businesses looking to maintain a consistent presence without breaking the budget.
              </p>

              <ul className="space-y-4 mb-8">
                {planFeatures.aiAssisted.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-gray-50 rounded-lg mb-8">
                <blockquote className="italic text-gray-600">
                  "{testimonials[0].quote}"
                  <footer className="mt-2 text-sm font-medium text-gray-900">
                    - {testimonials[0].author}
                  </footer>
                </blockquote>
              </div>

              <a
                href="#contact"
                className="block text-center px-6 py-3 rounded-xl transition-colors bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50"
              >
                Get Started
              </a>
            </div>

            {/* Fully Managed Plan */}
            <div className="bg-indigo-700 rounded-2xl p-8 shadow-xl text-white relative transform hover:scale-105 transition-all">
              <div className="absolute -top-4 right-6">
                <span className="bg-yellow-500 text-indigo-900 text-sm font-bold px-4 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Instagram className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Fully Managed Social Media</h3>
                  <p className="text-indigo-200 font-medium">R5,000 per month</p>
                </div>
              </div>
              
              <p className="text-indigo-100 mb-6">
                The complete solution for businesses ready to dominate their local market on social media.
              </p>

              <ul className="space-y-4 mb-8">
                {planFeatures.fullyManaged.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-indigo-100">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-indigo-800 rounded-lg mb-8">
                <blockquote className="italic text-indigo-100">
                  "{testimonials[1].quote}"
                  <footer className="mt-2 text-sm font-medium text-white">
                    - {testimonials[1].author}
                  </footer>
                </blockquote>
              </div>

              <a
                href="#contact"
                className="block text-center px-6 py-3 rounded-xl transition-colors bg-white text-indigo-600 hover:bg-gray-100 font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes getting started with professional social media management easy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-6 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-indigo-600 mt-2"></div>
                  )}
                </div>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Services Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Combine With Our Other Services for Maximum Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Social Media Management works even better when paired with our other offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Pros App</h3>
              <p className="text-gray-600 mb-4">
                We can showcase your completed jobs directly from the app to your social media platforms.
              </p>
              <a href="#" className="text-indigo-600 flex items-center font-medium hover:text-indigo-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Review Growth Service</h3>
              <p className="text-gray-600 mb-4">
                We'll highlight your best reviews across your social channels to build trust with potential customers.
              </p>
              <a href="#" className="text-indigo-600 flex items-center font-medium hover:text-indigo-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Website Design</h3>
              <p className="text-gray-600 mb-4">
                Create a seamless experience between social media and your website for maximum conversion rates.
              </p>
              <a href="/web-design" className="text-indigo-600 flex items-center font-medium hover:text-indigo-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Get started today with a free consultation and social media audit worth R2,500. No obligations, just actionable insights for your business.
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

export default SocialMediaPage;