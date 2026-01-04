import React from 'react';
import { ArrowRight, Check, Star, Share2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialProofSection from './SocialProofSection';

const services = [
  {
    icon: Star,
    title: "Review Collection",
    description: "Automated review requests via WhatsApp & email. Smart filtering catches unhappy customers privately before they go public.",
    price: "R1,200/month",
    features: ["WhatsApp + email requests", "Smart filtering", "AI review responses", "Real-time alerts"],
    link: "/reviews",
    linkText: "Get more 5-star reviews",
  },
  {
    icon: Share2,
    title: "Social Posting",
    description: "Create posts in 60 seconds. We handle consistency with 4 service posts/month, holiday content, and review highlights.",
    price: "R2,000/month",
    features: ["60-second posting form", "4 posts/month included", "Holiday posts automatic", "Facebook, Instagram & Google"],
    link: "/social-media",
    linkText: "Stay visible online",
  },
  {
    icon: Zap,
    title: "Complete Package",
    description: "Everything in both packages. Best value for complete online reputation management.",
    price: "R1,250/month",
    originalPrice: "R2,500",
    features: ["All review collection features", "All social posting features", "Priority support", "Best value option"],
    link: "https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Complete%20Reputation%20Package",
    linkText: "Get the complete package",
    external: true,
    highlight: true,
  },
];

const painPoints = [
  {
    title: "Your Social Pages Go Quiet",
    description: "You start strong, then life gets busy. Your social pages go quiet, and competitors look more active than you."
  },
  {
    title: "Asking for Reviews Feels Awkward",
    description: "You know reviews build trust, but asking after every job feels pushy. So you don't ask, and happy customers never leave reviews."
  },
  {
    title: "You Don't Have Time to Manage It",
    description: "Even with admin help, review requests and social posts fall to the bottom of the list. There's always something more urgent."
  }
];

const whatWeDo = [
  {
    title: "Collect customer info automatically",
    description: "We monitor your invoice emails, WhatsApp submissions, or Sage/QuickBooks exports and pull the customer details without you touching a thing."
  },
  {
    title: "Send review requests and reminders",
    description: "We send the first review request 24 hours after the job, follow up twice, and stop if the customer already posted."
  },
  {
    title: "Filter unhappy responses",
    description: "We ask customers for a private star rating first, alert you on WhatsApp if it's low, and never encourage a public review if they're unhappy."
  },
  {
    title: "Turn good reviews into weekly posts",
    description: "We design the review graphic, write the caption, and schedule it to Facebook, Instagram, and Google Business automatically."
  },
  {
    title: "Write your job showcase posts",
    description: "You drop a photo and a quick note in WhatsApp. We rewrite it into a professional post and wait for your one-word approval."
  },
  {
    title: "Keep your calendar full of content",
    description: "We preload 12 months of special day posts, mix in before/after stories, and make sure something goes live every week."
  }
];

const platforms = [
  { name: "Google Business", color: "bg-amber-500" },
  { name: "Facebook", color: "bg-neutral-700" },
  { name: "Instagram", color: "bg-gradient-to-br from-amber-500 to-orange-600" },
  { name: "Google Reviews", color: "bg-amber-500" },
  { name: "HelloPeter", color: "bg-neutral-600" },
  { name: "WhatsApp", color: "bg-green-600" },
];

const Home2Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-dark-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>

        <div className="container-md relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center mb-8 animate-fade-in">
              <span className="badge-dark">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                Local Pros Studio
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white mb-6 animate-fade-in-up text-balance">
              More 5-Star Reviews<br className="hidden sm:block" />
              Weekly Social Posts<br className="hidden sm:block" />
              Zero Manual Work
            </h1>

            {/* Subheadline */}
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              Done-for-you reputation and social media automation for time-strapped
              contractors who know it matters — but can't stay consistent.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20getting%20more%20reviews%20and%20growing%20my%20social%20presence"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-amber-500 text-neutral-900 hover:bg-amber-400"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#services" className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                View Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-neutral-800 animate-fade-in-up delay-300">
              <p className="text-neutral-500 text-sm mb-4">Trusted by contractors across South Africa</p>
              <div className="flex items-center justify-center gap-8 text-neutral-400">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">12 hrs</div>
                  <div className="text-xs">Admin time saved/month</div>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.7+</div>
                  <div className="text-xs">Avg rating in 90 days</div>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">~30 min</div>
                  <div className="text-xs">Your time per month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container-lg">
          <p className="text-center text-neutral-500 text-sm mb-6 uppercase tracking-wider font-medium">
            Connected to the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 px-5 py-3 rounded-full shadow-sm">
                <div className={`w-8 h-8 ${platform.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">
                    {platform.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-neutral-900 text-sm">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section bg-neutral-950">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">You Know Reviews and Social Media Matter.<br className="hidden md:block" /> You Just Don't Have the Time.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-800">
                <h3 className="text-xl font-bold text-amber-400 mb-4">{point.title}</h3>
                <p className="text-neutral-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section bg-warm-gradient">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">What We Do</span>
            <h2 className="text-neutral-900 mb-4">Here's Exactly What We Do For You</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We take the marketing admin off your plate and run it for you in plain language — no new software, no extra steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((task, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100">
                <h3 className="text-lg font-semibold text-amber-700 mb-3">{task.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
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
              const isExternal = service.external;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 shadow-soft border ${
                    service.highlight ? 'ring-2 ring-amber-500 border-amber-500' : 'border-neutral-200'
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-amber-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">
                        Best Value • 50% OFF
                      </span>
                    </div>
                  )}

                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    {service.originalPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-neutral-900">{service.price}</span>
                        <span className="text-lg text-neutral-400 line-through">{service.originalPrice}</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-neutral-900">{service.price}</span>
                    )}
                    {service.highlight && (
                      <span className="inline-block mt-2 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded">
                        Beta Pricing
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {isExternal ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-primary w-full justify-center ${
                        service.highlight
                          ? 'bg-amber-500 text-neutral-900 hover:bg-amber-400'
                          : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                      }`}
                    >
                      {service.linkText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={service.link}
                      className={`btn-primary w-full justify-center ${
                        service.highlight
                          ? 'bg-amber-500 text-neutral-900 hover:bg-amber-400'
                          : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                      }`}
                    >
                      {service.linkText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="bg-dark-warm rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                  Early Access • Limited to 20 Contractors
                </span>
                <h2 className="text-white mb-6">Keep Reviews Rolling and Your Feeds Active</h2>
                <p className="text-neutral-400 text-lg mb-8">
                  We set everything up within a workweek, connect with the systems you already use,
                  and keep the marketing admin moving without chasing you.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Launch your automated review requests and follow-ups in under 7 days.</span>
                  </li>
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Weekly Facebook, Instagram, and Google Business posts written and scheduled for you.</span>
                  </li>
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>WhatsApp alerts for unhappy responses before they go public.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-5">
                <div className="bg-amber-500/15 border border-amber-400/35 rounded-2xl p-6 text-center text-amber-100">
                  <div className="text-4xl font-extrabold text-white mb-1">12 hrs</div>
                  <div className="text-sm text-amber-200/80">Average admin time saved each month per contractor team.</div>
                </div>
                <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6 text-center text-neutral-100">
                  <div className="text-4xl font-extrabold text-white mb-1">4.7 <Star className="inline w-6 h-6 text-amber-400 fill-amber-400" /></div>
                  <div className="text-sm text-neutral-400">Typical rating clients sustain within 90 days of automations.</div>
                </div>
                <a
                  href="https://wa.me/27832336716?text=Hi%2C%20I'd%20like%20to%20request%20an%20early%20access%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-amber-500 text-neutral-900 font-bold rounded-xl text-center hover:bg-amber-400 transition-all hover:-translate-y-1"
                >
                  Request an Early Access Call
                </a>
                <p className="text-neutral-500 text-sm text-center">
                  We'll map the automations to your current workflow — no credit card needed.
                </p>
              </div>
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
            Get in touch today and let's discuss how we can help you get more reviews
            and stay visible on social media.
          </p>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20get%20started%20with%20reviews%20and%20social%20media"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-amber-500 text-neutral-900 hover:bg-amber-400"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home2Page;
