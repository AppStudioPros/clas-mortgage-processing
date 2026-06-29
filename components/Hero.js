'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, FileCheck2, Clock, ShieldCheck } from 'lucide-react';
import CloudBackdrop from './CloudBackdrop';

const QUOTES = [
  {
    text: "She's amazing, fast and accurate.",
    by: "Loan Officer Partner",
    note: "Identity withheld by request",
  },
  {
    text: "Small issues do not slow her down, she gets it handled.",
    by: "Mortgage Broker",
    note: "Identity withheld by request",
  },
  {
    text: "Clas Mortgage accommodates their clients and goes the extra mile.",
    by: "Broker Partner",
    note: "Identity withheld by request",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % QUOTES.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="relative overflow-hidden">
      {/* Background — animated soft cloud drift */}
      <CloudBackdrop />

      <div className="container-px mx-auto max-w-7xl pt-12 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        {/* Equal-height columns, quote ~80% of hero width side */}
        <div className="hero-grid grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-stretch">
          {/* LEFT — Hero copy */}
          <div className="animate-fade-up flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-lavender-300/60 bg-lavender-50 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-lavender-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-lavender-700">
                Licensed CO &middot; FL &middot; NC
              </span>
            </div>

            <h1 className="h-display text-slate2-900 mb-6">
              Contract loan processing<br />
              built around <span className="text-lavender-600">the loan officer.</span>
            </h1>

            <p className="lede max-w-xl mb-8">
              Direct partnership. No layered chain of command. We work inside your existing LOS &mdash; Arive, LendingPad, or Encompass &mdash; and keep your pipeline moving without the corporate friction that kills time and closes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Meet Shawna
              </Link>
            </div>

            {/* Trust micro-bar — higher contrast, readable */}
            <div className="hero-trust flex flex-wrap items-center gap-x-7 gap-y-3">
              {[
                { icon: FileCheck2, text: '25+ years processing', color: '#2a9d8f' },
                { icon: Clock,      text: '1-day initial review', color: '#7b6fa0' },
                { icon: ShieldCheck,text: 'Pay only at closing',  color: '#6b3fa0' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={16} color={color} strokeWidth={2.5} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1e293b' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Compact rotating quote card, vertically centered */}
          <div className="animate-fade-up flex items-center">
            <div
              className="relative w-full max-w-sm mx-auto lg:max-w-full"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Decorative purple frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-lavender-300/40 via-cream-100 to-lavender-200/40 -z-10 blur-2xl opacity-80" />

              {/* The quote card itself — smaller, even with hero copy */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-lavender-200/70 shadow-lg shadow-lavender-700/8 rounded-2xl p-6 sm:p-7">
                <div className="flex items-center justify-end mb-4">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-lavender-500">
                    What Partners Say
                  </div>
                </div>

                <div className="relative min-h-[140px] sm:min-h-[120px]">
                  {QUOTES.map((q, i) => (
                    <div key={i} className={`quote-card ${idx === i ? 'active' : ''} flex flex-col`}>
                      <p className="font-display text-lg sm:text-xl text-slate2-900 leading-snug">
                        &ldquo;{q.text}&rdquo;
                      </p>
                      <div className="mt-4 pt-4 border-t border-lavender-100">
                        <div className="text-xs font-semibold text-slate2-900">{q.by}</div>
                        <div className="text-[10px] text-slate2-500 mt-0.5">{q.note}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1.5 mt-5">
                  {QUOTES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === i ? 'w-5 bg-lavender-500' : 'w-1.5 bg-lavender-200 hover:bg-lavender-300'
                      }`}
                      aria-label={`Show testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Small floating CTC stat — purple */}
              <div className="hero-ctc-badge absolute -bottom-3 -right-3 hidden sm:block">
                <div className="rounded-xl bg-lavender-600 text-white px-4 py-2.5 shadow-lg shadow-lavender-700/30">
                  <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-lavender-100 leading-none">
                    Submission &rarr; CTC
                  </div>
                  <div className="font-display text-base text-white leading-tight mt-1">
                    Competitive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
