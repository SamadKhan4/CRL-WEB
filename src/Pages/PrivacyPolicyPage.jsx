import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { privacySections } from '../data/privacy';

export function PrivacyPolicyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Privacy Policy | Chaple Roadlines Pvt. Ltd.';
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  return <div className="min-h-screen bg-[#F6F7F9] text-navy-900">
    <Header forceSolid />
    <main id="main" className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#5D6672]">
          <Link to="/" className="hover:text-crl">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>Privacy Policy
        </nav>
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wide text-crl">Customer information</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-base leading-7 text-[#5D6672]">How Chaple Roadlines Pvt. Ltd. handles information shared through our website, quotation requests, contact forms and shipment services.</p>
          <p className="mt-4 text-sm font-semibold">Last updated: <time dateTime="2026-10-27">27 October 2026</time></p>
        </header>
        <div className="grid items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-xl border border-[#E9EDF2] bg-white p-6 lg:sticky lg:top-28">
            <h2 className="font-display text-lg font-bold">On this page</h2>
            <nav aria-label="Privacy policy sections" className="mt-4">
              <ol className="space-y-3 text-sm leading-5 text-[#5D6672]">
                {privacySections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="block hover:text-crl">{index + 1}. {section.title}</a></li>)}
                <li><a href="#contact" className="block hover:text-crl">Contact CRL</a></li>
              </ol>
            </nav>
          </aside>
          <article className="min-w-0 rounded-xl border border-[#E9EDF2] bg-white p-6 sm:p-10">
            <div className="space-y-9">
              {privacySections.map((section, index) => <section id={section.id} key={section.id} className="scroll-mt-32" aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`} className="font-display text-xl font-bold">{index + 1}. {section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-[#4B5563] sm:text-base">{paragraph}</p>)}
              </section>)}
              <section id="contact" className="scroll-mt-32 border-t border-[#E9EDF2] pt-8" aria-labelledby="privacy-contact-title">
                <h2 id="privacy-contact-title" className="font-display text-xl font-bold">Contact CRL</h2>
                <p className="mt-4 font-semibold">Chaple Roadlines Pvt. Ltd.</p>
                <p className="mt-2 text-sm leading-7 text-[#4B5563]">For privacy questions, information requests or concerns, email our team with the subject Privacy Request. Include your enquiry or LR reference where relevant.</p>
                <a className="mt-3 block break-words text-sm font-semibold text-crl underline underline-offset-4" href="mailto:chapleroadlines26@crl-transport.com">chapleroadlines26@crl-transport.com</a>
                <a className="mt-3 block text-sm font-semibold text-crl underline underline-offset-4" href="tel:+917499358403">+91 74993 58403</a>
                <Link to="/terms-and-conditions" className="mt-5 mr-5 inline-block text-sm font-semibold underline underline-offset-4">Terms &amp; Conditions</Link>
                <Link to="/contact" className="mt-5 inline-block text-sm font-semibold underline underline-offset-4">Visit our Contact page</Link>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
    <Footer />
  </div>;
}
