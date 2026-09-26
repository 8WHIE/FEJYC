import React from 'react';
import { Briefcase, UserCheck, PlusSquare, Info } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'home' as TabType,
      label: 'Home',
      icon: Briefcase,
    },
    {
      id: 'job_seeker' as TabType,
      label: 'Job Seeker',
      icon: UserCheck,
    },
    {
      id: 'post_job' as TabType,
      label: 'Post Job',
      icon: PlusSquare,
    },
    {
      id: 'about' as TabType,
      label: 'About',
      icon: Info,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#dae2fd] shadow-lg max-w-md mx-auto"
      aria-label="Primary mobile navigation"
    >
      <div className="grid grid-cols-4 items-center h-16 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center py-1 transition-all cursor-pointer relative ${
                isActive ? 'text-[#3525cd]' : 'text-[#464555] hover:text-[#131b2e]'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive ? 'bg-[#eaedff] scale-105' : 'bg-transparent'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? 'stroke-[2.4px] text-[#3525cd]' : 'stroke-[1.8px]'
                  }`}
                />
              </div>
              <span
                className={`text-[11px] font-semibold tracking-tight mt-0.5 ${
                  isActive ? 'text-[#3525cd] font-bold' : 'text-[#464555]'
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#3525cd] mt-0.5 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
