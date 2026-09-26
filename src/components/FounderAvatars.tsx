import React from 'react';

interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const FounderAvatar: React.FC<AvatarProps> = ({ name, size = 'md', className = '' }) => {
  const isAryan = name.toLowerCase().includes('aryan');

  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-14 h-14 text-base',
    xl: 'w-18 h-18 text-xl',
  }[size];

  if (isAryan) {
    return (
      <div
        className={`relative rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs ${sizeClasses} ${className}`}
        title="Aryan Thakur (Co-Founder & Head of Product)"
      >
        {/* Stylized high-resolution portrait for Aryan Thakur */}
        <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="aryanBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="skinAryan" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8b999" />
              <stop offset="100%" stopColor="#d19772" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#aryanBg)" />
          {/* Studio warm glow */}
          <circle cx="80" cy="20" r="35" fill="#4f46e5" opacity="0.3" />

          {/* Shoulders & Jacket */}
          <path d="M 12 100 C 14 78, 30 70, 50 70 C 70 70, 86 78, 88 100 Z" fill="#182030" />
          {/* Inner dark tee */}
          <path d="M 40 70 L 50 84 L 60 70 Z" fill="#0b0f19" />
          {/* Lapels */}
          <path d="M 28 72 L 40 100 L 22 100 Z" fill="#253248" />
          <path d="M 72 72 L 60 100 L 78 100 Z" fill="#253248" />

          {/* Neck */}
          <rect x="42" y="52" width="16" height="22" rx="4" fill="#c48a66" />
          {/* Head & Face */}
          <ellipse cx="50" cy="42" rx="19" ry="24" fill="url(#skinAryan)" />
          {/* Hair */}
          <path d="M 29 36 C 30 20, 42 15, 64 17 C 72 20, 72 32, 69 40 C 66 28, 58 24, 46 25 C 38 26, 32 30, 29 36 Z" fill="#171717" />
          {/* Eyebrows */}
          <path d="M 36 34 Q 42 32 46 34" stroke="#171717" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 54 34 Q 58 32 64 34" stroke="#171717" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Eyes */}
          <circle cx="41" cy="39" r="2.2" fill="#171717" />
          <circle cx="59" cy="39" r="2.2" fill="#171717" />
          <circle cx="42" cy="38" r="0.6" fill="#ffffff" />
          <circle cx="60" cy="38" r="0.6" fill="#ffffff" />
          {/* Nose */}
          <path d="M 50 38 L 48 47 L 52 47" stroke="#b37855" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          {/* Confident Smile */}
          <path d="M 42 53 Q 50 60 58 53" stroke="#965634" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 44 54 Q 50 58 56 54" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" />
          {/* Groomed light stubble */}
          <path d="M 39 49 Q 50 64 61 49" stroke="#9c6b4e" strokeWidth="1.2" strokeDasharray="1.5 2" fill="none" opacity="0.6" />
        </svg>
      </div>
    );
  }

  // Satyam Mishra
  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs ${sizeClasses} ${className}`}
      title="Satyam Mishra (Co-Founder & Head of Operations)"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="satyamBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="skinSatyam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0c2a5" />
            <stop offset="100%" stopColor="#d59976" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#satyamBg)" />
        {/* Teal glow */}
        <circle cx="20" cy="20" r="35" fill="#006a61" opacity="0.3" />

        {/* Shoulders & Royal Blue Blazer */}
        <path d="M 12 100 C 14 78, 30 70, 50 70 C 70 70, 86 78, 88 100 Z" fill="#1e40af" />
        {/* Inner white shirt */}
        <path d="M 42 70 L 50 82 L 58 70 Z" fill="#ffffff" />
        <path d="M 48 70 L 50 84 L 52 70 Z" fill="#cbd5e1" />

        {/* Neck */}
        <rect x="42" y="52" width="16" height="22" rx="4" fill="#c48a66" />
        {/* Head & Face */}
        <ellipse cx="50" cy="42" rx="19" ry="24" fill="url(#skinSatyam)" />
        {/* Hair */}
        <path d="M 30 34 C 32 18, 44 14, 65 16 C 73 19, 72 32, 69 38 C 66 26, 56 22, 45 23 C 37 24, 32 28, 30 34 Z" fill="#111827" />
        {/* Eyeglasses */}
        <rect x="33" y="34" width="14" height="10" rx="3" fill="none" stroke="#0f172a" strokeWidth="2" />
        <rect x="53" y="34" width="14" height="10" rx="3" fill="none" stroke="#0f172a" strokeWidth="2" />
        <path d="M 47 38 L 53 38" stroke="#0f172a" strokeWidth="2" />
        <path d="M 31 38 L 33 38" stroke="#0f172a" strokeWidth="1.5" />
        <path d="M 67 38 L 69 38" stroke="#0f172a" strokeWidth="1.5" />

        {/* Eyes inside glasses */}
        <circle cx="40" cy="39" r="2" fill="#111827" />
        <circle cx="60" cy="39" r="2" fill="#111827" />
        {/* Nose */}
        <path d="M 50 39 L 48 48 L 52 48" stroke="#b37855" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Beard & Mustache */}
        <path d="M 43 51 Q 50 54 57 51" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 38 48 Q 50 67 62 48" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Warm smile */}
        <path d="M 44 55 Q 50 60 56 55" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
};
