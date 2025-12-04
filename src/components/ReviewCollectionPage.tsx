import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, MessageSquare, Bell, Shield, Mail, Smartphone, Zap, BarChart3 } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const benefits = [
  {
    icon: Smartphone,
    title: "WhatsApp + Email",
    description: "Automated requests via both channels for maximum response rates."
  },
  {
    icon: Shield,
    title: "Smart Filtering",
    description: "Unhappy customers are caught privately before they go public."
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Instant notifications for every review — positive or negative."
  },
  {
    icon: MessageSquare,
    title: "AI Responses",
    description: "Professional review responses generated automatically."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Send Us Job Details",
    description: "WhatsApp us, email your invoices, or BCC us automatically. Whatever works for you."
  },
  {
    step: "2",
    title: "Customer Gets a Message",
    description: "They receive a friendly WhatsApp and email asking about their experience."
  },
  {
    step: "3",
    title: "Smart Routing",
    description: "Happy customers → directed to leave a Google or Facebook review. Unhappy customers → feedback captured privately."
  },
  {
    step: "4",
    title: "You're Notified Instantly",
    description: "Positive review? Celebrate! Negative rating? Call them immediately to resolve before it goes public."
  }
];

const included = [
  "Automatic WhatsApp + email review requests",
  "Smart filtering (catches unhappy customers privately)",
  "Real-time alerts for all reviews",
  "AI-generated review responses",
  "Website review embedding help",
  "Dashboard access",
  "Monthly check-ins",
  "Past 90 days outreach (kickstart your reviews)"
];

const submissionMethods = [
  {
    icon: Smartphone,
    title: "WhatsApp Us",
    description: "Send job details directly to our WhatsApp"
  },
  {
    icon: Mail,
    title: "Email Invoices",
    description: "Forward or BCC us on your invoices"
  },
  {
    icon: Zap,
    title: "Connect Your System",
    description: "Integrate with your existing invoicing software"
  }
];

const faqs = [
  {
    question: "How many reviews can I expect?",
    answer: "We can't guarantee a specific number — it depends on your customers responding. What we do guarantee: We follow industry best practices with multi-channel outreach and strategic follow-ups to give you the best possible chance of success."
  },
  {
    question: "Do you offer rewards for reviews?",
    answer: "No — this violates Google and Facebook rules. We never offer incentives for reviews, and we never post fake reviews. We build your reputation the right way."
  },
  {
    question: "What happens with negative feedback?",
    answer: "Unhappy customers are routed to a private feedback form instead of public review sites. You're alerted immediately so you can call and resolve the issue before it becomes a public problem."
  },
  {
    question: "How do I send you customer details?",
    answer: "Whatever works for you: WhatsApp us the details, email your invoices, BCC us automatically, or connect your existing system. We make it easy."
  },
  {
    question: "How quickly will I see results?",
    answer: "We use your past 90 days of invoices to reach out to recent customers. Many clients see their first new reviews within the first week."
  },
  {
    question: "Will you respond to negative reviews?",
    answer: "We won't respond to negative reviews without talking to you first. You always have control over how public issues are handled."
  }
];

const ReviewCollectionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-md relative">
          <div className="text-center">
            <Link 
              to="/reputation" 
              className="inline-flex items-center text-neutral-400 hover:text-white text-sm mb-6 transition-colors"
            >
              ← Back to Reputation Management
            </Link>

            <span className="badge-dark mb-6">Review Collection</span>
            
            <h1 className="text-white mb-6 text-balance">
              <span className="inline-flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 fill-yellow-400" />
                ))}
              </span>
              <br />
              Get More 5-Star Reviews<br className="hidden sm:block" /> Automatically
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              We send review requests automatically. Happy customers leave public reviews. 
              Unhappy customers are caught privately before they damage your reputation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20Review%20Collection"
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
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-neutral-400 text-sm">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                WhatsApp + Email
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Smart filtering
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                AI responses
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
            <h2 className="text-neutral-900 mb-4">Simple. Automatic. Effective.</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              You complete a job and send us the customer details. We handle everything else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft flex gap-4">
                <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Filtering Highlight */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Smart Filtering
                </span>
                <h2 className="text-white mb-4">Protect Your Reputation</h2>
                <p className="text-neutral-400 mb-6">
                  Our smart filtering system catches unhappy customers before they leave a negative public review. 
                  You get alerted immediately so you can resolve the issue.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    4-5 star ratings → Directed to Google/Facebook
                  </li>
                  <li className="flex items-center text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    1-3 star ratings → Private feedback form
                  </li>
                  <li className="flex items-center text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Instant alert so you can call and resolve
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800 rounded-xl p-4 md:p-6">
                <div className="space-y-4">
                  {/* Happy customer - Green */}
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex flex-shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-neutral-300">Happy customer</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <ArrowRight className="w-4 h-4 text-green-400" />
                        <span className="text-xs font-medium text-green-400 bg-green-500/20 px-2 py-1 rounded">Public Review</span>
                      </div>
                    </div>
                  </div>
                  {/* Unhappy customer - Amber/Orange */}
                  <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex flex-shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < 2 ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-600'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-neutral-300">Unhappy customer</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-medium text-amber-400 bg-amber-500/20 px-2 py-1 rounded">Private + Alert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Methods */}
      <section className="section-sm bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="badge mb-4">Easy Submission</span>
            <h2 className="text-neutral-900 mb-4">Send Us Job Details Your Way</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Pick whatever method works for you. We make it easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {submissionMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-soft">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-neutral-700" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{method.title}</h3>
                  <p className="text-neutral-600 text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">What's Included</span>
              <h2 className="text-neutral-900 mb-4">Everything You Need</h2>
              <p className="text-neutral-600 mb-8">
                We handle your entire review collection process so you can focus on your work.
              </p>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-neutral-700" />
                <h3 className="text-lg font-semibold text-neutral-900">Your Dashboard</h3>
              </div>
              <p className="text-neutral-600 text-sm mb-6">
                See all your reviews, customer feedback, and performance in one place.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Google Reviews</span>
                  <span className="text-sm font-medium text-green-600">+12 this month</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Facebook Reviews</span>
                  <span className="text-sm font-medium text-green-600">+8 this month</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Average Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-neutral-900">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">Pricing</span>
            <h2 className="text-neutral-900 mb-4">Simple Monthly Pricing</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              One flat fee for complete review collection. Setup fee waived with 6-month commitment.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-neutral-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Review Collection</h3>
              <p className="text-neutral-400 text-sm mb-6">Automated review collection system</p>

              <div className="mb-2">
                <span className="text-5xl font-bold">R1,200</span>
                <span className="text-neutral-400 ml-2">/month</span>
              </div>

              <p className="text-neutral-500 text-sm mb-8">
                Setup: R2,500 (waived with 6-month commitment)
              </p>

              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20Review%20Collection"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 w-full justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <p className="text-neutral-500 text-xs mt-4">
                No long-term contract required. Cancel anytime.
              </p>
            </div>
          </div>

          {/* Combined Package Upsell */}
          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-4">
              Want social posting too? Get both services for less.
            </p>
            <Link 
              to="/reputation" 
              className="inline-flex items-center text-neutral-900 font-medium hover:underline"
            >
              View Combined Package
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
          <h2 className="text-white mb-4">Ready to Get More Reviews?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Let's discuss how automated review collection can grow your reputation.
          </p>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'd%20like%20to%20discuss%20Review%20Collection"
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

export default ReviewCollectionPage;

