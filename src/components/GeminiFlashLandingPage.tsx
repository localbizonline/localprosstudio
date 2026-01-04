import React from 'react';
import { ArrowRight, Check, X, Clock, Users, AlertTriangle } from 'lucide-react';

// Custom SVG Icons for Stack Items
const WhatsAppOutreachIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* WhatsApp phone bubble */}
    <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="18" r="1" fill="currentColor"/>
    {/* Message indicator */}
    <path d="M9 7H15M9 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Outgoing arrow */}
    <path d="M20 8L23 8M23 8L21 6M23 8L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NegativeReviewShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield */}
    <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Funnel/filter inside */}
    <path d="M8 8H16L13 12V15L11 16V12L8 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AIResponseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chat bubble */}
    <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.5631 20 9.2001 19.7065 7.97505 19.1808L3 20L4.3 16.5C3.47 15.19 3 13.63 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* AI sparkle */}
    <path d="M12 8V8.01M12 11V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 10L10 11M14 10L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Small sparkles */}
    <circle cx="17" cy="5" r="1" fill="currentColor"/>
    <path d="M19 3L19 7M17 5L21 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const WhatsAppAlertIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bell */}
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Notification dot */}
    <circle cx="17" cy="6" r="3" fill="currentColor"/>
  </svg>
);

const DoneForYouIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gear */}
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Checkmark overlay */}
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Import hero image
import heroImage from '../assets/images/contractor-phone-reviews.png';

