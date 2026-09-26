import React, { useState } from 'react';
import { TabType, Job, JobSeekerPreferences, AppNotification } from './types';
import {
  INITIAL_JOBS,
  INITIAL_PREFERENCES,
  INITIAL_NOTIFICATIONS,
  AVAILABLE_CITIES,
} from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeTab } from './components/HomeTab';
import { JobSeekerTab } from './components/JobSeekerTab';
import { PostJobTab } from './components/PostJobTab';
import { AboutTab } from './components/AboutTab';
import { JobDetailModal } from './components/JobDetailModal';
import { LocationPickerModal } from './components/LocationPickerModal';
import { NotificationsModal } from './components/NotificationsModal';
import { ProfileModal } from './components/ProfileModal';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [bookmarkedJobIds, setBookmarkedJobIds] = useState<string[]>(['job-1', 'job-3']);
  const [appliedJobIds, setAppliedJobIds] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<JobSeekerPreferences>(INITIAL_PREFERENCES);
  const [notifications, setNotifications] = useState<AppNotification[]>(INITIAL_NOTIFICATIONS);
  const [selectedCity, setSelectedCity] = useState('Muzaffarpur');
  const [selectedStateCode, setSelectedStateCode] = useState('BR');

  // Modals state
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Desktop viewport switcher (iPhone Frame vs Fluid Layout)
  const [deviceFrameMode, setDeviceFrameMode] = useState<boolean>(true);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleBookmark = (jobId: string) => {
    if (bookmarkedJobIds.includes(jobId)) {
      setBookmarkedJobIds((prev) => prev.filter((id) => id !== jobId));
      showToast('Removed from saved jobs');
    } else {
      setBookmarkedJobIds((prev) => [...prev, jobId]);
      showToast('Saved to your bookmarked jobs! ⭐');
    }
  };

  const handleApplyJob = (job: Job) => {
    setSelectedJob(job);
  };

  const handleApplicationSuccess = (job: Job) => {
    if (!appliedJobIds.includes(job.id)) {
      setAppliedJobIds((prev) => [...prev, job.id]);
    }
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: 'Application Dispatched! 🚀',
      message: `Your profile and CV were submitted to ${job.company} for ${job.title}.`,
      time: 'Just now',
      read: false,
      type: 'application',
    };
    setNotifications((prev) => [newNotif, ...prev]);
    showToast(`Applied to ${job.company}!`);
  };

  const handleAddJob = (newJob: Job) => {
    setJobs((prev) => [newJob, ...prev]);
    showToast('Job listing published to FEJYC Network! 🎉');
  };

  const handleUpdatePreferences = (updated: Partial<JobSeekerPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...updated }));
  };

  const handleSaveAndSearch = () => {
    setActiveTab('home');
    showToast('Preferences updated! Showing matching roles');
  };

  const handleSelectCity = (city: string, stateCode: string) => {
    setSelectedCity(city);
    setSelectedStateCode(stateCode);
    showToast(`Hiring hub switched to ${city}, ${stateCode}`);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-[#eaedff]/50 text-[#131b2e] flex flex-col items-center">
      {/* Top Desktop Helper Toolbar (hidden on small screens) */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-4xl px-4 py-2 mt-2 bg-white/80 backdrop-blur-md rounded-2xl border border-[#dae2fd] shadow-xs text-xs font-semibold text-[#464555]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#006a61] animate-pulse" />
          <span className="text-[#131b2e] font-bold">FEJYC Platform Preview</span>
          <span className="text-[#c7c4d8]">|</span>
          <span>Screens based on mobile mockups (Home, Preferences & About)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDeviceFrameMode(true)}
            className={`px-3 py-1 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
              deviceFrameMode
                ? 'bg-[#3525cd] text-white'
                : 'bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Device Frame (As in Images)</span>
          </button>
          <button
            type="button"
            onClick={() => setDeviceFrameMode(false)}
            className={`px-3 py-1 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
              !deviceFrameMode
                ? 'bg-[#3525cd] text-white'
                : 'bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Expanded View</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <main
        className={`w-full transition-all relative ${
          deviceFrameMode
            ? 'max-w-[430px] my-0 lg:my-4 bg-[#faf8ff] rounded-none lg:rounded-[40px] shadow-2xl border-0 lg:border-[8px] lg:border-[#131b2e] min-h-screen lg:min-h-[880px] overflow-hidden'
            : 'max-w-xl my-0 sm:my-4 bg-[#faf8ff] rounded-none sm:rounded-3xl shadow-xl border-0 sm:border border-[#dae2fd] min-h-screen'
        }`}
      >
        {/* Dynamic Island / Speaker cutout on device frame (desktop only) */}
        {deviceFrameMode && (
          <div className="hidden lg:flex justify-center pt-2 select-none">
            <div className="w-24 h-4 bg-[#131b2e] rounded-full" />
          </div>
        )}

        {/* Top App Bar */}
        <Header
          activeTab={activeTab}
          selectedCity={selectedCity}
          selectedStateCode={selectedStateCode}
          unreadCount={unreadCount}
          onOpenLocationModal={() => setIsLocationModalOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenProfile={() => setIsProfileOpen(true)}
        />

        {/* Tab Views */}
        {activeTab === 'home' && (
          <HomeTab
            jobs={jobs}
            onSelectJob={(job) => setSelectedJob(job)}
            onApplyJob={handleApplyJob}
            bookmarkedJobIds={bookmarkedJobIds}
            onToggleBookmark={handleToggleBookmark}
            onNavigateTab={setActiveTab}
            selectedCity={selectedCity}
          />
        )}

        {activeTab === 'job_seeker' && (
          <JobSeekerTab
            preferences={preferences}
            onUpdatePreferences={handleUpdatePreferences}
            onSaveAndSearch={handleSaveAndSearch}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'post_job' && (
          <PostJobTab
            onAddJob={handleAddJob}
            onNavigateTab={setActiveTab}
            selectedCity={selectedCity}
          />
        )}

        {activeTab === 'about' && <AboutTab />}

        {/* Professional Footer */}
        <footer className="w-full bg-[#131b2e] text-white py-8 px-6 mt-12 mb-20">
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <h3 className="font-extrabold text-lg tracking-tight">FEJYC</h3>
            <p className="text-[#c7c4d8] text-xs max-w-xs leading-relaxed">
              Bharat's Rapid Hiring Network
            </p>
            <div className="w-12 h-px bg-white/20 my-2"></div>
            <div className="flex flex-col gap-1 text-[11px] font-semibold text-[#a5a3b7]">
              <span>Created by <span className="text-white">8WHIE</span></span>
              <span>Owner: <span className="text-white">Aryan Thakur</span></span>
            </div>
          </div>
        </footer>

        {/* Fixed Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </main>

      {/* Modals & Sheets */}
      <JobDetailModal
        job={selectedJob}
        preferences={preferences}
        isBookmarked={selectedJob ? bookmarkedJobIds.includes(selectedJob.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onClose={() => setSelectedJob(null)}
        onApplicationSuccess={handleApplicationSuccess}
      />

      {isLocationModalOpen && (
        <LocationPickerModal
          currentCity={selectedCity}
          onSelectCity={handleSelectCity}
          onClose={() => setIsLocationModalOpen(false)}
        />
      )}

      {isNotificationsOpen && (
        <NotificationsModal
          notifications={notifications}
          onMarkAllRead={() =>
            setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
          }
          onClearNotifications={() => setNotifications([])}
          onClose={() => setIsNotificationsOpen(false)}
        />
      )}

      {isProfileOpen && (
        <ProfileModal
          preferences={preferences}
          appliedCount={appliedJobIds.length}
          bookmarkedCount={bookmarkedJobIds.length}
          onNavigateTab={setActiveTab}
          onClose={() => setIsProfileOpen(false)}
        />
      )}

      {/* Global Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 z-50 px-4 py-2.5 bg-[#131b2e] text-white text-xs font-bold rounded-full shadow-xl border border-white/20 animate-fadeIn pointer-events-none">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
