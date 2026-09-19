import React, { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, HelpCircle, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { business, faqItems } from '../data/business';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openItem, setOpenItem] = useState<string | null>(faqItems[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div id="faq-page" className="w-full">
      {/* Header Banner */}
      <section
        id="faq-hero"
        className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800 px-3 py-1 rounded-md mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chiswick, London W3</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Find clear answers to common questions about engaging BrightSpark Electrical for domestic repairs, lighting, and electrical installations.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    id={`faq-toggle-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[44px]"
                  >
                    <span className="text-base sm:text-lg tracking-tight">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-sky-50 text-sky-600' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-toggle-${item.id}`}
                      className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Box for Unanswered Questions */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Have a Question Not Listed Here?
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
              Call us directly to discuss your specific electrical inquiry or fill out our online enquiry form.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={business.phoneLink}
                id="faq-call-button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {business.phone}</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                id="faq-enquiry-button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors min-h-[44px]"
              >
                <span>Send An Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
