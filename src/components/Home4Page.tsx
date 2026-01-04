import React from 'react';
import { ArrowRight, Check, Star, Shield, TrendingUp, Clock, Zap, AlertTriangle, Phone, MessageCircle, Award, Building2, Users, BadgeCheck, Sparkles, X, ChevronRight, BarChart3, Lock } from 'lucide-react';

// Import images
import reviewContractor from '../assets/images/review-contractor-happy.jpg';
import teamImage from '../assets/images/team.jpg';
import socialAnalytics from '../assets/images/social-analytics-dashboard.jpg';

// Platform logos
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Testimonials
const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell & Co Accounting",
    quote: "We went from 23 reviews to 89 in 4 months. Now when prospects compare us to other firms, our reputation speaks before we do.",
    rating: 5,
    employees: "15 employees",
  },
  {
    name: "David Chen",
    business: "Premier Auto Service",
    quote: "I built this business over 12 years. Now our online presence finally reflects the quality we deliver. Referrals are up 40%.",
    rating: 5,
    employees: "8 employees",
  },
  {
    name: "Amanda Botha",
    business: "Greenleaf Landscaping",
    quote: "We were too busy running jobs to ask for reviews. Now it happens automatically and we're the top-rated landscaper in our area.",
    rating: 5,
    employees: "22 employees",
  },
];

// What you get items - Clean professional list
const features = [
  {
    title: "Automated Review Collection",
    value: "R8,000",
    description: "Multi-channel sequences (WhatsApp & Email)",
    icon: MessageCircle
  },
  {
    title: "Reputation Protection Shield",
    value: "R4,000",
    description: "Private feedback loop for unhappy clients",
    icon: Shield
  },
  {
    title: "AI Response Assistant",
    value: "R3,000",
    description: "Brand-aligned professional replies",
    icon: Sparkles
  },
  {
    title: "Executive Alerts",
    value: "R2,000",
    description: "Real-time notifications for critical feedback",
    icon: AlertTriangle
  },
  {
    title: "Growth Analytics",
    value: "R1,500",
    description: "Monthly benchmarking and insights",
    icon: BarChart3
  },
  {
    title: "White-Glove Implementation",
    value: "R5,000",
    description: "Full setup and integration in 7 days",
    icon: Zap
  },
];

