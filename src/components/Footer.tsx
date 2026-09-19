import React from 'react';
import { Phone, MapPin, Star, ShieldAlert, Zap } from 'lucide-react';
import { PageId } from '../types';
import { business } from '../data/business';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-sky-400 font-semibold text-xs tracking-wider uppercase">
              Chiswick & London Electrical Services
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Discuss Your Electrical Requirements Today
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Professional electrical repairs, installations, lighting improvements, and fault finding.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={business.phoneLink}
              id="footer-band-call-button"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-lg shadow-sky-900/30 transition-all min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              <span>Call {business.phone}</span>
            </a>
            <button
              id="footer-band-enquiry-button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors min-h-[44px]"
            >
              Make an Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-sky-600 flex items-center justify-center text-white">
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {business.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional electrical services for customers in Chiswick and London. Focused on safety, reliability, and clear communication for domestic and property electrical needs.
            </p>
            {/* Verified Rating Display */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-sm font-semibold text-white">
                {business.rating} / 5
              </span>
              <span className="text-xs text-slate-400">
                ({business.reviewCount} Verified Reviews)
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About BrightSpark
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Electrical Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-reviews"
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors text-left"
                >
                  Reviews & Trust (4.9★)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Telephone line:</div>
                  <a
                    href={business.phoneLink}
                    id="footer-phone-contact-link"
                    className="text-white hover:text-sky-300 font-semibold text-base transition-colors"
                  >
                    {business.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Registered Location:</div>
                  <span className="text-slate-200 font-medium">{business.location}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Safety Notice */}
          <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-800/80">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Electrical Safety Notice</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Electrical work should always be carried out with appropriate isolation and testing procedures. Do not attempt hazardous DIY repairs on live mains or consumer units. Contact a qualified professional for safe evaluation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {business.name}. All rights reserved. Registered in Chiswick, London W3.
          </p>
          <p className="text-slate-400 text-center sm:text-right">
            Local Electrical Services for Chiswick and London.
          </p>
        </div>
      </div>
    </footer>
  );
};
