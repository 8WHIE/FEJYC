import React from 'react';
import { X, MapPin, Check, Sparkles, Navigation } from 'lucide-react';
import { AVAILABLE_CITIES } from '../data/mockData';

interface LocationPickerModalProps {
  currentCity: string;
  onSelectCity: (city: string, stateCode: string) => void;
  onClose: () => void;
}

export const LocationPickerModal: React.FC<LocationPickerModalProps> = ({
  currentCity,
  onSelectCity,
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
            <Navigation className="w-4 h-4 text-[#3525cd]" />
            <h3 className="font-extrabold text-sm text-[#131b2e]">
              Select Hiring Hub
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

        <div className="p-4 space-y-2">
          <p className="text-xs text-[#464555] px-1">
            Choose your primary region to see customized local job postings and interview walk-in drives:
          </p>

          <div className="space-y-1.5 pt-2">
            {AVAILABLE_CITIES.map((item) => {
              const isSelected = currentCity.toLowerCase() === item.city.toLowerCase();
              return (
                <button
                  key={item.city}
                  type="button"
                  onClick={() => {
                    onSelectCity(item.city, item.code);
                    onClose();
                  }}
                  className={`w-full p-3 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#eaedff] text-[#3525cd] font-bold border border-[#3525cd]/40'
                      : 'hover:bg-[#f2f3ff] text-[#131b2e] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin
                      className={`w-4 h-4 ${
                        isSelected ? 'text-[#3525cd]' : 'text-[#777587]'
                      }`}
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold block">
                        {item.city}, {item.state}
                      </span>
                      {item.isHQ && (
                        <span className="text-[10px] text-[#006a61] font-semibold flex items-center gap-0.5">
                          <Sparkles className="w-3 h-3 fill-current" />
                          Central Operations Hub
                        </span>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-[#3525cd] stroke-[3]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
