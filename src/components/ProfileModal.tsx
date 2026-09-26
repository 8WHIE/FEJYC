import React from 'react';
import {
  X,
  User,
  GraduationCap,
  Briefcase,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Settings,
  LogOut,
  MapPin
} from 'lucide-react';
import { JobSeekerPreferences, TabType } from '../types';
import { FounderAvatar } from './FounderAvatars';

interface ProfileModalProps {
  preferences: JobSeekerPreferences;
  appliedCount: number;
  bookmarkedCount: number;
  onNavigateTab: (tab: TabType) => void;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  preferences,
  appliedCount,
  bookmarkedCount,
  onNavigateTab,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto shadow-2xl border border-[#c7c4d8]/40 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1.5 bg-[#c7c4d8] rounded-full mx-auto my-3 sm:hidden" />

        <div className="px-5 pt-2 pb-4 border-b border-[#dae2fd] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#3525cd]" />
            <h3 className="font-extrabold text-sm text-[#131b2e]">
              My FEJYC Candidate Profile
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#464555] hover:text-[#ba1a1a] rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Candidate Card */}
          <div className="p-4 bg-[#eaedff] rounded-2xl border border-[#c7c4d8]/40 flex items-center gap-3">
            <FounderAvatar name="Aryan Thakur" size="lg" />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="font-extrabold text-base text-[#131b2e] truncate">
                  Aman Sharma
                </h4>
                <span className="w-4 h-4 rounded-full bg-[#006a61] text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
              </div>
              <p className="text-xs font-semibold text-[#3525cd] truncate">
                Software & Data Aspirant
              </p>
              <p className="text-[11px] text-[#464555] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#777587]" />
                Muzaffarpur, Bihar
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]">
              <div className="text-base font-extrabold text-[#3525cd]">68%</div>
              <div className="text-[10px] text-[#464555] font-semibold">Profile Score</div>
            </div>
            <div className="p-2.5 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]">
              <div className="text-base font-extrabold text-[#006a61]">{appliedCount}</div>
              <div className="text-[10px] text-[#464555] font-semibold">Applied Roles</div>
            </div>
            <div className="p-2.5 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]">
              <div className="text-base font-extrabold text-[#131b2e]">{bookmarkedCount}</div>
              <div className="text-[10px] text-[#464555] font-semibold">Saved Jobs</div>
            </div>
          </div>

          {/* Academic Snapshot */}
          <div className="p-3 bg-white rounded-xl border border-[#dae2fd] space-y-1 text-xs">
            <div className="flex items-center gap-1.5 text-[#3525cd] font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Snapshot</span>
            </div>
            <div className="font-semibold text-[#131b2e]">
              {preferences.highestQualification} ({preferences.graduationYear})
            </div>
            <div className="text-[#464555] text-[11px]">
              {preferences.collegeOrUniversity}
            </div>
          </div>

          {/* Active Resume */}
          <div className="p-3 bg-white rounded-xl border border-[#dae2fd] space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#3525cd] font-bold">
                <FileText className="w-4 h-4" />
                <span>Uploaded CV</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#86f2e4]/40 text-[#006a61] font-bold">
                Ready for 1-Click
              </span>
            </div>
            <div className="font-semibold text-[#131b2e] truncate">
              {preferences.resumeFileName} ({preferences.resumeFileSize})
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={() => {
                onNavigateTab('job_seeker');
                onClose();
              }}
              className="w-full py-3 bg-[#3525cd] hover:bg-[#4f46e5] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Edit Career Preferences & Skills →
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigateTab('about');
                onClose();
              }}
              className="w-full py-3 bg-[#eaedff] text-[#3525cd] rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Contact Founders (Aryan & Satyam)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
