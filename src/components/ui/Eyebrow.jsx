import React from 'react';
export function Eyebrow({ children, tone = 'dark' }) {
    return (<p className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] ${tone === 'light' ? 'text-crl-light' : 'text-crl'}`}>
      
      <span className={`h-px w-8 ${tone === 'light' ? 'bg-crl-light' : 'bg-crl'}`} aria-hidden="true"/>
      {children}
    </p>);
}
