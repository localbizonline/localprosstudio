import React from 'react';
import { ArrowRight, Check, Star, Globe, Server, Smartphone, Layout, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const SpecialOfferGeminiProPage = () => {
  const valueStack = [
    {
      icon: TrendingUp,
      title: "Reputation & Social Management",
      value: "R2,500/pm Value",
      description: "Our complete growth engine: Automated review collection, smart filtering, and weekly social media content done for you.",
      features: [
        "WhatsApp & Email Review Requests",
        "Smart Negative Feedback Filtering",
        "Weekly Social Posts (FB, Insta, GMB)",
        "Holiday & Special Event Posts"
      ]
    },
    {
      icon: Layout,
      title: "Professional Website Design",
      value: "R12,000 Value",
      description: "A stunning, mobile-optimized website built to convert visitors into paying customers. Yours included in this bundle.",
      features: [
        "Modern, High-Converting Design",
        "Mobile Responsive",
        "SEO Friendly Structure",
        "Service Pages & Gallery"
      ],
      highlight: true
    },
    {
      icon: Server,
      title: "Hosting & Maintenance",
      value: "R350/pm Value",
      description: "We keep your site fast, secure, and online. No technical headaches or separate hosting bills.",
      features: [
        "Fast Cloud Hosting",
        "SSL Security Certificate",
        "Monthly Updates",
        "Daily Backups"
      ]
    },
    {
      icon: Smartphone,
      title: "FieldCard Team Access",
      value: "R580/pm Value",
      description: "The ultimate job card and team management app. Manage your team, jobs, and quotes from anywhere.",
      features: [
        "Digital Job Cards",
        "Team Tracking",
        "Quote & Invoice Generation",
        "Customer Database"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 pt-20 pb-24 lg:pt-32 lg:pb-32">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>

        <div className="container-lg relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex animate-fade-in items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="flex h-2 w-2 items-center justify-center rounded-full bg-amber-500">
                <span className="h-full w-full animate-ping rounded-full bg-amber-500 opacity-75"></span>
              </span>
              <span className="ml-3 text-sm font-semibold text-amber-400">Limited Time Offer • Until March 2026</span>
            </div>

            <h1 className="mb-8 animate-fade-in-up font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              The Ultimate Contractor <br className="hidden sm:block" />
              <span className="text-amber-500">Growth Bundle</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg text-neutral-400 delay-100 sm:text-xl">
              Everything you need to succeed online: Reputation, Socials, Website, and Software.
              <span className="block mt-2 text-white font-medium">All strictly streamlined for one simple monthly fee.</span>
            </p>

            <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up delay-200 sm:flex-row">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20R2500%20Growth%20Bundle%20Special"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex min-w-[240px] items-center justify-center bg-amber-500 py-4 text-lg text-neutral-950 hover:bg-amber-400"
              >
                Claim This Offer
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <span className="text-sm text-neutral-500 sm:hidden">Limited spots available</span>
            </div>
            
            <p className="mt-6 text-sm text-neutral-500 animate-fade-in-up delay-300 hidden sm:block">
              Limited to the first 20 contractors
            </p>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Everything Included</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              We've bundled our premium services to give you a complete business operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {valueStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-md ${
                    item.highlight ? 'border-amber-500 ring-1 ring-amber-500' : 'border-neutral-200'
                  }`}
                >
                  {item.highlight && (
                    <div className="absolute top-0 right-0 bg-amber-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-bl-xl">
                      INCLUDED FREE
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${item.highlight ? 'bg-amber-100 text-amber-700' : 'bg-neutral-100 text-neutral-700'}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                      <div className="text-amber-600 font-bold text-sm mt-1">{item.value}</div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Pricing Summary */}
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Total Value Breakdown</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Website Design</span>
                    <span className="line-through decoration-amber-500/50">R12,000</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Monthly Services Value</span>
                    <span className="line-through decoration-amber-500/50">R3,430/pm</span>
                  </div>
                  <div className="h-px bg-neutral-800 my-4"></div>
                  <div className="flex justify-between items-center text-white text-xl font-bold">
                    <span>Your Bundle Price</span>
                    <span className="text-amber-500 text-3xl">R2,500<span className="text-sm text-neutral-400 font-normal">/pm</span></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-200">
                    <strong>12-Month Commitment:</strong> To include the R12,000 website for free, this offer requires a 12-month commitment.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
                <p className="text-neutral-300 mb-6">
                  Streamline your entire online presence and operations for less than the cost of a junior admin.
                </p>
                <a
                  href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20R2500%20Growth%20Bundle%20Special"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center bg-amber-500 text-neutral-900 hover:bg-amber-400 py-4 text-lg font-bold mb-4"
                >
                  Secure Your Bundle
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <p className="text-xs text-neutral-500">
                  Offer valid until March 2026. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProofSection />

      {/* Fine Print / Terms */}
      <section className="py-12 bg-white border-t border-neutral-100">
        <div className="container-md">
          <div className="max-w-3xl mx-auto">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-neutral-500" />
              Offer Terms & Details
            </h4>
            <div className="text-sm text-neutral-500 space-y-3 leading-relaxed">
              <p>
                <strong>The "Growth Bundle" Special Offer:</strong> This offer is available for new clients until March 2026. The monthly fee is R2,500 payable in advance via debit order.
              </p>
              <p>
                <strong>Website Ownership:</strong> The professional website design (valued at R12,000) is included at no upfront cost as part of this 12-month rental bundle. If you cancel your subscription before the 12-month period ends, the website design remains the property of Local Pros Studio and will be taken offline. After 12 consecutive paid months, you may choose to take over ownership of the website files or continue on a month-to-month maintenance plan.
              </p>
              <p>
                <strong>Services Included:</strong> The bundle includes the Reputation Management Standard plan (Review Collection), Social Media Posting (4 posts/month), FieldCard Team Plan (up to 5 users), and Standard Web Hosting with SSL.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOfferGeminiProPage;
