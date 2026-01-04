import React, { useState } from 'react';
import { Check, X, ArrowRight, Clock, Shield, Star, Users, Zap, AlertTriangle, Phone, MessageCircle } from 'lucide-react';

// Import images
import reviewContractor from '../assets/images/review-contractor-happy.jpg';
import teamImage from '../assets/images/team.jpg';

const LandingPage = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  // Testimonials data
  const testimonials = [
    {
      name: "Johan van der Merwe",
      business: "JVM Plumbing, Cape Town",
      quote: "I went from 12 Google reviews to 47 in just 3 months. Now I'm getting calls from people who found me online instead of just word-of-mouth.",
      rating: 5,
      image: null,
    },
    {
      name: "Sipho Ndlovu",
      business: "Ndlovu Electrical Services, Johannesburg",
      quote: "The WhatsApp review requests are genius. My customers actually respond because it's so easy. My rating went from 3.8 to 4.7 stars.",
      rating: 5,
      image: null,
    },
    {
      name: "Marie Botha",
      business: "Botha Landscaping, Pretoria",
      quote: "I used to dread asking for reviews. Now it happens automatically and I get notified when someone's unhappy BEFORE they post publicly.",
      rating: 5,
      image: null,
    },
  ];

  // What you get items
  const bonuses = [
    {
      title: "Automated Review Collection System",
      value: "R8,000",
      description: "WhatsApp + Email sequences that run 24/7"
    },
    {
      title: "Smart Filtering Technology",
      value: "R4,000",
      description: "Catches unhappy customers before they go public"
    },
    {
      title: "AI-Powered Review Responses",
      value: "R3,000",
      description: "Professional responses written for you automatically"
    },
    {
      title: "Real-Time WhatsApp Alerts",
      value: "R2,000",
      description: "Know instantly when reviews come in"
    },
    {
      title: "Monthly Performance Reports",
      value: "R1,500",
      description: "Track your reputation growth"
    },
    {
      title: "Done-For-You Setup",
      value: "R5,000",
      description: "We configure everything in 7 days"
    },
  ];

  const totalValue = bonuses.reduce((sum, b) => sum + parseInt(b.value.replace(/[R,]/g, '')), 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - The Big Promise */}
      <section className="py-12 md:py-20 bg-neutral-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container-md relative z-10">
          <div className="text-center">
            {/* Pre-headline */}
            <p className="text-blue-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              For South African Contractors Who Are Tired of Losing Jobs to Less Skilled Competitors
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Get <span className="text-yellow-400">47+ Five-Star Reviews</span><br />
              In The Next 90 Days...<br />
              <span className="text-blue-400">Or You Don't Pay</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              The "Set & Forget" Review System That Works While You Sleep
              <span className="block text-lg text-neutral-400 mt-2">
                (Even If You Hate Asking Customers For Reviews)
              </span>
            </p>

            {/* Video/Image Placeholder */}
            <div className="relative max-w-2xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border-4 border-yellow-400/50">
              <img
                src={reviewContractor}
                alt="Happy contractor with 5-star reviews"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white font-bold text-lg">Join 50+ Contractors Already Getting More Reviews</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl md:text-2xl px-10 py-5 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all animate-bounce"
            >
              YES! I Want More 5-Star Reviews
              <ArrowRight className="w-6 h-6" />
            </a>

            <p className="text-neutral-500 text-sm mt-4">
              Limited spots available - Only accepting 10 new clients this month
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Problem Agitation */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container-md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Does This Sound Like You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "You do GREAT work, but your online presence doesn't show it",
              "Competitors with WORSE skills rank higher than you on Google",
              "Customers say they'll leave a review... then never do",
              "You're uncomfortable asking for reviews (it feels pushy)",
              "One bad review is hurting your business and you can't fix it",
              "You're losing jobs to contractors who just have more reviews",
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-red-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-neutral-700 text-lg">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl md:text-3xl font-bold text-neutral-900">
              Here's the truth nobody talks about:
            </p>
            <p className="text-xl text-neutral-600 mt-4 max-w-2xl mx-auto">
              <strong className="text-red-600">88% of customers</strong> check online reviews before hiring a contractor.
              If you don't have reviews, you don't exist.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Solution Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
              Introducing
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              The <span className="text-blue-600">Review Engine</span> System
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The automated review collection system that turns your happy customers
              into a flood of 5-star reviews... without you lifting a finger.
            </p>
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: "1",
                title: "We Connect",
                description: "We plug into your existing workflow - invoices, WhatsApp, or accounting software. No new apps to learn.",
                icon: Zap,
              },
              {
                step: "2",
                title: "Requests Go Out",
                description: "24 hours after each job, your customer gets a friendly WhatsApp/email asking about their experience.",
                icon: MessageCircle,
              },
              {
                step: "3",
                title: "Reviews Roll In",
                description: "Happy customers get guided to Google. Unhappy ones get caught privately before they post publicly.",
                icon: Star,
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-b from-blue-50 to-white rounded-2xl border border-blue-100">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Social Proof / Testimonials */}
      <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-semibold uppercase tracking-wider mb-4">
              Real Results From Real Contractors
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              They Said "YES" And Look What Happened...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-neutral-400 text-sm">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { value: "4.7+", label: "Average Rating After 90 Days" },
              { value: "312%", label: "More Reviews On Average" },
              { value: "12hrs", label: "Admin Time Saved Monthly" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">{stat.value}</div>
                <p className="text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: The Offer Stack */}
      <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container-md">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
              Your Complete Package
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Everything You Get Today
            </h2>
          </div>

          {/* Stack */}
          <div className="max-w-2xl mx-auto">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-white border-b border-neutral-200 first:rounded-t-2xl last:rounded-b-2xl last:border-b-0 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">{bonus.title}</p>
                    <p className="text-sm text-neutral-500">{bonus.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-neutral-400 line-through text-sm">{bonus.value}</span>
                </div>
              </div>
            ))}

            {/* Total Value */}
            <div className="bg-neutral-900 rounded-2xl p-8 mt-8 text-center">
              <p className="text-neutral-400 mb-2">Total Value:</p>
              <p className="text-4xl font-black text-white line-through mb-4">R{totalValue.toLocaleString()}</p>

              <p className="text-yellow-400 font-bold text-xl mb-2">Your Price Today:</p>
              <p className="text-6xl font-black text-yellow-400 mb-2">R1,200</p>
              <p className="text-neutral-400 text-lg">/month</p>

              <div className="mt-6 p-4 bg-red-600/20 border border-red-500/30 rounded-xl">
                <p className="text-red-400 font-bold flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5" />
                  Beta Pricing Ends Soon - Price Going Up To R2,500/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Guarantee */}
      <section className="py-16 bg-white">
        <div className="container-md">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Our "More Reviews Or It's Free" Guarantee
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              If you don't see a <strong>measurable increase</strong> in your Google reviews within 90 days,
              we'll refund every cent. No questions asked. No hard feelings.
            </p>
            <p className="text-neutral-500">
              We can make this guarantee because our system <em>works</em>.
              We've done this for 50+ contractors and it works every single time.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Urgency & Scarcity */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span className="font-bold">Limited Time Offer</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-red-400"></div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span className="font-bold">Only 10 Spots Available This Month</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-red-400"></div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-bold">Price Increasing to R2,500 Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="container-md text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready To Get <span className="text-yellow-400">47+ Five-Star Reviews</span>?
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Click the button below to get started. We'll have you set up and collecting reviews within 7 days.
          </p>

          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I%20saw%20your%20landing%20page%20and%20I%20want%20to%20get%20more%205-star%20reviews%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl md:text-2xl px-12 py-6 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all"
          >
            <Phone className="w-6 h-6" />
            Start Getting Reviews Now
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex items-center justify-center gap-8 mt-10 text-neutral-500 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>90-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7-Day Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4" />
              <span>No Contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-md">
          <h2 className="text-3xl font-black text-center text-neutral-900 mb-12">
            Questions? We've Got Answers
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What if I don't get more reviews?",
                a: "Then you don't pay. Simple as that. Our 90-day guarantee means if you don't see measurable improvement, you get a full refund."
              },
              {
                q: "How long until I see results?",
                a: "Most clients see their first new reviews within the first week. By 90 days, you'll have a consistent stream of 5-star reviews coming in automatically."
              },
              {
                q: "Do I need to do anything?",
                a: "After initial setup (which we do for you), your involvement is about 30 minutes per month. The system runs automatically."
              },
              {
                q: "What if someone leaves a bad review?",
                a: "Our smart filtering catches unhappy customers BEFORE they post publicly. You get a WhatsApp alert and can resolve the issue privately."
              },
              {
                q: "Is there a contract?",
                a: "No long-term contracts. Month-to-month. Cancel anytime. We keep you because you love the results, not because you're locked in."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-neutral-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Footer CTA */}
      <section className="py-12 bg-yellow-400">
        <div className="container-md text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Your Competitors Won't Wait. Neither Should You.
          </h2>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I%20want%20to%20get%20started%20with%20the%20Review%20Engine%20system"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-yellow-400 font-bold text-lg px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Get Started Now - Only R1,200/month
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
