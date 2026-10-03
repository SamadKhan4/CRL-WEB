import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
export function CountUp({ value, suffix = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduce = useReducedMotion();
    const [display, setDisplay] = useState(reduce ? value : 0);
    useEffect(() => {
        if (!inView || reduce)
            return;
        const controls = animate(0, value, {
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1],
            onUpdate: (v) => setDisplay(Math.round(v))
        });
        return () => controls.stop();
    }, [inView, reduce, value]);
    return (<span ref={ref} aria-label={`${value}${suffix}`}>
      {display}
      {suffix}
    </span>);
}
