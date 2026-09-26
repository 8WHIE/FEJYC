import React from 'react';
import { MapPin, Navigation, Compass, Layers } from 'lucide-react';

export const MuzaffarpurMap: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#c7c4d8]/40 bg-[#eef7ee] shadow-sm select-none">
      {/* Map Graphic Canvas / Stylized Cartography */}
      <svg
        viewBox="0 0 460 220"
        className="w-full h-48 sm:h-52 object-cover block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#a5d8f3" />
            <stop offset="100%" stopColor="#81caed" />
          </linearGradient>
          <pattern id="roadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e8db" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* Base Green / Pasture Terrain */}
        <rect width="460" height="220" fill="#e9f3e4" />
        <rect width="460" height="220" fill="url(#roadGrid)" />

        {/* Urban Zones / Settlement Patches */}
        <path d="M 120,40 Q 180,30 220,60 T 320,80 L 340,140 Q 280,170 190,150 T 100,100 Z" fill="#dfebd6" opacity="0.8" />
        <path d="M 160,70 Q 220,65 260,95 T 280,150 L 190,140 Z" fill="#d4e4cb" opacity="0.9" />

        {/* Gandak / Burhi Gandak River Path */}
        <path
          d="M 60,-10 C 140,25 210,15 260,35 C 310,55 380,40 450,15 L 460,-10 L 60,-10 Z"
          fill="url(#riverGrad)"
        />
        <path
          d="M 140,10 C 200,38 280,28 350,45"
          fill="none"
          stroke="#68b4dd"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.85"
        />
        <text x="215" y="28" fill="#307297" fontSize="8" fontWeight="600" letterSpacing="0.05em">
          Burhi Gandak River
        </text>

        {/* Major Arterial Roads & National Highways (AH42 / NH28) */}
        {/* Main West-East highway */}
        <path d="M -10,135 Q 120,110 240,115 T 470,165" fill="none" stroke="#fcd34d" strokeWidth="4.5" />
        <path d="M -10,135 Q 120,110 240,115 T 470,165" fill="none" stroke="#f59e0b" strokeWidth="3" />

        {/* North-South corridor */}
        <path d="M 215,-10 L 210,65 Q 212,115 240,165 L 255,230" fill="none" stroke="#ffffff" strokeWidth="4" />
        <path d="M 215,-10 L 210,65 Q 212,115 240,165 L 255,230" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

        {/* Bypass & Secondary roads */}
        <path d="M 70,80 L 130,130 L 170,180" fill="none" stroke="#ffffff" strokeWidth="2" />
        <path d="M 130,130 L 210,115 L 340,120 L 410,100" fill="none" stroke="#ffffff" strokeWidth="2" />
        <path d="M 340,120 L 375,165 L 430,195" fill="none" stroke="#ffffff" strokeWidth="2" />
        <path d="M 40,140 L 70,180 L 140,210" fill="none" stroke="#ffffff" strokeWidth="1.8" />

        {/* Road Badges */}
        <rect x="140" y="102" width="22" height="11" rx="2.5" fill="#f59e0b" />
        <text x="143" y="110" fill="#ffffff" fontSize="6.5" fontWeight="bold">AH42</text>

        <rect x="75" y="130" width="18" height="9" rx="2" fill="#ef4444" />
        <text x="78" y="137" fill="#ffffff" fontSize="6" fontWeight="bold">722</text>

        {/* Regional Place Labels from real Muzaffarpur geography */}
        {/* Paigamberpur */}
        <circle cx="160" cy="50" r="2.5" fill="#475569" />
        <text x="165" y="47" fill="#334155" fontSize="7.5" fontWeight="500">Paigamber Pur</text>
        <text x="165" y="55" fill="#64748b" fontSize="6.5">Kolhua</text>

        {/* Bhagwanpur */}
        <circle cx="140" cy="98" r="2.5" fill="#475569" />
        <text x="110" y="94" fill="#1e293b" fontSize="8" fontWeight="600">Bhagwanpur</text>

        {/* Patahi */}
        <circle cx="115" cy="142" r="2" fill="#64748b" />
        <text x="95" y="145" fill="#334155" fontSize="7.5">Patahi</text>

        {/* Central Muzaffarpur Urban Hub */}
        <circle cx="218" cy="115" r="3.5" fill="#3525cd" stroke="#ffffff" strokeWidth="1.5" />
        <text x="226" y="112" fill="#0f172a" fontSize="9" fontWeight="700">Muzaffarpur</text>
        <text x="226" y="122" fill="#3525cd" fontSize="7" fontWeight="600">मुजफ्फरपुर</text>

        {/* Khabra */}
        <circle cx="205" cy="148" r="2" fill="#64748b" />
        <text x="175" y="152" fill="#334155" fontSize="7.5">Khabra</text>

        {/* Hospital Landmark */}
        <rect x="275" y="138" width="12" height="12" rx="2" fill="#ef4444" />
        <text x="278" y="147" fill="#ffffff" fontSize="9" fontWeight="bold">H</text>
        <text x="290" y="143" fill="#64748b" fontSize="6.5">The Leprosy</text>
        <text x="290" y="150" fill="#64748b" fontSize="6">Mission Hospital</text>

        {/* Majhauli & East side */}
        <circle cx="395" cy="62" r="2" fill="#64748b" />
        <text x="375" y="58" fill="#334155" fontSize="7.5">Majhauli</text>
        <text x="375" y="66" fill="#64748b" fontSize="6.5">मझौली</text>

        {/* Narauli */}
        <circle cx="410" cy="165" r="2" fill="#64748b" />
        <text x="390" y="172" fill="#334155" fontSize="7.5">Narauli</text>
        <text x="390" y="180" fill="#64748b" fontSize="6.5">नारौली</text>

        {/* Radar Pulse on FEJYC HQ */}
        <circle cx="218" cy="115" r="14" fill="#3525cd" fillOpacity="0.15" />
        <circle cx="218" cy="115" r="24" fill="#3525cd" fillOpacity="0.08" />
      </svg>

      {/* Map Control Overlays */}
      <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10">
        <span className="p-1.5 bg-white/90 backdrop-blur-md rounded-lg shadow-xs text-[#3525cd] text-xs font-semibold flex items-center gap-1 border border-slate-200/80">
          <Navigation className="w-3 h-3 text-[#3525cd]" />
          <span className="text-[10px] tracking-tight">HQ Radar</span>
        </span>
      </div>

      {/* Floating Center Pin Overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-[#c7c4d8]/40 flex items-center gap-1.5 text-xs text-[#131b2e] font-medium max-w-full truncate">
          <MapPin className="w-3.5 h-3.5 text-[#3525cd] shrink-0 fill-[#3525cd]/15" />
          <span className="font-semibold text-[#131b2e] truncate">
            Muzaffarpur, Bihar – 842001, India
          </span>
        </div>
      </div>
    </div>
  );
};
