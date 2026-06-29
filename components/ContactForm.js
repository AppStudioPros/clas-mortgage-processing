'use client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', los: '', message: '' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputCls = 'w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors';
  const labelCls = 'block text-xs font-semibold uppercase tracking-[0.1em] text-slate2-700 mb-2';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
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
          <label className={labelCls}>Your name *</label>
          <input required className={inputCls} placeholder="Jane Smith" value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Company</label>
          <input className={inputCls} placeholder="Brokerage name" value={form.company} onChange={e => set('company', e.target.value)} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Email *</label>
          <input required type="email" className={inputCls} placeholder="jane@brokerage.com" value={form.email} onChange={e => set('email', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input className={inputCls} placeholder="(555) 123-4567" value={form.phone} onChange={e => set('phone', e.target.value)} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Primary LOS</label>
        <select className={inputCls} value={form.los} onChange={e => set('los', e.target.value)}>
          <option value="">Select your LOS...</option>
          <option>Arive</option>
          <option>LendingPad</option>
          <option>Encompass</option>
          <option>Calyx Point</option>
          <option>BytePro</option>
          <option>Mortgage Cadence</option>
          <option>Other / Not sure</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Tell us about your shop</label>
        <textarea rows={5} className={inputCls} placeholder="States you originate in, loan mix, monthly volume, and what you're looking for in a processing partner." value={form.message} onChange={e => set('message', e.target.value)} />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong — please email <a href="mailto:info@clasmortgageprocessing.com" className="underline">info@clasmortgageprocessing.com</a> directly.</p>
      )}
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-content-center flex items-center justify-center gap-2">
        {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : 'Send Inquiry'}
      </button>
      <p className="text-xs text-slate2-700/70 text-center">Same-business-day response. Your details are not shared.</p>
    </form>
  );
}
