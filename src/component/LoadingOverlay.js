import { useState } from "react";


function IconCreditCard() {
  return (
    <svg
      width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="text-red-500"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}


 export default function LoadingOverlay({ show }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-5 flex flex-col items-center gap-5 shadow-2xl max-w-2xs w-4xl mx-2">

       
        <div className="relative w-15 h-15">
          <div className="absolute inset-0 rounded-full border-4 border-orange-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <IconCreditCard />
          </div>
        </div>

        <div className="text-center">
          <p className="text-base font-bold text-gray-900">Please Wait..</p>
          <p className="text-xs text-gray-400 mt-1">Please wait, do not close this window...</p>
        </div>

       
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-red-400 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

