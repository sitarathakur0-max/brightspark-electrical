import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { PageId } from '../types';
import { business } from '../data/business';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800'
          : 'bg-slate-900 border-b border-slate-800'
      }`}
    >
      {/* Top micro-bar with location & reviews reminder */}
      <div className="bg-slate-950/80 text-slate-300 text-xs border-b border-slate-800/80 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-200">Serving {business.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold tracking-wide">
              ★ {business.rating} / 5
            </span>
            <span className="text-slate-400 hidden sm:inline">({business.reviewCount} Reviews)</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={business.phoneLink}
              id="top-bar-phone-link"
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Refined Brand Logo */}
          <button
            id="header-brand-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-none">
                BrightSpark
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-sky-400 block mt-1">
                Electrical • Chiswick W3
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-white bg-slate-800 shadow-sm border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Primary CTA: Phone Call */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={business.phoneLink}
              id="header-call-cta"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-sm shadow-sky-900/30 transition-all duration-150 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
              <span className="hidden lg:inline text-sky-200 font-normal pl-1 border-l border-sky-400/40">
                {business.phone}
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Fast Call + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={business.phoneLink}
              id="mobile-quick-call-cta"
              aria-label={`Call BrightSpark Electrical at ${business.phone}`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-sky-600 text-white hover:bg-sky-500 active:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between min-h-[44px] transition-colors ${
                    isActive
                      ? 'bg-sky-600/20 text-sky-300 border border-sky-500/30 font-semibold'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-slate-800 space-y-3">
            <a
              href={business.phoneLink}
              id="mobile-drawer-call-button"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-lg text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-sm transition-colors min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              <span>Call {business.phone}</span>
            </a>
            <div className="text-center text-xs text-slate-400">
              Chiswick, London W3 • Rated {business.rating} ★ ({business.reviewCount} Reviews)
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
