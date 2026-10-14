import React from 'react';

import { ContactInfoCard } from './ContactInfoCard';
import { contactCards } from '../../data/contact';

export function ContactInfoCards() {
  return (
    <section className="w-full bg-[#F6F7F9] pt-[3.2vw] max-lg:pt-10">
      <div
        className="
          mx-auto grid w-[84vw] grid-cols-4 gap-[1.2vw]
          max-lg:w-[92vw] max-lg:grid-cols-2 max-lg:gap-4
          max-md:w-[calc(100%-40px)] max-md:grid-cols-1
        "
      >
        {contactCards.map((card, index) => (
          <ContactInfoCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
