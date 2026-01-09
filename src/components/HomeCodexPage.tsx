import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

// Shared CTA
const CTAButton = ({ label = 'Get Started Today', sublabel }: { label?: string; sublabel?: string }) => (
  <div className="py-8 md:py-10">
    <a
      href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20get%20started%20with%20Local%20Pros%20Studio"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 md:gap-3 w-full bg-yellow-400 text-black font-black text-lg md:text-2xl lg:text-3xl px-6 md:px-10 py-5 md:py-6 rounded-full hover:scale-105 transition-all shadow-xl shadow-yellow-400/30 uppercase tracking-tight"
    >
      {label}
      <ArrowRight className="w-5 h-5 md:w-7 md:h-7" />
    </a>
    {sublabel && (
      <p className="text-neutral-400 text-sm text-center mt-3">
        {sublabel}
      </p>
    )}
  </div>
);

// Images borrowed from existing pages for consistency
import heroContractor from '../assets/images/Reviews/hero-contractor-handshake.jpg';
import deadBusinessNoSocials from '../assets/images/social-posting/dead business if no socials since 2021.jpg';
import reviewTransformation from '../assets/images/Reviews/tile-3x2-review-transformation.png';
import reviewContractor from '../assets/images/review-contractor-happy.jpg';
import beforeAfterProof from '../assets/images/Reviews/Local Pros reviews before and after.png';
import oneUploadEverywhereContractors from '../assets/images/social-posting/one upload everywhere for contractors.webp';
import googleAiOverviewRoofingPhone from '../assets/images/social-posting/google-ai-overview-roofing-phone.webp';
import happyContractorLandscape from '../assets/images/social-posting/happy contractor with social posting landscape ratio.webp';

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 text-center">
    <p className="text-3xl md:text-4xl font-black text-amber-400">{value}</p>
    <p className="text-neutral-300 text-sm md:text-base mt-2">{label}</p>
  </div>
);

