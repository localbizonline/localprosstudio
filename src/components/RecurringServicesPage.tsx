import React from 'react';
import { ArrowRight, Check, RefreshCw, Calendar, Bell, MessageSquare, Clock, Smartphone, Zap, Settings, Users, BarChart3 } from 'lucide-react';
import SocialProofSection from './SocialProofSection';

const benefits = [
  {
    icon: RefreshCw,
    title: "Auto-Rebooking",
    description: "Jobs automatically rebooked at the right interval — no manual follow-up."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Reminders",
    description: "Customers get friendly WhatsApp messages to confirm their next booking."
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "Connects to your existing booking system or gives you a dashboard."
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "You're notified when bookings are confirmed, rescheduled, or need attention."
  }
];

const painPoints = [
  {
    title: "Customers Forget to Rebook",
    description: "They loved the job but life gets busy. Six months later, they've forgotten your name and called someone else."
  },
  {
    title: "You Lose Track of Schedules",
    description: "You know Mr Jacobs needs his aircons serviced every 6 months, but between 50 other clients, it falls through the cracks."
  },
  {
    title: "Following Up Feels Pushy",
    description: "Calling or texting every customer to remind them feels awkward. So you don't, and the repeat work dries up."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Log the Job",
    description: "After you complete a job, tell us the details via WhatsApp or your dashboard — customer name, service, and how often it needs doing again."
  },
  {
    step: "2",
    title: "We Set the Timer",
    description: "We schedule the rebooking cycle — every 3 months, 6 months, annually, whatever the service needs."
  },
  {
    step: "3",
    title: "Customer Gets Reminded",
    description: "When it's time, your customer receives a friendly WhatsApp asking them to confirm their next booking. No cold calls, no awkward chasing."
  },
  {
    step: "4",
    title: "Job Booked Automatically",
    description: "Customer confirms via WhatsApp, the booking lands in your calendar or dashboard, and you get notified. Done."
  }
];

const serviceTypes = [
  { name: "Window Cleaning", interval: "Every 2-3 months" },
  { name: "Solar Panel Cleaning", interval: "Every 6 months" },
  { name: "Aircon Servicing", interval: "Every 6-12 months" },
  { name: "Pool Maintenance", interval: "Monthly" },
  { name: "Gutter Cleaning", interval: "Every 6 months" },
  { name: "Pest Control", interval: "Quarterly" },
  { name: "Garden Services", interval: "Weekly/Monthly" },
  { name: "Plumbing Inspections", interval: "Annually" },
];

const included = [
  "Automated WhatsApp rebooking reminders",
  "Customer confirmation via WhatsApp",
  "Smart follow-ups if no response",
  "Calendar or dashboard sync",
  "Real-time booking notifications",
  "Customer history and service records",
  "Customisable reminder intervals",
  "Dashboard access for all bookings"
];

const faqs = [
  {
    question: "What types of businesses is this for?",
    answer: "Any recurring service business — window cleaning, solar panel cleaning, aircon servicing, pest control, pool maintenance, gutter cleaning, garden services, and more. If your customers need your service again on a regular basis, this is for you."
  },
  {
    question: "Do my customers need to download an app?",
    answer: "No. Everything happens through WhatsApp — the app they already use every day. No downloads, no sign-ups, no friction."
  },
  {
    question: "What if a customer doesn't respond?",
    answer: "We send up to two friendly follow-ups over the next week. If they still don't respond, you're notified so you can decide whether to call them or leave it."
  },
  {
    question: "Can I set different intervals for different services?",
    answer: "Absolutely. You set the rebooking interval per job — 3 months for aircons, 6 months for gutters, weekly for garden services. Whatever makes sense for the service."
  },
  {
    question: "Does it connect to my existing booking system?",
    answer: "We integrate with most popular booking and calendar systems. If yours isn't supported, we give you a simple dashboard to manage all your recurring bookings in one place."
  },
  {
    question: "How is this different from just setting a phone reminder?",
    answer: "Phone reminders remind you to call — you still have to do the chasing. We message the customer directly, get their confirmation, book the slot, and notify you. Zero admin on your side."
  }
];

const RecurringServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>

        <div className="container-md relative">
          <div className="text-center">
            <div className="inline-flex items-center mb-6 animate-fade-in">
              <span className="badge-dark">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                Coming Soon 2026
              </span>
            </div>

            <h1 className="text-white mb-6 animate-fade-in-up text-balance">
              Never Lose a<br className="hidden sm:block" />
              Repeat Customer Again
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
              We automatically rebook your recurring jobs via WhatsApp.
              Your customers get reminded, confirm with one message, and the job
              lands in your calendar — zero chasing from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-200">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Recurring%20Services%20booking%20system"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-amber-500 text-neutral-900 hover:bg-amber-400"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#how-it-works" className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                See How It Works
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-neutral-400 text-sm animate-fade-in-up delay-300">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                WhatsApp-based
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Fully automated
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Calendar sync
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

      {/* Pain Points Section */}
      <section className="section bg-neutral-950">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">You Do Great Work.<br className="hidden md:block" /> But Repeat Customers Slip Away.</h2>
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

      {/* How It Works */}
      <section id="how-it-works" className="section bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-16">
            <span className="badge mb-4">How It Works</span>
            <h2 className="text-neutral-900 mb-4">Log the Job. We Handle the Rest.</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              You tell us what was done and how often it needs doing again. We take care of reminding the customer, getting confirmation, and booking the next visit.
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

      {/* WhatsApp Flow Visual */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  WhatsApp Powered
                </span>
                <h2 className="text-white mb-4">Your Customers Already Use WhatsApp</h2>
                <p className="text-neutral-400 mb-6">
                  No app downloads. No portals. No friction. We reach your customers on the platform
                  they check 50+ times a day. They confirm with a single message and the job is booked.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    98% open rate on WhatsApp messages
                  </li>
                  <li className="flex items-center text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    One-tap confirmation — no forms to fill
                  </li>
                  <li className="flex items-center text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Smart follow-ups if they don't respond
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800 rounded-xl p-4 md:p-6">
                <div className="space-y-4">
                  {/* System message */}
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <RefreshCw className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-xs text-green-400 font-medium mb-1">Auto-Reminder Sent</p>
                        <p className="text-sm text-neutral-300">"Hi Mrs Van der Merwe, it's been 6 months since your last solar panel clean. Shall we book you in for next week?"</p>
                      </div>
                    </div>
                  </div>
                  {/* Customer reply */}
                  <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-amber-400 font-medium mb-1">Customer Replies</p>
                        <p className="text-sm text-neutral-300">"Yes please! Thursday morning works for me."</p>
                      </div>
                    </div>
                  </div>
                  {/* Booking confirmed */}
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-xs text-green-400 font-medium mb-1">Booking Confirmed</p>
                        <p className="text-sm text-neutral-300">Job added to your calendar. You're notified on WhatsApp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-sm bg-neutral-50">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="badge mb-4">Built For</span>
            <h2 className="text-neutral-900 mb-4">Perfect for Recurring Service Businesses</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Any service that needs doing again on a schedule. You set the interval, we handle the rebooking.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-soft">
                <h4 className="font-semibold text-neutral-900 text-sm mb-1">{service.name}</h4>
                <span className="text-xs text-neutral-400">{service.interval}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">What's Included</span>
              <h2 className="text-neutral-900 mb-4">Everything You Need to Keep Customers Coming Back</h2>
              <p className="text-neutral-600 mb-8">
                We handle the entire rebooking process so you never lose a repeat customer again.
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
                See all upcoming, confirmed, and overdue rebookings in one place.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Upcoming This Week</span>
                  <span className="text-sm font-medium text-amber-600">8 jobs</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Confirmed by Customer</span>
                  <span className="text-sm font-medium text-green-600">6 confirmed</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Awaiting Response</span>
                  <span className="text-sm font-medium text-neutral-500">2 pending</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Repeat Rate</span>
                  <div className="flex items-center gap-1">
                    <RefreshCw className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-neutral-900">87%</span>
                  </div>
                </div>
              </div>
            </div>
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
                  Coming Soon 2026
                </span>
                <h2 className="text-white mb-6">Stop Losing Repeat Business to Forgetfulness</h2>
                <p className="text-neutral-400 text-lg mb-8">
                  Your customers want to rebook — they just forget. We make sure they don't.
                  Automatic WhatsApp reminders, one-tap confirmation, and the job appears in your calendar.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Automatic rebooking reminders via WhatsApp at the right time.</span>
                  </li>
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Customers confirm with a single WhatsApp message — no calls, no forms.</span>
                  </li>
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Syncs with your calendar or booking system. Or use our dashboard.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-5">
                <div className="bg-amber-500/15 border border-amber-400/35 rounded-2xl p-6 text-center text-amber-100">
                  <div className="text-4xl font-extrabold text-white mb-1">87%</div>
                  <div className="text-sm text-amber-200/80">Target repeat booking rate with automated reminders.</div>
                </div>
                <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6 text-center text-neutral-100">
                  <div className="text-4xl font-extrabold text-white mb-1">0 min</div>
                  <div className="text-sm text-neutral-400">Time you spend chasing customers for rebookings.</div>
                </div>
                <a
                  href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Recurring%20Services%20booking%20system.%20Please%20add%20me%20to%20the%20waitlist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-amber-500 text-neutral-900 font-bold rounded-xl text-center hover:bg-amber-400 transition-all hover:-translate-y-1"
                >
                  Join the Waitlist
                </a>
                <p className="text-neutral-500 text-sm text-center">
                  Be first in line when we launch. No commitment required.
                </p>
              </div>
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
          <h2 className="text-white mb-4">Ready to Never Lose a Repeat Customer?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Join the waitlist and be first to know when our recurring services system launches in 2026.
          </p>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Recurring%20Services%20system.%20Please%20add%20me%20to%20the%20waitlist."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-amber-500 text-neutral-900 hover:bg-amber-400"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default RecurringServicesPage;
