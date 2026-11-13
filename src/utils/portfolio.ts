import type { CaseStudy } from '../config/portfolio';

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export interface ParsedStat {
  numeric: number | null;
  suffix: string;
  isTextOnly: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!input.email.trim() || !EMAIL_REGEX.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!input.subject.trim() || input.subject.trim().length < 3) {
    errors.subject = 'Please add a short subject line.';
  }

  if (!input.message.trim() || input.message.trim().length < 10) {
    errors.message = 'Please include a brief message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildMailtoHref(recipientEmail: string, input: ContactFormInput): string {
  const subject = encodeURIComponent(`[Portfolio Inquiry] ${input.subject.trim()}`);
  const body = encodeURIComponent(
    `Name: ${input.name.trim()}\nEmail: ${input.email.trim()}\n\n${input.message.trim()}`
  );
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

export function buildWhatsAppHref(digits: string, prefillText?: string): string {
  const cleanDigits = digits.replace(/[^\d]/g, '');
  if (!prefillText) {
    return `https://wa.me/${cleanDigits}`;
  }
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(prefillText)}`;
}

export function parseStatDisplay(value: string): ParsedStat {
  const trimmed = value.trim();
  const match = /^(\d+)(.*)$/.exec(trimmed);
  if (!match) {
    return {
      numeric: null,
      suffix: trimmed,
      isTextOnly: true,
    };
  }

  return {
    numeric: Number.parseInt(match[1], 10),
    suffix: match[2],
    isTextOnly: false,
  };
}

export type CaseStudyFilter = 'All' | 'Meta Ads' | 'Google Ads' | 'Automation';

export function filterCaseStudiesByPlatform(
  studies: readonly CaseStudy[],
  filter: CaseStudyFilter
): CaseStudy[] {
  if (filter === 'All') {
    return [...studies];
  }
  return studies.filter((study) => study.platformTags.includes(filter));
}

export interface SectionOffset {
  id: string;
  top: number;
  bottom: number;
}

export function getActiveSectionId(
  sections: readonly SectionOffset[],
  scrollTop: number,
  offsetThreshold = 140
): string {
  if (sections.length === 0) {
    return '';
  }

  const probe = scrollTop + offsetThreshold;
  let currentId = sections[0].id;

  for (const section of sections) {
    if (section.top <= probe) {
      currentId = section.id;
    }
  }

  return currentId;
}
