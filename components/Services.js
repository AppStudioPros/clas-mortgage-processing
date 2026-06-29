'use client';
import { FileText, ScanSearch, MessageSquareText, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    icon: FileText,
    title: 'Full File Processing',
    body: 'Conventional, FHA, VA, USDA, jumbo, and non-QM. Purchase and refi. Disclosure prep, re-disclosure, and clean conditional handling through clear-to-close.',
    color: '#2a9d8f', bg: '#f0faf9',
  },
  {
    icon: ScanSearch,
    title: 'Document Collection',
    body: 'Borrower documents flow directly into your file via a secure upload path. No chasing email attachments. You stay in the loop on every upload.',
    color: '#7b6fa0', bg: '#f6f4fb',
  },
  {
    icon: MessageSquareText,
    title: 'Direct Communication',
    body: 'No call centers. No queues. Direct line to the processor working your pipeline. We answer the phone and we answer the email — quickly.',
    color: '#6b3fa0', bg: '#f3f0fa',
  },
  {
    icon: CheckCircle2,
    title: 'Lender-Specific Quirks',
    body: 'Every lender wants something different. We know what each one needs before they ask. Submissions land closer to clean the first time.',
    color: '#e07b39', bg: '#fff7ed',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-18 bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
          <div className="eyebrow mb-3">What We Do</div>
          <h2 className="h-section text-slate2-900 mb-5">
            Processing that respects your time<br className="hidden sm:inline"/> and your borrower's deadline.
          </h2>
          <p className="lede">
            We're a small team by design. Every file gets dedicated attention. Every loan officer gets a direct line. The relationship is the product.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{ background: s.bg, borderColor: s.color + '30', borderWidth: 1.5, borderStyle: 'solid' }}
              className="group relative rounded-2xl p-7 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{ background: s.color }}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display text-xl text-slate2-900 mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate2-700">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
