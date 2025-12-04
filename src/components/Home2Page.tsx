import React from 'react';
import { ArrowRight, Check, Globe, BarChart2, Shield, Zap, FileText, Star, Share2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialProofSection from './SocialProofSection';
import localProsImage from '../assets/images/mockups/localprospeople.jpg';

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, mobile-friendly websites that turn visitors into customers. Delivered in 5-7 days with proven templates that have generated 100,000+ leads.",
    price: "From R4,900",
    features: ["5-7 day delivery", "Mobile responsive", "Content included", "30 days free support"],
    link: "/web-design",
    linkText: "View website packages",
    featured: true,
  },
  {
    icon: BarChart2,
    title: "Google Ads",
    description: "Targeted advertising that puts your business in front of customers actively searching for your services. Pay only for results.",
    price: "R2,499/month",
    features: ["Campaign setup & management", "Keyword targeting", "Conversion tracking", "Monthly reports"],
    link: "/google-ads",
    linkText: "Start getting leads",
  },
  {
    icon: Shield,
    title: "Reputation Management",
    description: "Complete online reputation solution. Automated reviews + consistent social posting in one discounted package.",
    price: "From R1,250/month",
    features: ["Review collection", "Social posting", "Save R950/month combined", "Priority support"],
    link: "/reputation",
    linkText: "See reputation packages",
    isNew: true,
  },
  {
    icon: Star,
    title: "Review Collection",
    description: "Automated review requests via WhatsApp & email. Smart filtering catches unhappy customers privately before they go public.",
    price: "R1,200/month",
    features: ["WhatsApp + email requests", "Smart filtering", "AI review responses", "Real-time alerts"],
    link: "/reputation/reviews",
    linkText: "Get more 5-star reviews",
    isNew: true,
  },
  {
    icon: Share2,
    title: "Social Posting",
    description: "Create posts in 60 seconds. We handle consistency with 4 service posts/month, holiday content, and review highlights—all automatic.",
    price: "R2,000/month",
    features: ["60-second posting form", "4 posts/month included", "Holiday posts automatic", "Facebook, Instagram & Google"],
    link: "/social-media",
    linkText: "Stay visible online",
    isNew: true,
  },
  {
    icon: MessageSquare,
    title: "ReachMax",
    description: "WhatsApp marketing platform with bulk messaging, smart automation, and shared team inbox. 98% open rates.",
    price: "Custom pricing",
    features: ["Bulk WhatsApp messaging", "Smart automation", "Shared team inbox", "CRM integration"],
    link: "/reachmax",
    linkText: "Explore WhatsApp marketing",
  },
  {
    icon: FileText,
    title: "FieldCard",
    description: "Job management app for contractors. Create quotes in 60 seconds, track jobs, and get customer sign-off—as easy as WhatsApp.",
    price: "Free to start",
    features: ["Instant quotes", "Digital job cards", "Mobile-first design", "Customer sign-off"],
    link: "/fieldcard",
    linkText: "Try FieldCard free",
  },
];

const benefits = [
  "10+ years helping South African businesses grow",
  "Hundreds of websites delivered",
  "Proven templates that generate leads",
  "Ongoing support, not just a one-time service",
];

const Home2Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Minimal */}
      <section className="section bg-neutral-950 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-md relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center mb-8 animate-fade-in">
              <span className="badge-dark">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available Now
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white mb-6 animate-fade-in-up text-balance">
              Grow Your Business<br className="hidden sm:block" /> With Digital Marketing
            </h1>

            {/* Subheadline */}
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              Professional websites, social media management, and Google Ads 
              for South African home service businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link to="/web-design" className="btn-secondary border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                View Our Work
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-neutral-800 animate-fade-in-up delay-300">
              <p className="text-neutral-500 text-sm mb-4">Trusted by businesses across South Africa</p>
              <div className="flex items-center justify-center gap-8 text-neutral-400">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs">Websites Built</div>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-xs">HelloPeter Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Services</span>
            <h2 className="text-neutral-900 mb-4">Everything You Need to Grow</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              From professional websites to ongoing marketing, we handle your digital presence 
              so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className={`group card-hover flex flex-col ${
                    service.featured ? 'ring-2 ring-neutral-900' : ''
                  } ${service.isNew ? 'ring-2 ring-green-500' : ''}`}
                >
                  {service.featured && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {service.isNew && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        New
                      </span>
                    </div>
                  )}
                  
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-200 transition-colors">
                    <Icon className="w-6 h-6 text-neutral-700" />
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-4 flex-grow">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-lg font-semibold text-neutral-900">
                      {service.price}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-neutral-600">
                        <Check className="w-4 h-4 text-neutral-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-neutral-100">
                    <span className="inline-flex items-center text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {service.linkText}
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge mb-4">Why Choose Us</span>
              <h2 className="text-neutral-900 mb-6">
                Your Partner in Growth
              </h2>
              <p className="text-neutral-600 mb-8">
                We're not just another agency. We've spent over a decade helping 
                South African home service businesses succeed online. We understand 
                your challenges and build solutions that actually work.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-neutral-900 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'd%20like%20to%20learn%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="relative">
              <img
                src={localProsImage}
                alt="Local Pros team"
                className="rounded-2xl shadow-soft-xl w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProofSection />

      {/* Final CTA */}
      <section className="section-sm bg-neutral-950">
        <div className="container-md text-center">
          <h2 className="text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Get in touch today and let's discuss how we can help you attract more customers.
          </p>
          <a
            href="https://wa.me/27832336716?text=Hi%2C%20I'm%20ready%20to%20get%20started"
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

export default Home2Page;
