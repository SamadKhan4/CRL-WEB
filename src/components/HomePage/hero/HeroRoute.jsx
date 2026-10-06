import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
const ROUTE = 'M 48 392 C 110 382 128 264 206 240 C 278 218 317 140 360 64';
const nodes = [
    { x: 48, y: 392, label: 'Pickup', sub: 'Your doorstep', align: 'right' },
    { x: 206, y: 240, label: 'Hub', sub: 'Nagpur', align: 'right' },
    { x: 360, y: 64, label: 'Destination', sub: 'Door delivery', align: 'right' }
];
export function HeroRoute() {
    const reduce = useReducedMotion();
    return (<svg viewBox="0 0 400 440" className="h-full w-full overflow-visible" role="img" aria-label="Route from pickup to hub to destination">
      <path d={ROUTE} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="4 6"/>
      <motion.path d={ROUTE} fill="none" stroke="#D71920" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.7, ease: [0.65, 0, 0.35, 1] }}/>
      
      {!reduce &&
            <circle r="4" fill="#fff">
          <animateMotion dur="7s" begin="2.4s" repeatCount="indefinite" path={ROUTE}/>
        </circle>}
      {nodes.map((n, i) => <motion.g key={n.label} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.8 + i * 0.5, ease: [0.23, 1, 0.32, 1] }} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
        
          <circle cx={n.x} cy={n.y} r="14" fill="rgba(215,25,32,0.18)"/>
          <circle cx={n.x} cy={n.y} r="6" fill="#D71920" stroke="#fff" strokeWidth="2"/>
          <g transform={`translate(${n.align === 'right' ? n.x + 22 : n.x - 132}, ${n.y - 22})`}>
            <rect width="110" height="44" rx="6" fill="rgba(7,17,31,0.82)" stroke="rgba(255,255,255,0.14)"/>
            <text x="12" y="19" fill="#fff" fontSize="13" fontWeight={500} fontFamily="Manrope, sans-serif">
              {n.label}
            </text>
            <text x="12" y="34" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="Inter, sans-serif">
              {n.sub}
            </text>
          </g>
        </motion.g>)}
    </svg>);
}
