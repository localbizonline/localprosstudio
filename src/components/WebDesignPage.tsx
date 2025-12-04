import React from 'react';
import { ArrowRight, Check, Clock, Zap, Shield, HeartHandshake } from 'lucide-react';
import SocialProofSection from './SocialProofSection';
import PortfolioGallery from './PortfolioGallery';

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Your website live in 5-7 days, not months."
  },
  {
    icon: Shield,
    title: "Proven Templates",
    description: "Designs that have generated 100,000+ leads."
  },
  {
    icon: HeartHandshake,
    title: "We Handle Everything",
    description: "Content, images, and setup all included."
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "30 days free maintenance after launch."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "Quick 15-minute chat to understand your business and goals."
  },
  {
    step: "02",
    title: "Content & Design",
    description: "We gather your info and create a custom design for your business."
  },
  {
    step: "03",
    title: "Review & Refine",
    description: "You review the design and we make any adjustments needed."
  },
  {
    step: "04",
    title: "Launch",
    description: "Your website goes live and starts working for your business."
  }
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 5-7 business days. More complex projects may take 2-3 weeks. We'll give you a clear timeline during our initial call."
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes, we offer reliable hosting optimized for South African visitors. All hosting includes SSL certificates and regular backups."
  },
  {
    question: "Can you help with content?",
    answer: "Absolutely. We write professional copy for your website based on a short questionnaire about your business. No need to stress about writing."
  },
  {
    question: "Will my website work on mobile?",
    answer: "Yes, every website we build is fully responsive and tested on all devices. Over 70% of your visitors will likely be on mobile."
  },
  {
    question: "What if I need changes later?",
    answer: "You get 30 days of free changes after launch. After that, our monthly retainer covers unlimited updates, or you can pay per change."
  },
  {
    question: "Do I own my website?",
    answer: "Yes, you own everything. If you ever want to move to a different provider, we'll help you transfer all files and content."
  }
];

const WebDesignPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-md relative">
          <div className="text-center">
            <span className="badge-dark mb-6">Website Design</span>
            
            <h1 className="text-white mb-6 text-balance">
              Professional Websites<br className="hidden sm:block" /> That Get Results
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Get a modern, mobile-friendly website that turns visitors into customers. 
              Delivered in 7 days, from R4,900.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://wa.me/27787869161?text=Hi%2C%20I'm%20interested%20in%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#portfolio" className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                See Our Work
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex items-center justify-center gap-8 text-neutral-400 text-sm">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                5-7 day delivery
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Mobile responsive
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                SEO optimized
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-sm bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-neutral-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section bg-neutral-50">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Work</span>
            <h2 className="text-neutral-900 mb-4">Recent Projects</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Browse some of our latest website designs for South African businesses.
            </p>
          </div>
          <PortfolioGallery />
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Process</span>
            <h2 className="text-neutral-900 mb-4">How It Works</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              A simple, straightforward process to get your website live quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-neutral-100 mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-neutral-50">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">Pricing</span>
            <h2 className="text-neutral-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              No hidden fees. Choose the option that works best for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* One-time Package */}
            <div className="bg-white rounded-2xl p-8 shadow-soft relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Pro Website Package
              </h3>
              <p className="text-neutral-600 text-sm mb-6">
                Everything you need to get online professionally.
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">R4,900</span>
                <span className="text-neutral-500 ml-2">once-off</span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Complete website in 5-7 days",
                  "Mobile responsive design",
                  "Professional copywriting",
                  "WhatsApp & call buttons",
                  "Contact form setup",
                  "Google Maps integration",
                  "Basic SEO setup",
                  "30 days free support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/27787869161?text=Hi%2C%20I'm%20interested%20in%20the%20Pro%20Website%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Monthly Retainer */}
            <div className="bg-neutral-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-2">
                Growth Retainer
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Ongoing support and updates for your website.
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">R350</span>
                <span className="text-neutral-400 ml-2">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited content updates",
                  "Performance monitoring",
                  "Security updates",
                  "Monthly backups",
                  "Priority support",
                  "Cancel anytime"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/27787869161?text=Hi%2C%20I'm%20interested%20in%20the%20Growth%20Retainer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 w-full justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">FAQ</span>
            <h2 className="text-neutral-900 mb-4">Common Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProofSection />

      {/* Final CTA */}
      <section className="section-sm bg-neutral-950">
        <div className="container-md text-center">
          <h2 className="text-white mb-4">Ready for Your New Website?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Let's chat about your project. No pressure, just a friendly conversation 
            about how we can help.
          </p>
          <a
            href="https://wa.me/27787869161?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;
