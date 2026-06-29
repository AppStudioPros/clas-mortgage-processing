'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Phase 2: wire to Resend + Supabase. For now: show a thank-you state.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-lavender-50 border border-lavender-100 p-8 text-center">
        <div className="font-display text-2xl text-slate2-900 mb-3">Thanks — we&apos;re on it.</div>
        <p className="text-slate2-700 text-sm leading-relaxed">
          Shawna or the team will respond within one business day. In the meantime, you can email{' '}
          <a className="text-lavender-600 font-semibold underline decoration-lavender-400 underline-offset-2" href="mailto:info@clasmortgageprocessing.com">info@clasmortgageprocessing.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate2-700 mb-2">Your name</label>
          <input required className="w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate2-700 mb-2">Company</label>
          <input className="w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors" placeholder="Brokerage name" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate2-700 mb-2">Email</label>
          <input required type="email" className="w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors" placeholder="jane@brokerage.com" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate2-700 mb-2">Phone</label>
          <input className="w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors" placeholder="(555) 123-4567" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate2-700 mb-2">Primary LOS</label>
        <select className="w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors">
          <option>Arive</option><option>LendingPad</option><option>Encompass</option>
          <option>Calyx Point</option><option>BytePro</option><option>Mortgage Cadence</option>
          <option>Other / Not sure</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate2-700 mb-2">Tell us about your shop</label>
        <textarea rows={5} className="w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors" placeholder="States you originate in, loan mix, monthly volume, and what you're looking for in a processing partner." />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">Send Inquiry</button>
      <p className="text-xs text-slate2-700/70 text-center">Same-business-day response. Your details are not shared.</p>
    </form>
  );
}
