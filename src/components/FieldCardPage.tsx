import React from 'react';
import { ArrowRight, Check, Users, Zap, MessageSquare, FileText, Calendar, Smartphone, ExternalLink } from 'lucide-react';

// FieldCard brand colors
const fieldcardRed = '#DC2626';

const stats = [
  { value: '2025', label: 'Launched' },
  { value: '3,000+', label: 'Businesses Served' },
  { value: '10+', label: 'Years Lead Gen Experience' },
  { value: 'Simple', label: 'Like WhatsApp' },
];

const features = [
  {
    icon: FileText,
    title: 'Instant Quotes',
    description: 'Create and send professional quotes in seconds, right from your phone while on the call with customers.',
  },
  {
    icon: MessageSquare,
    title: 'Digital Job Cards',
    description: 'Track work done, materials used, time spent, and capture customer sign-off—all digitally.',
  },
  {
    icon: Calendar,
    title: 'Job Management',
    description: 'Keep all your jobs and leads organized. Never miss a follow-up with clear scheduling.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Built for contractors on the go. Everything you need, accessible from your phone.',
  },
];

const whyWeBuiltIt = [
  {
    title: 'We saw the struggle firsthand',
    description: 'After 10 years of sending leads to contractors, we watched them lose jobs because quotes took too long, leads got lost in WhatsApp, and invoices were forgotten.',
  },
  {
    title: 'Existing tools were too complex',
    description: 'Every job management app we found was built for enterprise. Contractors needed something as simple as sending a text message.',
  },
  {
    title: 'Built for our own clients first',
    description: 'We created FieldCard initially for Local Pros lead buyers, then opened it up for any local service business that needed help.',
  },
];

const FieldCardPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section relative overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        
        {/* Red accent gradient */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{ 
            background: `radial-gradient(ellipse at top right, ${fieldcardRed}, transparent 70%)` 
          }}
        ></div>
        
        <div className="container-lg relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white"
              >
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: fieldcardRed }}></span>
                A Local Pros Product
              </div>
              
              <h1 className="text-white mb-6 text-balance">
                We Built FieldCard for Contractors Like You
              </h1>

              <p className="text-neutral-400 text-lg md:text-xl mb-8 leading-relaxed">
                After 10 years of lead generation, we saw contractors struggle with slow quotes, 
                lost leads, and messy admin. So we built the simplest job management app—as easy 
                as WhatsApp, but powerful enough for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://www.fieldcard.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: fieldcardRed }}
                >
                  Visit FieldCard
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="https://www.fieldcard.app/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-neutral-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ backgroundColor: fieldcardRed }}
              ></div>
              <img
                src="https://www.fieldcard.app/_astro/FieldCard%20(2).D8RmuL4U_YCzsX.webp"
                alt="FieldCard app interface showing job management features"
                className="relative rounded-2xl shadow-2xl max-w-full h-auto"
                style={{ maxWidth: '500px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built It Section */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Story</span>
            <h2 className="text-neutral-900 mb-4">Why We Built FieldCard</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Born from a decade of connecting contractors with customers, we understood the 
              real challenges they face every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyWeBuiltIt.map((item, index) => (
              <div key={index} className="relative">
                <div 
                  className="text-6xl font-bold mb-4"
                  style={{ color: `${fieldcardRed}15` }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section bg-neutral-50">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://www.fieldcard.app/_astro/createing%20a%20quote%20for%20customer%20(1).osnGCKZ1_ZoYgpG.webp"
                alt="Contractor creating quote for customer using FieldCard"
                className="rounded-2xl shadow-lg max-w-full h-auto"
                style={{ maxWidth: '500px' }}
              />
            </div>
            <div>
              <span className="badge mb-4">The Problem</span>
              <h2 className="text-neutral-900 mb-6">
                Contractors Were Losing Jobs to Slow Admin
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Through Local Pros, we've partnered with over 3,000 businesses since 2015. 
                We watched talented contractors lose work—not because of their skills, but 
                because their quotes arrived too late, leads got buried in WhatsApp threads, 
                and invoices were forgotten.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Quotes sent hours or days after the call',
                  'Leads lost in endless WhatsApp messages',
                  'No system to track job progress',
                  'Invoices created manually, often forgotten',
                  'No professional way to capture customer sign-off',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: `${fieldcardRed}15` }}
                    >
                      <Check className="w-3 h-3" style={{ color: fieldcardRed }} />
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">Features</span>
            <h2 className="text-neutral-900 mb-4">Simple Tools, Powerful Results</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Everything a contractor needs to manage jobs professionally, without the 
              complexity of enterprise software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-soft transition-all duration-300"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${fieldcardRed}10` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: fieldcardRed }} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Screenshot Section */}
      <section className="section" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-white/10 text-white"
              >
                Mobile-First Design
              </span>
              <h2 className="text-white mb-6">
                As Simple as Sending a Text
              </h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                We designed FieldCard to feel familiar from day one. If you can use WhatsApp, 
                you can use FieldCard. No training needed, no complex setup—just download and 
                start managing your jobs professionally.
              </p>
              
              <div className="space-y-4">
                {[
                  'Create quotes in under 60 seconds',
                  'Send invoices directly from the job site',
                  'Track all your leads in one place',
                  'Get customer sign-off on your phone',
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-neutral-300">
                    <Check className="w-5 h-5 mr-3" style={{ color: fieldcardRed }} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="https://www.fieldcard.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: fieldcardRed }}
                >
                  Try FieldCard Free
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://www.fieldcard.app/_astro/Jobs%20list%20screenshot.C0u5sIQe_2rl89B.webp"
                alt="FieldCard jobs list interface"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
                style={{ maxWidth: '350px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section-sm bg-neutral-50">
        <div className="container-lg">
          <div className="text-center mb-12">
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">
              Trusted by contractors across South Africa
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              'Allucon Projects',
              'BugsAway',
              'G and L Tech Services',
              'GT Tree Felling',
              'OG Electrical',
              'Qonstrukt',
            ].map((company, index) => (
              <div key={index} className="text-neutral-600 font-medium text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Connection Section */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="badge mb-4">Our Team</span>
            <h2 className="text-neutral-900 mb-4">Built by the Local Pros Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The same team that's been helping contractors grow since 2015 is behind FieldCard. 
              We understand your business because we've been part of it for over a decade.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="https://www.fieldcard.app/_astro/team%20member%20looking%20at%20job%20card.CXMRErzN_1LsR6V.webp"
                  alt="Team member using FieldCard"
                  className="rounded-xl max-w-full h-auto"
                  style={{ maxWidth: '400px' }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  From Lead Gen Experts to Software Builders
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  FieldCard is a specialized division of Local Pros, launched in 2025. While we've 
                  been serving local businesses with lead generation since 2015, FieldCard represents 
                  our dedicated focus on helping contractors manage their entire business workflow.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {['JM', 'DM', 'TB', 'JB', 'AB'].map((initials, index) => (
                      <div 
                        key={index}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white"
                        style={{ backgroundColor: index % 2 === 0 ? fieldcardRed : '#1A1A1A' }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-neutral-600 text-sm">
                    6+ specialists dedicated to your success
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm" style={{ backgroundColor: fieldcardRed }}>
        <div className="container-md text-center">
          <h2 className="text-white mb-4">Ready to Simplify Your Business?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of contractors who've transformed their job management with FieldCard. 
            Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.fieldcard.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
            >
              Get Started Free
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://www.fieldcard.app/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Learn More About FieldCard
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FieldCardPage;

