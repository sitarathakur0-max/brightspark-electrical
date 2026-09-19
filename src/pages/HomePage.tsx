import React from 'react';
import {
  Phone,
  ArrowRight,
  Wrench,
  Cpu,
  Search,
  Lightbulb,
  Plug,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Star,
} from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { business, servicesData, whyChooseBenefits, processSteps, images } from '../data/business';
import { TrustBadge } from '../components/TrustBadge';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-sky-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-500" />;
      case 'Search':
        return <Search className="w-6 h-6 text-sky-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-500" />;
      case 'Plug':
        return <Plug className="w-6 h-6 text-sky-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <div id="home-page" className="w-full">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        aria-label="Introduction"
        className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden py-16 sm:py-24 lg:py-28"
      >
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Signal Pill */}
              <div>
                <TrustBadge variant="dark" />
              </div>

              {/* Verified Location Label */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/80 px-3 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5" />
                <span>Serving {business.location} & Surrounding London Area</span>
              </div>

              {/* Primary Headline */}
              <h1
                id="hero-headline"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
              >
                Professional Electrical Services in London
              </h1>

              {/* Supporting Copy */}
              <p
                id="hero-description"
                className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
              >
                Reliable electrical services for homes and properties in Chiswick and the surrounding London area. Get in touch to discuss your electrical requirements.
              </p>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={business.phoneLink}
                  id="hero-primary-call-cta"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-lg shadow-sky-900/40 transition-all duration-150 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <Phone className="w-5 h-5 text-sky-200" />
                  <span>Call Now</span>
                  <span className="font-normal text-sky-200 border-l border-sky-400/50 pl-2 text-sm">
                    {business.phone}
                  </span>
                </a>

                <button
                  onClick={() => onNavigate('services')}
                  id="hero-secondary-services-cta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  <span>View Electrical Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Quick highlights */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Prompt Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Clean Workmanship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Clear Communication</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div
                id="hero-image-container"
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-800"
              >
                <img
                  src={images.heroElectrician}
                  alt="Professional electrician safely carrying out residential wiring and installation work"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white flex items-center justify-between">
                  <div>
                    <span className="text-xs text-sky-400 font-semibold block uppercase tracking-wider">
                      Verified Electrical Trade
                    </span>
                    <span className="text-sm font-bold text-slate-100">
                      Chiswick, London W3
                    </span>
                  </div>
                  <a
                    href={business.phoneLink}
                    id="hero-image-call-badge"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{business.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED TRUST SIGNAL BAR */}
      <section
        id="trust-signal-bar"
        aria-label="Customer Rating"
        className="bg-white border-b border-slate-200 py-6 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl">
                Rated {business.rating} ★
              </span>
              <span className="text-slate-600 text-sm ml-2 font-medium">
                from {business.reviewCount} customer reviews
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Direct Contact:</span>
            <a
              href={business.phoneLink}
              id="trust-bar-phone"
              className="text-sky-700 font-bold hover:underline"
            >
              {business.phone}
            </a>
            <span className="text-slate-300">|</span>
            <span>Chiswick, London W3</span>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section
        id="services-preview-section"
        aria-labelledby="services-preview-heading"
        className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Electrical Services
            </span>
            <h2
              id="services-preview-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Comprehensive Electrical Work for London Properties
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore our primary service categories. Get in touch to discuss your specific requirements or arrange an assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service: ServiceItem) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/95 shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      id={`enquire-btn-${service.id}`}
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 min-h-[44px]"
                    >
                      <span>Enquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              id="view-all-services-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors min-h-[44px]"
            >
              <span>View Full Services Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ELECTRICAL REPAIRS SECTION */}
      <section
        id="electrical-repairs-section"
        aria-labelledby="repairs-heading"
        className="py-16 sm:py-20 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image / Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={images.electricalRepairs}
                  alt="Professional electrical repairs on residential wiring"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Safety Warning Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-amber-50/95 border border-amber-300 text-amber-950 backdrop-blur-sm">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider block text-amber-800">
                        Safety Warning
                      </span>
                      <p className="text-xs text-amber-900 mt-0.5">
                        Never touch exposed wiring or attempt uninsulated repairs. Professional diagnosis prevents electrical shocks and fire hazards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block">
                Prompt Assistance
              </span>
              <h2
                id="repairs-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
              >
                The Importance of Professional Electrical Repairs
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Electrical problems can suddenly interrupt everyday life and introduce safety risks to your home or workplace. Whether it is a circuit that repeatedly trips, buzzing switchgear, or a complete loss of power to an area of your property, prompt and professional attention is essential.
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Proper Assessment:</strong> We methodically check the affected circuit to determine why the fault occurred rather than simply resetting switches.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Safe Resolutions:</strong> All repair work adheres to sound electrical principles, protecting your appliances and wiring integrity.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Clear Guidance:</strong> We discuss the findings honestly so you understand what caused the failure and how it was resolved.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={business.phoneLink}
                  id="repairs-call-cta"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-md transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call BrightSpark Electrical</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  id="repairs-enquiry-cta"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors min-h-[44px]"
                >
                  Send a Repair Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTALLATIONS SECTION */}
      <section
        id="installations-section"
        aria-labelledby="installations-heading"
        className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-sky-400 font-bold text-xs uppercase tracking-widest block">
                Modern Power Solutions
              </span>
              <h2
                id="installations-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
              >
                Methodical Electrical Installations for Modern Living
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Contemporary households and offices place significant demands on electrical capacity. From high-draw kitchen appliances to home workstations and modern entertainment systems, we install reliable electrical infrastructure configured for everyday convenience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                  <h4 className="font-bold text-white text-sm mb-1">New Electrical Points</h4>
                  <p className="text-xs text-slate-300">
                    Additional sockets fitted exactly where you need them, eliminating trailing extension leads.
                  </p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                  <h4 className="font-bold text-white text-sm mb-1">Switches & Controls</h4>
                  <p className="text-xs text-slate-300">
                    Contemporary dimmer switches, multi-way switching, and smart-ready control plates.
                  </p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                  <h4 className="font-bold text-white text-sm mb-1">Appliance Connections</h4>
                  <p className="text-xs text-slate-300">
                    Dedicated isolation circuits and connections for electric cookers, hobs, and white goods.
                  </p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                  <h4 className="font-bold text-white text-sm mb-1">Consumer Unit Improvements</h4>
                  <p className="text-xs text-slate-300">
                    Upgrading outdated fuse boxes with modern miniature circuit breakers and surge protection.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  id="installations-discuss-cta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors min-h-[44px]"
                >
                  <span>Discuss Your Installation Project</span>
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <img
                  src={images.consumerUnit}
                  alt="Modern electrical panel and consumer unit with circuit breakers cleanly wired"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIGHTING SECTION */}
      <section
        id="lighting-section"
        aria-labelledby="lighting-heading"
        className="py-16 sm:py-24 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={images.lightingInterior}
                  alt="Contemporary residential interior lighting with warm recessed downlights"
                  className="w-full h-80 sm:h-[420px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block">
                Illumination & Atmosphere
              </span>
              <h2
                id="lighting-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
              >
                Better Lighting Starts With the Right Electrical Work
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Lighting plays a vital role in the aesthetics, functionality, and comfort of any property. From focused task lighting in kitchens and home workspaces to soft ambient mood lighting in living areas, professional installation ensures proper circuit load balance and clean finishes.
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Energy-efficient LED downlight configurations with neat ceiling cutouts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Secure hanging and connection of modern statement pendant fittings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Under-counter task lighting and accent display illumination.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Weather-resistant external porch, patio, and security sensor lighting.</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  id="lighting-discuss-cta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors min-h-[44px]"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE SECTION */}
      <section
        id="why-choose-section"
        aria-labelledby="why-choose-heading"
        className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Customer Focus
            </span>
            <h2
              id="why-choose-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Why London Clients Choose BrightSpark Electrical
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Straightforward service founded on respect for your property, clear communication, and dependable electrical work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseBenefits.map((benefit, index) => (
              <div
                key={index}
                id={`benefit-card-${index}`}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Verified Rating Card */}
            <div
              id="benefit-trust-card"
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-7 rounded-2xl text-white shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Rated {business.rating} / 5
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Reflecting {business.reviewCount} customer reviews across Chiswick and London. Direct feedback built on reliable service.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700">
                <button
                  onClick={() => onNavigate('reviews')}
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                >
                  <span>Learn more about our reviews</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS SECTION */}
      <section
        id="how-it-works-section"
        aria-labelledby="how-it-works-heading"
        className="py-16 sm:py-20 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Simple Process
            </span>
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              How It Works
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A clear, straightforward three-step path from your initial enquiry to completed electrical work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                className="relative bg-slate-50 p-7 rounded-2xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-sky-600 mb-3 tracking-tight">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={business.phoneLink}
              id="process-call-cta"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[48px]"
            >
              <Phone className="w-5 h-5" />
              <span>Call +44 20 7523 5373 to Get Started</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. REVIEWS SECTION PREVIEW */}
      <section
        id="reviews-preview-section"
        aria-labelledby="reviews-preview-heading"
        className="py-16 sm:py-20 bg-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              4.9 / 5
            </div>
            <p className="text-lg font-semibold text-slate-200 mt-2">
              Based on 444 Customer Reviews
            </p>
            <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
              BrightSpark Electrical values transparent customer relationships. Our aggregate rating reflects positive feedback from homeowners and property owners across Chiswick and London.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('reviews')}
                id="home-reviews-detail-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[44px]"
              >
                <span>View Rating Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={business.phoneLink}
                id="home-reviews-call-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-700 hover:bg-slate-600 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
