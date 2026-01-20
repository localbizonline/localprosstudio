import React from 'react';
import {
  ArrowRight,
  Check,
  ClipboardList,
  Globe,
  MessageSquare,
  Shield,
  Share2,
  Star,
  Users,
} from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const WHATSAPP_LINK =
  'https://wa.me/27832336716?text=' +
  encodeURIComponent(
    "Hi Local Pros Studio — I'm interested in the Special Offer bundle (Reviews + Social + Website + Hosting + FieldCard team access) for R2,500/month on a 12-month commitment. Offer ends March 2026."
  );

const valueStack = [
  {
    title: 'Reviews + Social Reputation Management',
    subtitle: 'The system that gets you found, trusted, and chosen.',
    icon: Star,
  },
  {
    title: 'Website Design (included)',
    subtitle: 'Valued at R12,000',
    icon: Globe,
  },
  {
    title: 'Hosting (included)',
    subtitle: 'Valued at R350/month',
    icon: Shield,
  },
  {
    title: 'FieldCard Team Access (included)',
    subtitle: 'Valued at R580/month',
    icon: Users,
  },
];

const includedPillars = [
  {
    icon: Star,
    title: 'Review Collection (automated)',
    bullets: [
      'WhatsApp + email review requests',
      'Smart filtering (unhappy customers handled privately)',
      'Real-time alerts and reply support',
      'Kickstart with outreach to your recent customers',
    ],
  },
  {
    icon: Share2,
    title: 'Social Posting (consistent)',
    bullets: [
      'Posts to Facebook, Instagram, and Google Business',
      'Weekly service content + holiday posts',
      'Review highlight posts (automatic)',
      'You can submit job photos any time',
    ],
  },
  {
    icon: Globe,
    title: 'Website + Hosting (included)',
    bullets: [
      'Modern, mobile-friendly website built for conversions',
      'WhatsApp buttons, calls-to-action, and basic SEO setup',
      'Secure hosting with SSL and backups',
      'We handle updates as part of the bundle',
    ],
  },
  {
    icon: ClipboardList,
    title: 'FieldCard Team Access (included)',
    bullets: [
      'Create and send quotes quickly',
      'Track jobs, leads, and follow-ups in one place',
      'Digital job cards and customer sign-off',
      'Built for contractors — simple like WhatsApp',
    ],
  },
];

const howItWorks = [
  {
    step: '1',
    title: 'Quick onboarding',
    body: 'We confirm your business details, goals, and service areas and set up your dashboards.',
  },
  {
    step: '2',
    title: 'We build your website',
    body: 'We create a professional site that supports your reviews + social strategy and turns visits into enquiries.',
  },
  {
    step: '3',
    title: 'We connect your platforms',
    body: 'Google Business, Facebook, Instagram, and review workflows connected and ready.',
  },
  {
    step: '4',
    title: 'Monthly execution',
    body: 'We run the system with you: reviews go out automatically and your content stays consistent.',
  },
];

const faqs = [
  {
    q: 'How long is the commitment?',
    a: 'This special offer is a 12-month commitment at R2,500/month.',
  },
  {
    q: 'When does the offer end?',
    a: 'This offer is available until March 2026.',
  },
  {
    q: 'What happens if I cancel?',
    a: 'If you cancel, the website is removed and the included hosting stops. The website is included in this bundle because we are not charging for it separately.',
  },
  {
    q: 'Do you need access to my accounts?',
    a: 'Yes — we’ll help you connect your Google Business Profile and social pages so we can post and manage the workflow properly.',
  },
  {
    q: 'What do I need to do each month?',
    a: 'Very little. If you can send job photos/details when you have them, great — and even if you’re busy, you’ll still have consistent content going out.',
  },
  {
    q: 'Is this only for contractors?',
    a: 'It’s designed for local service businesses (plumbers, electricians, builders, cleaning, pest control, landscaping, etc.), but it works for any business that relies on local trust and enquiries.',
  },
];

