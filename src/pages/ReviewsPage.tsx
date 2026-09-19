import React from 'react';
import { Phone, ArrowRight, Star, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { business } from '../data/business';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div id="reviews-page" className="w-full">
      {/* Header Banner */}
      <section
        id="reviews-hero"
        className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800 px-3 py-1 rounded-md mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chiswick, London W3</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Customer Feedback & Trust
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Transparent review data reflects our dedication to consistent electrical service, safe workmanship, and professional client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signal Spotlight */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 rounded-3xl p-8 sm:p-14 text-white shadow-xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Score Metric Column */}
              <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-10">
                <div className="inline-block p-2 rounded-full bg-amber-400/10 mb-4">
                  <div className="flex items-center justify-center gap-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                  {business.rating} <span className="text-2xl sm:text-3xl font-bold text-slate-400">/ 5.0</span>
                </div>

                <div className="mt-2 text-xl font-bold text-amber-400">
                  {business.reviewCount} Verified Reviews
                </div>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
                  A high customer satisfaction rating built upon verified feedback from property owners and residents across Chiswick and London.
                </p>

                <div className="mt-6">
                  <a
                    href={business.phoneLink}
                    id="reviews-direct-call-cta"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[44px]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {business.phone}</span>
                  </a>
                </div>
              </div>

              {/* What This Rating Represents Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-1">
                    Authentic Track Record
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    What Our Reviews Indicate
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Rather than manufacturing unverifiable testimonials, we present our verified aggregate rating directly. Across 444 customer reviews, our clients consistently value the core principles of our electrical practice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                    <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Reliable Punctuality</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Respecting the client’s schedule and attending agreed appointments on time.
                    </p>
                  </div>

                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                    <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Tidy Workmanship</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Clean cable routing, neat wall fittings, and thorough clean-up upon completion.
                    </p>
                  </div>

                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                    <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Clear Communication</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Explaining the necessary repairs or installation requirements without confusing jargon.
                    </p>
                  </div>

                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                    <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Safety Integrity</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Ensuring circuits and connections are verified and compliant with safe trade standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Importance of Transparent Trade Reviews */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Our Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Genuine Service Without Manufactured Claims
            </h2>
          </div>

          <p className="text-base text-slate-700 leading-relaxed text-center">
            When looking for an electrician in London, peace of mind comes from knowing you are engaging a dependable professional. Our 4.9 rating across 444 reviews stands as an open indicator of our sustained standard of service across domestic repairs, property alterations, and lighting projects.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
              <ShieldCheck className="w-6 h-6 text-sky-600" />
              <span>Our Review Policy & Transparency</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              We do not publish fictional customer quotes or unverified customer names on our website. Every rating point represents genuine customer engagement. When you hire BrightSpark Electrical, you can expect the exact same level of care, respect, and technical competence.
            </p>
          </div>

          <div className="pt-6 text-center">
            <button
              onClick={() => onNavigate('contact')}
              id="reviews-contact-cta"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors min-h-[44px]"
            >
              <span>Discuss Your Electrical Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
