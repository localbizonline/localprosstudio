import React from 'react';
import { ArrowRight, Check, Camera, Calendar, TrendingUp, MessageCircle } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const benefits = [
  {
    icon: Camera,
    title: "Professional Content",
    description: "Custom graphics and posts that showcase your work beautifully."
  },
  {
    icon: Calendar,
    title: "Consistent Posting",
    description: "Regular content keeps you visible and top of mind."
  },
  {
    icon: TrendingUp,
    title: "Brand Building",
    description: "Build credibility and trust with a professional presence."
  },
  {
    icon: MessageCircle,
    title: "Engagement",
    description: "We interact with your audience to build community."
  }
];

const included = [
  "12 custom posts per month",
  "Professional graphic design",
  "Caption writing & hashtags",
  "Content calendar planning",
  "Story content",
  "Review & testimonial posts",
  "Holiday & special day content",
  "Monthly performance report",
  "Platform optimization",
  "Direct WhatsApp support"
];

const platforms = [
  "Facebook Business Page",
  "Instagram Business",
  "Google Business Profile"
];

const faqs = [
  {
    question: "Which platforms do you manage?",
    answer: "We focus on Facebook, Instagram, and Google Business Profile - the platforms that matter most for local service businesses. We can discuss others based on your needs."
  },
  {
    question: "Do I need to provide photos?",
    answer: "Photos of your work help a lot, but we can also use stock images and create graphics. We'll guide you on what photos work best and make it easy to share them."
  },
  {
    question: "How often will you post?",
    answer: "Our standard package includes 12 posts per month (about 3 per week). This keeps you visible without overwhelming your audience."
  },
  {
    question: "Can I approve posts before they go live?",
    answer: "Yes, we can set up an approval workflow if you prefer. Many clients trust us to post directly, but the choice is yours."
  }
];

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-md relative">
          <div className="text-center">
            <span className="badge-dark mb-6">Social Media Management</span>
            
            <h1 className="text-white mb-6 text-balance">
              Build Your Brand<br className="hidden sm:block" /> On Social Media
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Professional social media management that keeps your business visible 
              and builds trust with potential customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://wa.me/27787869161?text=Hi%2C%20I'm%20interested%20in%20social%20media%20management"
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
                12 posts/month
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Custom graphics
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                No contracts
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

      {/* What's Included */}
      <section className="section bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">What's Included</span>
            <h2 className="text-neutral-900 mb-4">Everything You Need</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We handle your entire social media presence so you can focus on your work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">Monthly Deliverables</h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 shadow-soft mb-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Platforms We Manage</h3>
                <ul className="space-y-3">
                  {platforms.map((platform, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{platform}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-semibold mb-2">Content That Works</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  We create content specifically designed for home service businesses:
                </p>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>• Before & after project photos</li>
                  <li>• Customer testimonials & reviews</li>
                  <li>• Tips and educational content</li>
                  <li>• Behind-the-scenes of your work</li>
                  <li>• Seasonal promotions</li>
                </ul>
              </div>
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
              One flat fee for complete social media management. No hidden costs.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-neutral-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
              <p className="text-neutral-400 text-sm mb-6">Complete monthly management</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">R1,500</span>
                <span className="text-neutral-400 ml-2">/month</span>
              </div>

              <p className="text-neutral-400 text-sm mb-8">
                12 posts per month across all platforms
              </p>

              <a
                href="https://wa.me/27787869161?text=Hi%2C%20I'm%20interested%20in%20social%20media%20management"
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
          <h2 className="text-white mb-4">Ready to Build Your Brand?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help you build a professional social media presence.
          </p>
          <a
            href="https://wa.me/27787869161?text=Hi%2C%20I'd%20like%20to%20discuss%20social%20media%20management"
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

export default SocialMediaPage;
