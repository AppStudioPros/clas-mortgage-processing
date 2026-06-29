'use client';
import { FileText, ScanSearch, MessageSquareText, CheckCircle2, CheckCircle } from 'lucide-react';

const LOAN_TYPES = [
  { label: 'Conventional / FHA / VA / USDA', sub: 'Purchase & Refinance' },
  { label: 'Non-QM / Jumbo', sub: 'All product types' },
  { label: 'FHA 203K / ITIN / DSCR', sub: 'Specialty products' },
  { label: 'FHA Streamline / VA IRRRL', sub: 'Streamline refis' },
  { label: 'Piggybacks', sub: '2nd lien / combo' },
  { label: 'A La Carte & Tailored', sub: 'Partial processing' },
];

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

        {/* Loan types we process */}
        <div className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate2-500 mb-6">Loan types we process</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LOAN_TYPES.map(({ label, sub }) => (
              <div key={label} className="rounded-xl bg-cream-50 border border-line p-4 text-center">
                <CheckCircle className="h-4 w-4 text-lavender-500 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate2-800 leading-snug mb-1">{label}</p>
                <p className="text-[10px] text-slate2-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee banner */}
        <div className="mt-8 rounded-2xl bg-lavender-700 px-6 py-4 flex items-center justify-center gap-3 text-cream-50 text-sm font-semibold text-center flex-wrap">
          <CheckCircle className="h-4 w-4 flex-shrink-0 text-lavender-300" />
          All processing fees are paid on the closing disclosure — no fee if the loan does not close and fund.
        </div>
      </div>
    </section>
  );
}
