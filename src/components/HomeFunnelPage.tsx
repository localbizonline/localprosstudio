import React from 'react';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Sparkles, BarChart3, MessageSquare, Star, Megaphone, PlayCircle } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

import heroOverlay from '../assets/images/review-screen-focus.jpg';
import dashboardImage from '../assets/images/social-analytics-dashboard.jpg';
import whatsappImage from '../assets/images/review-whatsapp.jpg';
import reviewsImage from '../assets/images/review-customer.jpg';
import teamImage from '../assets/images/team.jpg';

const highlights = [
  { label: 'Setup', value: '7 days', detail: 'We launch your review engine in a week.' },
  { label: 'Rating', value: '4.7★+', detail: 'Typical rating sustained after 90 days.' },
  { label: 'Time Saved', value: '~10 hrs', detail: 'Average admin time we replace monthly.' },
];

const pains = [
  {
    title: 'Busy teams never get around to asking',
    description: 'Your staff focus on delivery, not chasing reviews. Opportunities slip away daily.',
    image: whatsappImage,
  },
  {
    title: 'Marketing is scattered across tools',
    description: 'Emails, WhatsApp, and socials live in silos. No single place to see what went live.',
    image: dashboardImage,
  },
  {
    title: 'Competitors look louder online',
    description: 'They publish wins and reviews weekly. Your brand looks quiet even when you’re busy.',
    image: heroOverlay,
  },
];

const steps = [
  {
    title: 'Capture customers automatically',
    description: 'We hook into your invoices/CRMs or a simple form—no new software rollouts.',
    icon: PlayCircle,
  },
  {
    title: 'Send, filter, and follow up',
    description: 'Smart sequences via WhatsApp + email. Unhappy signals alert you privately first.',
    icon: ShieldCheck,
  },
  {
    title: 'Publish proof every week',
    description: 'We design review graphics and schedule posts for Google, Facebook, Instagram.',
    icon: Megaphone,
  },
  {
    title: 'Show the numbers',
    description: 'Simple weekly recap: new reviews, response times, posts shipped—no fluff.',
    icon: BarChart3,
  },
];

const offer = [
  'Launch in 7 days with your existing tools.',
  'We run review asks, responses, and weekly posts.',
  'If you don’t see 20+ new reviews in 90 days, you don’t pay.',
];

const valueTiles = [
  {
    title: 'Review Engine',
    points: ['WhatsApp + email sequences', 'Private unhappy filter', 'AI-assisted replies'],
    image: reviewsImage,
  },
  {
    title: 'Content Drumbeat',
    points: ['Review-to-post design', 'Job highlights from your photos', '12-month calendar preloaded'],
    image: dashboardImage,
  },
  {
    title: 'Leadership View',
    points: ['Weekly scorecard', 'Zero logins required', 'One WhatsApp thread to approve'],
    image: teamImage,
  },
];

const HomeFunnelPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <img src={heroOverlay} alt="Team reviewing customer feedback" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-900/60" />
        </div>

        <div className="container-lg relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-[0.2em] text-white/80">
                Built for busy SMB & mid-size teams
              </div>
              <h1 className="text-white text-balance">
                Get a steady stream of 5-star reviews and weekly social proof—without adding work to your team.
              </h1>
              <p className="text-lg md:text-xl text-neutral-200 max-w-2xl">
                We set up the system, run the follow-ups, design the posts, and report back. You stay focused on delivery while your reputation compounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/27832336716?text=Hi%2C%20I%20want%20to%20grow%20reviews%20without%20adding%20work%20for%20my%20team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 animate-bounce-soft"
                >
                  Book a 15-min fit call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="#how-it-works" className="btn-secondary border-white/40 text-white hover:bg-white/10">
                  See how it works
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-xl">
                {highlights.map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-sm text-neutral-300">{item.label}</div>
                    <div className="text-2xl font-bold text-white mt-1">{item.value}</div>
                    <div className="text-xs text-neutral-400 mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-sky-500/20 blur-3xl rounded-full" />
              <div className="absolute -right-10 bottom-10 w-32 h-32 bg-amber-400/20 blur-3xl rounded-full" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
                <img src={dashboardImage} alt="Reputation dashboard" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/80 backdrop-blur rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-emerald-300 fill-emerald-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">27 new 5-star reviews</div>
                    <div className="text-neutral-300 text-xs">Past 90 days • Google & Facebook</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section bg-neutral-50">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="badge mb-4">Why it feels hard</span>
            <h2 className="text-neutral-900 mb-4">Your team is capable. Time is the constraint.</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Established businesses don’t struggle with quality—they struggle with consistency in asking, publishing, and tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map((pain, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all border border-neutral-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={pain.image} alt={pain.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl text-neutral-900">{pain.title}</h3>
                  <p className="text-neutral-600">{pain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section bg-neutral-950 text-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4 bg-white/10 text-white border border-white/20">How it works</span>
            <h2 className="text-white mb-4">Set it once. We run it for you.</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">No new logins for your leadership team. Everything flows through a single WhatsApp thread and a weekly recap.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value tiles */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="badge mb-4">What you get</span>
            <h2 className="text-neutral-900 mb-4">A review engine plus a content team</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              One partner to collect, filter, respond, and publish. Built for teams that want results, not another platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueTiles.map((tile, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-neutral-200 shadow-soft hover:shadow-soft-lg transition-all overflow-hidden flex flex-col">
                <div className="aspect-[4/3]">
                  <img src={tile.image} alt={tile.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-neutral-900">{tile.title}</h3>
                  <ul className="space-y-2">
                    {tile.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer / guarantee */}
      <section className="section bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white">
        <div className="container-md">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-soft-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-200 text-xs font-semibold">
                  Guarantee
                </span>
                <h2 className="text-white">20+ new 5-star reviews in 90 days—or you don’t pay.</h2>
                <p className="text-neutral-300 max-w-2xl">
                  We’re confident because we do the work: sequences, replies, creative, and scheduling. If we miss the mark, you keep the system and owe nothing.
                </p>
                <ul className="space-y-3">
                  {offer.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-200">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/27832336716?text=Hi%2C%20I%20want%20to%20see%20if%20we%20qualify%20for%20the%2090-day%20review%20guarantee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
                  >
                    Check availability
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a href="mailto:hello@localprosstudio.com" className="btn-secondary border-white/40 text-white hover:bg-white/10">
                    Email the team
                  </a>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Hands-off for your team</div>
                    <div className="text-neutral-300 text-sm">We operate it; you get weekly receipts.</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-200" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">1 thread, 1 owner</div>
                    <div className="text-neutral-300 text-sm">Decisions happen in a single WhatsApp thread.</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-400/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Creative included</div>
                    <div className="text-neutral-300 text-sm">Review graphics, captions, and scheduling handled.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <SocialProofSection />

      {/* Final CTA */}
      <section className="section-sm bg-neutral-50">
        <div className="container-md text-center">
          <h2 className="text-neutral-900 mb-4">Ready for a reputation engine your team doesn’t have to run?</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Share your current review counts and platforms. We’ll map the first 90 days, set it up, and run it for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/27832336716?text=Hi%2C%20we%20want%20a%2090-day%20plan%20for%20reviews%20and%20social%20proof"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start the 90-day plan
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              Review the steps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFunnelPage;
