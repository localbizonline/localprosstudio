import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/images/Compressed/Local Pros Studio logo transparent.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Design', href: '/web-design' },
    { name: 'Google Ads', href: '/google-ads' },
    { name: 'Social Media', href: '/social-media' },
  ];

  const company = [
    { name: 'About Us', href: '/#about' },
    { name: 'Our Work', href: '/web-design#portfolio' },
    { name: 'Reviews', href: '/#testimonials' },
  ];

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container-lg section-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Local Pros Studio" 
                className="h-8 w-auto brightness-0 invert" 
                width="120" 
                height="32" 
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Helping South African businesses grow with professional websites, 
              digital marketing, and business tools.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/27787869161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  +27 78 786 9161
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@localprosstudio.com"
                  className="flex items-center text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  hello@localprosstudio.com
                </a>
              </li>
              <li className="flex items-start text-neutral-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Local Pros Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

