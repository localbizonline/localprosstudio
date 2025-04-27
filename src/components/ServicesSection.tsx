import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, BarChart2, MessageSquare, Notebook, Users2, Settings } from 'lucide-react';

const services = [
  {
    icon: Globe2,
    title: "Website Design",
    description: "Custom-built, high-converting websites optimized for your South African audience",
    benefits: ["Mobile-first design", "SEO optimization", "Fast loading speeds", "Lead capture forms"]
  },
  {
    icon: BarChart2,
    title: "Google Ads Management",
    description: "Data-driven Google Ads campaigns that deliver qualified leads and measurable ROI",
    benefits: ["Local targeting", "Conversion tracking", "A/B testing", "Budget optimization"]
  },
  {
    icon: Users2,
    title: "Social Media Marketing",
    description: "Strategic social media management to build your brand and engage your community",
    benefits: ["Content creation", "Community management", "Paid advertising", "Performance tracking"]
  },
  {
    icon: Notebook,
    title: "AI Automation Solutions",
    description: "Smart automation tools that save time and improve marketing effectiveness",
    benefits: ["Lead scoring", "Email automation", "Personalization", "Analytics"]
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Chat Bots",
    description: "24/7 customer service and lead qualification through WhatsApp Business",
    benefits: ["Instant responses", "Lead qualification", "Appointment booking", "FAQ automation"]
  },
  {
    icon: Settings,
    title: "Website Management",
    description: "Comprehensive website maintenance and optimization services",
    benefits: ["Security updates", "Performance optimization", "Content updates", "Technical support"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Marketing Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your SMME needs to succeed in the digital landscape, backed by data and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="inline-block p-3 bg-primary-50 rounded-lg text-primary-600 mb-4">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="px-4 sm:px-0">
            <Link
              to="/web-design#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors w-full sm:w-auto"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;