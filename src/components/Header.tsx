import React from 'react';
import { Bell, ChevronDown, Navigation } from 'lucide-react';
import { TabType } from '../types';
import { FounderAvatar } from './FounderAvatars';

interface HeaderProps {
  activeTab: TabType;
  selectedCity: string;
  selectedStateCode: string;
  unreadCount: number;
  onOpenLocationModal: () => void;
  onOpenNotifications: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  selectedCity,
  selectedStateCode,
  unreadCount,
  onOpenLocationModal,
  onOpenNotifications,
  onOpenProfile,
}) => {
  const getSubtext = () => {
    switch (activeTab) {
      case 'home':
        return 'Home\nPortal';
      case 'job_seeker':
        return 'Job Seeker';
      case 'post_job':
        return 'Post Job\nEmployer';
      case 'about':
        return 'About\nContact';
      default:
        return 'Portal';
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-[#faf8ff]/95 backdrop-blur-md border-b border-[#dae2fd]/60 px-4 py-2.5 flex items-center justify-between transition-all">
      {/* Left: FEJYC Brand Lockup */}
      <div className="flex items-center gap-2 select-none">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3525cd] to-[#4f46e5] flex items-center justify-center shadow-xs">
          <span className="text-white font-extrabold text-xs tracking-tighter">FE</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-extrabold text-[#3525cd] tracking-tight leading-tight">
            FEJYC
          </span>
          <span className="text-[10px] text-[#464555] font-medium leading-none whitespace-pre-line">
            {getSubtext()}
          </span>
        </div>
      </div>

      {/* Center: Location Pill Trigger */}
      <button
        type="button"
        onClick={onOpenLocationModal}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#eaedff] hover:bg-[#dae2fd] text-[#131b2e] rounded-full text-xs font-semibold shadow-xs transition-colors border border-[#c7c4d8]/40 active:scale-95 cursor-pointer max-w-[170px]"
        aria-label="Change current hiring hub location"
      >
        <Navigation className="w-3.5 h-3.5 text-[#3525cd] fill-[#3525cd]/20 shrink-0 transform rotate-45" />
        <span className="truncate">
          {selectedCity}, {selectedStateCode}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#464555] shrink-0" />
      </button>

      {/* Right: Notification Bell & Profile Avatar */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenNotifications}
          className="relative p-2 rounded-full hover:bg-[#eaedff] text-[#131b2e] transition-colors cursor-pointer"
          aria-label={`View notifications, ${unreadCount} unread`}
        >
          <Bell className="w-5 h-5 text-[#131b2e]" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ba1a1a] ring-2 ring-[#faf8ff]" />
          )}
        </button>

        <button
          type="button"
          onClick={onOpenProfile}
          className="cursor-pointer transition-transform hover:scale-105 active:scale-95 rounded-full ring-2 ring-[#3525cd]/20 hover:ring-[#3525cd]/50"
          aria-label="Open Aryan Thakur user profile"
        >
          <FounderAvatar name="Aryan Thakur" size="md" />
        </button>
      </div>
    </header>
  );
};
