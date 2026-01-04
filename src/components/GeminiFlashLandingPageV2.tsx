import React from 'react';
import { ArrowRight, Check, Star, Shield, Smartphone, MessageSquare, Clock, Phone, Users } from 'lucide-react';
import logo from '../assets/images/Compressed/Local Pros Studio logo transparent.png';
import heroImage from '../assets/images/hero.jpg';
import reviewContractor from '../assets/images/review-contractor-happy.jpg';

const GeminiFlashLandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src={logo} alt="Local Pros Studio" className="h-8 md:h-10" />
          <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
            <Clock className="w-4 h-4" />
            <span>Only 4 spots left this month</span>
          </div>
          <a 
            href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Reputation%20Engine"
            className="flex items-center gap-2 bg-neutral-900 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block py-2 px-5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold uppercase tracking-wide mb-6">
            For Plumbers, Electricians & Home Service Pros
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            Get 10+ New 5-Star Reviews Every Month — <span className="text-orange-500">Without Chasing Customers</span>
          </h1>
          
          <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We automate your reputation on Google Maps so you get more calls, more quotes, and more jobs.
          </p>

          {/* Featured Image with Overlay */}
          <div className="relative max-w-3xl mx-auto mb-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={reviewContractor}
              alt="Happy contractor"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent flex items-end justify-center pb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 md:w-9 md:h-9 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-white font-black text-xl md:text-2xl">Join 50+ Contractors Getting More Reviews</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <a 
              href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Reputation%20Engine"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl md:text-2xl px-10 py-5 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all"
            >
              Yes! I Want More Reviews
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-neutral-500 text-sm font-medium">
              Limited spots available — Only accepting 10 new clients this month
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Bar */}
      <section className="py-4 bg-neutral-900 text-white">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wide">
            <Clock className="w-4 h-4 text-orange-400" /> Limited Time Price
          </div>
          <div className="hidden md:flex items-center gap-2 font-bold text-sm uppercase tracking-wide">
            <Users className="w-4 h-4 text-orange-400" /> 6 Spots Left
          </div>
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wide">
            <Star className="w-4 h-4 text-orange-400 fill-orange-400" /> Price Increases Soon
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Does This Sound Familiar?</h2>
            <p className="text-lg text-neutral-600">If you're like most contractors, you're dealing with...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { title: "Competitors stealing your leads", desc: "They have more reviews, so they get the calls.", emoji: "😤" },
              { title: "Asking for reviews feels awkward", desc: "You finish the job and forget to follow up.", emoji: "😫" },
              { title: "Ads aren't working", desc: "Without reviews, nobody trusts your quote.", emoji: "😰" },
              { title: "One bad review hurting you", desc: "It's the first thing customers see.", emoji: "😩" }
            ].map((pain, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <span className="text-4xl">{pain.emoji}</span>
                <div>
                  <h3 className="font-bold text-lg text-neutral-900 mb-1">{pain.title}</h3>
                  <p className="text-neutral-600">{pain.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg border border-neutral-100 max-w-3xl mx-auto">
            <p className="text-2xl font-black text-neutral-900 mb-3">
              Here's the truth:
            </p>
            <p className="text-lg text-neutral-600">
              <strong className="text-orange-500">88% of customers</strong> check reviews before hiring. 
              No reviews = no trust = <span className="font-bold underline">no jobs</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Contractor working" 
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
            
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-wide text-sm mb-3 block">The Solution</span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                The Reputation Engine
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We automate your review collection so you get more 5-star reviews without lifting a finger.
              </p>
              <div className="space-y-4">
                {[
                  "Zero software to learn",
                  "Works while you're on the job",
                  "Catches bad feedback privately"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="font-semibold text-neutral-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Dark Section */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">What You Get</h2>
            <p className="text-lg text-neutral-400">Everything you need to grow your reviews on autopilot.</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { icon: Smartphone, title: "Automated WhatsApp & Email Outreach", desc: "We follow up with your customers automatically after every job.", value: "R5,000" },
              { icon: Shield, title: "Negative Review Shield", desc: "Unhappy customers get routed to you privately before they post online.", value: "Priceless" },
              { icon: MessageSquare, title: "AI Review Responses", desc: "We draft professional responses to every review you get.", value: "R2,000" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 items-start hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full font-bold uppercase tracking-wide">Value: {item.value}</span>
                  </div>
                  <p className="text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Card */}
          <div className="mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 md:p-16 text-center max-w-2xl mx-auto shadow-2xl">
            <p className="text-white/80 text-sm uppercase tracking-wide font-bold mb-2">Your Investment</p>
            <div className="mb-2">
              <span className="text-white/50 line-through text-xl">R2,500/mo</span>
            </div>
            <div className="mb-6">
              <span className="text-6xl md:text-7xl font-black">R1,200</span>
              <span className="text-2xl text-white/80">/mo</span>
            </div>
            <p className="text-white/80 text-sm mb-8">No contracts. Cancel anytime.</p>
            <a 
              href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20start%20the%20Reputation%20Engine"
              className="inline-flex items-center gap-3 bg-white text-neutral-900 font-black text-xl px-10 py-5 rounded-full hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Get Started Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-orange-400 fill-orange-400" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-black text-neutral-900 mb-8 leading-tight">
            "We went from 1 review every 2 months to 2-3 per week. Our Google ranking has never been better."
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <img src={reviewContractor} alt="Johan Venter" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl" />
            <div>
              <p className="font-black text-neutral-900 text-lg">Johan Venter</p>
              <p className="text-orange-500 font-bold text-sm uppercase tracking-wide">Venter Plumbing & Electrical</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get More Reviews?</h2>
          <p className="text-lg text-neutral-600 mb-8">Chat with us on WhatsApp to get started today.</p>
          <a 
            href="https://wa.me/27832336716"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl px-10 py-5 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all"
          >
            <Phone className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-neutral-200 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Local Pros Studio. All rights reserved.</p>
        <p className="mt-2 font-medium">Reputation Engine™ is a proprietary system of Local Pros Studio.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-neutral-700 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-700 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default GeminiFlashLandingPage;
