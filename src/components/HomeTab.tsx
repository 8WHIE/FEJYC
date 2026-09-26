import React, { useState } from 'react';
import {
  Headphones,
  Code2,
  Smartphone,
  Megaphone,
  Truck,
  Building2,
  Briefcase,
  Bookmark,
  Zap,
  Send,
  TrendingUp,
  Store,
  CheckCircle2,
  ExternalLink,
  Search,
  Sparkles,
  Flame,
  ArrowRight,
  ShieldCheck,
  User,
  Users
} from 'lucide-react';
import { Job, TabType } from '../types';
import { FounderAvatar } from './FounderAvatars';

interface HomeTabProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  onApplyJob: (job: Job) => void;
  bookmarkedJobIds: string[];
  onToggleBookmark: (jobId: string) => void;
  onNavigateTab: (tab: TabType) => void;
  selectedCity: string;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  jobs,
  onSelectJob,
  onApplyJob,
  bookmarkedJobIds,
  onToggleBookmark,
  onNavigateTab,
  selectedCity,
}) => {
  const [roleIntent, setRoleIntent] = useState<'job' | 'hire'>('job');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllJobs, setShowAllJobs] = useState(false);

  const getJobIcon = (type: Job['iconType']) => {
    switch (type) {
      case 'headset':
        return <Headphones className="w-5 h-5 text-[#3525cd]" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-[#3525cd]" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-[#3525cd]" />;
      case 'marketing':
        return <Megaphone className="w-5 h-5 text-[#d97706]" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-[#2563eb]" />;
      case 'building':
        return <Building2 className="w-5 h-5 text-[#006a61]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#3525cd]" />;
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterCategory === 'remote') return job.workMode === 'Remote';
    if (filterCategory === 'hub') return job.location.toLowerCase().includes('muzaffarpur');
    if (filterCategory === 'fresher') return job.isFresherFriendly;
    return true;
  });

  return (
    <div className="pb-24 pt-3 px-4 space-y-6 animate-fadeIn">
      {/* 1. Mint Announcement Badge */}
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#86f2e4]/30 text-[#006a61] rounded-full text-[11px] font-bold tracking-wide uppercase">
          Bharat's Rapid Hiring Network
        </span>
      </div>

      {/* 2. Hero Headline & Subtitle */}
      <div className="space-y-2">
        <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#131b2e] leading-[1.18] tracking-tight">
          Find Your Dream Career or{' '}
          <span className="text-[#3525cd]">Hire Verified Talent</span> in Minutes
        </h1>
        <p className="text-sm text-[#464555] leading-relaxed">
          Connecting ambitious talent across Tier 1, Tier 2, and Tier 3 cities with verified high-growth companies.
        </p>
      </div>

      {/* 3. Segmented Role Switcher */}
      <div className="p-1 bg-[#eaedff] rounded-2xl flex items-center shadow-xs border border-[#c7c4d8]/40">
        <button
          type="button"
          onClick={() => setRoleIntent('job')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            roleIntent === 'job'
              ? 'bg-white text-[#3525cd] shadow-xs'
              : 'text-[#464555] hover:text-[#131b2e]'
          }`}
        >
          <User className="w-4 h-4" />
          <span>I want a Job</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setRoleIntent('hire');
            onNavigateTab('post_job');
          }}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            roleIntent === 'hire'
              ? 'bg-white text-[#3525cd] shadow-xs'
              : 'text-[#464555] hover:text-[#131b2e]'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>I want to Hire</span>
        </button>
      </div>

      {/* 4. Top Recommended Quick Cards */}
      <div className="space-y-3.5">
        {jobs.slice(0, 2).map((job) => {
          const isSaved = bookmarkedJobIds.includes(job.id);
          return (
            <div
              key={job.id}
              onClick={() => onSelectJob(job)}
              className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs hover:shadow-md transition-all cursor-pointer relative group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eaedff] flex items-center justify-center shrink-0">
                    {getJobIcon(job.iconType)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#131b2e] leading-snug group-hover:text-[#3525cd] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs text-[#464555] mt-0.5 font-medium">
                      {job.company} • <span className="text-[#3525cd]">{job.location}</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(job.id);
                  }}
                  className="p-1.5 text-[#464555] hover:text-[#3525cd] rounded-lg transition-colors cursor-pointer"
                  aria-label={isSaved ? 'Remove bookmark' : 'Bookmark job'}
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      isSaved ? 'fill-[#3525cd] text-[#3525cd]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#86f2e4]/30 text-[#006a61] text-[11px] font-bold tabular-nums">
                  {job.salary}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#464555] text-[11px] font-medium">
                  {job.workMode}
                </span>
                {job.isFresherFriendly && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#eaedff] text-[#3525cd] text-[11px] font-semibold">
                    🎓 Fresher Friendly
                  </span>
                )}
                {job.isImmediateJoiner && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ffdad6]/40 text-[#ba1a1a] text-[11px] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-ping" />
                    Immediate Joiner
                  </span>
                )}
              </div>

              {/* Footer Row */}
              <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-[#dae2fd]/50">
                <span className="text-[11px] text-[#777587]">
                  🕒 {job.postedTime}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onApplyJob(job);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-[#3525cd] hover:bg-[#4f46e5] text-white text-xs font-bold flex items-center gap-1 shadow-xs transition-transform active:scale-95 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>{job.applyType === '1-click' ? '1-Click Apply' : 'Easy Apply'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Big Feature Portal Cards */}
      <div className="space-y-3.5">
        {/* Card A: Job Seeker Portal */}
        <div
          onClick={() => onNavigateTab('job_seeker')}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3525cd] via-[#4338ca] to-[#4f46e5] text-white p-5 shadow-md cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86f2e4] animate-pulse" />
              50,000+ Active Roles
            </span>
            <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Job Seeker Portal
            </h2>
            <p className="text-xs text-[#dad7ff] mt-1.5 leading-relaxed pr-6">
              Explore roles in Tech, Banking, Sales across Tier 1, 2 & 3 cities with instant interview slots.
            </p>
          </div>

          <div className="mt-4 pt-2 flex items-center justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-white text-[#3525cd] rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm group-hover:bg-[#f2f3ff] transition-colors cursor-pointer"
            >
              <span>Find Jobs & Build Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-semibold text-[#86f2e4] tracking-tight">
              Zero Brokerage
            </span>
          </div>
        </div>

        {/* Card B: Job Provider (Employer Hub) */}
        <div
          onClick={() => onNavigateTab('post_job')}
          className="relative overflow-hidden rounded-2xl bg-[#eaedff] border border-[#c7c4d8]/40 p-5 shadow-xs cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-[#86f2e4]/40 text-[#006a61] text-[11px] font-bold flex items-center gap-1.5">
              <Zap className="w-3 h-3 fill-current" />
              Hire in 24 Hrs
            </span>
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-xs">
              <Store className="w-4 h-4 text-[#3525cd]" />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-extrabold text-[#131b2e] tracking-tight">
              Job Provider (Employer Hub)
            </h2>
            <p className="text-xs text-[#464555] mt-1.5 leading-relaxed pr-6">
              Reach verified talent across Muzaffarpur, Patna, Bengaluru, Delhi NCR & pan-India.
            </p>
          </div>

          <div className="mt-4 pt-2 flex items-center justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-[#3525cd] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#4f46e5] transition-colors cursor-pointer"
            >
              <span>Post a Job Listing</span>
              <span>📢</span>
            </button>
            <span className="text-[11px] font-bold text-[#006a61] tracking-tight">
              12k+ Recruited
            </span>
          </div>
        </div>
      </div>

      {/* 6. Hot Openings in India Section */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Flame className="w-5 h-5 text-[#ba1a1a] fill-[#ba1a1a]" />
            <h2 className="font-extrabold text-base text-[#131b2e]">
              Hot Openings in India
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setShowAllJobs(!showAllJobs)}
            className="text-xs font-bold text-[#3525cd] hover:underline cursor-pointer"
          >
            {showAllJobs ? 'Show Featured (6)' : 'View All (412)'}
          </button>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              filterCategory === 'all'
                ? 'bg-[#3525cd] text-white'
                : 'bg-white text-[#464555] border border-[#c7c4d8]/40'
            }`}
          >
            All Roles
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('hub')}
            className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              filterCategory === 'hub'
                ? 'bg-[#3525cd] text-white'
                : 'bg-white text-[#464555] border border-[#c7c4d8]/40'
            }`}
          >
            📍 Muzaffarpur Hub
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('remote')}
            className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              filterCategory === 'remote'
                ? 'bg-[#3525cd] text-white'
                : 'bg-white text-[#464555] border border-[#c7c4d8]/40'
            }`}
          >
            💻 Remote Pan-India
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('fresher')}
            className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              filterCategory === 'fresher'
                ? 'bg-[#3525cd] text-white'
                : 'bg-white text-[#464555] border border-[#c7c4d8]/40'
            }`}
          >
            Fresher Friendly
          </button>
        </div>

        {/* Jobs Feed */}
        <div className="space-y-3">
          {(showAllJobs ? filteredJobs : filteredJobs.slice(0, 6)).map((job) => {
            const isSaved = bookmarkedJobIds.includes(job.id);
            return (
              <div
                key={job.id}
                onClick={() => onSelectJob(job)}
                className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs hover:border-[#3525cd]/40 transition-all cursor-pointer relative"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eaedff] flex items-center justify-center shrink-0">
                      {getJobIcon(job.iconType)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#131b2e] leading-snug">
                        {job.title}
                      </h3>
                      <p className="text-xs text-[#464555] mt-0.5 font-medium">
                        {job.company} •{' '}
                        <span className="text-[#3525cd]">{job.location}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(job.id);
                    }}
                    className="p-1.5 text-[#464555] hover:text-[#3525cd] rounded-lg transition-colors cursor-pointer"
                    aria-label={isSaved ? 'Remove bookmark' : 'Bookmark job'}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isSaved ? 'fill-[#3525cd] text-[#3525cd]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Tags Row */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#86f2e4]/30 text-[#006a61] text-[11px] font-bold tabular-nums">
                    {job.salary}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#464555] text-[11px] font-medium">
                    {job.workMode}
                  </span>
                  {job.isUrgent && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffdad6]/50 text-[#ba1a1a] text-[11px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-ping" />
                      Urgent Hiring
                    </span>
                  )}
                  {job.isWalkIn && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffd4a4]/40 text-[#885500] text-[11px] font-semibold">
                      🚶 Walk-in Today
                    </span>
                  )}
                  {job.isVerified && !job.isUrgent && !job.isWalkIn && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#eaedff] text-[#3525cd] text-[11px] font-semibold">
                      Verified Employer
                    </span>
                  )}
                  {job.tags[0] && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]">
                      {job.tags[0]}
                    </span>
                  )}
                </div>

                {/* Footer Row */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#dae2fd]/50">
                  <span className="text-[11px] text-[#777587]">
                    🕒 {job.postedTime}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onApplyJob(job);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs transition-transform active:scale-95 cursor-pointer ${
                      job.applyType === 'apply-now'
                        ? 'bg-[#3525cd] hover:bg-[#4f46e5] text-white'
                        : 'bg-[#3525cd] hover:bg-[#4f46e5] text-white'
                    }`}
                  >
                    {job.applyType === 'apply-now' ? (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Apply Now</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        <span>Easy Apply</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 7. Key Trust Metrics Strip */}
      <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs grid grid-cols-3 divide-x divide-[#dae2fd] text-center">
        <div>
          <div className="text-lg font-extrabold text-[#3525cd] tabular-nums">
            98.4%
          </div>
          <div className="text-[11px] text-[#464555] font-semibold mt-0.5">
            Verified Hiring
          </div>
        </div>
        <div>
          <div className="text-lg font-extrabold text-[#006a61] tabular-nums">
            &lt; 24 Hrs
          </div>
          <div className="text-[11px] text-[#464555] font-semibold mt-0.5">
            First Callback
          </div>
        </div>
        <div>
          <div className="text-lg font-extrabold text-[#131b2e] tabular-nums">
            35k+
          </div>
          <div className="text-[11px] text-[#464555] font-semibold mt-0.5">
            Placed in BR
          </div>
        </div>
      </div>

      {/* 8. Founders' Direct Line Card (FEJYC Leadership) */}
      <div className="bg-[#eaedff] rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-[#3525cd] flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
            </div>
            <h3 className="font-extrabold text-sm text-[#131b2e]">
              Founders' Direct Line
            </h3>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3525cd] bg-white px-2 py-0.5 rounded-full">
            FEJYC Leadership
          </span>
        </div>

        <p className="text-xs text-[#464555] leading-relaxed">
          Building Bihar and India's fastest career accelerator. Have feedback or want priority recruitment partnership? Reach out directly.
        </p>

        {/* 2 Founder Subcards */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* Aryan */}
          <div
            onClick={() => onNavigateTab('about')}
            className="bg-white rounded-xl p-2.5 border border-[#dae2fd] shadow-2xs hover:shadow-xs cursor-pointer transition-all"
          >
            <div className="flex items-center gap-2">
              <FounderAvatar name="Aryan Thakur" size="sm" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-[#131b2e] truncate">
                  Aryan Thakur
                </div>
                <div className="text-[10px] text-[#464555] truncate">Co-Founder</div>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2 text-[10px] text-[#3525cd] font-semibold">
              <span className="px-1.5 py-0.5 bg-[#eaedff] rounded-md truncate">@imarykt</span>
              <span className="px-1.5 py-0.5 bg-[#eaedff] rounded-md truncate">@arnxkt</span>
            </div>
          </div>

          {/* Satyam */}
          <div
            onClick={() => onNavigateTab('about')}
            className="bg-white rounded-xl p-2.5 border border-[#dae2fd] shadow-2xs hover:shadow-xs cursor-pointer transition-all"
          >
            <div className="flex items-center gap-2">
              <FounderAvatar name="Satyam Mishra" size="sm" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-[#131b2e] truncate">
                  Satyam Mishra
                </div>
                <div className="text-[10px] text-[#464555] truncate">Co-Founder</div>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2 text-[10px] text-[#3525cd] font-semibold">
              <span className="px-1.5 py-0.5 bg-[#eaedff] rounded-md truncate">@brahaman_satyam...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
