import React, { useState } from 'react';
import { ArrowRight, Check, Star, Phone, Calendar, MessageSquare, Globe, BarChart2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';
import SocialProofSection from './SocialProofSection';
import HeroComingSoon from './HeroComingSoon';
import localProsImage from '../assets/images/mockups/localprospeople.jpg';
import ImageOptimizer from './ImageOptimizer'; 

const premiumServices = [
  {
    icon: Phone,
    title: "Local Pros App",
    subtitle: "Run your business from your pocket",
    description: "Manage your entire business directly from your phone.",
    features: [
      "Track leads from first contact to finished job",
      "Create and send professional quotes in seconds",
      "Set appointments in your built-in calendar",
      "Get daily reminders about jobs and follow-ups",
      "Send quotes via WhatsApp with automatic follow-ups"
    ],
    link: "/app",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    subtitle: "Be everywhere without the effort",
    description: "Let us create a professional social media presence that attracts new customers.",
    features: [
      "AI-assisted or fully managed posting options",
      "Custom graphics that showcase your business",
      "Regular posting schedule to keep you visible",
      "Holiday and special day posts",
      "Review highlights and service promotions"
    ],
    link: "/social-media",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Globe,
    title: "Website Design",
    subtitle: "Your 24/7 sales representative",
    description: "Professional websites that convert visitors into customers.",
    features: [
      "Modern or fully customized design options",
      "Easy-to-use call and WhatsApp buttons",
      "Mobile-friendly for all devices",
      "Showcase your services and recent projects",
      "Build instant credibility with potential customers"
    ],
    link: "/web-design",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Star,
    title: "Review Growth Service",
    subtitle: "Turn happy customers into new business",
    description: "Build trust and win more jobs with powerful online reviews.",
    features: [
      "Automatically collect reviews after completed jobs",
      "Display testimonials on your website and social media",
      "Share reviews when sending quotes to prospects",
      "Build credibility that helps you charge premium prices",
      "Stand out from competitors with visible social proof"
    ],
    link: "/reviews",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: BarChart2,
    title: "Google Ads Management",
    subtitle: "The fast track to more customers",
    description: "Get your phone ringing with expertly managed Google Ads.",
    features: [
      "Target the exact people looking for your services",
      "Maximize your budget with optimized campaigns",
      "Track leads and measure return on investment",
      "Continuous improvement and monthly refinements",
      "Quick results compared to other marketing methods"
    ],
    link: "/google-ads",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: Users,
    title: "All-in-One Digital Marketing",
    subtitle: "Your complete solution",
    description: "For larger businesses ready to dominate their market.",
    features: [
      "Comprehensive strategy across all digital channels",
      "Consistent brand messaging and regular content updates",
      "Professional marketing materials for all your needs",
      "Improved search rankings to boost organic traffic",
      "Regular reporting and strategy adjustments"
    ],
    link: "/all-in-one",
    color: "from-violet-500 to-purple-600"
  }
];

const productCards = [
  {
    icon: Phone,
    title: "Local Pros App",
    price: "R1,500",
    period: "per month",
    description: "Run your business from your smartphone. Track leads, send quotes, and manage jobs with ease.",
    features: [
      "Lead tracking system",
      "Appointment calendar",
      "WhatsApp integration",
      "Project photo storage",
      "Customer messaging"
    ],
    link: "/app"
  },
  {
    icon: Globe,
    title: "Website Design",
    price: "R4,900",
    period: "once-off",
    description: "Professional websites that convert visitors into customers with mobile-friendly designs.",
    features: [
      "Custom design",
      "Mobile responsive",
      "Lead capture forms",
      "Google Maps integration",
      "Project gallery"
    ],
    link: "/web-design"
  },
  {
    icon: MessageSquare,
    title: "Social Media",
    price: "R1,500",
    period: "per month",
    description: "Done-for-you social media management to keep your business visible online.",
    features: [
      "Content creation",
      "Regular posting",
      "Review showcasing",
      "Holiday promotions",
      "Brand building"
    ],
    link: "/social-media"
  },
  {
    icon: BarChart2,
    title: "Google Ads",
    price: "R2,499",
    period: "per month",
    description: "Targeted advertising that brings qualified leads directly to your business.",
    features: [
      "Campaign management",
      "ROI tracking",
      "Local targeting",
      "Competitor analysis",
      "Monthly reporting"
    ],
    link: "/google-ads"
  }
];

const benefits = [
  "Proven results – Helping South African businesses grow since 2015",
  "Local expertise – We understand your market and customers",
  "Integrated solutions – All our services work together seamlessly",
  "Ongoing support – We're your partner, not just a service provider",
  "Flexible options – Start with what you need most and grow from there",
  "Industry knowledge – Specialized in home service businesses",
  "Growth focused – Strategies designed to increase your revenue",
  "Time-saving – Let us handle marketing while you focus on your work"
];

const Home2Page = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Show first 4 services by default, show all when showAllServices is true
  const visibleServices = showAllServices ? premiumServices : premiumServices.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Section */}
      <HeroComingSoon />

      {/* Dark Products Section - EXISTING DESIGN */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why We Created These Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hey there! 👋 After years of sending leads your way, we noticed something important. Your customers told us they want to see more reviews and better online presence before hiring. Meanwhile, you've shared how hard it is to juggle admin, follow up on quotes, and find time for marketing while actually doing the work.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
              We've been listening to these challenges and have developed Local Pros Studio ✨ – practical tools to help with day-to-day business operations, admin, and building your online presence.
            </p>
            <p className="text-lg text-primary-400 mt-8 font-medium">
              All these new tools will be available starting June 2025
            </p>

            <div className="space-y-8 mt-12">
              {visibleServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index} 
                    className="group bg-black rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-primary-500/50"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Left side with gradient and icon */}
                      <div className="w-full md:w-1/4 p-8 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-white flex flex-col justify-center items-center md:items-start">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">{service.title}</h3>
                      </div>
                      
                      {/* Right side with description and features */}
                      <div className="p-8 md:p-10 w-full md:w-3/4 bg-white/5 backdrop-blur-sm">
                        <p className="text-lg mb-6 text-white">{service.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start">
                              <div className="p-1 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white mr-3 flex-shrink-0 mt-1">
                                <Check className="w-4 h-4" />
                              </div>
                              <span className="text-gray-200 text-left">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Show More Button */}
              {!showAllServices && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setShowAllServices(true)}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:opacity-90 transition-all"
                  >
                    Show More Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <img
              src={localProsImage}
              alt="Performance Chart"
              className="mx-auto mb-8 rounded-lg shadow-xl"
              width={800}
              height={400}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Local Pros Premium
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to helping your business succeed.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-500/20 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProofSection />
    </div>
  );
};

export default Home2Page;