import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
const variants = {
    primary: 'bg-crl text-white hover:bg-crl-dark',
    'outline-light': 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900',
    'outline-dark': 'border border-navy-900/15 text-ink hover:border-navy-900 hover:bg-navy-900 hover:text-white',
    dark: 'bg-navy-900 text-white hover:bg-navy-700'
};
const sizes = {
    md: 'h-11 px-5 text-[15px]',
    lg: 'h-14 px-7 text-base'
};
export function ButtonLink({ variant = 'primary', size = 'md', showArrow = true, className = '', children, ...rest }) {
    return (<a className={`group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md font-semibold transition-colors duration-200 ease-out ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      
      {children}
      {showArrow &&
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true"/>}
    </a>);
}
