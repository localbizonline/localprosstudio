import React from 'react';
import { ArrowRight, Check, Star, Share2, MessageSquare, Shield, TrendingUp, Clock, Zap, Bell, Smartphone, Calendar, Sparkles, Mail, FileText, BarChart3, Users, Camera, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialProofSection from './SocialProofSection';

// Import real images from main assets folder
import heroImage from '../assets/images/contractor-phone-reviews.png';
import reviewCustomer from '../assets/images/review-customer.jpg';
import reviewContractor from '../assets/images/review-contractor-happy.jpg';
import reviewWhatsapp from '../assets/images/review-whatsapp.jpg';
import reviewScreenFocus from '../assets/images/review-screen-focus.jpg';
import socialAnalytics from '../assets/images/social-analytics-dashboard.jpg';
import socialFacebook from '../assets/images/social-facebook-beforeafter.jpg';
import socialInstagram from '../assets/images/social-instagram-truck.jpg';
import teamImage from '../assets/images/team.jpg';
import helloPeterLogo from '../assets/images/hellopeterlogo.png';

// Import from Compressed folder
import heroMockup from '../assets/images/Compressed/MacBook iPhone 8 Mockup (1).png';
import clientBercon from '../assets/images/Compressed/Bercon Construction & Civils.jpg';
import clientBugsAway from '../assets/images/Compressed/BugsAway.jpg';
import clientDKTurf from '../assets/images/Compressed/DK Turf & Paving.jpg';
import clientHeldervue from '../assets/images/Compressed/Heldervue Solar.jpg';
import clientMTech from '../assets/images/Compressed/MTech Solutions.png';
import clientTensiShade from '../assets/images/Compressed/Tensi Shade.png';

// Platform logos as inline SVGs for crisp rendering
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80"/>
        <stop offset="25%" stopColor="#F77737"/>
        <stop offset="50%" stopColor="#F56040"/>
        <stop offset="75%" stopColor="#C13584"/>
        <stop offset="100%" stopColor="#833AB4"/>
      </linearGradient>
    </defs>
    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const HelloPeterLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#00BCD4"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HP</text>
  </svg>
);

const SageLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="4" fill="#00D639"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SAGE</text>
  </svg>
);

const QuickBooksLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="11" fill="#2CA01C"/>
    <path fill="white" d="M8 7h2v10H8V7zm6 0h2v10h-2V7z"/>
  </svg>
);

const GmailLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const services = [
  {
    icon: Star,
    title: "Review Collection",
    description: "Automated review requests via WhatsApp & email. Smart filtering catches unhappy customers privately before they go public.",
    price: "R1,200/month",
    features: ["WhatsApp + email requests", "Smart filtering", "AI review responses", "Real-time alerts"],
    link: "/reviews",
    linkText: "Get more 5-star reviews",
  },
  {
    icon: Share2,
    title: "Social Posting",
    description: "Create posts in 60 seconds. We handle consistency with 4 service posts/month, holiday content, and review highlights.",
    price: "R2,000/month",
    features: ["60-second posting form", "4 posts/month included", "Holiday posts automatic", "Facebook, Instagram & Google"],
    link: "/social-media",
    linkText: "Stay visible online",
  },
  {
    icon: Zap,
    title: "Complete Package",
    description: "Everything in both packages. Best value for complete online reputation management.",
    price: "R1,250/month",
    originalPrice: "R2,500",
    features: ["All review collection features", "All social posting features", "Priority support", "Best value option"],
    link: "https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20the%20Complete%20Reputation%20Package",
    linkText: "Get the complete package",
    external: true,
    highlight: true,
  },
];

const painPoints = [
  {
    icon: Calendar,
    title: "Your Social Pages Go Quiet",
    description: "You start strong, then life gets busy. Your social pages go quiet, and competitors look more active than you.",
    image: socialFacebook
  },
  {
    icon: MessageSquare,
    title: "Asking for Reviews Feels Awkward",
    description: "You know reviews build trust, but asking after every job feels pushy. So you don't ask, and happy customers never leave reviews.",
    image: reviewWhatsapp
  },
  {
    icon: Clock,
    title: "You Don't Have Time to Manage It",
    description: "Even with admin help, review requests and social posts fall to the bottom of the list. There's always something more urgent.",
    image: socialAnalytics
  }
];

