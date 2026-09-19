import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2, AlertCircle, Send, Star, ShieldCheck } from 'lucide-react';
import { ContactFormData } from '../types';
import { business, servicesData } from '../data/business';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: '',
    preferredContact: 'phone',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Phone Number (Required)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a contact telephone number.';
    } else if (cleanPhone.length < 8 || !/^[+]?[0-9]+$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid telephone number (e.g. 020 7523 5373 or +44 20 7523 5373).';
    }

    // Email (Optional, but validate format if provided)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address, or leave blank.';
      }
    }

    // Service Required
    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select the service category you require.';
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your electrical requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Generate a client reference for tracking
      const ref = `BSE-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionRef(ref);
      setIsSubmitted(true);
      // The form data is validated and ready for backend hookup without mock network claims
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div id="contact-page" className="w-full">
      {/* Header Banner */}
      <section
        id="contact-hero"
        className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800 px-3 py-1 rounded-md mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chiswick, London W3</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Contact BrightSpark Electrical
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Get in touch directly by telephone or complete our electrical enquiry form below. We are here to assist with domestic repairs, installations, and lighting work.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Business Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-sky-600 font-bold text-xs uppercase tracking-widest block mb-1">
                  Immediate Contact
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Speak Directly With Us
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  For urgent electrical issues or to discuss your plans directly, calling our telephone line is the fastest way to get in touch.
                </p>
              </div>

              {/* Verified Phone Card */}
              <div
                id="contact-phone-card"
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Telephone
                    </span>
                    <a
                      href={business.phoneLink}
                      id="contact-page-phone-link"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Click the button below to dial directly on mobile or landline.
                </p>
                <a
                  href={business.phoneLink}
                  id="contact-page-call-now-button"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-md transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {business.phone}</span>
                </a>
              </div>

              {/* Verified Location Card */}
              <div
                id="contact-location-card"
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Listed Location
                  </h3>
                  <p className="text-sm font-semibold text-slate-800">
                    {business.location}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Providing electrical services for residential homes, rental properties, and commercial clients across Chiswick and London.
                  </p>
                </div>
              </div>

              {/* Verified Trust Card */}
              <div
                id="contact-trust-card"
                className="bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl text-white shadow-sm border border-slate-800"
              >
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="font-bold text-lg">
                  Rated {business.rating} / 5
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Based on {business.reviewCount} customer reviews across London.
                </p>
              </div>

              {/* Safety Warning Card */}
              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 text-amber-950 text-xs leading-relaxed">
                <div className="flex items-center gap-2 font-bold mb-1 text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Safety Notice</span>
                </div>
                If you detect smoke, active sparking, or scorch marks around any socket or switch, isolate the circuit if safe to do so and telephone for professional assistance immediately.
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
                {isSubmitted ? (
                  <div id="enquiry-success-message" className="py-8 text-center space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Enquiry Prepared Successfully
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your enquiry details have been validated and recorded with enquiry reference:
                    </p>
                    <div className="inline-block bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-mono font-bold text-base border border-slate-200">
                      {submissionRef}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl text-left text-xs text-slate-700 border border-slate-200 space-y-2 max-w-md mx-auto">
                      <div><strong>Service:</strong> {formData.serviceRequired}</div>
                      <div><strong>Contact Phone:</strong> {formData.phone}</div>
                      {formData.email && <div><strong>Email:</strong> {formData.email}</div>}
                      <div><strong>Preferred Contact:</strong> {formData.preferredContact === 'phone' ? 'Telephone' : 'Email'}</div>
                      <div><strong>Summary:</strong> {formData.message}</div>
                    </div>

                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      If you require urgent assistance or would like to speak to an electrician immediately, please call us directly on{' '}
                      <a href={business.phoneLink} className="text-sky-600 font-bold underline">
                        {business.phone}
                      </a>.
                    </p>

                    <div className="pt-2">
                      <button
                        type="button"
                        id="new-enquiry-button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            serviceRequired: '',
                            preferredContact: 'phone',
                            message: '',
                          });
                        }}
                        className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form id="electrical-enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        Send An Electrical Enquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Please fill in your details below. Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. David Harrison"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500'
                        }`}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number & Email (2 columns on tablet/desktop) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number (Required) */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 020 7523 5373"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                              : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500'
                          }`}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Email (Optional) */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                        >
                          Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. david@example.co.uk"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                              : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500'
                          }`}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label
                        htmlFor="serviceRequired"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 ${
                          errors.serviceRequired
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500'
                        }`}
                        aria-invalid={Boolean(errors.serviceRequired)}
                        aria-describedby={errors.serviceRequired ? 'serviceRequired-error' : undefined}
                      >
                        <option value="">-- Please select an electrical service --</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other Electrical Enquiry">Other / General Electrical Enquiry</option>
                      </select>
                      {errors.serviceRequired && (
                        <p id="serviceRequired-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.serviceRequired}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <span className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                        Preferred Contact Method <span className="text-slate-400 font-normal">(Optional)</span>
                      </span>
                      <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleChange}
                            className="w-4 h-4 text-sky-600 focus:ring-sky-500 border-slate-300"
                          />
                          <span>Telephone Call</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="w-4 h-4 text-sky-600 focus:ring-sky-500 border-slate-300"
                          />
                          <span>Email</span>
                        </label>
                      </div>
                    </div>

                    {/* Message / Description */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Details of the Electrical Work <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe the electrical problem or installation you need assistance with..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500'
                        }`}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        id="submit-enquiry-form-button"
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-md transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Electrical Enquiry</span>
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 text-center leading-relaxed">
                      Your details are held confidentially and used solely to respond to your electrical service enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
