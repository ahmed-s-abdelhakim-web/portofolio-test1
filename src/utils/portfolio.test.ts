import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import {
  buildMailtoHref,
  buildWhatsAppHref,
  filterCaseStudiesByPlatform,
  getActiveSectionId,
  parseStatDisplay,
  validateContactForm,
} from './portfolio';

test('validateContactForm rejects empty or invalid inputs and accepts valid data', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    subject: 'Hi',
    message: 'Short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    subject: 'Paid Media Role',
    message: 'We would love to discuss a remote performance marketing role.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('buildMailtoHref formats recipient, subject, and body cleanly', () => {
  const href = buildMailtoHref('Ahmedsamir1026@icloud.com', {
    name: 'Sarah',
    email: 'sarah@example.com',
    subject: 'Roofing Campaign Inquiry',
    message: 'Looking for support on Meta and Google Ads.',
  });
  assert.ok(href.startsWith('mailto:Ahmedsamir1026@icloud.com?subject='));
  assert.ok(href.includes('Roofing%20Campaign%20Inquiry'));
  assert.ok(href.includes('sarah%40example.com'));
});

test('buildWhatsAppHref strips non-digits and encodes optional message', () => {
  assert.equal(buildWhatsAppHref('+20 111 502 5510'), 'https://wa.me/201115025510');
  assert.equal(
    buildWhatsAppHref('+201115025510', 'Hi Ahmed'),
    'https://wa.me/201115025510?text=Hi%20Ahmed'
  );
});

test('parseStatDisplay separates numeric targets from text-only stats', () => {
  assert.deepEqual(parseStatDisplay('4+'), { numeric: 4, suffix: '+', isTextOnly: false });
  assert.deepEqual(parseStatDisplay('30+'), { numeric: 30, suffix: '+', isTextOnly: false });
  assert.deepEqual(parseStatDisplay('3'), { numeric: 3, suffix: '', isTextOnly: false });
  assert.deepEqual(parseStatDisplay('US'), { numeric: null, suffix: 'US', isTextOnly: true });
});

test('filterCaseStudiesByPlatform returns accurate subsets', () => {
  const all = filterCaseStudiesByPlatform(PORTFOLIO_CONFIG.caseStudies.items, 'All');
  assert.equal(all.length, 3);

  const google = filterCaseStudiesByPlatform(PORTFOLIO_CONFIG.caseStudies.items, 'Google Ads');
  assert.equal(google.length, 2);

  const automation = filterCaseStudiesByPlatform(PORTFOLIO_CONFIG.caseStudies.items, 'Automation');
  assert.equal(automation.length, 1);
  assert.equal(automation[0].id, 'case-02-dealer-rejuvenation');
});

test('getActiveSectionId selects the current section based on scroll position', () => {
  const sections = [
    { id: 'about', top: 800, bottom: 1500 },
    { id: 'expertise', top: 1500, bottom: 2300 },
    { id: 'work', top: 2300, bottom: 3400 },
  ];

  assert.equal(getActiveSectionId(sections, 0), 'about');
  assert.equal(getActiveSectionId(sections, 1400), 'expertise');
  assert.equal(getActiveSectionId(sections, 2250), 'work');
});

test('all referenced local portfolio image assets exist in public/', () => {
  const publicDir = path.resolve(process.cwd(), 'public');
  const assetPaths = new Set<string>();

  assetPaths.add(PORTFOLIO_CONFIG.identity.portrait.src);
  for (const study of PORTFOLIO_CONFIG.caseStudies.items) {
    assetPaths.add(study.coverImage.src);
    for (const item of study.gallery) {
      assetPaths.add(item.src);
    }
  }

  assert.equal(assetPaths.size, 14, 'Expected all 14 uploaded images to be wired into portfolio config');
  for (const relativeSrc of assetPaths) {
    const filePath = path.join(publicDir, relativeSrc.replace(/^\//, ''));
    assert.equal(fs.existsSync(filePath), true, `Missing image file on disk: ${filePath}`);
  }
});
