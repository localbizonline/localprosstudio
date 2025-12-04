import React from 'react';
import { ArrowRight, Check, Target, TrendingUp, BarChart3, Users } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const benefits = [
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Reach customers actively searching for your services in your area."
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Track every lead and see exactly what your investment returns."
  },
  {
    icon: BarChart3,
    title: "Optimized Campaigns",
    description: "Continuous optimization to maximize your budget efficiency."
  },
  {
    icon: Users,
    title: "Qualified Leads",
    description: "Attract customers ready to buy, not just browsers."
  }
];

const included = [
  "Campaign strategy & setup",
  "Keyword research & targeting",
  "Ad copywriting & testing",
  "Landing page recommendations",
  "Conversion tracking setup",
  "Monthly performance reports",
  "Budget optimization",
  "Competitor analysis",
  "Ongoing campaign management",
  "Direct support via WhatsApp"
];

const faqs = [
  {
    question: "How much should I budget for Google Ads?",
    answer: "We recommend starting with R3,000-R5,000 per month in ad spend, plus our management fee. This gives enough data to optimize effectively. We can scale up once we find what works."
  },
  {
    question: "How quickly will I see results?",
    answer: "You can start receiving leads within days of launching. However, campaigns typically need 2-4 weeks of optimization to reach peak performance."
  },
  {
    question: "What's included in the management fee?",
    answer: "Everything from strategy to execution: campaign setup, ongoing optimization, A/B testing, reporting, and direct support. No hidden fees."
  },
  {
    question: "Can I pause or stop anytime?",
    answer: "Yes, there's no long-term contract. You can pause or cancel your campaign at any time. We believe in earning your business every month."
  }
];

const GoogleAdsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-md relative">
          <div className="text-center">
            <span className="badge-dark mb-6">Google Ads Management</span>
            
            <h1 className="text-white mb-6 text-balance">
              Get More Customers<br className="hidden sm:block" /> With Google Ads
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Targeted advertising that puts your business in front of customers 
              actively searching for your services. Pay only for results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20Google%20Ads%20management"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#pricing" className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                View Pricing
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex items-center justify-center gap-8 text-neutral-400 text-sm">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                No long-term contracts
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Transparent reporting
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Local expertise
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

      {/* How It Works */}
      <section className="section bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">How It Works</span>
            <h2 className="text-neutral-900 mb-4">Your Ads, Managed Properly</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We handle everything from strategy to execution, so you can focus on 
              serving your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Strategy Session</h3>
                    <p className="text-neutral-600 text-sm">We learn about your business, target customers, and goals to create a winning strategy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Campaign Setup</h3>
                    <p className="text-neutral-600 text-sm">We build your campaigns with targeted keywords, compelling ads, and proper tracking.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Launch & Optimize</h3>
                    <p className="text-neutral-600 text-sm">Your campaigns go live and we continuously optimize for better results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Report & Scale</h3>
                    <p className="text-neutral-600 text-sm">Monthly reports show your ROI, and we scale what works to grow your business.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">What's Included</h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">Pricing</span>
            <h2 className="text-neutral-900 mb-4">Simple Monthly Pricing</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              One flat fee for complete campaign management. No hidden costs.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-neutral-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Google Ads Management</h3>
              <p className="text-neutral-400 text-sm mb-6">Complete campaign management</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">R2,499</span>
                <span className="text-neutral-400 ml-2">/month</span>
              </div>

              <p className="text-neutral-400 text-sm mb-8">
                + your ad spend budget (recommended R3,000-R5,000/month to start)
              </p>

              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20Google%20Ads%20management"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 w-full justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <p className="text-neutral-500 text-xs mt-4">
                No long-term contract. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-50">
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
          <h2 className="text-white mb-4">Ready to Get More Leads?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Let's discuss your advertising goals and create a strategy that works for your business.
          </p>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'd%20like%20to%20discuss%20Google%20Ads%20for%20my%20business"
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

export default GoogleAdsPage;
