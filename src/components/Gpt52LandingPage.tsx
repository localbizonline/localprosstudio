import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import logo from '../assets/images/Compressed/Local Pros Studio logo transparent.png';
import helloPeter from '../assets/images/hellopeter.svg';

const WHATSAPP_LINK =
  'https://wa.me/27832336716?text=' +
  encodeURIComponent(
    "Hi Local Pros Studio — I'm coming from the GPT-52 landing page. I'd like the free Review Growth Plan."
  );

function InputLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold tracking-wide text-neutral-200 uppercase">{children}</div>
  );
}

function FieldHint({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-neutral-400 mt-1">{children}</div>;
}

const Gpt52LandingPage = () => {
  const location = useLocation();
  const isSubmitted = new URLSearchParams(location.search).get('submitted') === 'true';

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-warm bg-grid">
        <div className="container-lg pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="font-semibold text-white">Free</span> “Review Growth Plan” for local service businesses
              </div>

              <h1 className="mt-6 text-balance text-white">
                Turn every job into a <span className="text-amber-300">5‑star review</span>—without begging, discounts, or awkward follow‑ups.
              </h1>

              <p className="mt-5 text-neutral-200 text-lg leading-relaxed max-w-2xl">
                If you’re a contractor or local service business, this page will show you the simple ClickFunnels-style framework
                we use to increase review volume, improve reply quality, and convert “browsers” into booked jobs.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <BadgeCheck className="w-5 h-5 text-amber-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">More reviews (consistently)</div>
                    <div className="text-sm text-neutral-300">A system that runs after every completed job.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="w-5 h-5 text-amber-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Better conversion</div>
                    <div className="text-sm text-neutral-300">Build trust fast so price shoppers stop ghosting.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold hover:bg-neutral-100 transition-colors"
                >
                  Get my free plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Or message us on WhatsApp
                  <MessageCircle className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-300">
                <div className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300" />
                  Takes 7 minutes to review
                </div>
                <div className="inline-flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-300" />
                  No spam • no hard pitch
                </div>
              </div>
            </div>

            {/* Offer card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-soft-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-amber-300">What you’ll get</div>
                  <div className="inline-flex items-center gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300" />
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-2xl font-extrabold font-display text-white">
                  The “Review Engine” plan
                </div>
                <p className="mt-2 text-neutral-200">
                  A simple framework that improves how you ask, when you ask, and what you send—so customers actually leave reviews.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    'Copy/paste WhatsApp review request script (non-awkward)',
                    'The 2-step follow-up that doesn’t feel spammy',
                    'A reply formula that boosts trust on Google & HelloPeter',
                    'A “value stack” checklist for your offer (so you win on value, not price)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-300 mt-0.5" />
                      <span className="text-neutral-100">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/60 p-4">
                  <div className="text-sm font-semibold text-white">Best for:</div>
                  <div className="mt-1 text-sm text-neutral-300">
                    Plumbers, electricians, builders, landscapers, solar, pest control, cleaning, HVAC—any business that finishes jobs and wants more referrals.
                  </div>
                </div>

                <div className="mt-6">
                  <a href="#apply" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-extrabold hover:bg-amber-300 transition-colors">
                    Yes—send me the plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <div className="mt-3 text-xs text-neutral-400">
                    Not affiliated with ClickFunnels/Russell Brunson. Inspired by direct-response principles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Story */}
      <section className="bg-neutral-950">
        <div className="container-lg section-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="text-sm font-semibold text-amber-300">The real problem</div>
              <h2 className="mt-3 text-white">It’s not “getting reviews.” It’s fixing the system.</h2>
              <p className="mt-4 text-neutral-300">
                Most businesses don’t have a review problem—they have a <span className="text-white font-semibold">follow-up</span> problem.
                Great jobs happen… then nothing gets sent… then the next job starts.
              </p>
              <p className="mt-4 text-neutral-300">
                The ClickFunnels mindset is simple: build a repeatable funnel that turns attention into action.
                In this case, the “funnel” starts the moment the job is complete.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Asking feels awkward',
                    body: 'So you delay it… and then it never happens.',
                  },
                  {
                    title: 'Customers forget fast',
                    body: '48 hours later they’ve moved on. Momentum is gone.',
                  },
                  {
                    title: 'No clear next step',
                    body: 'A vague “please review us” doesn’t convert.',
                  },
                ].map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="font-bold text-white">{card.title}</div>
                    <div className="mt-2 text-sm text-neutral-300">{card.body}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">Our “hook → story → offer” version for reviews:</div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'Hook',
                      body: 'Short message that feels personal (not corporate).',
                    },
                    {
                      title: 'Story',
                      body: 'One line that reminds them of the outcome you delivered.',
                    },
                    {
                      title: 'Offer',
                      body: 'A single, clear link + optional “plan B” if they’re busy.',
                    },
                  ].map((step) => (
                    <div key={step.title} className="rounded-2xl bg-neutral-950/50 border border-white/10 p-4">
                      <div className="font-extrabold text-amber-300">{step.title}</div>
                      <div className="mt-1 text-sm text-neutral-200">{step.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Trust */}
      <section className="bg-neutral-950 border-t border-white/10">
        <div className="container-lg section-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-amber-300">Trust signals</div>
              <h2 className="mt-3 text-white">Look credible in 10 seconds.</h2>
              <p className="mt-3 text-neutral-300 max-w-2xl">
                When a prospect clicks from an ad, they scan for proof. The plan includes a simple structure to showcase credibility without writing a novel.
              </p>
            </div>
            <div className="flex items-center gap-6 opacity-90">
              <img src={helloPeter} alt="HelloPeter" className="h-8 w-auto" />
              <div className="text-sm text-neutral-300">
                Google • Facebook • WhatsApp
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Proof tiles',
                body: 'Before/after photos, short wins, and “why choose us” bullets.',
              },
              {
                title: 'Reply templates',
                body: 'Build trust by replying like a human (and using keywords naturally).',
              },
              {
                title: 'Offer clarity',
                body: 'A value stack so your quote feels “worth it” even if it’s not the cheapest.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-extrabold text-white">{card.title}</div>
                <div className="mt-2 text-sm text-neutral-300">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="bg-neutral-950 border-t border-white/10">
        <div className="container-lg section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <div className="text-sm font-semibold text-amber-300">Get the free plan</div>
              <h2 className="mt-3 text-white">Want us to map this to your business?</h2>
              <p className="mt-4 text-neutral-300 max-w-xl">
                Drop your details and we’ll send the Review Engine plan plus the scripts. If you prefer, WhatsApp us and we’ll help you faster.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="font-semibold text-white">What happens next</div>
                <ul className="mt-4 space-y-3 text-sm text-neutral-200">
                  {[
                    'We send the plan + scripts (copy/paste ready).',
                    'If you want help implementing, we’ll suggest the fastest next step.',
                    'No pressure—use it yourself if you prefer.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-300 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                {isSubmitted ? (
                  <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="w-6 h-6 text-amber-300 mt-0.5" />
                      <div>
                        <div className="text-lg font-extrabold text-white">Submitted.</div>
                        <div className="mt-1 text-sm text-neutral-200">
                          We’ll reach out soon. If you want to move faster, message us on WhatsApp now.
                        </div>
                        <div className="mt-4">
                          <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-amber-400 text-neutral-950 font-extrabold hover:bg-amber-300 transition-colors"
                          >
                            WhatsApp us
                            <MessageCircle className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form
                    name="gpt-52-leads"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    action="/gpt-52-landing-page?submitted=true"
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="gpt-52-leads" />
                    <input type="hidden" name="source" value="gpt-52-landing-page" />
                    <p className="hidden">
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" />
                      </label>
                    </p>

                    <div>
                      <InputLabel>Your name</InputLabel>
                      <input
                        name="name"
                        required
                        className="mt-2 w-full rounded-2xl bg-neutral-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-amber-400"
                        placeholder="Jeremy"
                      />
                    </div>

                    <div>
                      <InputLabel>WhatsApp number</InputLabel>
                      <input
                        name="whatsapp"
                        required
                        className="mt-2 w-full rounded-2xl bg-neutral-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-amber-400"
                        placeholder="+27 00 000 0000"
                      />
                      <FieldHint>We’ll use this to send the plan + scripts.</FieldHint>
                    </div>

                    <div>
                      <InputLabel>Business type</InputLabel>
                      <select
                        name="businessType"
                        required
                        className="mt-2 w-full rounded-2xl bg-neutral-950/60 border border-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-amber-400"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Building">Building / Renovations</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Landscaping">Landscaping</option>
                        <option value="Pest control">Pest control</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <InputLabel>Website (optional)</InputLabel>
                      <input
                        name="website"
                        className="mt-2 w-full rounded-2xl bg-neutral-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-amber-400"
                        placeholder="https://"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-extrabold hover:bg-amber-300 transition-colors"
                    >
                      Send me the plan
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>

                    <div className="text-xs text-neutral-400">
                      By submitting, you agree we can contact you about this request. We won’t sell your details.
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Prefer WhatsApp? Message us
                  <MessageCircle className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Back to main site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Guarantee */}
      <section className="bg-neutral-950 border-t border-white/10">
        <div className="container-lg section-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-sm font-semibold text-amber-300">FAQ</div>
              <h2 className="mt-3 text-white">Quick answers.</h2>
              <p className="mt-3 text-neutral-300">
                If you’re running ads, this is the part prospects read right before they decide.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-amber-300 mt-0.5" />
                  <div>
                    <div className="font-extrabold text-white">Our promise</div>
                    <div className="mt-1 text-sm text-neutral-200">
                      No gimmicks. Just simple, repeatable follow-up that fits a real business. Results vary based on your volume and execution.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {[
                  {
                    q: 'Is this only for Google reviews?',
                    a: 'No—this works for Google, HelloPeter, Facebook, and industry directories. The plan shows where to send each customer.',
                  },
                  {
                    q: 'Will customers feel annoyed?',
                    a: 'The scripts are short and respectful. The “story” line reminds them of the outcome, which increases response without pushiness.',
                  },
                  {
                    q: 'Do I need new software?',
                    a: 'Not to start. You can run the system using WhatsApp + a simple checklist. If you want automation, we’ll recommend options later.',
                  },
                  {
                    q: 'What if I already have reviews?',
                    a: 'Perfect—this helps you get reviews consistently and reply in a way that increases trust and conversion.',
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="font-extrabold text-white">{item.q}</div>
                    <div className="mt-2 text-sm text-neutral-300">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-4xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-300 font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Ready for the plan?
                </div>
                <div className="mt-2 text-2xl md:text-3xl font-extrabold font-display text-white">
                  Get the scripts + framework in minutes.
                </div>
                <div className="mt-2 text-sm text-neutral-300">
                  Click below and we’ll send it through.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-extrabold hover:bg-amber-300 transition-colors"
                >
                  Get the free plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  WhatsApp instead
                  <MessageCircle className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="container-lg py-10">
          <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            <div className="text-sm text-neutral-400">
              <span className="text-neutral-200 font-semibold">Local Pros Studio</span> • South Africa
              <div className="mt-1 text-xs text-neutral-500">
                This is an ad-specific landing page designed for fast conversion.
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#apply" className="text-sm text-neutral-300 hover:text-white transition-colors">
                Get the plan
              </a>
              <span className="text-neutral-700">•</span>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">
                WhatsApp
              </a>
              <span className="text-neutral-700">•</span>
              <Link to="/" className="text-sm text-neutral-300 hover:text-white transition-colors">
                Main site
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gpt52LandingPage;