const whatWeDo = [
  {
    icon: FileText,
    title: "Collect customer info automatically",
    description: "We monitor your invoice emails, WhatsApp submissions, or Sage/QuickBooks exports and pull the customer details without you touching a thing."
  },
  {
    icon: Bell,
    title: "Send review requests and reminders",
    description: "We send the first review request 24 hours after the job, follow up twice, and stop if the customer already posted."
  },
  {
    icon: Shield,
    title: "Filter unhappy responses",
    description: "We ask customers for a private star rating first, alert you on WhatsApp if it's low, and never encourage a public review if they're unhappy."
  },
  {
    icon: Camera,
    title: "Turn good reviews into weekly posts",
    description: "We design the review graphic, write the caption, and schedule it to Facebook, Instagram, and Google Business automatically."
  },
  {
    icon: Megaphone,
    title: "Write your job showcase posts",
    description: "You drop a photo and a quick note in WhatsApp. We rewrite it into a professional post and wait for your one-word approval."
  },
  {
    icon: BarChart3,
    title: "Keep your calendar full of content",
    description: "We preload 12 months of special day posts, mix in before/after stories, and make sure something goes live every week."
  }
];

const platforms = [
  { name: "Google Business", Logo: GoogleLogo },
  { name: "Facebook", Logo: FacebookLogo },
  { name: "Instagram", Logo: InstagramLogo },
  { name: "WhatsApp", Logo: WhatsAppLogo },
  { name: "HelloPeter", logo: helloPeterLogo },
];

const integrations = [
  { name: "WhatsApp", Logo: WhatsAppLogo, desc: "Send & receive" },
  { name: "Gmail", Logo: GmailLogo, desc: "Invoice monitoring" },
  { name: "Sage", Logo: SageLogo, desc: "Customer sync" },
  { name: "QuickBooks", Logo: QuickBooksLogo, desc: "Auto-import" },
];

const clients = [
  { name: "Bercon Construction", image: clientBercon },
  { name: "BugsAway", image: clientBugsAway },
  { name: "DK Turf & Paving", image: clientDKTurf },
  { name: "Heldervue Solar", image: clientHeldervue },
  { name: "MTech Solutions", image: clientMTech },
  { name: "Tensi Shade", image: clientTensiShade },
];