const Home4Page = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      {/* Hero Section - Premium Dark Theme */}
      <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,41,59,0.5),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        {/* Elegant glow effects */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px]"></div>

        <div className="container-md relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 animate-fade-in">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">
                Trusted by 50+ Established Businesses
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              A Reputation That Matches<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 animate-shimmer bg-[length:200%_100%]">
                The Quality You Deliver
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              The automated review system for established businesses who refuse to let 
              less experienced competitors outrank them.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#pricing"
                className="group relative inline-flex items-center gap-3 bg-amber-400 text-slate-950 font-bold text-lg px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative">Protect My Reputation</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-6 text-sm text-slate-400 px-4">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" /> 90-Day Guarantee
                </span>
                <span className="hidden sm:flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" /> Setup in 7 Days
                </span>
              </div>
            </div>

            {/* Hero Image with Glassmorphism */}
            <div className="relative max-w-4xl mx-auto rounded-2xl p-2 bg-gradient-to-b from-slate-700/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                <img
                  src={reviewContractor}
                  alt="Business owner analyzing growth"
                  className="w-full h-full object-cover"
                />
                
                {/* Glass Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-slate-950/80 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-white font-medium text-sm leading-relaxed mb-3">
                    "We finally have an online presence that reflects our 15 years of experience."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                      JM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Johan M.</p>
                      <p className="text-[10px] text-slate-400">Director, Auto Service Centre</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Clean & Minimal */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container-lg">
          <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Integrated with the platforms that matter
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2">
              <GoogleLogo />
              <span className="text-sm font-bold text-slate-700">Google Business</span>
            </div>
            <div className="flex items-center gap-2">
              <FacebookLogo />
              <span className="text-sm font-bold text-slate-700">Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-bold text-slate-700">HelloPeter</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation - Refined Typography */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container-md">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                You've Built Something <span className="text-blue-600">Incredible</span>.<br />
                Does Your Online Reputation Show It?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                It's frustrating watching newer, less experienced competitors rank higher simply because they play the "reviews game" better. You deliver excellence, but your digital footprint tells a different story.
              </p>
              
              <div className="space-y-6">
                {[
                  "Exceptional work, but fewer reviews than competitors.",
                  "Asking for reviews feels awkward or desperate.",
                  "One bad review disproportionately hurts your rating.",
                  "Too busy running the business to chase customers."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-200 transition-colors">
                      <X className="w-3.5 h-3.5 text-red-600" />
                    </div>
                    <p className="text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/50 to-blue-100/50 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                <Sparkles className="w-10 h-10 text-amber-400 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Reality Check</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  <strong className="text-slate-900 font-semibold">93% of premium customers</strong> read reviews before choosing a service provider. 
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Your reputation is being judged 24/7. In the high-end market, silence is viewed as risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Elegant Cards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-md">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">The Solution</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Reputation Management<br />
              <span className="text-slate-400">That Runs Itself</span>
            </h2>
            <p className="text-lg text-slate-600">
              A "set and forget" system designed for business owners who value their time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Seamless Integration",
                description: "We connect to your existing workflow—invoices, CRM, or POS. No new software to learn.",
                icon: Zap,
              },
              {
                step: "02",
                title: "Smart Requests",
                description: "Customers receive professional, timely review requests via WhatsApp or Email.",
                icon: MessageCircle,
              },
              {
                step: "03",
                title: "Reputation Growth",
                description: "Happy clients post publicly. Issues are caught privately before they impact your brand.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 hover:bg-slate-900 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                  <item.icon className="w-6 h-6 text-slate-900 group-hover:text-amber-400 transition-colors" />
                </div>
                <div className="text-4xl font-bold text-slate-200 mb-4 group-hover:text-slate-700 transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-400 transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Dark Card Style */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-lg">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Results That Speak Volumes</h2>
              <p className="text-slate-400 max-w-xl">Join elite business owners who have secured their market position.</p>
            </div>
            <div className="flex items-center gap-2 text-amber-400 font-medium">
              <Star className="w-5 h-5 fill-current" />
              <span>4.9 Average Client Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/30 transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-200 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 border-t border-slate-700/50 pt-6">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-slate-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Offer - Professional Invoice Style */}
      <section id="pricing" className="py-20 md:py-32 bg-slate-50">
        <div className="container-md">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
              <p className="text-lg text-slate-600">Everything you need to dominate your local market.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-3">
                {/* Features List */}
                <div className="md:col-span-2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-8">Professional Package Includes:</h3>
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{feature.title}</div>
                          <div className="text-sm text-slate-500">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Column */}
                <div className="bg-slate-50 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <div className="relative z-10">
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mb-2">Monthly Investment</div>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl font-bold text-slate-900">R1,200</span>
                      <span className="text-slate-400">/mo</span>
                    </div>
                    
                    <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-8">
                      Launch Pricing (Save R1,300)
                    </div>

                    <a
                      href="https://wa.me/27832336716?text=Hi%2C%20I%20want%20to%20protect%20my%20business%20reputation%20and%20get%20more%205-star%20reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-slate-900 text-white text-center font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl mb-6"
                    >
                      Get Started Now
                    </a>

                    <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                      <Lock className="w-3 h-3" /> No long-term contracts. Cancel anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee - Minimalist */}
      <section className="py-20 bg-white">
        <div className="container-md text-center max-w-3xl">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Performance Guarantee</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We are so confident in our system that we offer a full 90-day money-back guarantee. 
            If you don't see a measurable increase in your review volume and rating, we refund every cent.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 border border-slate-200 px-6 py-3 rounded-full">
            <Check className="w-4 h-4 text-emerald-500" />
            Zero Risk. Pure Performance.
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Dark */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container-md relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Secure Your Market Position?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Don't let another customer choose a competitor because they had more reviews.
            Take control of your reputation today.
          </p>
          
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I%20want%20to%20protect%20my%20business%20reputation%20and%20get%20more%205-star%20reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-400 text-slate-900 font-bold text-xl px-10 py-5 rounded-full hover:bg-amber-300 transition-all shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]"
          >
            Start Protecting My Reputation
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home4Page;
