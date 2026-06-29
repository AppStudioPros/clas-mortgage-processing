import { ShieldCheck, Lock, FileKey, AlertCircle } from 'lucide-react';

export const metadata = { title: 'Security — Clas Mortgage Processing' };
export default function Security() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="container-px mx-auto max-w-3xl">
        <div className="eyebrow mb-3">Security & Compliance</div>
        <h1 className="h-section text-slate2-900 mb-5">How we handle borrower data.</h1>
        <p className="lede mb-10">Mortgage data is regulated. Our default posture is encryption, scoped access, and clean retention.</p>
        <div className="space-y-5">
          {[
            { icon: Lock, t: 'Encryption at rest and in transit', b: 'All borrower documents are stored encrypted in compliance-grade infrastructure. Transport is TLS-only.' },
            { icon: FileKey, t: 'Scoped access', b: 'Access is per-file, per-loan-officer. We do not have visibility into borrower files outside the active transactions you grant us.' },
            { icon: ShieldCheck, t: 'ALTA Best Practice alignment', b: 'Our handling, retention, and disposal practices align with ALTA Best Practice guidance and applicable state and federal requirements.' },
            { icon: AlertCircle, t: 'Retention follows your policy', b: 'When a file closes or is withdrawn, our retention follows your firm\u2019s documented policy. Right-to-erasure honored on confirmed request.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 rounded-xl bg-white border border-line p-5">
              <item.icon className="h-5 w-5 text-lavender-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-lg text-slate2-900 mb-1">{item.t}</h3>
                <p className="text-sm text-slate2-700 leading-relaxed">{item.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
