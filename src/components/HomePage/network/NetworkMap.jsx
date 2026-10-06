import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { hubCity, networkCities } from '../../../data/network';
import { MAP_HEIGHT, MAP_WIDTH, arcPath, project } from '../../../utils/geo';
const regionLabels = [
    { text: 'VIDARBHA', x: 700, y: 300 },
    { text: 'MARATHWADA', x: 360, y: 300 },
    { text: 'WESTERN MAHARASHTRA', x: 60, y: 425 }
];
export function NetworkMap({ activeTier, hoveredCity, onHoverCity, tierLabel }) {
    const reduce = useReducedMotion();
    const hub = project(hubCity.lat, hubCity.lon);
    const active = networkCities.filter((c) => c.tier === activeTier);
    return (<svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="h-auto w-full" role="img" aria-label={`Map of CRL routes from Nagpur — ${tierLabel} destinations: ${active.map((c) => c.name).join(', ')}`}>
      
      <defs>
        <pattern id="map-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="rgba(255,255,255,0.08)"/>
        </pattern>
      </defs>
      <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#map-dots)"/>

      {regionLabels.map((r) => <text key={r.text} x={r.x} y={r.y} fill="rgba(255,255,255,0.14)" fontSize="13" fontWeight={700} letterSpacing="4" fontFamily="Manrope, sans-serif">
        
          {r.text}
        </text>)}

      <AnimatePresence>
        {active.map((city, i) => {
            const pt = project(city.lat, city.lon);
            const isHover = hoveredCity === city.name;
            return (<motion.path key={`${activeTier}-${city.name}`} d={arcPath(hub, pt)} fill="none" stroke={isHover ? '#FF5A5F' : 'rgba(255,90,95,0.5)'} strokeWidth={isHover ? 2.5 : 1.4} strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.15 } }} transition={{ duration: 0.7, delay: reduce ? 0 : Math.min(i * 0.03, 0.5), ease: [0.23, 1, 0.32, 1] }}/>);
        })}
      </AnimatePresence>

      {networkCities.map((city) => {
            const pt = project(city.lat, city.lon);
            const isActive = city.tier === activeTier;
            const isHover = hoveredCity === city.name;
            const showLabel = isHover || isActive && (activeTier !== 'next' || city.major);
            return (<g key={city.name} onMouseEnter={() => isActive && onHoverCity(city.name)} onMouseLeave={() => onHoverCity(null)} style={{ cursor: isActive ? 'pointer' : 'default' }}>
            
            <circle cx={pt.x} cy={pt.y} r="12" fill="transparent"/>
            <circle cx={pt.x} cy={pt.y} r={isHover ? 7 : isActive ? 4.5 : 3} fill={isHover ? '#FF5A5F' : isActive ? '#ffffff' : 'rgba(255,255,255,0.22)'} stroke={isActive ? '#D71920' : 'none'} strokeWidth={isActive ? 2 : 0} style={{ transition: 'r 200ms ease-out, fill 200ms ease-out' }}/>
            
            {showLabel &&
                    <text x={pt.x + (city.labelDx ?? 10)} y={pt.y + (city.labelDy ?? 4)} textAnchor={city.anchor ?? 'start'} fill={isHover ? '#ffffff' : 'rgba(255,255,255,0.85)'} fontSize={isHover ? 15 : 13} fontWeight={600} fontFamily="Inter, sans-serif" stroke="#101D2B" strokeWidth="4" style={{ paintOrder: 'stroke' }}>
              
                {city.name}
              </text>}
          </g>);
        })}

      {!reduce &&
            <motion.circle cx={hub.x} cy={hub.y} fill="none" stroke="#D71920" strokeWidth="1.5" initial={{ r: 10, opacity: 0.6 }} animate={{ r: 26, opacity: 0 }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}/>}
      <circle cx={hub.x} cy={hub.y} r="10" fill="#D71920" stroke="#fff" strokeWidth="3"/>
      <text x={hub.x - 16} y={hub.y - 14} textAnchor="end" fill="#fff" fontSize="17" fontWeight={800} fontFamily="Manrope, sans-serif" stroke="#101D2B" strokeWidth="5" style={{ paintOrder: 'stroke' }}>
        
        Nagpur
      </text>
    </svg>);
}
