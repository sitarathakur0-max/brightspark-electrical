import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Zap } from 'lucide-react';
import { PageId } from '../types';
import { business, images } from '../data/business';
import { TrustBadge } from '../components/TrustBadge';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="w-full">
      {/* Page Header Banner */}
      <section
        id="about-hero"
        className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800 px-3 py-1 rounded-md mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chiswick, London W3</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              About BrightSpark Electrical
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              BrightSpark Electrical provides professional electrical services for customers in Chiswick and London. Our goal is to make it simple for customers to understand the service offering and get in touch about their electrical requirements.
            </p>
            <div className="mt-6">
              <TrustBadge variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Overview Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block">
                Our Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Dedicated to Reliable Workmanship & Clear Communication
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Navigating electrical issues in a home or commercial building can be daunting. At BrightSpark Electrical, we prioritize straightforward service from the moment you call. We listen carefully to what you are experiencing, discuss the appropriate steps, and carry out work with thorough attention to electrical safety.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Whether diagnosing persistent circuit trips, installing new electrical accessories, or modernizing lighting across a property, we approach every task with tidy execution and respect for the premises.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold block">Transparent Advice:</strong>
                    <span className="text-sm text-slate-600">
                      We describe the condition of your wiring and what is required in clear, everyday terms.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold block">Property Care:</strong>
                    <span className="text-sm text-slate-600">
                      Clean work habits, neat cable routing, and orderly finishes on all faceplates and fittings.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold block">Customer Accessibility:</strong>
                    <span className="text-sm text-slate-600">
                      A direct telephone line and responsive contact form make reaching us effortless.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={images.generalElectrical}
                  alt="Electrician carefully working with electrical connections"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Chiswick & London Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Local Presence
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Registered and listed in Chiswick, London W3. We cater to domestic homeowners, rental properties, and local businesses in West London and neighbouring London boroughs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Safety-First Principle
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Electrical systems must operate without compromise. We ensure thorough verification, correct circuit loading, and safe isolation during all repair and installation procedures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Practical Solutions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every building has specific wiring characteristics. We recommend sensible, cost-effective options that solve the immediate issue while maintaining durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-14 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Have an Electrical Enquiry?
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Reach out to BrightSpark Electrical today. We are ready to discuss your electrical repairs, lighting, or installation needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.phoneLink}
              id="about-call-cta"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call {business.phone}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              id="about-enquiry-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors min-h-[44px]"
            >
              <span>Send Us an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
