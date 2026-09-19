import React from 'react';
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, MapPin } from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { business, servicesData } from '../data/business';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div id="services-page" className="w-full">
      {/* Header Banner */}
      <section
        id="services-hero"
        className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800 px-3 py-1 rounded-md mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chiswick, London W3</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Electrical Services in Chiswick & London
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our core electrical service categories for homeowners, landlords, and properties. Contact BrightSpark Electrical to discuss your requirements and confirm availability.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={business.phoneLink}
                id="services-hero-call-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {business.phone}</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                id="services-hero-enquire-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors min-h-[44px]"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice Banner */}
      <section className="bg-amber-50 border-b border-amber-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-amber-900 text-sm">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <p>
            <strong className="font-semibold">Safety First:</strong> Electrical wiring carries lethal voltages. Please do not dismantle live accessories, open consumer units, or undertake risky DIY fixes. Always contact a qualified electrician.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service: ServiceItem, index: number) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={`detailed-service-${service.id}`}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12 transition-all hover:border-slate-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 sm:h-80 relative">
                      <img
                        src={service.imageUrl}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider">
                      <span>Service {index + 1} of {servicesData.length}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-base text-slate-700 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                            Typical Customer Need
                          </span>
                          <p className="text-sm text-slate-800 mt-1 font-medium">
                            {service.typicalNeed}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        id={`service-enquire-${service.id}`}
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[44px]"
                      >
                        <span>Enquire About {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={business.phoneLink}
                        id={`service-call-${service.id}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors min-h-[44px]"
                      >
                        <Phone className="w-4 h-4 text-slate-500" />
                        <span>Call {business.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="py-14 sm:py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Have a Specific Electrical Need in Mind?
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Contact BrightSpark Electrical directly. We will discuss the details of the work and provide clear, professional assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={business.phoneLink}
              id="services-bottom-call-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              <span>Call +44 20 7523 5373</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              id="services-bottom-contact-cta"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors min-h-[44px]"
            >
              Contact Us Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
