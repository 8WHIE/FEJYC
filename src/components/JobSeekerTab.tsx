import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Sliders,
  Compass,
  FileText,
  UploadCloud,
  Check,
  X,
  Trash2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Building,
  Monitor,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Search
} from 'lucide-react';
import { JobSeekerPreferences, TabType } from '../types';
import { QUALIFICATIONS_LIST, BIHAR_COLLEGES } from '../data/mockData';

interface JobSeekerTabProps {
  preferences: JobSeekerPreferences;
  onUpdatePreferences: (updated: Partial<JobSeekerPreferences>) => void;
  onSaveAndSearch: () => void;
  onNavigateTab: (tab: TabType) => void;
}

export const JobSeekerTab: React.FC<JobSeekerTabProps> = ({
  preferences,
  onUpdatePreferences,
  onSaveAndSearch,
  onNavigateTab,
}) => {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [newSkillInput, setNewSkillInput] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(false);

  const availableGradYears = ['2025', '2024', '2023', '2022', 'Earlier'];
  const availableSkillsSuggestions = ['+ Tally ERP', '+ SEO Marketing', '+ SQL', '+ Node.js', '+ Flutter', '+ Digital Sales'];

  const allFields = [
    'Software Engineer',
    'Data Analyst',
    'Graphic Designer',
    'Sales & BD Manager',
    'Accountant / Finance',
    'Operations Executive',
    'Customer Support Lead',
    'HR & Recruiter'
  ];

  const trendingHubs = [
    'Patna, Bihar',
    'Noida / Gurgaon (NCR)',
    'Kolkata, WB',
    'Hyderabad, TS',
    'Pune, MH'
  ];

  const handleToggleField = (field: string) => {
    const exists = preferences.interestedFields.includes(field);
    const updated = exists
      ? preferences.interestedFields.filter((f) => f !== field)
      : [...preferences.interestedFields, field];
    onUpdatePreferences({ interestedFields: updated });
  };

  const handleRemoveSkill = (skill: string) => {
    onUpdatePreferences({
      skills: preferences.skills.filter((s) => s !== skill),
    });
  };

  const handleAddSkill = (skill: string) => {
    const clean = skill.replace(/^\+\s*/, '').trim();
    if (!clean || preferences.skills.includes(clean)) return;
    onUpdatePreferences({
      skills: [...preferences.skills, clean],
    });
  };

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkillInput.trim()) {
      handleAddSkill(newSkillInput);
      setNewSkillInput('');
      setIsAddingSkill(false);
    }
  };

  const handleRemoveLocation = (loc: string) => {
    onUpdatePreferences({
      targetLocations: preferences.targetLocations.filter((l) => l !== loc),
    });
  };

  const handleAddLocation = (loc: string) => {
    const clean = loc.replace(/^\+\s*/, '').trim();
    if (!preferences.targetLocations.includes(clean)) {
      onUpdatePreferences({
        targetLocations: [...preferences.targetLocations, clean],
      });
    }
  };

  const handleAutoDetectLocation = () => {
    if (!preferences.targetLocations.includes('Muzaffarpur, Bihar')) {
      onUpdatePreferences({
        targetLocations: ['Muzaffarpur, Bihar', ...preferences.targetLocations],
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      onUpdatePreferences({
        resumeFileName: file.name,
        resumeFileSize: `${sizeMb} MB`,
      });
    }
  };

  const [formError, setFormError] = useState<string | null>(null);

  const handleSaveAction = () => {
    if (preferences.interestedFields.length === 0) {
      setFormError('Please select at least one interested field.');
      return;
    }
    if (preferences.targetLocations.length === 0) {
      setFormError('Please add at least one target location.');
      return;
    }
    setFormError(null);
    setSaveSuccessMessage(true);
    setTimeout(() => {
      setSaveSuccessMessage(false);
      onSaveAndSearch();
    }, 600);
  };

  return (
    <div className="pb-24 pt-3 px-4 space-y-5 animate-fadeIn">
      {/* 1. Header & Step Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#3525cd] uppercase tracking-wider">
              Step {activeStep} of 3
            </span>
            <h1 className="text-2xl font-extrabold text-[#131b2e] tracking-tight">
              {activeStep === 1
                ? 'Personal & Academic Background'
                : activeStep === 2
                ? 'Career Preferences'
                : 'ID & Skill Verification'}
            </h1>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#86f2e4]/30 text-[#006a61] text-xs font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Profile 68%
          </span>
        </div>

        {/* Step Indicator Links */}
        <div className="flex items-center gap-2 pt-1 border-b border-[#dae2fd] pb-2 text-xs font-bold select-none">
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`cursor-pointer transition-colors ${
              activeStep === 1 ? 'text-[#3525cd]' : 'text-[#464555] hover:text-[#131b2e]'
            }`}
          >
            1. Background
          </button>
          <span className="text-[#c7c4d8]">•</span>
          <button
            type="button"
            onClick={() => setActiveStep(2)}
            className={`cursor-pointer flex items-center gap-1 transition-colors ${
              activeStep === 2 ? 'text-[#3525cd]' : 'text-[#464555] hover:text-[#131b2e]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3525cd]" />
            2. Roles & Locations
          </button>
          <span className="text-[#c7c4d8]">•</span>
          <button
            type="button"
            onClick={() => setActiveStep(3)}
            className={`cursor-pointer transition-colors ${
              activeStep === 3 ? 'text-[#3525cd]' : 'text-[#464555] hover:text-[#131b2e]'
            }`}
          >
            3. Verification
          </button>
        </div>
      </div>

      {/* 2. Top Talent Spotlight Card */}
      <div className="bg-[#eaedff] rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#3525cd] text-white flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h2 className="text-sm font-extrabold text-[#131b2e]">
            Top Talent Spotlight
          </h2>
          <p className="text-xs text-[#464555] mt-1 leading-relaxed">
            Candidates with verified degrees and targeted North-India & Tech Hub locations receive{' '}
            <strong className="text-[#3525cd] font-bold">3.2x faster recruiter outreach</strong> in Bihar and Pan-India.
          </p>
        </div>
      </div>

      {activeStep === 1 ? (
        /* Step 1 Quick Info View */
        <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 space-y-4">
          <h3 className="font-bold text-sm text-[#131b2e]">Candidate Contact Details</h3>
          <div>
            <label className="text-xs font-semibold text-[#464555] block mb-1">Full Legal Name</label>
            <input
              type="text"
              defaultValue="Aman Sharma"
              className="w-full h-11 px-3 bg-[#f2f3ff] rounded-xl text-sm border border-[#c7c4d8]/40 text-[#131b2e]"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#464555] block mb-1">WhatsApp Mobile Number</label>
            <input
              type="text"
              defaultValue="+91 98350 44219"
              className="w-full h-11 px-3 bg-[#f2f3ff] rounded-xl text-sm border border-[#c7c4d8]/40 text-[#131b2e]"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#464555] block mb-1">Current Residential City</label>
            <input
              type="text"
              defaultValue="Muzaffarpur, Bihar (Pin: 842001)"
              className="w-full h-11 px-3 bg-[#f2f3ff] rounded-xl text-sm border border-[#c7c4d8]/40 text-[#131b2e]"
            />
          </div>
          <button
            type="button"
            onClick={() => setActiveStep(2)}
            className="w-full py-3 bg-[#3525cd] text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Proceed to Step 2: Roles & Locations →
          </button>
        </div>
      ) : activeStep === 3 ? (
        /* Step 3 Verification View */
        <div className="bg-white rounded-2xl p-5 border border-[#c7c4d8]/40 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#006a61]" />
            <h3 className="font-bold text-base text-[#131b2e]">FEJYC Trust Badge Verification</h3>
          </div>
          <p className="text-xs text-[#464555] leading-relaxed">
            Verify your degree certificate or Aadhaar to get the verified candidate green tick on employer dashboards.
          </p>
          <div className="p-3 bg-[#86f2e4]/20 border border-[#86f2e4] rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#006a61]" />
              <span className="text-xs font-bold text-[#006a61]">BRABU Degree Verified</span>
            </div>
            <span className="text-[10px] bg-white px-2 py-0.5 rounded-full font-bold text-[#006a61]">Valid</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveStep(2)}
            className="w-full py-2.5 bg-slate-100 text-[#131b2e] rounded-xl text-xs font-bold cursor-pointer"
          >
            ← Back to Preferences
          </button>
        </div>
      ) : (
        /* Step 2 (Main Screen Matching Image 3) */
        <>
          {/* Section 1: Academic Credentials */}
          <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#3525cd]" />
                <h3 className="font-bold text-sm text-[#131b2e]">
                  Academic Credentials
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#86f2e4]/30 text-[#006a61] text-[11px] font-bold">
                Completed
              </span>
            </div>

            {/* Highest Qualification Dropdown */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
                Highest Qualification
              </label>
              <div className="relative">
                <select
                  value={preferences.highestQualification}
                  onChange={(e) =>
                    onUpdatePreferences({ highestQualification: e.target.value })
                  }
                  className="w-full h-11 px-3 pr-8 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 appearance-none focus:outline-none focus:border-[#3525cd]"
                >
                  {QUALIFICATIONS_LIST.map((qual) => (
                    <option key={qual} value={qual}>
                      {qual}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#464555] absolute right-3 top-3.5 pointer-events-none" />
              </div>
            </div>

            {/* College or University */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
                College or University
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-sm">🏛️</div>
                <input
                  type="text"
                  value={preferences.collegeOrUniversity}
                  onChange={(e) =>
                    onUpdatePreferences({ collegeOrUniversity: e.target.value })
                  }
                  list="colleges-list"
                  className="w-full h-11 pl-9 pr-3 rounded-xl bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40 focus:outline-none focus:border-[#3525cd]"
                />
                <datalist id="colleges-list">
                  {BIHAR_COLLEGES.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Graduation Year */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
                Graduation Year
              </label>
              <div className="flex flex-wrap gap-2">
                {availableGradYears.map((year) => {
                  const isSelected = preferences.graduationYear === year;
                  return (
                    <button
                      key={year}
                      type="button"
                      onClick={() => onUpdatePreferences({ graduationYear: year })}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#3525cd] text-white shadow-xs'
                          : 'bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff]'
                      }`}
                    >
                      {year}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Proficiencies & Skills */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
                  Key Proficiencies & Skills
                </label>
                <button
                  type="button"
                  onClick={() => setIsAddingSkill(!isAddingSkill)}
                  className="text-xs font-bold text-[#3525cd] hover:underline cursor-pointer"
                >
                  + Add New Skill
                </button>
              </div>

              {isAddingSkill && (
                <form onSubmit={handleAddCustomSkill} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter skill name (e.g. Flutter, Kotlin)..."
                    value={newSkillInput}
                    onChange={(e) => setNewSkillInput(e.target.value)}
                    className="flex-1 h-9 px-3 rounded-lg bg-[#f2f3ff] text-xs border border-[#3525cd] focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 bg-[#3525cd] text-white rounded-lg text-xs font-bold cursor-pointer"
                  >
                    Add
                  </button>
                </form>
              )}

              {/* Selected skills */}
              <div className="flex flex-wrap gap-1.5">
                {preferences.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] border border-[#c7c4d8]/40"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-[#777587] hover:text-[#ba1a1a] cursor-pointer"
                      aria-label={`Remove skill ${skill}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>

              {/* Quick suggestions to add */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {availableSkillsSuggestions.map((suggestion) => {
                  const clean = suggestion.replace(/^\+\s*/, '');
                  if (preferences.skills.includes(clean)) return null;
                  return (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleAddSkill(suggestion)}
                      className="px-2.5 py-1 rounded-full bg-white border border-dashed border-[#c7c4d8] text-[#464555] hover:border-[#3525cd] hover:text-[#3525cd] text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2: Target Position & Mode */}
          <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#3525cd]" />
                <h3 className="font-bold text-sm text-[#131b2e]">
                  Target Position & Mode
                </h3>
              </div>
              <span className="text-xs font-bold text-[#3525cd]">
                Multi-Select
              </span>
            </div>

            {/* Interested Fields */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
                Interested Fields
              </label>
              <div className="flex flex-wrap gap-2">
                {allFields.map((field) => {
                  const isSelected = preferences.interestedFields.includes(field);
                  return (
                    <button
                      key={field}
                      type="button"
                      onClick={() => handleToggleField(field)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#3525cd] text-white shadow-xs'
                          : 'bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff]'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      <span>{field}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preferred Environment (3 Cards) */}
            <div className="space-y-1.5 pt-1">
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
                Preferred Environment
              </label>
              <div className="grid grid-cols-3 gap-2">
                {/* In-Office */}
                <button
                  type="button"
                  onClick={() =>
                    onUpdatePreferences({ preferredEnvironment: 'In-Office' })
                  }
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    preferences.preferredEnvironment === 'In-Office'
                      ? 'bg-[#3525cd] text-white border-[#3525cd] shadow-xs'
                      : 'bg-[#f2f3ff] text-[#464555] border-transparent hover:bg-[#eaedff]'
                  }`}
                >
                  <Building className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold block leading-tight">
                    In-Office
                  </span>
                  <span
                    className={`text-[10px] mt-0.5 block ${
                      preferences.preferredEnvironment === 'In-Office'
                        ? 'text-white/80'
                        : 'text-[#777587]'
                    }`}
                  >
                    District/HQ
                  </span>
                </button>

                {/* Hybrid */}
                <button
                  type="button"
                  onClick={() =>
                    onUpdatePreferences({ preferredEnvironment: 'Hybrid' })
                  }
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    preferences.preferredEnvironment === 'Hybrid'
                      ? 'bg-[#3525cd] text-white border-[#3525cd] shadow-xs'
                      : 'bg-[#f2f3ff] text-[#464555] border-transparent hover:bg-[#eaedff]'
                  }`}
                >
                  <Building className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold block leading-tight">
                    Hybrid
                  </span>
                  <span
                    className={`text-[10px] mt-0.5 block ${
                      preferences.preferredEnvironment === 'Hybrid'
                        ? 'text-white/80'
                        : 'text-[#777587]'
                    }`}
                  >
                    2–3 days
                  </span>
                </button>

                {/* Remote */}
                <button
                  type="button"
                  onClick={() =>
                    onUpdatePreferences({ preferredEnvironment: 'Remote' })
                  }
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    preferences.preferredEnvironment === 'Remote'
                      ? 'bg-[#3525cd] text-white border-[#3525cd] shadow-xs'
                      : 'bg-[#f2f3ff] text-[#464555] border-transparent hover:bg-[#eaedff]'
                  }`}
                >
                  <Laptop className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold block leading-tight">
                    Remote
                  </span>
                  <span
                    className={`text-[10px] mt-0.5 block ${
                      preferences.preferredEnvironment === 'Remote'
                        ? 'text-white/80'
                        : 'text-[#777587]'
                    }`}
                  >
                    Pan-India
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Expected CTC Package */}
          <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#3525cd]" />
                <h3 className="font-bold text-sm text-[#131b2e]">
                  Expected CTC Package
                </h3>
              </div>
              <span className="px-3 py-0.5 rounded-full bg-[#86f2e4]/40 text-[#006a61] text-xs font-extrabold tabular-nums">
                ₹{preferences.expectedCtcLpa.toFixed(1)} LPA
              </span>
            </div>

            {/* Slider */}
            <div className="space-y-1 pt-1">
              <input
                type="range"
                min="2.0"
                max="45.0"
                step="0.5"
                value={preferences.expectedCtcLpa}
                onChange={(e) =>
                  onUpdatePreferences({
                    expectedCtcLpa: parseFloat(e.target.value),
                  })
                }
                className="w-full h-2 bg-[#eaedff] rounded-lg appearance-none cursor-pointer accent-[#3525cd]"
              />
              <div className="flex justify-between text-[11px] text-[#777587] font-semibold tabular-nums pt-1">
                <span>₹2.0 LPA (Entry)</span>
                <span>₹15.0 LPA</span>
                <span>₹45.0+ LPA (Leadership)</span>
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-2.5 pt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={preferences.isSalaryNegotiable}
                onChange={(e) =>
                  onUpdatePreferences({ isSalaryNegotiable: e.target.checked })
                }
                className="mt-0.5 w-4 h-4 rounded text-[#3525cd] accent-[#3525cd] cursor-pointer"
              />
              <span className="text-xs text-[#464555] font-medium leading-tight">
                Salary is negotiable based on role impact and perks
              </span>
            </label>
          </div>

          {/* Section 4: Location Engine */}
          <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#3525cd]" />
                <h3 className="font-bold text-sm text-[#131b2e]">
                  Location Engine
                </h3>
              </div>
              <span className="text-[11px] font-bold text-[#006a61] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#006a61] animate-pulse" />
                Live Radar
              </span>
            </div>

            {/* Auto-Detect Button */}
            <button
              type="button"
              onClick={handleAutoDetectLocation}
              className="w-full py-2.5 px-3 rounded-xl bg-[#eaedff] hover:bg-[#dae2fd] text-[#3525cd] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#3525cd]/20"
            >
              <Compass className="w-4 h-4" />
              <span>Auto-Detect Current Location (Bihar / Pan-India)</span>
            </button>

            {/* Selected Target Cities */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#464555] uppercase tracking-wide">
                Target Cities / Hubs
              </label>
              <div className="flex flex-wrap gap-2">
                {preferences.targetLocations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3525cd] text-white text-xs font-bold shadow-xs"
                  >
                    <span>{loc}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveLocation(loc)}
                      className="text-white/80 hover:text-white cursor-pointer"
                      aria-label={`Remove target city ${loc}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Trending Recruitment Hubs */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] text-[#777587] font-semibold">
                Trending Recruitment Hubs:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {trendingHubs.map((hub) => {
                  if (preferences.targetLocations.includes(hub)) return null;
                  return (
                    <button
                      key={hub}
                      type="button"
                      onClick={() => handleAddLocation(hub)}
                      className="px-2.5 py-1 rounded-full bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff] hover:text-[#3525cd] text-[11px] font-semibold transition-colors cursor-pointer"
                    >
                      + {hub}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Relocation Checkbox */}
            <label className="flex items-start gap-2.5 pt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={preferences.willingToRelocate}
                onChange={(e) =>
                  onUpdatePreferences({ willingToRelocate: e.target.checked })
                }
                className="mt-0.5 w-4 h-4 rounded text-[#3525cd] accent-[#3525cd] cursor-pointer"
              />
              <span className="text-xs text-[#464555] font-medium leading-tight">
                <strong className="text-[#131b2e] font-bold">Willing to Relocate:</strong> Open for Pan-India company relocation
              </span>
            </label>
          </div>

          {/* Section 5: Curriculum Vitae / Resume */}
          <div className="bg-white rounded-2xl p-4 border border-[#c7c4d8]/40 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#3525cd]" />
                <h3 className="font-bold text-sm text-[#131b2e]">
                  Curriculum Vitae / Resume
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#ffdad6]/60 text-[#ba1a1a] text-[11px] font-bold">
                Mandatory
              </span>
            </div>

            {/* Dropzone */}
            <label className="block border-2 border-dashed border-[#c7c4d8] hover:border-[#3525cd] rounded-2xl p-6 text-center bg-[#faf8ff] cursor-pointer transition-colors group">
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="w-10 h-10 rounded-full bg-[#eaedff] flex items-center justify-center mx-auto text-[#3525cd] group-hover:scale-110 transition-transform">
                <UploadCloud className="w-5 h-5" />
              </div>
              <p className="font-bold text-xs text-[#131b2e] mt-2">
                Drop your resume here or <span className="text-[#3525cd] underline">Browse</span>
              </p>
              <p className="text-[11px] text-[#777587] mt-0.5">
                Supports PDF, DOCX (Max size: 5MB)
              </p>
            </label>

            {/* Attached file card */}
            {preferences.resumeFileName && (
              <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#c7c4d8]/40 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#131b2e] truncate">
                  <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span className="truncate">{preferences.resumeFileName}</span>
                  <span className="text-[#777587] text-[11px] shrink-0">
                    ({preferences.resumeFileSize})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onUpdatePreferences({
                      resumeFileName: '',
                      resumeFileSize: '',
                    })
                  }
                  className="p-1 text-[#777587] hover:text-[#ba1a1a] cursor-pointer shrink-0"
                  aria-label="Delete attached resume"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Success / Error Banners */}
          {formError && (
            <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-xs font-bold text-center">
              {formError}
            </div>
          )}
          {saveSuccessMessage && (
            <div className="p-3 rounded-xl bg-[#86f2e4]/30 border border-[#006a61] text-[#006a61] text-xs font-bold text-center animate-bounce">
              ✓ Preferences saved! Redirecting to matching jobs...
            </div>
          )}

          {/* Bottom Action Navigation Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setActiveStep(1)}
              className="py-3.5 px-5 bg-white border border-[#c7c4d8]/60 text-[#131b2e] rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#f2f3ff] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleSaveAction}
              className="flex-1 py-3.5 px-4 bg-[#3525cd] hover:bg-[#4f46e5] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-transform active:scale-98 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Save & Search Matching Jobs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
