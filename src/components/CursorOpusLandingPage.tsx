import React, { useState, useEffect } from 'react';
import { Check, Star, Shield, Zap, Clock, ArrowRight, Play, ChevronDown, MessageCircle, Users, TrendingUp, Award } from 'lucide-react';

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 text-white font-bold">
      <div className="bg-red-600 rounded-lg px-3 py-2 min-w-[60px] text-center">
        <span className="text-2xl md:text-3xl">{String(timeLeft.hours).padStart(2, '0')}</span>
        <p className="text-xs uppercase tracking-wide opacity-80">Hours</p>
      </div>
      <span className="text-2xl text-red-500">:</span>
      <div className="bg-red-600 rounded-lg px-3 py-2 min-w-[60px] text-center">
        <span className="text-2xl md:text-3xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <p className="text-xs uppercase tracking-wide opacity-80">Mins</p>
      </div>
      <span className="text-2xl text-red-500">:</span>
      <div className="bg-red-600 rounded-lg px-3 py-2 min-w-[60px] text-center">
        <span className="text-2xl md:text-3xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <p className="text-xs uppercase tracking-wide opacity-80">Secs</p>
      </div>
    </div>
  );
};

// FAQ Accordion Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-amber-600 transition-colors"
      >
        <span className="text-lg font-semibold text-neutral-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-neutral-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const CursorOpusLandingPage = () => {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">The #1 Secret Contractors Don't Know About</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            How To Get <span className="text-amber-400">50+ Five-Star Reviews</span> In 90 Days
            <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl text-neutral-300 font-bold">
              (Without Begging Customers or Wasting Hours on Social Media)
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the exact system that's helped <strong className="text-white">200+ local service businesses</strong> dominate Google, 
            crush their competition, and generate a flood of qualified leads on autopilot.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToOffer}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-900 font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50"
          >
            <Play className="w-6 h-6" />
            Yes! Show Me How It Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 text-neutral-400 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>100% Risk-Free Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>Results in 30 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>4.9/5 Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-neutral-600">If you're like most contractors, you're probably dealing with...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '😤', title: 'Competitors Stealing Your Leads', desc: "You do great work, but that new guy with 100+ reviews is getting all the calls" },
              { icon: '😫', title: 'Asking For Reviews Feels Awkward', desc: "You hate asking customers for favors, and when you do, they forget anyway" },
              { icon: '😰', title: 'Wasting Money on Ads That Don\'t Work', desc: "You've tried Facebook ads, Google ads, but nothing seems to stick" },
              { icon: '😩', title: 'Working 60+ Hours & Still Stressed', desc: "You're great at your craft, but marketing feels like a foreign language" }
            ].map((pain, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:border-red-200 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{pain.icon}</span>
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
              It's NOT your fault. <span className="text-amber-600">There's a better way.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Secret/Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
              THE BREAKTHROUGH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Introducing The <span className="text-amber-600">"Reputation Engine"</span> System
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              A done-for-you system that automatically collects 5-star reviews, builds your online presence, 
              and turns happy customers into a never-ending stream of referrals.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Automated Review Collection",
                desc: "We set up a hands-free system that asks every customer for a review at the perfect moment — so you never have to ask again.",
                color: "amber"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Google Domination",
                desc: "Watch your business climb to the top of Google Maps and search results, so you get found first when customers are ready to buy.",
                color: "green"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Generation Machine",
                desc: "Turn your stellar reputation into a lead-generating asset that works 24/7 while you focus on what you do best.",
                color: "blue"
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                  pillar.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                  pillar.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{pillar.title}</h3>
                <p className="text-neutral-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-900 to-neutral-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-bold px-4 py-1 rounded-full mb-4">
              REAL RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't Take Our Word For It...
            </h2>
            <p className="text-neutral-400 text-lg">See what other contractors are saying</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mike Johnson",
                business: "Johnson Plumbing",
                quote: "Went from 12 reviews to 87 in just 3 months. Now I'm the #1 plumber in my city on Google!",
                result: "625% increase in reviews",
                avatar: "MJ"
              },
              {
                name: "Sarah Williams",
                business: "Williams Electric",
                quote: "I was skeptical at first, but the results speak for themselves. My phone rings non-stop now.",
                result: "3x more leads monthly",
                avatar: "SW"
              },
              {
                name: "David Chen",
                business: "Chen's HVAC",
                quote: "Best investment I've ever made for my business. The ROI is incredible.",
                result: "$45K extra revenue/month",
                avatar: "DC"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.business}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="text-sm font-bold text-green-600 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Results Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "200+", label: "Happy Clients" },
              { stat: "10,000+", label: "Reviews Generated" },
              { stat: "94%", label: "Client Retention" },
              { stat: "4.9/5", label: "Client Rating" }
            ].map((item, index) => (
              <div key={index} className="bg-neutral-800/50 rounded-xl p-6">
                <p className="text-3xl md:text-4xl font-extrabold text-amber-400">{item.stat}</p>
                <p className="text-neutral-400 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack / What You Get Section */}
      <section id="offer-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
              WHAT YOU GET
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Here's Everything Included:
            </h2>
          </div>

          {/* Value Stack Items */}
          <div className="space-y-4 mb-12">
            {[
              { item: "Done-For-You Review Collection System", value: "R5,000", included: true },
              { item: "Google Business Profile Optimization", value: "R3,000", included: true },
              { item: "Automated Customer Follow-up Sequences", value: "R4,000", included: true },
              { item: "Monthly Review Monitoring Dashboard", value: "R2,000/mo", included: true },
              { item: "Reputation Crisis Prevention Protocol", value: "R3,000", included: true },
              { item: "30-Day Fast-Start Implementation Call", value: "R2,500", included: true },
              { item: "BONUS: Social Media Review Sharing Templates", value: "R1,500", included: true, bonus: true },
              { item: "BONUS: 'Reply Like a Pro' Response Scripts", value: "R1,000", included: true, bonus: true }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                  item.bonus 
                    ? 'bg-amber-50 border-amber-200' 
                    : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.bonus ? 'bg-amber-500' : 'bg-green-500'
                  }`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className={`font-semibold ${item.bonus ? 'text-amber-800' : 'text-neutral-800'}`}>
                    {item.bonus && <span className="text-amber-600 mr-2">🎁</span>}
                    {item.item}
                  </span>
                </div>
                <span className="text-neutral-500 line-through text-sm">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 text-center text-white mb-8">
            <p className="text-neutral-400 mb-2">Total Value:</p>
            <p className="text-3xl font-bold line-through text-red-400 mb-2">R22,000+</p>
            <p className="text-neutral-400 mb-4">Today's Price:</p>
            <p className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-2">
              R2,997<span className="text-2xl text-neutral-400">/month</span>
            </p>
            <p className="text-green-400 font-semibold">Save over R19,000!</p>
          </div>

          {/* Countdown */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
            <p className="text-center text-red-700 font-bold mb-4">⚠️ This Offer Expires In:</p>
            <CountdownTimer />
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/27832336716?text=Hi!%20I%20saw%20your%20Reputation%20Engine%20offer%20and%20I'm%20interested%20in%20getting%20more%20reviews%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-10 py-5 rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Yes! I Want More Reviews Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-neutral-500 text-sm mt-4">
              💬 Click to chat on WhatsApp — We reply in under 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <Shield className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our 90-Day "More Reviews or It's Free" Guarantee
          </h2>
          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            We're so confident in our system that we're putting our money where our mouth is. 
            If you don't see a <strong>significant increase in your reviews within 90 days</strong>, 
            we'll keep working for free until you do. No questions asked.
          </p>
          <p className="text-amber-600 font-bold">
            That's how confident we are in the Reputation Engine.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-neutral-200">
            <FAQItem 
              question="How soon will I see results?"
              answer="Most clients see their first new reviews within the first week. By 30 days, you should see a significant uptick in your review count and Google ranking. Our average client gets 15-20 new reviews in the first month alone."
            />
            <FAQItem 
              question="Do I need to do anything myself?"
              answer="Almost nothing! We handle the entire setup and automation. All you need to do is continue providing great service to your customers — we take care of the rest."
            />
            <FAQItem 
              question="What if I already have negative reviews?"
              answer="Great question! Our system includes a 'review recovery' protocol that helps you address negative reviews professionally and encourages satisfied customers to share their positive experiences, effectively drowning out the negatives."
            />
            <FAQItem 
              question="Is this only for contractors?"
              answer="While we specialize in local service businesses (plumbers, electricians, HVAC, roofers, etc.), our system works for any local business that depends on reviews — dentists, lawyers, restaurants, and more."
            />
            <FAQItem 
              question="What if I'm not tech-savvy?"
              answer="Perfect! That's exactly why we built this as a done-for-you service. We handle all the technical setup. If you can send a text message, you have all the tech skills you need."
            />
            <FAQItem 
              question="Is there a contract or long-term commitment?"
              answer="No long-term contracts. You can cancel anytime. But fair warning — once you see the results, you won't want to!"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-red-500/20 text-red-400 text-sm font-bold px-4 py-1 rounded-full mb-6">
            ⏰ LAST CHANCE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Competition Is Already Doing This.<br />
            <span className="text-amber-400">How Long Will You Wait?</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Every day you wait is another day your competitors are collecting reviews and stealing your customers. 
            Take action now and start dominating your market.
          </p>

          <a
            href="https://wa.me/27832336716?text=Hi!%20I%20saw%20your%20Reputation%20Engine%20offer%20and%20I'm%20interested%20in%20getting%20more%20reviews%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-900 font-bold text-xl px-10 py-5 rounded-full shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 mb-6"
          >
            <MessageCircle className="w-6 h-6" />
            Get Started Now — Only 7 Spots Left
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>90-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>200+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              <span>Results in 30 Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-neutral-950 py-8 text-center">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Local Pros Studio. All rights reserved.
        </p>
        <p className="text-neutral-600 text-xs mt-2">
          This site is not a part of Google™ or Facebook™
        </p>
      </footer>
    </div>
  );
};

export default CursorOpusLandingPage;