const Home3Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Real Image Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contractor reviewing customer feedback"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/40"></div>
        </div>

        {/* Gradient orbs for visual interest */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container-lg relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center mb-8 animate-fade-in">
                <span className="badge-dark">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Local Pros Studio
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-white mb-6 animate-fade-in-up text-balance">
                More 5-Star Reviews<br />
                Weekly Social Posts<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Zero Manual Work</span>
              </h1>

              {/* Subheadline */}
              <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-10 animate-fade-in-up delay-100">
                Done-for-you reputation and social media automation for time-strapped
                contractors who know it matters — but can't stay consistent.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up delay-200">
                <a
                  href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20getting%20more%20reviews%20and%20growing%20my%20social%20presence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="#services" className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                  View Services
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex items-center gap-8 text-neutral-400 animate-fade-in-up delay-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">12 hrs</div>
                  <div className="text-xs">Saved/month</div>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.7+</div>
                  <div className="text-xs">Avg rating</div>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">~30 min</div>
                  <div className="text-xs">Your time/mo</div>
                </div>
              </div>
            </div>

            {/* Hero Mockup Image */}
            <div className="relative animate-fade-in-up delay-200 hidden lg:block">
              <div className="relative">
                <img 
                  src={heroMockup} 
                  alt="Review dashboard on laptop and mobile" 
                  className="w-full h-auto drop-shadow-2xl"
                />
                {/* Floating notification cards */}
                <div className="absolute -left-8 top-1/4 bg-white rounded-xl p-3 shadow-xl animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-900">New 5-Star Review!</div>
                      <div className="text-[10px] text-neutral-500">Just now • Google</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-1/3 bg-white rounded-xl p-3 shadow-xl animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-900">Post Scheduled</div>
                      <div className="text-[10px] text-neutral-500">Facebook & Instagram</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section with Real Logos */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container-lg">
          <p className="text-center text-neutral-500 text-sm mb-8 uppercase tracking-wider font-medium">
            We post and collect reviews on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                {'Logo' in platform ? <platform.Logo /> : <img src={platform.logo} alt={platform.name} className="w-6 h-6 object-contain" />}
                <span className="font-medium text-neutral-900 text-sm">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-neutral-50 border-b border-neutral-100">
        <div className="container-lg">
          <p className="text-center text-neutral-500 text-sm mb-8 uppercase tracking-wider font-medium">
            Trusted by local contractors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section with Real Images */}
      <section className="section bg-neutral-950">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">You Know Reviews and Social Media Matter.<br className="hidden md:block" /> You Just Don't Have the Time.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="group relative bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-800">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={point.image}
                      alt={point.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                    <p className="text-neutral-300 text-sm">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div className="container-lg">
          <p className="text-center text-neutral-400 text-sm mb-8 uppercase tracking-wider font-medium">
            Connects with the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center gap-3 bg-neutral-800/50 border border-neutral-700 px-6 py-4 rounded-xl">
                <integration.Logo />
                <div>
                  <span className="font-medium text-white text-sm block">{integration.name}</span>
                  <span className="text-neutral-400 text-xs">{integration.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section with Icons */}
      <section className="section bg-gradient-to-b from-blue-50/50 to-indigo-50/30">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">What We Do</span>
            <h2 className="text-neutral-900 mb-4">Here's Exactly What We Do For You</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We take the marketing admin off your plate and run it for you in plain language — no new software, no extra steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((task, index) => {
              const Icon = task.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 group hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">{task.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{task.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Services</span>
            <h2 className="text-neutral-900 mb-4">Choose Your Package</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Start with what you need, or get the best value with our combined package.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExternal = service.external;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 shadow-soft border ${
                    service.highlight ? 'ring-2 ring-neutral-900 border-neutral-900' : 'border-neutral-200'
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Best Value • 50% OFF
                      </span>
                    </div>
                  )}

                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-neutral-700" />
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    {service.originalPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-neutral-900">{service.price}</span>
                        <span className="text-lg text-neutral-400 line-through">{service.originalPrice}</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-neutral-900">{service.price}</span>
                    )}
                    {service.highlight && (
                      <span className="inline-block mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                        50% OFF - First 3 Months
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {isExternal ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-primary w-full justify-center ${
                        service.highlight
                          ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                          : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                      }`}
                    >
                      {service.linkText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={service.link}
                      className={`btn-primary w-full justify-center ${
                        service.highlight
                          ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                          : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                      }`}
                    >
                      {service.linkText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team/About Section with Real Image */}
      <section className="section bg-neutral-50">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="badge mb-4">About Us</span>
              <h2 className="text-neutral-900 mb-6">We Handle the Marketing Admin So You Can Focus on the Work</h2>
              <p className="text-neutral-600 mb-6">
                We're a small team of marketing specialists who understand that contractors don't have time for social media scheduling, review follow-ups, and content creation.
              </p>
              <p className="text-neutral-600 mb-8">
                That's why we built a done-for-you service that plugs into your existing workflow — no new apps to learn, no extra steps in your day.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Setup in 7 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <span>Real results</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Local Pros Studio Team"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{['J', 'M', 'S'][i]}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">20+ Contractors</div>
                      <div className="text-xs text-neutral-500">Trust our team</div>
                    </div>
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
          <div className="bg-neutral-950 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
            {/* Background gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                  Early Access • Limited to 20 Contractors
                </span>
                <h2 className="text-white mb-6">Keep Reviews Rolling and Your Feeds Active</h2>
                <p className="text-neutral-400 text-lg mb-8">
                  We set everything up within a workweek, connect with the systems you already use,
                  and keep the marketing admin moving without chasing you.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-1.5 flex-shrink-0 shadow-lg shadow-blue-500/25"></span>
                    <span>Launch your automated review requests and follow-ups in under 7 days.</span>
                  </li>
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-1.5 flex-shrink-0 shadow-lg shadow-blue-500/25"></span>
                    <span>Weekly Facebook, Instagram, and Google Business posts written and scheduled for you.</span>
                  </li>
                  <li className="flex items-start gap-4 text-neutral-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-1.5 flex-shrink-0 shadow-lg shadow-blue-500/25"></span>
                    <span>WhatsApp alerts for unhappy responses before they go public.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-5">
                <div className="bg-sky-500/15 border border-sky-400/35 rounded-2xl p-6 text-center text-sky-100">
                  <div className="text-4xl font-extrabold text-white mb-1">12 hrs</div>
                  <div className="text-sm text-sky-200/80">Average admin time saved each month per contractor team.</div>
                </div>
                <div className="bg-indigo-500/15 border border-indigo-400/35 rounded-2xl p-6 text-center text-indigo-100">
                  <div className="text-4xl font-extrabold text-white mb-1">4.7 <Star className="inline w-6 h-6 text-yellow-400 fill-yellow-400" /></div>
                  <div className="text-sm text-indigo-200/80">Typical rating clients sustain within 90 days of automations.</div>
                </div>
                <a
                  href="https://wa.me/27832336716?text=Hi%2C%20I'd%20like%20to%20request%20an%20early%20access%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-bold rounded-xl text-center hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
                >
                  Request an Early Access Call
                </a>
                <p className="text-neutral-500 text-sm text-center">
                  We'll map the automations to your current workflow — no credit card needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProofSection />

      {/* Final CTA */}
      <section className="section-sm bg-neutral-950">
        <div className="container-md text-center">
          <h2 className="text-white mb-4">Ready to Build Your Reputation?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Get in touch today and let's discuss how we can help you get more reviews
            and stay visible on social media.
          </p>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20get%20started%20with%20reviews%20and%20social%20media"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home3Page;
