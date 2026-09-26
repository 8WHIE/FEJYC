import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Mail,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  PhoneCall,
  Briefcase,
  Users,
  ChevronRight,
  Code
} from 'lucide-react';
import { FounderInquiry } from '../types';
import { FounderAvatar } from './FounderAvatars';
import { MuzaffarpurMap } from './MuzaffarpurMap';

export const AboutTab: React.FC = () => {
  const [inquiryCategory, setInquiryCategory] = useState<FounderInquiry['category']>('Job Seeker Help');
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories: FounderInquiry['category'][] = [
    'Job Seeker Help',
    'Recruiter Collab',
    'Verification Support',
    'General Query'
  ];

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contactInfo.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFullName('');
      setContactInfo('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <div className="pb-24 pt-3 px-4 space-y-6 animate-fadeIn">
      {/* 1. Hero Card: Our Mission */}
      <div className="rounded-2xl bg-gradient-to-br from-[#3525cd] via-[#4338ca] to-[#4f46e5] text-white p-5 shadow-md space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold flex items-center gap-1.5 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#86f2e4] animate-pulse" />
            OUR MISSION
          </span>
          <span className="text-[11px] font-semibold text-[#86f2e4]">
            Made for Bharat
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-[26px] font-extrabold text-white leading-tight tracking-tight">
            FEJYC is a hiring platform concept focused on making job discovery and recruitment simpler and faster.
          </h1>
          <p className="text-xs text-[#dad7ff] mt-2 leading-relaxed">
            Empowering ambitious job seekers and forward-thinking recruiters across India with hyper-local access and verified career progression.
          </p>
        </div>

        {/* 3 Metric Columns */}
        <div className="pt-2 border-t border-white/15 grid grid-cols-3 text-center divide-x divide-white/15">
          <div>
            <div className="text-xl font-extrabold text-white tabular-nums">Fast</div>
            <div className="text-[10px] text-[#dad7ff] font-medium mt-0.5">Hiring</div>
          </div>
          <div>
            <div className="text-xl font-extrabold text-[#86f2e4] tabular-nums">Easy</div>
            <div className="text-[10px] text-[#dad7ff] font-medium mt-0.5">Job Discovery</div>
          </div>
          <div>
            <div className="text-xl font-extrabold text-white tabular-nums">100%</div>
            <div className="text-[10px] text-[#dad7ff] font-medium mt-0.5">Verified</div>
          </div>
        </div>
      </div>

      {/* 2. Direct Founder Hotlines */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-sm text-[#131b2e]">
            Direct Founder Hotlines
          </h2>
          <span className="text-[11px] font-bold text-[#006a61] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Instant Routing
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Telegram */}
          <a
            href="https://t.me/Amxkt"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#eaedff] hover:bg-[#dae2fd] rounded-2xl border border-[#c7c4d8]/40 shadow-xs flex items-center justify-between transition-transform active:scale-98 cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#0088cc] text-white flex items-center justify-center shrink-0">
                <Send className="w-4 h-4 transform -rotate-12 ml-0.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-[#464555] font-semibold block leading-tight">
                  Telegram
                </span>
                <span className="text-xs font-bold text-[#131b2e] truncate block">
                  @Amxkt
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#464555] group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/lmarykt"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#eaedff] hover:bg-[#dae2fd] rounded-2xl border border-[#c7c4d8]/40 shadow-xs flex items-center justify-between transition-transform active:scale-98 cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0">
                <span className="font-extrabold text-xs">IG</span>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-[#464555] font-semibold block leading-tight">
                  Instagram
                </span>
                <span className="text-xs font-bold text-[#131b2e] truncate block">
                  @lmarykt
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#464555] group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>
        </div>
      </div>

      {/* 3. Leadership: Founders & Visionaries */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#3525cd] uppercase tracking-wider block">
              Leadership
            </span>
            <h2 className="font-extrabold text-lg text-[#131b2e] tracking-tight">
              Founders & Visionaries
            </h2>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#86f2e4]/30 text-[#006a61] text-[11px] font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Leaders
          </span>
        </div>

        {/* Aryan Thakur Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            <FounderAvatar name="Aryan Thakur" size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-base text-[#131b2e]">
                  Aryan Thakur
                </h3>
                <span className="w-4 h-4 rounded-full bg-[#3525cd] text-white flex items-center justify-center text-[10px] font-bold" title="Verified Founder">
                  ✓
                </span>
              </div>
              <p className="text-xs font-bold text-[#3525cd]">
                Co-Founder & Head of Product
              </p>
              <p className="text-[11px] text-[#464555] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#777587]" />
                Muzaffarpur, Bihar
              </p>
            </div>
          </div>

          <p className="text-xs text-[#464555] leading-relaxed">
            Passionate builder focused on democratizing career discovery for talent across India. Architect of the FEJYC interface & seamless search workflows.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <a
              href="https://instagram.com/lmarykt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-[#3525cd] text-[11px] font-semibold flex items-center gap-1 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3525cd]" />
              <span>@lmarykt</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </a>
            <a
              href="https://t.me/Arnxkt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-[#3525cd] text-[11px] font-semibold flex items-center gap-1 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3525cd]" />
              <span>@Arnxkt</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </a>
            <span className="px-2.5 py-1 rounded-lg bg-[#eaedff] text-[#131b2e] text-[11px] font-semibold flex items-center gap-1">
              <Code className="w-3 h-3 text-[#3525cd]" />
              Core Systems
            </span>
          </div>
        </div>

        {/* Satyam Mishra Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            <FounderAvatar name="Satyam Mishra" size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-base text-[#131b2e]">
                  Satyam Mishra
                </h3>
                <span className="w-4 h-4 rounded-full bg-[#3525cd] text-white flex items-center justify-center text-[10px] font-bold" title="Verified Founder">
                  ✓
                </span>
              </div>
              <p className="text-xs font-bold text-[#006a61]">
                Co-Founder & Head of Operations
              </p>
              <p className="text-[11px] text-[#464555] flex items-center gap-1 mt-0.5">
                <Briefcase className="w-3 h-3 text-[#777587]" />
                Bihar Regional Network
              </p>
            </div>
          </div>

          <p className="text-xs text-[#464555] leading-relaxed">
            Driving strategic partnerships with companies and accelerating hiring ecosystems. Ensuring swift on-ground recruiter verification across tier-2 and tier-3 hubs.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <a
              href="https://t.me/Arnxkt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-[#3525cd] text-[11px] font-semibold flex items-center gap-1 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3525cd]" />
              <span>Direct Telegram (@Arnxkt)</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </a>
            <span className="px-2.5 py-1 rounded-lg bg-[#f2f3ff] text-[#464555] text-[11px] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              @lmarykt Network
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#eaedff] text-[#131b2e] text-[11px] font-semibold flex items-center gap-1">
              <span>🤝</span>
              Partnerships
            </span>
          </div>
        </div>
      </div>

      {/* 4. Send Direct Inquiry */}
      <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-base text-[#131b2e]">
            Send Direct Inquiry
          </h2>
          <span className="px-2.5 py-0.5 rounded-full bg-[#86f2e4]/30 text-[#006a61] text-[11px] font-bold flex items-center gap-1">
            <Clock className="w-3 h-3" />
            ~2 hr reply
          </span>
        </div>

        <p className="text-xs text-[#464555] leading-relaxed">
          Your message goes straight to Aryan Thakur & Satyam Mishra's priority desk.
        </p>

        <form onSubmit={handleSubmitInquiry} className="space-y-3">
          {/* Inquiry Category */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
              Inquiry Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => {
                const isSelected = inquiryCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setInquiryCategory(cat)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      isSelected
                        ? 'bg-[#3525cd] text-white shadow-xs'
                        : 'bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
              Your Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
            />
          </div>

          {/* Email or WhatsApp Number */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
              Email or WhatsApp Number
            </label>
            <input
              type="text"
              required
              placeholder="rahul@example.com or +91 98765 43210"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
            />
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
              Message for the Founders
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell Aryan & Satyam how we can support your hiring or job discovery..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd] resize-none"
            />
          </div>

          {submitted && (
            <div className="p-3 bg-[#86f2e4]/30 rounded-xl border border-[#006a61] text-[#006a61] text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Message dispatched to Aryan & Satyam's direct inbox!</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-98 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Routing Message...' : 'Send Message to Founders'}</span>
          </button>
        </form>
      </div>

      {/* 5. HEADQUARTERS & HUB */}
      <div className="space-y-3">
        <div>
          <span className="text-[10px] font-bold text-[#006a61] uppercase tracking-wider block">
            Headquarters & Hub
          </span>
          <h2 className="font-extrabold text-base text-[#131b2e]">
            FEJYC Bihar Operations
          </h2>
        </div>

        {/* Muzaffarpur Vector Map */}
        <MuzaffarpurMap />

        {/* Address and Contact Actions */}
        <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3">
          <div className="flex items-start gap-2.5 text-xs text-[#131b2e]">
            <MapPin className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Registered Office</span>
              <span className="text-[#464555] text-xs leading-relaxed">
                Muzaffarpur Central, Bihar – 842001, Republic of India
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#dae2fd] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#3525cd]" />
              <span className="text-xs font-medium text-[#131b2e]">contact@fejyc.in</span>
            </div>
            <a
              href="mailto:contact@fejyc.in"
              className="text-xs font-bold text-[#3525cd] hover:underline"
            >
              Email Us
            </a>
          </div>

          <div className="pt-2 border-t border-[#dae2fd] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#006a61]" />
              <div>
                <span className="text-xs font-medium text-[#131b2e] block leading-tight">
                  Official Helpline
                </span>
                <span className="text-[10px] text-[#777587]">
                  24/7 Portal Grievance Support
                </span>
              </div>
            </div>
            <a
              href="https://wa.me/919835044219"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#006a61] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs hover:bg-[#005049]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 6. Footer Note */}
      <div className="pt-4 pb-2 text-center space-y-1">
        <div className="text-[10px] uppercase font-bold tracking-widest text-[#777587]">
          Proudly Crafted for Indian Careers
        </div>
        <p className="text-xs font-semibold text-[#464555]">
          FEJYC Career Platform • Created by 8WHIE
        </p>
        <p className="text-xs font-semibold text-[#464555]">
          Owner: Aryan Thakur
        </p>
      </div>
    </div>
  );
};
