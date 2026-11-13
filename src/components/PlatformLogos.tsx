import React from 'react';

interface PlatformLogoProps {
  logoKey: string;
  className?: string;
}

export const PlatformLogo: React.FC<PlatformLogoProps> = ({ logoKey, className = 'w-6 h-6' }) => {
  switch (logoKey) {
    case 'meta':
    case 'meta-events':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path
            d="M22.2 8.5c-2.6 0-4.4 2-6.2 4.7-1.8-2.7-3.6-4.7-6.2-4.7C6.1 8.5 3.5 12 3.5 16.5c0 4.2 2.4 7 5.7 7 2.5 0 4.3-1.6 6.8-5.6 2.5 4 4.3 5.6 6.8 5.6 3.3 0 5.7-2.8 5.7-7 0-4.5-2.6-8-6.3-8Zm-13 12.4c-1.8 0-3.1-1.8-3.1-4.4 0-2.9 1.4-5.4 3.6-5.4 1.8 0 3.2 1.7 4.9 4.5-2.1 3.5-3.5 5.3-5.4 5.3Zm13.6 0c-1.9 0-3.3-1.8-5.4-5.3 1.7-2.8 3.1-4.5 4.9-4.5 2.2 0 3.6 2.5 3.6 5.4 0 2.6-1.3 4.4-3.1 4.4Z"
            fill="#0081FB"
          />
        </svg>
      );

    case 'google-ads':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M5.4 22.8 13.6 8.6a2.8 2.8 0 0 1 4.8 2.8L10.2 25.6a2.8 2.8 0 0 1-4.8-2.8Z" fill="#FBBC04" />
          <path d="M26.6 22.8 18.4 8.6a2.8 2.8 0 1 0-4.8 2.8l8.2 14.2a2.8 2.8 0 0 0 4.8-2.8Z" fill="#4285F4" />
          <circle cx="7.8" cy="24.2" r="2.8" fill="#34A853" />
        </svg>
      );

    case 'tiktok':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path
            d="M21.2 5.5c.7 2.1 2.4 3.7 4.5 4.2v3.6c-1.7-.1-3.2-.6-4.5-1.5v7.6a6.4 6.4 0 1 1-5.6-6.3v3.7a2.8 2.8 0 1 0 2 2.7V5.5h3.6Z"
            fill="#F5F5F2"
          />
          <path
            d="M20.2 6.5c.7 2.1 2.4 3.7 4.5 4.2"
            stroke="#25F4EE"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M14.6 14.1a5.4 5.4 0 1 0 5.6 5.4"
            stroke="#FE2C55"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'gtm':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="m16 4.5 11.5 11.5L16 27.5 4.5 16 16 4.5Z" stroke="#4285F4" strokeWidth="2.4" />
          <path d="m16 10.5 5.5 5.5-5.5 5.5-5.5-5.5 5.5-5.5Z" fill="#8AB4F8" />
        </svg>
      );

    case 'ga4':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <rect x="20" y="6" width="5" height="20" rx="2.5" fill="#F9AB00" />
          <rect x="13" y="13" width="5" height="13" rx="2.5" fill="#E37400" />
          <circle cx="8.5" cy="23.5" r="2.5" fill="#F9AB00" />
        </svg>
      );

    case 'callrail':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <rect x="5" y="14" width="4" height="11" rx="2" fill="#38BDF8" />
          <rect x="11.5" y="9" width="4" height="16" rx="2" fill="#0EA5E9" />
          <rect x="18" y="12" width="4" height="13" rx="2" fill="#38BDF8" />
          <rect x="24.5" y="7" width="4" height="18" rx="2" fill="#0284C7" />
        </svg>
      );

    case 'hubspot':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <circle cx="17.5" cy="16" r="5" stroke="#FF7A59" strokeWidth="2.4" />
          <circle cx="24.5" cy="9" r="2.3" fill="#FF7A59" />
          <circle cx="8.5" cy="11.5" r="2.3" fill="#FF7A59" />
          <circle cx="10.5" cy="23.5" r="2.3" fill="#FF7A59" />
          <path d="M21 12.5 23.2 10.3M13.3 13.7l-3-1.4M14 19.5l-2.3 2.5" stroke="#FF7A59" strokeWidth="2" />
        </svg>
      );

    case 'zapier':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path
            d="M16 5v22M5 16h22M8.2 8.2l15.6 15.6M23.8 8.2 8.2 23.8"
            stroke="#FF4F00"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="3" fill="#090A0D" />
        </svg>
      );

    case 'monday':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M7.5 22.5 11.5 10.5" stroke="#FF3D57" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M14.5 22.5 18.5 10.5" stroke="#FFCB00" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="24" cy="22" r="2.3" fill="#00CA72" />
        </svg>
      );

    case 'unbounce':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path
            d="M7 10v7a9 9 0 0 0 18 0v-7"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="16" cy="10" r="2.5" fill="#F5F5F2" />
        </svg>
      );

    case 'clicksend':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path
            d="M6 15.5 25.5 7 18.5 25l-3.5-6.5L6 15.5Z"
            stroke="#38BDF8"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'jobnimbus':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path
            d="M6 16.5 16 8l10 8.5v9.5H6v-9.5Z"
            stroke="#60A5FA"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M13 26v-6h6v6" stroke="#60A5FA" strokeWidth="2.2" />
        </svg>
      );

    case 'roofr':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path
            d="M5 18 16 8l11 10"
            stroke="#FB7185"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9.5 23h13" stroke="#F5F5F2" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'jobber':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" rx="4" stroke="#4ADE80" strokeWidth="2.2" />
          <path
            d="M17.5 10.5v7.5a3 3 0 0 1-6 0"
            stroke="#4ADE80"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" stroke="#DEB764" strokeWidth="2" />
        </svg>
      );
  }
};
