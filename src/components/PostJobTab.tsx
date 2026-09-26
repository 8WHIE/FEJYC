import React, { useState } from 'react';
import {
  PlusCircle,
  Building2,
  MapPin,
  Briefcase,
  Zap,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Search
} from 'lucide-react';
import { Job, TabType } from '../types';

interface PostJobTabProps {
  onAddJob: (newJob: Job) => void;
  onNavigateTab: (tab: TabType) => void;
  selectedCity: string;
}

export const PostJobTab: React.FC<PostJobTabProps> = ({
  onAddJob,
  onNavigateTab,
  selectedCity,
}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState(`${selectedCity} Hub`);
  const [workMode, setWorkMode] = useState<Job['workMode']>('Hybrid');
  const [salaryText, setSalaryText] = useState('₹25,000 – ₹40,000/mo');
  const [employmentType, setEmploymentType] = useState<Job['employmentType']>('Full-time');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isFresherFriendly, setIsFresherFriendly] = useState(false);
  const [isImmediateJoiner, setIsImmediateJoiner] = useState(false);
  const [description, setDescription] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [postedSuccess, setPostedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle.trim() || !companyName.trim()) return;

    setIsPosting(true);
    setTimeout(() => {
      const newJob: Job = {
        id: `job-${Date.now()}`,
        title: jobTitle,
        company: companyName,
        location: location || `${selectedCity} Hub`,
        workMode,
        salary: salaryText || 'Best in Industry',
        employmentType,
        tags: [
          isFresherFriendly ? 'Fresher Friendly' : 'Experienced',
          isImmediateJoiner ? 'Immediate Joiner' : 'Verified Role',
          workMode,
        ],
        postedTime: 'Posted Just Now',
        applyType: 'easy',
        iconType: 'briefcase',
        isUrgent,
        isFresherFriendly,
        isImmediateJoiner,
        isVerified: true,
        description:
          description ||
          `We are hiring a dedicated ${jobTitle} at ${companyName}. Immediate joining with attractive career progression and competitive compensation.`,
        requirements: [
          'Strong relevant discipline experience or technical aptitude',
          'Good team collaboration and communication abilities',
          'Available to join immediately or within 15 days',
        ],
        responsibilities: [
          'Deliver high quality work aligned with company milestones',
          'Coordinate with project leads and team members',
          'Uphold company quality and customer satisfaction standards',
        ],
        benefits: [
          'Performance bonuses and annual increment',
          'Health insurance coverage',
          'Collaborative work environment',
        ],
        recruiterName: `${companyName} Hiring Team`,
      };

      onAddJob(newJob);
      setIsPosting(false);
      setPostedSuccess(true);

      setTimeout(() => {
        setPostedSuccess(false);
        onNavigateTab('home');
      }, 1000);
    }, 600);
  };

  return (
    <div className="pb-24 pt-3 px-4 space-y-6 animate-fadeIn">
      {/* 1. Header Banner */}
      <div className="rounded-2xl bg-[#eaedff] border border-[#c7c4d8]/40 p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-[#86f2e4]/40 text-[#006a61] text-[11px] font-bold flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-current" />
            Hire Verified Talent in 24 Hrs
          </span>
          <span className="text-[11px] font-bold text-[#3525cd]">
            12k+ Placed
          </span>
        </div>

        <div>
          <h1 className="text-2xl font-extrabold text-[#131b2e] tracking-tight">
            Employer & Recruiter Desk
          </h1>
          <p className="text-xs text-[#464555] mt-1 leading-relaxed">
            Reach verified job seekers across Muzaffarpur, Patna, Bengaluru & Pan-India with zero hiring friction.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="p-2 bg-white rounded-xl border border-[#dae2fd]">
            <div className="text-sm font-extrabold text-[#3525cd]">Instant</div>
            <div className="text-[10px] text-[#464555] font-semibold">Listing Live</div>
          </div>
          <div className="p-2 bg-white rounded-xl border border-[#dae2fd]">
            <div className="text-sm font-extrabold text-[#006a61]">3.2x</div>
            <div className="text-[10px] text-[#464555] font-semibold">Faster Reach</div>
          </div>
          <div className="p-2 bg-white rounded-xl border border-[#dae2fd]">
            <div className="text-sm font-extrabold text-[#131b2e]">Verified</div>
            <div className="text-[10px] text-[#464555] font-semibold">Candidate Pool</div>
          </div>
        </div>
      </div>

      {/* 2. Post a Job Listing Form */}
      <div className="bg-white rounded-2xl p-5 border border-[#c7c4d8]/40 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#3525cd]" />
          <h2 className="font-extrabold text-base text-[#131b2e]">
            Publish New Job Opening
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Job Title */}
          <div>
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide block mb-1">
              Job Title / Designation *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Senior Flutter Developer, Sales Executive..."
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide block mb-1">
              Company / Organization Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Connect BPO, BihariTech Labs..."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
            />
          </div>

          {/* Location & Work Mode */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide block mb-1">
                Location / City
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Muzaffarpur Hub / Remote"
                className="w-full h-11 px-3 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide block mb-1">
                Work Mode
              </label>
              <select
                value={workMode}
                onChange={(e) => setWorkMode(e.target.value as Job['workMode'])}
                className="w-full h-11 px-3 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
              >
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="On-site (Hub)">On-site (Hub)</option>
              </select>
            </div>
          </div>

          {/* Salary Offer */}
          <div>
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide block mb-1">
              Offered Salary / CTC *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. ₹25,000 – ₹45,000/mo or ₹8 – 14 LPA"
              value={salaryText}
              onChange={(e) => setSalaryText(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
            />
          </div>

          {/* Urgent & Fresher Toggles */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide block">
              Recruitment Priority Badges
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setIsFresherFriendly(!isFresherFriendly)}
                className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-colors cursor-pointer text-center ${
                  isFresherFriendly
                    ? 'bg-[#eaedff] border-[#3525cd] text-[#3525cd]'
                    : 'bg-[#f2f3ff] border-transparent text-[#464555]'
                }`}
              >
                🎓 Fresher Friendly
              </button>
              <button
                type="button"
                onClick={() => setIsImmediateJoiner(!isImmediateJoiner)}
                className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-colors cursor-pointer text-center ${
                  isImmediateJoiner
                    ? 'bg-[#ffdad6]/50 border-[#ba1a1a] text-[#ba1a1a]'
                    : 'bg-[#f2f3ff] border-transparent text-[#464555]'
                }`}
              >
                ⚡ Immediate Joiner
              </button>
              <button
                type="button"
                onClick={() => setIsUrgent(!isUrgent)}
                className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-colors cursor-pointer text-center ${
                  isUrgent
                    ? 'bg-[#ffdad6]/50 border-[#ba1a1a] text-[#ba1a1a]'
                    : 'bg-[#f2f3ff] border-transparent text-[#464555]'
                }`}
              >
                🔥 Urgent Role
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide block mb-1">
              Brief Role Summary
            </label>
            <textarea
              rows={3}
              placeholder="Describe core duties and expected experience..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd] resize-none"
            />
          </div>

          {postedSuccess && (
            <div className="p-3 bg-[#86f2e4]/30 rounded-xl border border-[#006a61] text-[#006a61] text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Job published to FEJYC Network! Redirecting to feed...</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isPosting}
            className="w-full py-3.5 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-98 cursor-pointer disabled:opacity-50"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isPosting ? 'Publishing Listing...' : 'Post Job Listing (Instant Free)'}</span>
          </button>
        </form>
      </div>

      {/* 3. Recruiter Partnership Banner */}
      <div className="p-4 bg-white rounded-2xl border border-[#c7c4d8]/40 shadow-xs flex items-center justify-between">
        <div>
          <span className="font-extrabold text-xs text-[#131b2e] block">
            Bulk Hiring for Enterprise & Plants?
          </span>
          <span className="text-[11px] text-[#464555]">
            Talk directly to Satyam Mishra (Head of Operations)
          </span>
        </div>
        <button
          type="button"
          onClick={() => onNavigateTab('about')}
          className="px-3 py-1.5 bg-[#eaedff] text-[#3525cd] rounded-xl text-xs font-bold hover:bg-[#dae2fd] cursor-pointer"
        >
          Connect →
        </button>
      </div>
    </div>
  );
};