const PillarCard = ({
  title,
  description,
  link,
  badge,
}: {
  title: string;
  description: string;
  link: string;
  badge?: string;
}) => (
  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl hover:border-amber-500/40 transition-all">
    {badge && <span className="inline-block mb-3 text-xs font-black text-amber-400 uppercase tracking-[0.2em]">{badge}</span>}
    <h3 className="text-xl md:text-2xl font-black text-white mb-3">{title}</h3>
    <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">{description}</p>
    <a
      href={link}
      className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm md:text-base hover:text-amber-300"
    >
      See details
      <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

const ObjectionCard = ({ q, a }: { q: string; a: string }) => (
  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 md:p-6 space-y-2">
    <p className="text-amber-400 text-sm font-black uppercase tracking-wide">{q}</p>
    <p className="text-neutral-200 text-base md:text-lg leading-relaxed">{a}</p>
  </div>
);

const PackageCard = ({
  name,
  price,
  original,
  best,
  bullets,
}: {
  name: string;
  price: string;
  original?: string;
  best?: boolean;
  bullets: string[];
}) => (
  <div
    className={`relative bg-neutral-900 border rounded-2xl p-6 md:p-8 space-y-4 shadow-lg ${
      best ? 'border-amber-500' : 'border-neutral-800'
    }`}
  >
    {best && (
      <span className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full">
        Best Value
      </span>
    )}
    <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">{name}</p>
    <div>
      {original && <p className="text-neutral-500 line-through text-sm">{original}</p>}
      <p className="text-3xl md:text-4xl font-black text-white">{price}</p>
      <p className="text-neutral-400 text-sm">per month</p>
    </div>
    <div className="space-y-2">
      {bullets.map((item) => (
        <p key={item} className="text-neutral-200 text-sm md:text-base flex items-start gap-2">
          <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
          {item}
        </p>
      ))}
    </div>
    <a
      href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20get%20started%20with%20Local%20Pros%20Studio"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 w-full font-bold px-5 py-4 rounded-full transition-all ${
        best
          ? 'bg-yellow-400 text-black hover:scale-105 shadow-lg shadow-yellow-400/30'
          : 'bg-neutral-800 text-white hover:bg-neutral-700'
      }`}
    >
      Chat on WhatsApp
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
);

const HomeCodexPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* HERO */}
      <section className="relative bg-neutral-950 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="text-center space-y-6">
            <p className="text-amber-400 font-bold text-sm md:text-base uppercase tracking-[0.25em]">
              For local business owners who are tired of being invisible online
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Growing a Local Business is Hard.<br />
              <span className="text-amber-400">We Make It a Hell of a Lot Easier.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              Professional reviews. Consistent social media. Websites that actually convert. Without you lifting a finger.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20get%20started%20with%20Local%20Pros%20Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-yellow-400 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="text-amber-400 font-bold text-sm md:text-base hover:text-amber-300"
              >
                See How It Works ↓
              </a>
            </div>
            <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400/40">
              <img
                src={heroContractor}
                alt="Confident business owner with customers"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-neutral-300 text-sm md:text-base">
              <span className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">500+ websites built</span>
              <span className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">10+ years in the game</span>
              <span className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">R7m+ revenue generated</span>
              <span className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">4.9★ client rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 md:py-24 bg-neutral-800">
        <div className="max-w-3xl mx-auto px-6 md:px-8 space-y-8 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">⚡ The Problem</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">Look, we get it.</h2>
          <p className="text-lg md:text-xl text-neutral-300">
            Running a local business is a full-time war. Quotes. Staff. Suppliers. Cashflow. And somewhere in between you’re supposed to
            post, collect reviews, update Google, reply on Instagram, and keep your website alive.
          </p>
          <div className="space-y-3 text-lg md:text-xl text-neutral-300">
            <p>- Post on Facebook 3x a week</p>
            <p>- Collect reviews from happy customers</p>
            <p>- Update your Google profile</p>
            <p>- Reply to enquiries on Instagram</p>
            <p>- Make sure your website works on mobile</p>
            <p>- Figure out what the hell SEO even means</p>
          </div>
          <p className="text-neutral-200 text-lg italic bg-neutral-900/60 border-l-4 border-amber-500 px-4 py-3 rounded-r-xl">
            You're not failing because you don't work hard enough. You're failing because you're trying to do everything yourself.
          </p>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-neutral-700">
            <img
              src={deadBusinessNoSocials}
              alt="Overwhelmed business without social updates"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-16 md:py-24 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 md:px-8 space-y-8 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">Who We Are</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            We're not some fancy agency with a glass-front office.
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white">We're local business owners. Just like you.</p>
          <p className="text-lg md:text-xl text-neutral-300">
            We drove around with magnets on our trucks. Handed out flyers. Begged family for 5-star reviews. Lost jobs to competitors with better websites.
          </p>
          <p className="text-lg md:text-xl text-neutral-300">
            After a decade of trial and error, we built systems that actually work — first for ourselves, now for you.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <img src={reviewContractor} alt="Local Pros team moment" className="w-full" />
          </div>
          <CTAButton sublabel="Real people. Real support. No BS." />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 md:py-24 bg-neutral-800" id="how-it-works">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-10 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">The Solution</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            We handle your entire digital presence.<br />
            <span className="text-amber-400">You handle your business.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300">Three pillars. One partner. Everything done-for-you.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <PillarCard
              title="5-Star Reviews on Autopilot"
              description="WhatsApp-first review requests, smart follow-ups, and negative feedback caught privately before it goes public."
              link="/reviews"
              badge="Reviews"
            />
            <PillarCard
              title="Social Media That Posts Itself"
              description="Send us your job photos once. We publish scroll-stopping posts to Facebook, Instagram, and Google every week."
              link="/social-media-posting-service"
              badge="Social"
            />
            <PillarCard
              title="Websites That Actually Convert"
              description="Mobile-first, fast-loading sites built to turn browsers into booked jobs — delivered in days, not months."
              link="/web-design"
              badge="Websites"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <img
              src={reviewTransformation}
              alt="Before and after online presence transformation"
              className="w-full"
            />
          </div>
          <CTAButton />
        </div>
      </section>

      {/* PROOF */}
      <section className="py-16 md:py-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-10 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">The Proof</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Marketers lie. <span className="text-amber-400">Numbers don't.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Stat value="700+" label="Reviews collected for clients" />
            <Stat value="50+" label="Active social clients" />
            <Stat value="4.9★" label="Average client rating" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img src={beforeAfterProof} alt="Review growth proof" className="w-full" />
            </div>
            <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img src={oneUploadEverywhereContractors} alt="Social posting reach" className="w-full" />
            </div>
          </div>
          <CTAButton sublabel="Built for South African home-service businesses." />
        </div>
      </section>

      {/* AI WARNING */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-3xl mx-auto px-6 md:px-8 space-y-8 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">⚠️ The Wake-Up Call</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Google is changing. <span className="text-amber-400">Are you ready?</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300">
            AI overviews now summarise your business using your reviews, social activity, and Google profile. Fresh content gets featured. Dead profiles get buried.
          </p>
          <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img
              src={googleAiOverviewRoofingPhone}
              alt="Google AI overview example"
              className="w-full"
            />
          </div>
          <p className="text-xl md:text-2xl font-black text-white">
            The contractors who adapt now will dominate the next decade. The ones who wait will fight for scraps.
          </p>
          <CTAButton />
        </div>
      </section>

      {/* DIY VS US */}
      <section className="py-16 md:py-24 bg-neutral-800">
        <div className="max-w-3xl mx-auto px-6 md:px-8 space-y-8 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">The Comparison</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            "I could just do this myself..."
          </h2>
          <div className="space-y-5">
            <div className="bg-red-900/40 border-2 border-red-500/40 rounded-2xl p-6 space-y-3 shadow-lg">
              <p className="text-red-300 font-black text-lg">Doing It Yourself:</p>
              {[
                'Log into Facebook, write, upload, publish',
                'Resize for Instagram, write a different caption',
                'Rewrite for Google Business and upload again',
                'Send review requests manually',
                'Remember to do this every single week',
                'Time: 5–8 hours per week',
              ].map((item) => (
                <p key={item} className="text-neutral-200 flex gap-2">
                  <span className="text-red-400">✗</span>
                  {item}
                </p>
              ))}
            </div>
            <div className="bg-green-900/40 border-2 border-green-500/40 rounded-2xl p-6 space-y-3 shadow-lg">
              <p className="text-green-300 font-black text-lg">With Local Pros Studio:</p>
              {[
                'We handle every platform for you',
                'Captions optimised per channel',
                'Reviews collected automatically via WhatsApp',
                'Your job photos become posts and reels',
                'Consistency guaranteed — we never miss a week',
                'Your time: 60 seconds to send photos',
              ].map((item) => (
                <p key={item} className="text-neutral-200 flex gap-2">
                  <span className="text-green-400">✓</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="py-16 md:py-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-8 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">🤔 But what about...</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ObjectionCard
              q="What if I get negative reviews?"
              a="Unhappy customers get routed to a private feedback form first. You get alerted instantly so you can fix the issue before it ever hits Google."
            />
            <ObjectionCard
              q="What if I'm too busy to send content?"
              a="That's the point. We layer in automatic service promos, holiday posts, and review highlights so you're always active — even when you're slammed."
            />
            <ObjectionCard
              q="I've been burned by agencies."
              a="No long contracts. Cancel anytime. 30-day money-back guarantee on reviews. We're business owners too — we hate lock-ins."
            />
            <ObjectionCard
              q="Is this only for contractors?"
              a="We specialise in home services (plumbing, fencing, electrical, pest control, cleaning), but any local business that relies on visibility wins here."
            />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 md:py-24 bg-neutral-800">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-8 leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-amber-500 to-transparent flex-1 max-w-[60px]" />
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-black">Choose your package</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Pick your path to visibility
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PackageCard
              name="Essential"
              price="R1,200"
              bullets={[
                'Automated review collection',
                'WhatsApp + email requests',
                'Negative review safeguards',
                'AI-powered responses',
                'Real-time alerts',
              ]}
            />
            <PackageCard
              name="Growth"
              price="R2,000"
              original="R3,500"
              bullets={[
                'Everything in Essential',
                'Weekly social posts (FB, IG, Google)',
                '4 service promos/month',
                'Holiday posts automated',
                'Image posts + reels',
              ]}
            />
            <PackageCard
              name="Complete"
              price="R2,500"
              original="R3,200"
              best
              bullets={[
                'Reviews + Social combined',
                'Priority support',
                'Monthly strategy calls',
                'Website review embedding',
                'Save R700/month',
              ]}
            />
          </div>
          <p className="text-neutral-400 text-sm">
            Setup fee: R2,500 (waived with 6-month commitment). No long contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-8 leading-relaxed text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            While your competitors are still "figuring it out"...<br />
            <span className="text-amber-400">You'll already be everywhere.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300">
            Stop drowning in digital marketing. Start running your actual business.
          </p>
          <CTAButton sublabel="Real people. Real support. Real results." />
          <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img
              src={happyContractorLandscape}
              alt="Happy contractor with strong online presence"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCodexPage;
