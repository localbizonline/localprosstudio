import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const packages = [
  {
    name: "Starter",
    price: "R4,999",
    description: "Perfect for small businesses just starting their digital journey",
    features: [
      "Responsive Website Design",
      "Basic SEO Setup",
      "Social Media Setup",
      "WhatsApp Business Integration",
      "Monthly Performance Report"
    ]
  },
  {
    name: "Growth",
    price: "R9,999",
    description: "Ideal for businesses ready to accelerate their online growth",
    features: [
      "Everything in Starter",
      "Google Ads Management",
      "Social Media Management",
      "Content Creation",
      "AI Chatbot Integration",
      "Bi-weekly Strategy Calls"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive solution for established businesses",
    features: [
      "Everything in Growth",
      "Advanced AI Automation",
      "Custom Integration Development",
      "Dedicated Account Manager",
      "Priority Support",
      "Weekly Strategy Sessions"
    ]
  }
];

const LeadGenSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Get your free digital marketing audit and discover untapped growth opportunities for your business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center text-base sm:text-lg"
              >
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Packages
            </h3>
            <div className="space-y-6">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">{pkg.name}</h4>
                      <p className="text-gray-600">{pkg.description}</p>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-indigo-600">{pkg.price}</div>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green- 500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#audit"
                    className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenSection;