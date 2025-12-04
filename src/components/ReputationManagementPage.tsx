import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, MessageSquare, Share2, Shield, TrendingUp, Clock, Zap } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const services = [
  {
    title: "Review Collection",
    description: "Automated review requests via WhatsApp & email. Smart filtering catches unhappy customers privately before they go public.",
    price: "R1,200",
    link: "/reputation/reviews",
    icon: Star,
    features: [
      "Automatic WhatsApp + email requests",
      "Smart filtering for unhappy customers",
      "Real-time alerts for all reviews",
      "AI-generated review responses",
      "Website review embedding",
      "Dashboard access"
    ],
    highlight: false
  },
  {
    title: "Social Posting",
    description: "Create posts in 60 seconds. We handle consistency with weekly service posts, holiday content, and review highlights.",
    price: "R2,000",
    link: "/social-media",
    icon: Share2,
    features: [
      "60-second posting form",
      "Unlimited posts from your submissions",
      "4 service promotion posts/month",
      "Public holiday posts (automatic)",
      "Review highlight posts (automatic)",
      "Posts to Facebook, Instagram & Google"
    ],
    highlight: false
  },
  {
    title: "Combined Package",
    description: "Everything in both packages. Best value for complete online reputation management.",
    price: "R2,500",
    betaPrice: "R1,250",
    link: "https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Combined%20Reputation%20Package",
    external: true,
    icon: Zap,
    features: [
      "Everything in Review Collection",
      "Everything in Social Posting",
      "Priority support",
      "Full dashboard access",
      "Best value option"
    ],
    highlight: true
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "More Enquiries",
    description: "Strong reviews lead to higher conversion rates and more paying customers."
  },
  {
    icon: Shield,
    title: "Protect Your Reputation",
    description: "Catch unhappy customers privately before negative reviews go public."
  },
  {
    icon: Clock,
    title: "Save Your Time",
    description: "We handle everything. Your total time commitment: ~30 minutes per month."
  },
  {
    icon: MessageSquare,
    title: "Stay Visible",
    description: "Consistent posting signals to customers that you're active and trustworthy."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "We Connect Your Platforms",
    description: "Facebook, Instagram, and Google Business Profile — all linked and ready."
  },
  {
    step: "2",
    title: "Send Us Job Details",
    description: "WhatsApp us, email your invoices, or connect your existing system."
  },
  {
    step: "3",
    title: "We Handle The Rest",
    description: "Automated review requests, professional posts, and real-time alerts."
  },
  {
    step: "4",
    title: "Watch Your Reputation Grow",
    description: "More reviews, consistent visibility, and a professional online presence."
  }
];

const ReputationManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-md relative">
          <div className="text-center">
            <span className="badge-dark mb-6">Reputation Management</span>
            
            <h1 className="text-white mb-6 text-balance">
              Build Trust.<br className="hidden sm:block" /> Get More Customers.
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Your customers search for you on Google before making a decision. 
              We make sure your reviews and social presence convert that search into a paying job.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20Reputation%20Management"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#services" className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                View Services
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-neutral-400 text-sm">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Automated reviews
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Social posting
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                ~30 min/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-sm bg-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="badge mb-4">Why It Matters</span>
            <h2 className="text-neutral-900 mb-4">Your Online Reputation Is Everything</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Most business owners don't have time to collect reviews consistently and maintain regular posting — we handle it for you.
            </p>
          </div>

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

      {/* Services */}
      <section id="services" className="section bg-neutral-50">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Services</span>
            <h2 className="text-neutral-900 mb-4">Choose Your Package</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Start with what you need, or get the best value with our combined package.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const CardWrapper = service.external ? 'a' : Link;
              const cardProps = service.external 
                ? { href: service.link, target: "_blank", rel: "noopener noreferrer" }
                : { to: service.link };

              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-8 shadow-soft relative ${
                    service.highlight ? 'ring-2 ring-neutral-900' : ''
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Best Value
                      </span>
                    </div>
                  )}

                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-neutral-700" />
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    {service.betaPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-neutral-900">{service.betaPrice}</span>
                        <span className="text-lg text-neutral-400 line-through">{service.price}</span>
                        <span className="text-neutral-500">/month</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-neutral-900">{service.price}</span>
                        <span className="text-neutral-500 ml-1">/month</span>
                      </div>
                    )}
                    {service.betaPrice && (
                      <span className="inline-block mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                        50% OFF Beta Pricing
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <CardWrapper
                    {...cardProps}
                    className={`btn-primary w-full justify-center ${
                      service.highlight 
                        ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                        : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </CardWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">How It Works</span>
            <h2 className="text-neutral-900 mb-4">Simple Process, Powerful Results</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We make it easy to build your online reputation without taking time away from your work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
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

      {/* Platforms */}
      <section className="section-sm bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="badge mb-4">Platforms</span>
            <h2 className="text-neutral-900 mb-4">We Connect Everything</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="font-medium text-neutral-900">Facebook</span>
            </div>

            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="font-medium text-neutral-900">Instagram</span>
            </div>

            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 4.95c1.178 0 2.13.952 2.13 2.13 0 1.177-.952 2.13-2.13 2.13-1.177 0-2.13-.953-2.13-2.13 0-1.178.953-2.13 2.13-2.13zm5.79 14.1H6.07v-1.36h2.27v-5.95H6.61V10.4h3.45v7.3h2.27v-7.3h3.45v1.34h-1.73v5.95h2.27v1.36h-.41z"/>
                </svg>
              </div>
              <span className="font-medium text-neutral-900">Google Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProofSection />

      {/* Final CTA */}
      <section className="section-sm bg-neutral-950">
        <div className="container-md text-center">
          <h2 className="text-white mb-4">Ready to Build Your Reputation?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help you get more reviews and stay visible online.
          </p>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'd%20like%20to%20discuss%20Reputation%20Management"
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

export default ReputationManagementPage;