const SpecialOfferGpt52Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-md relative">
          <div className="text-center">
            <span className="badge-dark mb-6">Limited-time special offer • Ends March 2026</span>

            <h1 className="text-white mb-6 text-balance">
              Everything you need to win online
              <br className="hidden sm:block" />
              for R2,500/month
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              A 12-month bundle that covers your reputation, visibility, website, and team tools — so you can
              get more enquiries and run a more streamlined business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'cta_click', {
                      event_category: 'engagement',
                      event_label: 'special_offer_hero_whatsapp',
                      value: 1,
                    });
                  }
                }}
              >
                Claim the Special Offer
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#details"
                className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600"
              >
                See what’s included
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-neutral-400 text-sm">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                12-month commitment
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Reviews + social posting
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Website + hosting included
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                FieldCard team access included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value stack */}
      <section id="details" className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">The Bundle</span>
            <h2 className="text-neutral-900 mb-4">Everything in one monthly plan</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We bundle everything a local service business needs to look credible online and keep operations
              moving — for one simple monthly fee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueStack.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-neutral-50 rounded-2xl p-6 shadow-soft">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-neutral-700" />
                  </div>
                  <div className="text-lg font-semibold text-neutral-900">{item.title}</div>
                  <div className="text-sm text-neutral-600 mt-2">{item.subtitle}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-neutral-900 rounded-2xl p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-300 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  Available until March 2026
                </div>
                <div className="mt-3 text-2xl md:text-3xl font-extrabold font-display text-white">
                  R2,500/month for 12 months
                </div>
                <div className="mt-2 text-sm text-neutral-300 max-w-xl">
                  You get the reputation engine plus the “done-for-you” assets and tools that usually cost extra.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'cta_click', {
                        event_category: 'engagement',
                        event_label: 'special_offer_value_stack_whatsapp',
                        value: 1,
                      });
                    }
                  }}
                >
                  Talk to us on WhatsApp
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#pricing"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  View pricing
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs text-neutral-400">
              Fine print: if you cancel, the website is removed and hosting stops (it’s included because we’re not
              charging for it separately).
            </div>
          </div>
        </div>
      </section>

      {/* What’s included */}
      <section className="section bg-neutral-50">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">What’s Included</span>
            <h2 className="text-neutral-900 mb-4">A complete “online success” stack</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              This bundle is built to help you get found, earn trust fast, and keep your team organized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {includedPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-neutral-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{pillar.title}</h3>
                      <ul className="mt-4 space-y-3">
                        {pillar.bullets.map((b) => (
                          <li key={b} className="flex items-start text-sm">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">How It Works</span>
            <h2 className="text-neutral-900 mb-4">Simple setup, ongoing momentum</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We do the heavy lifting. You stay focused on delivery and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-neutral-50 rounded-2xl p-6 shadow-soft flex gap-4">
                <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="badge mb-4">Pricing</span>
            <h2 className="text-neutral-900 mb-4">One price. One plan. One outcome.</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Everything bundled for R2,500/month with a 12-month commitment. Offer ends March 2026.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-neutral-900 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-amber-300">Special Offer Bundle</div>
                  <div className="mt-2 text-3xl md:text-4xl font-extrabold font-display">R2,500</div>
                  <div className="text-neutral-400">per month • 12 months</div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 justify-center"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'cta_click', {
                          event_category: 'engagement',
                          event_label: 'special_offer_pricing_whatsapp',
                          value: 1,
                        });
                      }
                    }}
                  >
                    Start on WhatsApp
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <div className="text-xs text-neutral-400">
                    Offer available until March 2026.
                    <br />
                    If you cancel, the website is removed (included because it’s not billed separately).
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Review collection automation',
                  'Social posting across key platforms',
                  'Website design included (valued at R12,000)',
                  'Hosting included (valued at R350/month)',
                  'FieldCard team access included (valued at R580/month)',
                  'One team to support everything',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <Check className="w-5 h-5 text-amber-300 mt-0.5" />
                    <span className="text-sm text-neutral-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">FAQ</span>
            <h2 className="text-neutral-900 mb-4">Common questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.q}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-neutral-50 p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-neutral-700 mt-0.5" />
              <p className="text-neutral-700 text-sm">
                We don’t do fake reviews or incentives that violate platform rules. This is a real system for real
                businesses — built for steady growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <SocialProofSection />

      {/* Final CTA */}
      <section className="section-sm bg-neutral-950">
        <div className="container-md text-center">
          <h2 className="text-white mb-4">Ready to bundle everything?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Message us and we’ll confirm fit, timelines, and next steps. Offer ends March 2026.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  event_category: 'engagement',
                  event_label: 'special_offer_final_whatsapp',
                  value: 1,
                });
              }
            }}
          >
            Claim the Special Offer
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SpecialOfferGpt52Page;
