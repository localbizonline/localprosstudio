import React from 'react';
import { ArrowRight, CheckCircle2, Globe2, Laptop, Smartphone, Zap, Clock, MessageSquare } from 'lucide-react';
import DynamicTitle from './DynamicTitle';
import ProvenFeatures from './ProvenFeatures';
import SalesMessage from './SalesMessage';
import SocialProofSection from './SocialProofSection';
import PortfolioGallery from './PortfolioGallery';
import HeroImage from './HeroImage';
import { getCdnUrl } from '../lib/cdn';

import heroImage from '../assets/images/sony-xperia-z5-mockup-held-vertically-over-a-transparent-background-a10998 (1).png';

const packages = [
  {
    name: "Basic",
    price: "R3,900",
    description: "Perfect for small businesses and startups",
    timeline: "2-3 weeks",
    revisions: "2 rounds",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form integration",
      "Social media links"
    ]
  },
  {
    name: "Professional",
    price: "R5,000",
    description: "Ideal for growing businesses",
    timeline: "3-4 weeks",
    revisions: "3 rounds",
    features: [
      "Everything in Basic",
      "Up to 10 pages",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "WhatsApp integration",
      "Custom contact forms",
      "Basic e-commerce features"
    ],
    recommended: true
  },
  {
    name: "Premium",
    price: "Custom",
    description: "Best for established businesses",
    timeline: "4-6 weeks",
    revisions: "Unlimited",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "Custom animations",
      "Advanced e-commerce",
      "Payment gateway integration",
      "CRM integration",
      "Marketing automation",
      "Priority support",
      "Monthly maintenance",
      "Performance monitoring"
    ]
  }
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Timeline varies based on project complexity. Basic websites take 2-3 weeks, while more complex sites may take 4-6 weeks. We'll provide a detailed timeline during consultation."
  },
  {
    question: "Do you provide website hosting?",
    answer: "Yes, we offer reliable hosting solutions optimized for South African visitors. All our hosting packages include SSL certificates and regular backups."
  },
  {
    question: "Can you help with content creation?",
    answer: "Yes, our Professional and Premium packages include basic content creation. We can also provide comprehensive content creation services as an add-on."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring perfect display and functionality across all devices."
  }
];

const WebDesignPage = () => {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Background gradient circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10 flex flex-col min-h-[calc(100vh-6rem)]">
            <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl mb-8">
              <h1 className="text-base sm:text-sm font-sans">Website Design & Development</h1>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get a professional website for your business
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-[650px] mx-auto">
              Websites design in 7 days, from only R3,900
            </p>

            {/* Hero Image */}
            <div className="mt-auto max-w-4xl mx-auto">
              <HeroImage
                src={heroImage}
                alt="Professional Website Design"
                className="transform hover:scale-105 transition-transform duration-500"
                maxWidth={800}
                aspectRatio={1.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Your search for a reliable website company ends here
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
             After 10 years in the game and helping hundreds of business owners just like you, we've got this down to a science. No more wondering if your website will ever see the light of day or if you're overpaying. 

              We deliver quality websites when we say we will, at prices that make sense for your business. Skip the stress, delays and technical jargon - get your professional website up and running without the usual hassles.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-primary-300 mb-1">
                    Proven Results
                  </h4>
                  <p className="text-gray-300">Our templates have generated over 100,000 leads across hundreds of businesses just like yours</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-primary-300 mb-1">
                    Rapid Delivery
                  </h4>
                  <p className="text-gray-300">Your professional website will be live in 3-5 days, not months</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-primary-300 mb-1">
                    We Handle Everything
                  </h4>
                  <p className="text-gray-300">One call and we take care of content, images, and even a basic logo if needed</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-primary-300 mb-1">
                    Transparent Pricing
                  </h4>
                  <p className="text-gray-300">Starting at just R4,900 once-off with no hidden fees</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-primary-300 mb-1">
                    Established Team
                  </h4>
                  <p className="text-gray-300">Not a freelancer who might vanish – a reliable company with hundreds of referrals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through some of our latest website designs and digital experiences
            </p>
          </div>
          <PortfolioGallery />
        </div>
      </section>

      <ProvenFeatures />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-12 shadow-2xl">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Ready to Ignite Your Idea?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-display">
              Choose the perfect package for your project and get started today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</span>
                <span className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full">One time</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Website Package</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">Starting at R4,900</span>
                </div>
                <p className="text-red-600 text-sm mt-1">4 spots left for March</p>
              </div>

              <div className="mb-8">
                <h4 className="font-medium mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Complete website development in 5-7 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Mobile responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Professional content writing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>30 days of free maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Regular updates and transparent process</span>
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                className="block w-full py-4 px-6 text-center text-white bg-black rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                Get Started Now →
              </a>
            </div>

            <div className="bg-black rounded-2xl p-8 text-white">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full">Monthly Retainer</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Growth Retainer Package</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">R350/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">No commitment, cancel anytime</p>
              </div>

              <div className="mb-8">
                <h4 className="font-medium mb-4">Dedicated Monthly Services:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Regular content updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Weekly strategy calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Priority feature development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Continuous maintenance & optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-500 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Same-day emergency support</span>
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                className="block w-full py-4 px-6 text-center text-black bg-white rounded-xl hover:bg-gray-100 transition-colors font-medium"
              >
                Schedule a Call →
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our web design services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProofSection />

    </div>
  );
};

export default WebDesignPage;