const GeminiFlashLandingPage = () => {
  // Pain point cards
  const painPoints = [
    { emoji: '😤', title: 'Competitors Stealing Your Leads', desc: "You do great work, but that new guy with 100+ reviews is getting all the calls" },
    { emoji: '😫', title: 'Asking For Reviews Feels Awkward', desc: "You hate asking customers for favors, and when you do, they forget anyway" },
    { emoji: '😰', title: 'Your Online Presence Doesn\'t Match Your Work', desc: "You're great at what you do, but Google doesn't know it yet" },
    { emoji: '😩', title: 'Losing Jobs to Less Skilled Competitors', desc: "They have more reviews, so they get the call. It's not fair, but it's reality." }
  ];

  // Offer stack items
  const stackItems = [
    {
      title: "Automated WhatsApp & Email Outreach",
      description: "Review requests sent automatically 24 hours after every job.",
      value: "R5,000",
      color: "blue"
    },
    {
      title: "The 'Negative Review' Shield",
      description: "Smart filtering catches unhappy customers before they go public.",
      value: "R4,000",
      color: "orange"
    },
    {
      title: "AI-Powered Review Responses",
      description: "Professional responses drafted automatically for every review.",
      value: "R2,000",
      color: "purple"
    },
    {
      title: "Real-Time WhatsApp Alerts",
      description: "Know instantly when a new review comes in — good or bad.",
      value: "R1,500",
      color: "green"
    },
    {
      title: "Done-For-You Setup",
      description: "We configure everything in 7 days. No tech skills needed.",
      value: "R3,500",
      color: "indigo"
    }
  ];

  const totalValue = stackItems.reduce((sum, item) => sum + parseInt(item.value.replace(/[R,]/g, '')), 0);

  // Trades list
  const trades = ["Plumbers", "Electricians", "Builders", "HVAC", "Roofers", "Landscapers", "Pest Control", "Solar", "Cleaning"];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-blue-100">

      {/* Hero Section - Dark with featured image */}
      <section className="relative bg-neutral-950 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="text-center">
            {/* Pre-headline / Callout */}
            <p className="text-blue-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              For South African Contractors Who Are Tired of Losing Jobs to Less Skilled Competitors
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              How Local Pros Are Getting{' '}
              <span className="text-yellow-400">10+ New 5-Star Reviews</span>{' '}
              Every Month...{' '}
              <span className="text-blue-400 block md:inline">Without Ever Chasing a Customer!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto">
              Stop losing jobs to competitors with more reviews.
              We automate your reputation on <span className="font-bold text-white">Google Maps</span> while you focus on the job.
            </p>

            {/* Hero Image with overlay */}
            <div className="relative max-w-2xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 border-4 border-yellow-400/60">
              <img
                src={heroImage}
                alt="Happy contractor checking 5-star reviews on phone"
                className="w-full object-cover"
              />
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Reputation%20Engine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl md:text-2xl px-10 py-5 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all"
            >
              YES! I Want More 5-Star Reviews
              <ArrowRight className="w-6 h-6" />
            </a>

            <p className="text-neutral-500 text-sm mt-4">
              Limited spots available - Only accepting 10 new clients this month
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-8 text-neutral-400 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>No Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>7-Day Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best For Badge Section */}
      <section className="py-6 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base">
            <span className="font-bold">Best for:</span>
            {trades.map((trade, index) => (
              <span key={trade} className="flex items-center gap-1">
                {trade}
                {index < trades.length - 1 && <span className="text-blue-300 ml-1">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Agitation Section - "Sound Familiar?" */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-neutral-600">If you're like most contractors, you're probably dealing with...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:border-red-200 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{pain.emoji}</span>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{pain.title}</h3>
                    <p className="text-neutral-600">{pain.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl md:text-2xl font-bold text-neutral-900">
              It's NOT your fault. <span className="text-blue-600">There's a better way.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Hard Truth / Story Section */}
      <section className="py-16 md:py-20 bg-white border-y border-neutral-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-neutral-900">
              The Hard Truth: Your Work is Better, But Their Google Rating is Higher.
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                You show up on time. You do a great job. Your customers are happy.
                But they <span className="font-bold text-neutral-900">never leave a review</span> unless you practically beg them.
              </p>
              <p>
                Meanwhile, the "other guy" down the road—the one who does mediocre work—is getting all the calls because he has 85 reviews and you have 12.
              </p>
              <p className="font-semibold text-neutral-900 italic text-xl">
                It's not fair. But it's how Google works.
              </p>
              <p>
                We built the <span className="text-blue-600 font-bold">Reputation Engine</span> specifically for busy contractors who don't have time for "digital marketing" but know they need reviews to dominate Google Maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer Stack */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
              What You Get
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">The Reputation Engine Stack</h2>
            <p className="text-xl text-neutral-500 italic">Everything you need to automate your social proof.</p>
          </div>

          <div className="space-y-5">
            {stackItems.map((item, index) => (
              <div key={index} className="bg-white border-2 border-neutral-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start group hover:border-blue-200 transition-colors shadow-sm">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  {index === 0 && <WhatsAppOutreachIcon className="w-7 h-7 text-blue-600" />}
                  {index === 1 && <NegativeReviewShieldIcon className="w-7 h-7 text-neutral-900" />}
                  {index === 2 && <AIResponseIcon className="w-7 h-7 text-blue-600" />}
                  {index === 3 && <WhatsAppAlertIcon className="w-7 h-7 text-neutral-900" />}
                  {index === 4 && <DoneForYouIcon className="w-7 h-7 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 flex flex-wrap items-center gap-3 text-neutral-900">
                    {index + 1}. {item.title}
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase tracking-tighter font-bold">Value: {item.value}</span>
                  </h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value / Price Close */}
          <div className="mt-12 bg-neutral-950 rounded-[2rem] p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-blue-400">Total Value: R{totalValue.toLocaleString()}+ per month</h3>

              <div className="mb-2">
                <span className="text-lg text-neutral-400 line-through">Normal Price: R2,500/mo</span>
              </div>

              <div className="mb-8">
                <span className="text-6xl md:text-7xl font-black text-white">R1,200</span>
                <span className="text-2xl text-neutral-400 font-medium">/mo</span>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                <a
                  href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20start%20the%20Reputation%20Engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xl md:text-2xl font-black rounded-full hover:scale-105 transition-all shadow-lg shadow-yellow-500/30"
                >
                  START NOW
                </a>
                <p className="text-neutral-500 text-sm">
                  Limited to the next 10 contractors this month to ensure quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Bar */}
      <section className="py-4 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Beta Pricing</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-red-400"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-bold">Only 10 Spots This Month</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-red-400"></div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">Price Increasing to R2,500 Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Close */}
      <section className="py-20 md:py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">Quick Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "How do I send you customer details?",
                a: "Whatever works for you: WhatsApp us the details, forward your invoices, or BCC us on your outgoing emails. We make it easy."
              },
              {
                q: "Is there a long-term contract?",
                a: "Nope. We're month-to-month. If we don't deliver results, you shouldn't pay us. Simple as that."
              },
              {
                q: "What if I get a bad review?",
                a: "That's exactly why our filtering system exists. We catch unhappy customers privately so you can fix the issue before they go public."
              },
              {
                q: "How quickly will I see results?",
                a: "Most clients see their first new reviews within the first week. By 30 days, you'll have a consistent stream coming in."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-3 text-neutral-900">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-neutral-600 leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/27832336716"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg"
            >
              Have another question? Ask us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Your Competitors Won't Wait.{' '}
            <span className="text-yellow-400">Neither Should You.</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Every day you wait is another day they're collecting reviews and stealing your customers.
          </p>

          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20get%20started%20with%20the%20Reputation%20Engine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl md:text-2xl px-12 py-6 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all"
          >
            Get Started Now - Only R1,200/month
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 text-neutral-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7-Day Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4" />
              <span>No Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-10 px-4 border-t border-neutral-100 text-center text-neutral-400 text-sm bg-white">
        <p>&copy; {new Date().getFullYear()} Local Pros Studio. All rights reserved.</p>
        <p className="mt-2 text-neutral-500">Reputation Engine™ is a proprietary system of Local Pros Studio.</p>
      </footer>
    </div>
  );
};

export default GeminiFlashLandingPage;
