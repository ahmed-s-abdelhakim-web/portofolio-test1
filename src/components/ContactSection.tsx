import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Reveal } from './Reveal';
import {
  buildMailtoHref,
  buildWhatsAppHref,
  validateContactForm,
  type ContactFormInput,
} from '../utils/portfolio';

export const ContactSection: React.FC = () => {
  const { contact } = PORTFOLIO_CONFIG;
  const [formState, setFormState] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [draftOpenedHref, setDraftOpenedHref] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleFieldChange = (field: keyof ContactFormInput, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (draftOpenedHref) {
      setDraftOpenedHref(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      setDraftOpenedHref(null);
      return;
    }

    const mailtoHref = buildMailtoHref(contact.email, formState);
    setErrors({});
    setDraftOpenedHref(mailtoHref);
    window.location.href = mailtoHref;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  const whatsappHref = buildWhatsAppHref(contact.whatsappDigits);

  return (
    <section id="contact" className="py-24 lg:py-32 border-b border-white/[0.07]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Side: Heading & 3 Direct Contact Methods */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764]">
                <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
                <span>{contact.kicker}</span>
              </div>

              <h2 className="mt-4 font-display font-normal text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.02em] text-[#F5F5F2] [text-wrap:balance]">
                {contact.headingPrefix}{' '}
                <span className="italic text-[#DEB764]">{contact.headingAccent}</span>
              </h2>

              <p className="mt-5 text-[#A4A7AF] text-[15.5px] leading-[1.7] max-w-xl">
                {contact.description}
              </p>

              {/* Three Prominent Contact Methods */}
              <div className="mt-9 space-y-4">
                {/* 1. Email Me */}
                <div className="editorial-card rounded-xl bg-[#0E1117]/95 border border-white/[0.07] p-5 flex items-center justify-between gap-4 hover:border-[#DEB764]/40">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 min-w-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] rounded-[6px]"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#161A22] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#DEB764]/50 transition-colors">
                      <Mail className="w-5 h-5 text-[#DEB764]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#A4A7AF]">
                        Email Me
                      </div>
                      <div className="mt-0.5 text-sm sm:text-base font-medium text-[#F5F5F2] group-hover:text-[#DEB764] transition-colors truncate">
                        {contact.email}
                      </div>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[6px] border border-white/15 font-mono text-xs text-[#A4A7AF] hover:border-[#DEB764] hover:text-[#DEB764] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#DEB764]" />
                        <span className="text-[#DEB764]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 2. LinkedIn */}
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-card rounded-xl bg-[#0E1117]/95 border border-white/[0.07] p-5 flex items-center justify-between gap-4 hover:border-[#DEB764]/40 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-lg bg-[#161A22] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#DEB764]/50 transition-colors">
                      <Linkedin className="w-5 h-5 text-[#DEB764]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#A4A7AF]">
                        LinkedIn
                      </div>
                      <div className="mt-0.5 text-sm sm:text-base font-medium text-[#F5F5F2] group-hover:text-[#DEB764] transition-colors truncate">
                        {contact.linkedinHandle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A4A7AF] group-hover:text-[#DEB764] shrink-0 transition-colors" />
                </a>

                {/* 3. WhatsApp */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-card rounded-xl bg-[#0E1117]/95 border border-white/[0.07] p-5 flex items-center justify-between gap-4 hover:border-[#DEB764]/40 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-lg bg-[#161A22] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#DEB764]/50 transition-colors">
                      <MessageSquare className="w-5 h-5 text-[#DEB764]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#A4A7AF]">
                        WhatsApp
                      </div>
                      <div className="mt-0.5 text-sm sm:text-base font-medium text-[#F5F5F2] group-hover:text-[#DEB764] transition-colors tabular-nums">
                        {contact.whatsappNumber}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A4A7AF] group-hover:text-[#DEB764] shrink-0 transition-colors" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Validated Direct Email Draft Composer (opens mailto:) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0E1117]/95 border border-white/[0.08] p-7 sm:p-9 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.85)]">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#DEB764]">
              Direct Inquiry Draft
            </div>
            <p className="mt-2 text-sm text-[#A4A7AF] leading-relaxed">
              Compose your message below to open a pre-filled email directly to{' '}
              <span className="text-[#F5F5F2]">{contact.email}</span>.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] tracking-wider uppercase text-[#A4A7AF] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    placeholder="John Miller"
                    aria-invalid={Boolean(errors.name)}
                    className="w-full px-4 py-3 rounded-[6px] bg-[#090A0D] border border-white/15 text-sm text-[#F5F5F2] placeholder:text-[#A4A7AF]/45 focus:outline-none focus:border-[#DEB764] transition-colors"
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 text-xs text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] tracking-wider uppercase text-[#A4A7AF] mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="john@company.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full px-4 py-3 rounded-[6px] bg-[#090A0D] border border-white/15 text-sm text-[#F5F5F2] placeholder:text-[#A4A7AF]/45 focus:outline-none focus:border-[#DEB764] transition-colors"
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-xs text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-[11px] tracking-wider uppercase text-[#A4A7AF] mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => handleFieldChange('subject', e.target.value)}
                  placeholder="Media Buyer Opportunity / Paid Acquisition Inquiry"
                  aria-invalid={Boolean(errors.subject)}
                  className="w-full px-4 py-3 rounded-[6px] bg-[#090A0D] border border-white/15 text-sm text-[#F5F5F2] placeholder:text-[#A4A7AF]/45 focus:outline-none focus:border-[#DEB764] transition-colors"
                />
                {errors.subject && (
                  <p role="alert" className="mt-1.5 text-xs text-rose-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[11px] tracking-wider uppercase text-[#A4A7AF] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  placeholder="Share details about your business, platforms (Meta / Google / TikTok), or remote opportunity..."
                  aria-invalid={Boolean(errors.message)}
                  className="w-full px-4 py-3 rounded-[6px] bg-[#090A0D] border border-white/15 text-sm text-[#F5F5F2] placeholder:text-[#A4A7AF]/45 focus:outline-none focus:border-[#DEB764] transition-colors resize-y"
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[6px] bg-[#DEB764] text-[#090A0D] font-mono text-xs font-medium tracking-[0.16em] uppercase hover:bg-[#E7C67D] hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(222,183,100,0.3)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email in Mail App</span>
              </button>

              {draftOpenedHref && (
                <div
                  role="status"
                  className="p-4 rounded-lg border border-[#DEB764]/40 bg-[#090A0D] text-xs text-[#F5F5F2] leading-relaxed"
                >
                  Your inquiry passed validation and opened in your default mail client. If it did
                  not launch automatically,{' '}
                  <a
                    href={draftOpenedHref}
                    className="text-[#DEB764] underline hover:text-[#E7C67D]"
                  >
                    click here to open the pre-filled email draft
                  </a>
                  .
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
