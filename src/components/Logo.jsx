import React from 'react';
export function Logo({ tone = 'dark', showWordmark = true }) {
    const color = tone === 'light' ? 'text-white' : 'text-navy-900';
    return (<span className={`flex items-center gap-3 ${color} transition-colors duration-300`}>
      <svg viewBox="0 0 66 38" className="h-9 w-auto" aria-hidden="true">
        <text x="1" y="24" fill="currentColor" fontFamily="Manrope, Inter, sans-serif" fontWeight={800} fontSize="27" letterSpacing="-1">
          
          CRL
        </text>
        <path d="M3 31 C 20 38, 44 36, 63 25" stroke="#D71920" strokeWidth="3.6" fill="none" strokeLinecap="round"/>
      </svg>
      {showWordmark &&
            <span className="hidden flex-col leading-none sm:flex">
          <span className="font-display text-[14px] font-bold tracking-tight">Chaple Roadlines</span>
          <span className="mt-1 text-[11px] font-medium opacity-70">Pvt. Ltd.</span>
        </span>}
    </span>);
}
