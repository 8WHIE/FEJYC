import React from 'react';
import { X, Bell, CheckCircle2, Clock, Trash2 } from 'lucide-react';
import { AppNotification } from '../types';

interface NotificationsModalProps {
  notifications: AppNotification[];
  onMarkAllRead: () => void;
  onClearNotifications: () => void;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  notifications,
  onMarkAllRead,
  onClearNotifications,
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
            <Bell className="w-4 h-4 text-[#3525cd]" />
            <h3 className="font-extrabold text-sm text-[#131b2e]">
              Recruitment Activity & Alerts
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

        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-xs px-1">
            <button
              type="button"
              onClick={onMarkAllRead}
              className="text-[#3525cd] font-bold hover:underline cursor-pointer"
            >
              Mark all as read
            </button>
            <button
              type="button"
              onClick={onClearNotifications}
              className="text-[#ba1a1a] font-semibold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>

          <div className="space-y-2">
            {notifications.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#777587]">
                No new notifications. You're all caught up!
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-3.5 rounded-xl border transition-colors ${
                    n.read
                      ? 'bg-white border-[#dae2fd]'
                      : 'bg-[#eaedff]/60 border-[#3525cd]/30 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-xs text-[#131b2e] leading-snug">
                      {n.title}
                    </h4>
                    <span className="text-[10px] text-[#777587] whitespace-nowrap">
                      {n.time}
                    </span>
                  </div>
                  <p className="text-xs text-[#464555] mt-1 leading-relaxed">
                    {n.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
