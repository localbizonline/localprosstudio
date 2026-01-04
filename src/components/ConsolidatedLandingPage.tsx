import React, { useState } from 'react';
import { 
  Star, 
  Check, 
  X, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Shield, 
  Clock, 
  Users, 
  Zap, 
  ChevronDown,
  Menu,
  Share2
} from 'lucide-react';

// Import images (using paths from Home3Page/LandingPage)
import heroImage from '../assets/images/hero.jpg';
import reviewContractor from '../assets/images/review-contractor-happy.jpg';
import teamImage from '../assets/images/team.jpg';

// WhatsApp Link Helper
const whatsappLink = (message: string) => 
  `https://wa.me/27832336716?text=${encodeURIComponent(message)}`;

const ConsolidatedLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FAQ Data
  const faqs = [
    {
      q: "I'm not good with technology. Is this hard to use?",
      a: "Not at all. If you can answer your phone and read a WhatsApp message, you have all the skills you need. We handle all the technical setup, automation, and posting for you."
    },
    {
      q: "Do I need to install new software?",
      a: "No. We connect with the tools you already use (like WhatsApp, your email, or your invoicing system). You don't need to learn anything new."
    },
    {
      q: "What if a customer leaves a bad review?",
      a: "Our system catches unhappy customers BEFORE they post publicly. You get a private alert so you can fix the issue, keeping your public 5-star rating safe."
    },
    {
      q: "Is there a long-term contract?",
      a: "No. We work month-to-month. You stay because you get results, not because you're locked into a contract."
    },
    {
      q: "How fast will I see results?",
      a: "Most clients see their first new 5-star reviews within 7 days of launching. By day 90, you'll likely have more reviews than your top 3 competitors combined."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-neutral-100">
        <div className="container-lg mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">
            Local Pros <span className="text-amber-500">Studio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#problem" className="hover:text-amber-600 transition-colors">Why It Matters</a>
            <a href="#solution" className="hover:text-amber-600 transition-colors">How It Works</a>
            <a href="#results" className="hover:text-amber-600 transition-colors">Results</a>
            <a href="#pricing" className="hover:text-amber-600 transition-colors">Pricing</a>
          </div>

          <a 
            href={whatsappLink("Hi, I'm interested in getting more reviews.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-neutral-800 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-neutral-600">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-100 p-4 absolute w-full top-[73px] left-0 z-40">
            <div className="flex flex-col gap-4 text-center">
              <a href="#problem" onClick={() => setIsMenuOpen(false)} className="py-2 text-neutral-600">Why It Matters</a>
              <a href="#solution" onClick={() => setIsMenuOpen(false)} className="py-2 text-neutral-600">How It Works</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-2 text-neutral-600">Pricing</a>
              <a 
                href={whatsappLink("Hi, I'm interested in getting more reviews.")}
                className="bg-amber-500 text-white py-3 rounded-lg font-bold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="container-lg mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                #1 Review System for SA Contractors
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
                Get More 5-Star Reviews. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  Zero Manual Work.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl">
                We automate your reputation management so you can focus on the job. 
                Get found on Google, win more quotes, and look like the pro you are.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLink("Hi, I want to start getting more reviews.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 hover:scale-105 transition-all shadow-xl shadow-neutral-900/20"
                >
                  Start Getting Reviews
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#solution"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-50 transition-all"
                >
                  How It Works
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  No Contracts
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  7-Day Setup
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Money-Back Guarantee
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-[2.5rem] transform rotate-3 blur-2xl"></div>
              <img 
                src={heroImage} 
                alt="Contractor checking phone" 
                className="relative rounded-[2rem] shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-3 rounded-full">
                  <Star className="w-6 h-6 text-green-600 fill-green-600" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">New 5-Star Review</div>
                  <div className="text-xs text-neutral-500">Received 2 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className="py-20 bg-neutral-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Does This Sound Like You?</h2>
            <p className="text-lg text-neutral-600">
              You're good at what you do, but your online presence doesn't show it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-red-200 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Awkward to Ask</h3>
              <p className="text-neutral-600">
                You hate feeling "pushy" asking for reviews after a job. So you don't ask, and happy customers forget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-red-200 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Time for Tech</h3>
              <p className="text-neutral-600">
                You're busy running a business. You don't have time to figure out Google, Facebook, and Instagram.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-red-200 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Losing Jobs</h3>
              <p className="text-neutral-600">
                Competitors with worse skills but more reviews are getting the calls that should be yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-20 bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-wider text-sm">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">We Handle Everything For You</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our "Reputation Engine" runs in the background. No new apps to learn. No extra work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-neutral-100 -z-10"></div>

            <div className="text-center bg-white p-4">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-white shadow-sm">
                <Zap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. We Connect</h3>
              <p className="text-neutral-600">
                We plug into your workflow (invoices, WhatsApp, or email). We set this up for you in 7 days.
              </p>
            </div>

            <div className="text-center bg-white p-4">
              <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-white shadow-sm">
                <MessageCircle className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. We Request</h3>
              <p className="text-neutral-600">
                Our system politely asks your customers for feedback via WhatsApp or Email at the perfect time.
              </p>
            </div>

            <div className="text-center bg-white p-4">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-white shadow-sm">
                <Star className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. You Grow</h3>
              <p className="text-neutral-600">
                Happy customers leave 5-star reviews on Google. Unhappy ones are filtered to you privately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section id="results" className="py-20 bg-neutral-900 text-white">
        <div className="container-lg mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Real Results for SA Contractors
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                We've helped over 50 local businesses dominate their area. Here is what happens when you turn on the Reputation Engine.
              </p>

              <div className="space-y-6">
                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-neutral-300 italic mb-4">
                    "I went from 12 Google reviews to 47 in just 3 months. Now I'm getting calls from people who found me online instead of just word-of-mouth."
                  </p>
                  <div className="font-bold">Johan van der Merwe</div>
                  <div className="text-sm text-neutral-500">JVM Plumbing, Cape Town</div>
                </div>

                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-neutral-300 italic mb-4">
                    "The WhatsApp review requests are genius. My customers actually respond because it's so easy. My rating went from 3.8 to 4.7 stars."
                  </p>
                  <div className="font-bold">Sipho Ndlovu</div>
                  <div className="text-sm text-neutral-500">Ndlovu Electrical, JHB</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={reviewContractor} 
                alt="Happy Client" 
                className="rounded-2xl shadow-2xl border border-neutral-700 opacity-90 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900/90 backdrop-blur-sm p-4 rounded-xl border border-neutral-700 text-center">
                    <div className="text-3xl font-black text-amber-400">312%</div>
                    <div className="text-xs text-neutral-400">Avg. Review Increase</div>
                  </div>
                  <div className="bg-neutral-900/90 backdrop-blur-sm p-4 rounded-xl border border-neutral-700 text-center">
                    <div className="text-3xl font-black text-amber-400">12hrs</div>
                    <div className="text-xs text-neutral-400">Admin Time Saved/Mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-neutral-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-neutral-600">No hidden fees. No long-term contracts. Cancel anytime.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Review Engine</h3>
              <p className="text-sm text-neutral-500 mb-6">Best for businesses that just need more reviews.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">R1,200</span>
                <span className="text-neutral-500">/month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Automated Review Requests
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Negative Feedback Filter
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Weekly Progress Report
                </li>
              </ul>

              <a href={whatsappLink("I'm interested in the Review Engine package (R1200)")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center font-bold bg-neutral-100 text-neutral-900 rounded-xl hover:bg-neutral-200 transition-colors">
                Choose This Plan
              </a>
            </div>

            {/* Package 2 (Best Value) */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-500 relative transform scale-105 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                Most Popular
              </div>

              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Complete Growth</h3>
              <p className="text-sm text-neutral-500 mb-6">Reviews + Social Media done for you.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">R1,500</span>
                <span className="text-neutral-500">/month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <strong>Everything in Review Engine</strong>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Weekly Social Media Posts
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  FB, Insta & Google Business
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Priority Support
                </li>
              </ul>

              <a href={whatsappLink("I'm interested in the Complete Growth package (R1500)")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center font-bold bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30">
                Get Complete Package
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Only</h3>
              <p className="text-sm text-neutral-500 mb-6">Just keep my feeds active.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">R2,000</span>
                <span className="text-neutral-500">/month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  4x Branded Posts / Month
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Holiday Posts
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Copywriting & Hashtags
                </li>
              </ul>

              <a href={whatsappLink("I'm interested in the Social Only package (R2000)")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center font-bold bg-neutral-100 text-neutral-900 rounded-xl hover:bg-neutral-200 transition-colors">
                Choose This Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container-lg mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-neutral-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-amber-500 text-neutral-900">
        <div className="container-lg mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Build Your Reputation?
          </h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
            Join 50+ other smart contractors who are getting more jobs with less effort.
          </p>
          <a
            href={whatsappLink("Hi! I'm ready to get started.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-neutral-800 hover:scale-105 transition-all shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Get Started on WhatsApp
          </a>
          <p className="mt-6 text-sm font-semibold opacity-70">
            No credit card required to chat. 100% Risk Free.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-500 py-12">
        <div className="container-lg mx-auto px-4 text-center">
          <p className="mb-4 text-sm">
            © {new Date().getFullYear()} Local Pros Studio. All rights reserved.
          </p>
          <p className="text-xs">
            Not affiliated with Facebook or Google.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConsolidatedLandingPage;
