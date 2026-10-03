import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '../../utils/motion';
export function Reveal({ children, delay = 0, y = 36, className = '', as = 'div' }) {
    const Component = as === 'li' ? motion.li : motion.div;
    return (<Component className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay, ease: easeOut }}>
      
      {children}
    </Component>);
}
