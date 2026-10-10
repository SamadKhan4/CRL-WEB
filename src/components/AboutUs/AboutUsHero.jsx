
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import HeroAboutImage from '../../assets/AboutUs/HeroAbout.png';

export function AboutUsHero() {
  return (
    <section
      className="
        relative
        mx-5
        mt-5
        h-[659px]
        overflow-hidden
        rounded-t-[20px]
         rounded-b-[20px]
        max-md:mx-3
        max-md:mt-3
        max-md:h-[520px]
        max-md:rounded-t-[16px]
      "
    >
     
      <img
        src={HeroAboutImage}
        alt="About CRL Transport"
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      
      <div
        className="
          absolute
          inset-0
          bg-black/55
        "
        aria-hidden="true"
      />

     
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="
          absolute
          left-[80px]
          top-[315px]
          text-left
          text-white

          max-md:left-[24px]
          max-md:top-[300px]
          max-md:w-[276px]
        "
      >
        
        <h1
          className="
            font-Instrument Sans
            text-[48px]
            font-normal
            leading-[1.1]
            tracking-[-0.5px]

            max-md:text-[36px]
          "
        >
          About Us
        </h1>

        {/* Breadcrumb */}
        <div
          className="
            mt-[10px]
            flex
            items-center
            justify-start
            gap-[10px]
            text-left
            text-[12px]
            font-normal
            leading-[1.4]

            max-md:text-[11px]
          "
        >
          <span>CRL</span>

          <ChevronRight
            size={14}
            strokeWidth={1.5}
            aria-hidden="true"
            className="shrink-0"
          />

          <span>About Us</span>
        </div>
      </motion.div>
    </section>
  );
}
