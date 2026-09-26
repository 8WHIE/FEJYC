import React, { useState } from 'react';
import {
  X,
  Building2,
  MapPin,
  Clock,
  Briefcase,
  Zap,
  CheckCircle2,
  Bookmark,
  Share2,
  Send,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { Job, JobSeekerPreferences } from '../types';

interface JobDetailModalProps {
  job: Job | null;
  preferences: JobSeekerPreferences;
  isBookmarked: boolean;
  onToggleBookmark: (jobId: string) => void;
  onClose: () => void;
  onApplicationSuccess: (job: Job) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  preferences,
  isBookmarked,
  onToggleBookmark,
  onClose,
  onApplicationSuccess,
}) => {
  const [isApplying, setIsApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  if (!job) return null;

  const handleApply = () => {
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setApplied(true);
      onApplicationSuccess(job);
      setTimeout(() => {
        setApplied(false);
        onClose();
      }, 1500);
    }, 700);
  };

  const handleShare = () => {
    setCopiedShare(true);
    navigator.clipboard?.writeText?.(window.location.href);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c7c4d8]/40 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grab Handle */}
        <div className="w-10 h-1.5 bg-[#c7c4d8] rounded-full mx-auto my-3 sm:hidden" />

        {/* Modal Header */}
        <div className="px-5 pt-3 pb-4 border-b border-[#dae2fd] flex items-center justify-between">
          <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider">
            Job Details & Quick Application
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 text-[#464555] hover:text-[#3525cd] rounded-full hover:bg-[#eaedff] transition-colors cursor-pointer"
              title="Share job link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onToggleBookmark(job.id)}
              className="p-2 text-[#464555] hover:text-[#3525cd] rounded-full hover:bg-[#eaedff] transition-colors cursor-pointer"
              title="Bookmark this job"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked ? 'fill-[#3525cd] text-[#3525cd]' : ''
                }`}
              />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#464555] hover:text-[#ba1a1a] rounded-full hover:bg-[#ffdad6]/40 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {copiedShare && (
          <div className="mx-5 mt-2 p-2 bg-[#eaedff] text-[#3525cd] text-xs font-bold rounded-lg text-center">
            ✓ Job link copied to clipboard!
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 space-y-5">
          {/* Job Header */}
          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-[#131b2e] leading-snug">
              {job.title}
            </h2>
            <div className="flex items-center gap-2 text-xs font-bold text-[#3525cd]">
              <span>{job.company}</span>
              <span className="text-[#c7c4d8]">•</span>
              <span className="text-[#464555] font-semibold">{job.location}</span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="px-3 py-1 rounded-full bg-[#86f2e4]/30 text-[#006a61] text-xs font-extrabold tabular-nums">
                {job.salary}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#f2f3ff] text-[#464555] text-xs font-bold">
                {job.workMode}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#eaedff] text-[#3525cd] text-xs font-bold">
                {job.employmentType}
              </span>
              {job.isUrgent && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#ffdad6]/60 text-[#ba1a1a] text-xs font-bold">
                  🔥 Urgent
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold text-[#464555] uppercase tracking-wide">
              Overview
            </h4>
            <p className="text-xs text-[#131b2e] leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#464555] uppercase tracking-wide">
                Candidate Requirements
              </h4>
              <ul className="space-y-1.5 text-xs text-[#131b2e]">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3525cd] font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#464555] uppercase tracking-wide">
                Key Responsibilities
              </h4>
              <ul className="space-y-1.5 text-xs text-[#131b2e]">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#006a61] font-bold">✓</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recruiter info box */}
          <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#c7c4d8]/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#006a61]" />
              <div>
                <span className="font-bold text-[#131b2e] block">
                  Verified Employer Slot
                </span>
                <span className="text-[#777587] text-[11px]">
                  Point of Contact: {job.recruiterName}
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 bg-[#86f2e4]/40 text-[#006a61] font-bold rounded-md text-[10px]">
              Direct Desk
            </span>
          </div>

          {/* Fast Applicant Attachment Preview */}
          <div className="p-3 bg-[#eaedff] rounded-xl text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#3525cd]">
                Applying with FEJYC Profile:
              </span>
              <span className="text-[10px] text-[#464555]">Aman Sharma</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#131b2e] font-semibold">
              <FileText className="w-3.5 h-3.5 text-[#3525cd]" />
              <span className="truncate">{preferences.resumeFileName}</span>
            </div>
          </div>

          {/* Application Result State */}
          {applied && (
            <div className="p-4 bg-[#86f2e4]/30 border border-[#006a61] rounded-2xl text-center space-y-1 animate-bounce">
              <CheckCircle2 className="w-8 h-8 text-[#006a61] mx-auto" />
              <div className="font-extrabold text-sm text-[#006a61]">
                Application Submitted!
              </div>
              <p className="text-[11px] text-[#464555]">
                {job.recruiterName} has received your profile. First callback within 24 hours.
              </p>
            </div>
          )}

          {/* Submit Action Button */}
          {!applied && (
            <button
              type="button"
              disabled={isApplying}
              onClick={handleApply}
              className="w-full py-4 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 cursor-pointer disabled:opacity-50"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>
                {isApplying
                  ? 'Dispatching Application...'
                  : job.applyType === '1-click'
                  ? 'Confirm 1-Click Fast Apply'
                  : 'Submit Easy Application'}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
