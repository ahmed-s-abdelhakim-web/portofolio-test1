export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export type ToolCategory = 'All' | 'Ad Platforms' | 'Tracking & Analytics' | 'CRM & Operations';

export interface PlatformItem {
  id: string;
  name: string;
  category: Exclude<ToolCategory, 'All'>;
  logoKey: string;
  role: string;
  description: string;
  capabilities: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  category: Exclude<ToolCategory, 'All'>;
  logoKey: string;
  purpose: string;
}

export interface CaseStudyCapture {
  src: string;
  alt: string;
  caption: string;
  platformLabel: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  index: string;
  industry: string;
  platform: string;
  platformTags: ('Meta Ads' | 'Google Ads' | 'Automation')[];
  market: string;
  title: string;
  shortDescription: string;
  objectives: string[];
  execution: string[];
  tools: string[];
  coverImage: CaseStudyCapture;
  gallery: CaseStudyCapture[];
  /** Leave empty or populate with verified campaign metrics when needed. */
  metrics: CaseStudyMetric[];
}

export interface IndustryItem {
  id: string;
  name: string;
  focus: string;
  description: string;
  iconKey:
    | 'home'
    | 'droplets'
    | 'wind'
    | 'hammer'
    | 'trees'
    | 'layers'
    | 'wrench'
    | 'mapPin';
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export const PORTFOLIO_CONFIG = {
  identity: {
    brandWordmark: 'AHMED SAMIR',
    firstName: 'Ahmed',
    lastName: 'Samir.',
    fullName: 'Ahmed Samir',
    title: 'Performance Marketing Specialist & Paid Media Buyer',
    footerTitle: 'Performance Marketing Specialist | Paid Media Buyer',
    locationLabel: 'CAIRO, EGYPT · WORKING GLOBALLY',
    footerLocation: 'Cairo, Egypt · Working Globally',
    availability: 'Available for Remote Opportunities',
    heroSummary:
      'I help businesses grow through strategic paid advertising, data-driven optimization, and performance-focused campaign management.',
    heroSubSummary:
      'With 4+ years of experience managing paid media campaigns, I specialize in helping US-based businesses generate leads, improve campaign efficiency, and scale their advertising operations.',
    portrait: {
      src: '/assets/aistudio/IMG_2572_61687cd0.JPG',
      alt: 'Ahmed Samir — Performance Marketing Specialist and Paid Media Buyer',
      initials: 'AS',
    },
  },

  navigation: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'expertise', label: 'Expertise', href: '#expertise' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'industries', label: 'Industries', href: '#industries' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  stats: [
    {
      id: 'experience',
      value: '4+',
      label: 'Years of Experience',
      detail: 'Paid acquisition & media buying',
    },
    {
      id: 'accounts',
      value: '30+',
      label: 'Meta Ad Accounts Managed',
      detail: 'Multi-account campaign execution',
    },
    {
      id: 'platforms',
      value: '3',
      label: 'Advertising Platforms',
      detail: 'Meta Ads · Google Ads · TikTok Ads',
    },
    {
      id: 'market',
      value: 'US',
      label: 'Primary Campaign Market',
      detail: 'Home & local service businesses',
    },
  ] satisfies StatItem[],

  about: {
    kicker: '01 — ABOUT',
    headingPrefix: 'Building Performance Through',
    headingAccent: 'Data, Strategy & Execution',
    paragraphs: [
      "I'm Ahmed Samir, a Performance Marketing Specialist with 4+ years of hands-on experience in paid media and digital advertising.",
      'My work focuses on building, managing, and optimizing advertising campaigns that help businesses acquire customers through measurable paid acquisition strategies.',
      'I have experience working across multiple advertising accounts, particularly within the US home services industry, where campaign performance depends on precise geographic targeting, effective budget allocation, accurate tracking, and continuous optimization.',
      'My approach combines analytical decision-making, campaign-level execution, and an understanding of how advertising performance connects to actual business outcomes.',
    ],
    capabilities: [
      {
        id: 'strategy',
        number: '01',
        title: 'Paid Media Strategy',
        description:
          'Planning and structuring advertising campaigns around business objectives, target markets, and acquisition goals.',
      },
      {
        id: 'optimization',
        number: '02',
        title: 'Campaign Optimization',
        description:
          'Managing budgets, analyzing performance, identifying inefficiencies, and continuously improving advertising performance.',
      },
      {
        id: 'tracking',
        number: '03',
        title: 'Tracking & Measurement',
        description:
          'Implementing and troubleshooting conversion tracking to improve measurement accuracy and campaign optimization.',
      },
      {
        id: 'lead-gen',
        number: '04',
        title: 'Lead Generation',
        description:
          'Building and managing acquisition campaigns designed to generate qualified leads for local and service-based businesses.',
      },
    ] satisfies CapabilityItem[],
  },

  expertise: {
    kicker: '02 — EXPERTISE',
    headingPrefix: 'Platforms & Tools',
    headingAccent: 'of the Trade',
    subtitle:
      'A complete paid acquisition, conversion measurement, and CRM operational ecosystem built for local and US service businesses.',
    primaryPlatforms: [
      {
        id: 'meta-ads',
        name: 'Meta Ads',
        category: 'Ad Platforms',
        logoKey: 'meta',
        role: 'Facebook & Instagram Acquisition',
        description:
          'Facebook and Instagram advertising, lead generation, audience targeting, campaign optimization, and budget management across 30+ accounts.',
        capabilities: [
          'CBO & ABO campaign structuring',
          'Geographic & service-radius targeting',
          'Creative testing & budget pacing',
        ],
      },
      {
        id: 'google-ads',
        name: 'Google Ads',
        category: 'Ad Platforms',
        logoKey: 'google-ads',
        role: 'High-Intent Search & PPC',
        description:
          'Search campaigns, keyword strategy, geographic targeting, conversion tracking, and campaign optimization for high-intent local demand.',
        capabilities: [
          'Branded & non-branded search structure',
          'ZIP code & territory bid control',
          'Conversion value & CPA monitoring',
        ],
      },
      {
        id: 'tiktok-ads',
        name: 'TikTok Ads',
        category: 'Ad Platforms',
        logoKey: 'tiktok',
        role: 'Short-Form Performance Media',
        description:
          'Campaign execution and performance-focused vertical video advertising tailored for audience expansion and direct response.',
        capabilities: [
          'Vertical creative testing',
          'Audience & placement optimization',
          'Full-funnel acquisition support',
        ],
      },
    ] satisfies PlatformItem[],

    tools: [
      {
        id: 'gtm',
        name: 'Google Tag Manager',
        category: 'Tracking & Analytics',
        logoKey: 'gtm',
        purpose: 'Container governance & event deployment',
      },
      {
        id: 'meta-pixel',
        name: 'Meta Pixel',
        category: 'Tracking & Analytics',
        logoKey: 'meta',
        purpose: 'Browser & conversion signal verification',
      },
      {
        id: 'google-conv',
        name: 'Google Ads Conversion Tracking',
        category: 'Tracking & Analytics',
        logoKey: 'google-ads',
        purpose: 'Form, call & lead attribution tags',
      },
      {
        id: 'meta-lead-events',
        name: 'Meta Lead Events',
        category: 'Tracking & Analytics',
        logoKey: 'meta-events',
        purpose: 'Instant form & website lead event mapping',
      },
      {
        id: 'callrail',
        name: 'CallRail',
        category: 'Tracking & Analytics',
        logoKey: 'callrail',
        purpose: 'Dynamic call tracking & source attribution',
      },
      {
        id: 'ga4-looker',
        name: 'GA4 & Looker Studio',
        category: 'Tracking & Analytics',
        logoKey: 'ga4',
        purpose: 'Cross-channel reporting & telemetry',
      },
      {
        id: 'hubspot',
        name: 'HubSpot',
        category: 'CRM & Operations',
        logoKey: 'hubspot',
        purpose: 'Lead pipeline, contacts & deal attribution',
      },
      {
        id: 'zapier',
        name: 'Zapier',
        category: 'CRM & Operations',
        logoKey: 'zapier',
        purpose: 'Automated lead routing & CRM workflows',
      },
      {
        id: 'monday',
        name: 'Monday.com',
        category: 'CRM & Operations',
        logoKey: 'monday',
        purpose: 'Campaign operations & account workflows',
      },
      {
        id: 'unbounce',
        name: 'Unbounce',
        category: 'CRM & Operations',
        logoKey: 'unbounce',
        purpose: 'Dedicated conversion landing pages',
      },
      {
        id: 'clicksend',
        name: 'ClickSend',
        category: 'CRM & Operations',
        logoKey: 'clicksend',
        purpose: 'Automated SMS follow-up & notifications',
      },
      {
        id: 'jobnimbus',
        name: 'JobNimbus',
        category: 'CRM & Operations',
        logoKey: 'jobnimbus',
        purpose: 'Roofing & contractor CRM integration',
      },
      {
        id: 'roofr',
        name: 'Roofr',
        category: 'CRM & Operations',
        logoKey: 'roofr',
        purpose: 'Roofing instant estimates & lead capture',
      },
      {
        id: 'jobber',
        name: 'Jobber',
        category: 'CRM & Operations',
        logoKey: 'jobber',
        purpose: 'Home service scheduling & intake sync',
      },
    ] satisfies ToolItem[],
  },

  caseStudies: {
    kicker: '03 — SELECTED WORK',
    headingPrefix: 'Campaigns, Strategy',
    headingAccent: '& Execution',
    subtitle:
      'Structured paid acquisition frameworks built for US home service businesses across Meta Ads, Google Ads, and automated lead pipelines.',
    items: [
      {
        id: 'case-01-roofing',
        slug: 'us-roofing-lead-generation',
        index: 'CASE STUDY 01',
        industry: 'Roofing',
        platform: 'Meta Ads & Google Ads',
        platformTags: ['Meta Ads', 'Google Ads'],
        market: 'United States',
        title: 'US Roofing Lead Generation Campaigns',
        shortDescription:
          'Managing paid acquisition campaigns for US-based roofing businesses, with a focus on lead generation, geographic targeting, campaign structure, budget allocation, and ongoing performance optimization.',
        objectives: [
          'Generate consistent qualified residential and commercial roofing inquiries across target service territories.',
          'Structure segmented Meta Ads and Google Search campaigns for repair, replacement, and instant quote funnels.',
          'Maintain disciplined daily budget pacing and accurate conversion tracking across landing pages and call channels.',
        ],
        execution: [
          'Campaign setup and management across Meta CBO/ABO and Google Search structures.',
          'Geographic and service-area targeting aligned to contractor dispatch radii.',
          'Budget allocation and pacing across active testing and core acquisition campaigns.',
          'Ongoing campaign optimization across creative formats and search intent.',
          'Conversion tracking via Meta Pixel, Google Tag Manager, and CallRail.',
          'Continuous account-level performance monitoring and reporting.',
        ],
        tools: [
          'Meta Ads Manager',
          'Google Ads',
          'Google Tag Manager',
          'Meta Pixel',
          'CallRail',
          'Roofr',
          'JobNimbus',
        ],
        coverImage: {
          src: '/assets/aistudio/_2_2a473a0e.jpg',
          alt: 'Meta Ads Manager dashboard showing roofing repair CBO and ABO lead generation campaigns',
          caption:
            'Meta Ads Manager view featuring active CBO & ABO broad testing, repair campaigns, and video/image asset sets.',
          platformLabel: 'Meta Ads Manager',
        },
        gallery: [
          {
            src: '/assets/aistudio/_2_2a473a0e.jpg',
            alt: 'Meta Ads Manager roofing CBO and ABO campaign structure',
            caption:
              'Segmented CBO & ABO campaign architecture separating Repair, Broad Testing, and Video/Image creative sets.',
            platformLabel: 'Meta Ads Manager',
          },
          {
            src: '/assets/aistudio/_4_016f1b8a.jpg',
            alt: 'Meta Ads Manager TOFU Instant Quote and ACB campaigns',
            caption:
              'Top-of-funnel Instant Quote and ACB campaign sets configured for website lead conversions.',
            platformLabel: 'Meta Ads Manager',
          },
          {
            src: '/assets/aistudio/_3_e3496752.jpg',
            alt: 'Meta Ads Manager dynamic video and commercial lead campaigns',
            caption:
              'Dynamic video, static image, and commercial roofing lead campaigns running across active ad sets.',
            platformLabel: 'Meta Ads Manager',
          },
          {
            src: '/assets/aistudio/C2_755bd261.png',
            alt: 'Google Ads weekly clicks, CPC, conversion rate, and conversions chart',
            caption:
              'Google Ads weekly performance comparison tracking Clicks, Avg. CPC, Conversion Rate, and Conversions.',
            platformLabel: 'Google Ads',
          },
          {
            src: '/assets/aistudio/C3_204e6868.png',
            alt: 'Google Ads cost per conversion and click trend overview',
            caption:
              'Google Ads campaign view monitoring cost per conversion alongside daily click and conversion volume.',
            platformLabel: 'Google Ads',
          },
        ],
        metrics: [],
      },
      {
        id: 'case-02-dealer-rejuvenation',
        slug: 'dealer-based-lead-generation',
        index: 'CASE STUDY 02',
        industry: 'Roof Rejuvenation / Home Services',
        platform: 'Meta Ads',
        platformTags: ['Meta Ads', 'Automation'],
        market: 'United States',
        title: 'Dealer-Based Lead Generation Campaigns',
        shortDescription:
          'Managing advertising campaigns across multiple dealer accounts within the US home services market.',
        objectives: [
          'Operate standardized, localized lead generation campaigns across distinct US dealer territories without audience overlap.',
          'Connect paid media leads directly into CRM deal pipelines and scheduling workflows.',
          'Troubleshoot delivery, attribution, and tracking discrepancies rapidly at the individual account level.',
        ],
        execution: [
          'Individual campaign management across multi-account dealer portfolios.',
          'Precise geographic targeting tailored to local dealer service boundaries.',
          'Dedicated account-level daily budget management and pacing.',
          'Lead generation optimization using 7-day click attribution and website lead events.',
          'Proactive campaign troubleshooting and delivery diagnostics.',
          'Automated lead routing and performance monitoring through CRM integrations.',
        ],
        tools: [
          'Meta Ads Manager',
          'Meta Lead Events',
          'Zapier',
          'HubSpot',
          'Monday.com',
          'ClickSend',
        ],
        coverImage: {
          src: '/assets/aistudio/_5_b08f9687.jpg',
          alt: 'Meta Ads Manager view for localized roof rejuvenation dealer campaign',
          caption:
            'Localized Meta Ads Manager dealer campaign configured with 7-day click attribution and website lead tracking.',
          platformLabel: 'Meta Ads Manager',
        },
        gallery: [
          {
            src: '/assets/aistudio/_5_b08f9687.jpg',
            alt: 'Meta Ads Manager localized dealer campaign view',
            caption:
              'Single-territory dealer campaign view in Meta Ads Manager tracking website leads and daily budget pacing.',
            platformLabel: 'Meta Ads Manager',
          },
          {
            src: '/assets/aistudio/_1_de27f848.jpg',
            alt: 'Zapier multi-path automation workflow connecting Calendly, HubSpot, and Slack',
            caption:
              '28-step Zapier workflow routing scheduled calls into HubSpot contacts, companies, deals, and Slack alerts.',
            platformLabel: 'Zapier & HubSpot Automation',
          },
          {
            src: '/assets/aistudio/C4_5dc7b4c3.jpg',
            alt: 'Campaign trend chart showing impression, conversion, and value tracking',
            caption:
              'Monthly campaign monitoring view tracking impression volume alongside conversion value trends.',
            platformLabel: 'Campaign Analytics',
          },
        ],
        metrics: [],
      },
      {
        id: 'case-03-gutters-expansion',
        slug: 'local-market-acquisition-geographic-expansion',
        index: 'CASE STUDY 03',
        industry: 'Gutters / Home Improvement',
        platform: 'Meta Ads & Google Ads',
        platformTags: ['Meta Ads', 'Google Ads'],
        market: 'United States',
        title: 'Local Market Acquisition & Geographic Expansion',
        shortDescription:
          'Managing paid acquisition for a local home improvement business, with particular attention to budget allocation, geographic coverage, and service-area targeting.',
        objectives: [
          'Capture high-intent local search demand alongside social discovery for home improvement and gutter services.',
          'Map and expand coverage into adjacent high-potential ZIP codes without diluting lead quality.',
          'Align budget allocation across branded search, broad acquisition, and multi-period scaling.',
        ],
        execution: [
          'Territory analysis to prioritize core and expansion service zones.',
          'Granular ZIP code targeting and location exclusions across search and social.',
          'Campaign budget management balancing branded defense and non-branded acquisition.',
          'Phased geographic expansion planning supported by weekly trend reviews.',
          'Coordinated paid search and paid social advertising execution.',
          'End-to-end conversion tracking across web forms and inbound phone calls.',
        ],
        tools: [
          'Google Ads',
          'Meta Ads Manager',
          'Google Tag Manager',
          'Google Ads Conversion Tracking',
          'Unbounce',
          'Jobber',
        ],
        coverImage: {
          src: '/assets/aistudio/_6_2c8b0c2a.jpg',
          alt: 'Google Ads Search campaign table showing Branded and Leads Broad campaigns for a home improvement account',
          caption:
            'Google Ads Search account view separating Branded and Leads | Broad campaigns with conversion rate tracking.',
          platformLabel: 'Google Ads Search',
        },
        gallery: [
          {
            src: '/assets/aistudio/_6_2c8b0c2a.jpg',
            alt: 'Google Ads Search Branded and Leads Broad campaign structure',
            caption:
              'Google Ads Search structure isolating Branded search from Broad acquisition campaigns.',
            platformLabel: 'Google Ads Search',
          },
          {
            src: '/assets/aistudio/C1_fa003ad7.jpg',
            alt: 'Google Ads multi-month scaling comparison from July to September',
            caption:
              'Multi-period Google Ads campaign scaling view comparing early-phase spend with expanded coverage.',
            platformLabel: 'Google Ads Scaling',
          },
          {
            src: '/assets/aistudio/C6_bf8aa5fc.jpg',
            alt: 'Google Ads 4-month cumulative cost and conversion value trend',
            caption:
              'Four-month cumulative campaign trajectory tracking investment against conversion value.',
            platformLabel: 'Google Ads Trend',
          },
          {
            src: '/assets/aistudio/C5_b9c1eb5e.jpg',
            alt: 'Google Ads May vs September expanded budget performance view',
            caption:
              'Period-over-period campaign comparison tracking scaled budget deployment and conversion value growth.',
            platformLabel: 'Google Ads Scaling',
          },
          {
            src: '/assets/aistudio/C7_934814a9.jpg',
            alt: 'Google Ads overview comparing January baseline to August scaled account volume',
            caption:
              'Account-level overview comparing initial baseline volume against scaled multi-campaign performance.',
            platformLabel: 'Google Ads Overview',
          },
        ],
        metrics: [],
      },
    ] satisfies CaseStudy[],
  },

  industries: {
    kicker: '04 — INDUSTRIES',
    headingPrefix: "Markets I've",
    headingAccent: 'Worked Across',
    subtitle:
      'Focused execution in competitive US local service verticals where lead quality, territory precision, and speed-to-lead determine profitability.',
    items: [
      {
        id: 'roofing',
        name: 'Roofing & Exterior Services',
        focus: 'Storm, Repair & Full Replacement',
        description:
          'High-intent search and social lead generation built around service radii, seasonal demand, and homeowner qualification.',
        iconKey: 'home',
      },
      {
        id: 'gutters',
        name: 'Gutters',
        focus: 'Installation & Gutter Protection',
        description:
          'Geo-fenced acquisition and ZIP-code expansion strategies designed for local residential service territories.',
        iconKey: 'droplets',
      },
      {
        id: 'hvac',
        name: 'HVAC',
        focus: 'Heating, Cooling & Maintenance',
        description:
          'Demand-capture search and local awareness campaigns aligned with urgent seasonal service calls.',
        iconKey: 'wind',
      },
      {
        id: 'remodeling',
        name: 'Remodeling',
        focus: 'Kitchen, Bath & Interior',
        description:
          'Higher-ticket project inquiry funnels pairing visual creative on Meta with intent-based Google Search.',
        iconKey: 'hammer',
      },
      {
        id: 'tree-services',
        name: 'Tree Services',
        focus: 'Removal, Trimming & Emergency',
        description:
          'Hyper-local radius targeting and call-focused conversion tracking for rapid contractor dispatch.',
        iconKey: 'trees',
      },
      {
        id: 'garage-flooring',
        name: 'Garage Flooring',
        focus: 'Epoxy & Polyaspartic Coatings',
        description:
          'Before-and-after visual creative testing paired with dedicated quote-request landing pages.',
        iconKey: 'layers',
      },
      {
        id: 'home-improvement',
        name: 'Home Improvement',
        focus: 'Multi-Trade Residential Contractors',
        description:
          'Structured multi-service campaign architectures balancing cost-per-lead stability with territory growth.',
        iconKey: 'wrench',
      },
      {
        id: 'local-services',
        name: 'Local Service Businesses',
        focus: 'Regional & Multi-Location Operators',
        description:
          'End-to-end paid media, call attribution, and CRM workflow integration for measurable local customer acquisition.',
        iconKey: 'mapPin',
      },
    ] satisfies IndustryItem[],
  },

  experience: {
    kicker: '05 — EXPERIENCE',
    headingPrefix: 'Professional',
    headingAccent: 'Journey',
    items: [
      {
        id: 'exp-agency-2025',
        period: 'June 2025 — Present',
        role: 'Paid Ads / Performance Marketing Specialist',
        organization: 'US Home Services Lead Generation Agency',
        location: 'United States Market (Remote)',
        description:
          'Responsible for managing and optimizing paid advertising campaigns for US-based home service businesses across Meta and Google Ads.',
        responsibilities: [
          'Managing multiple client advertising accounts across US home service verticals.',
          'Campaign setup and optimization across Meta Ads and Google Ads.',
          'Budget management and pacing aligned with monthly client targets.',
          'Lead generation funnel execution and landing page coordination.',
          'Geographic targeting and service-area territory management.',
          'Conversion tracking implementation and troubleshooting.',
          'Monitoring account-level performance and delivering clear optimization insights.',
        ],
      },
      {
        id: 'exp-saltys-media',
        period: 'June 2024 — Present',
        role: 'Senior Media Buyer — Full Time',
        organization: "Salty's Media",
        location: 'Florida, US (Remote)',
        description:
          'Leading multi-channel digital acquisition across Google Ads, Meta Ads, TikTok Ads, Local SEO, and geofencing for US home-service contractors and niche businesses.',
        responsibilities: [
          'Managed multi-channel paid campaigns across Google Ads, Meta, TikTok, and geofencing.',
          'Built performance reporting dashboards using GA4 and Looker Studio with automated bid monitoring.',
          'Launched geo-targeted search and social campaigns paired with custom Unbounce landing pages and retargeting flows.',
          'Coordinated CRM pipelines, HubSpot deal tracking, and Zapier automation workflows for contractor clients.',
        ],
      },
    ] satisfies ExperienceItem[],
  },

  approach: {
    kicker: 'METHODOLOGY',
    headingPrefix: 'A Structured Approach',
    headingAccent: 'to Performance',
    steps: [
      {
        number: '01',
        title: 'Understand',
        description:
          'Understand the business, market, acquisition objectives, and target customer.',
      },
      {
        number: '02',
        title: 'Build',
        description:
          'Develop the campaign structure, advertising strategy, targeting, and tracking infrastructure.',
      },
      {
        number: '03',
        title: 'Optimize',
        description:
          'Analyze campaign performance, manage spending, test opportunities, and identify areas for improvement.',
      },
      {
        number: '04',
        title: 'Scale',
        description:
          'Increase investment strategically when campaign performance and business objectives support it.',
      },
    ] satisfies ApproachStep[],
  },

  contact: {
    kicker: "06 — LET'S CONNECT",
    headingPrefix: 'Ready to Make',
    headingAccent: 'Advertising Work Better?',
    description:
      "Whether you're looking for an experienced media buyer, need help managing paid acquisition campaigns, or want to discuss a remote opportunity, I'd be happy to connect.",
    email: 'Ahmedsamir1026@icloud.com',
    linkedinUrl: 'https://www.linkedin.com/in/ahmedsamirx/',
    linkedinHandle: 'linkedin.com/in/ahmedsamirx',
    whatsappNumber: '+201115025510',
    whatsappDigits: '201115025510',
  },
} as const;
