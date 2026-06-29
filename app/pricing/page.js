import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Pricing — Clas Mortgage Processing',
  description: 'Transparent, per-file pricing for contract loan processing. No charge if the loan does not close and fund.',
};

const fees = [
  'Conventional / FHA / VA / USDA',
  'Non-QM / Jumbo / FHA 203K / ITIN / DSCR',
  'FHA Streamline / VA IRRRL',
  'Piggybacks',
  'Additional submissions (after 3) / File restructure',
];

const alacarte = [
  'Dedicated processor assigned to your account',
  'Custom document checklist preparation',
  'Pre-submission file review',
  'Condition clearing assistance',
  'Disclosure preparation',
  'Rush file handling (after first 2/month)',
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-cream-50 pt-16 sm:pt-24 pb-12">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-3">Pricing</div>
          <h1 className="h-display text-slate2-900 mb-4">Flat per-file rates.<br /><span className="text-lavender-600">No surprises.</span></h1>
          <p className="lede max-w-xl mx-auto">All processing fees are paid on the closing disclosure. There is no fee if the loan does not close and fund.</p>
        </div>
      </section>

      <div className="bg-lavender-700 py-4">
        <div className="container-px mx-auto max-w-4xl flex items-center justify-center gap-3 text-cream-50 text-sm font-semibold text-center flex-wrap">
          <CheckCircle className="h-4 w-4 flex-shrink-0 text-lavender-300" />
          ALL PROCESSING FEES ARE PAID ON THE CD — NO FEE IF THE LOAN DOES NOT CLOSE AND FUND
        </div>
      </div>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px mx-auto max-w-3xl">

          <h2 className="h-section text-slate2-900 mb-2">Processing Fees</h2>
          <p className="text-slate2-600 text-sm mb-8">Per-file flat rates. Billed at closing.</p>

          <div className="rounded-2xl border border-line overflow-hidden mb-12">
            {fees.map((type, i) => (
              <div key={type} className={"flex items-center justify-between gap-4 px-6 py-5 " + (i < fees.length - 1 ? "border-b border-line " : "") + (i % 2 === 0 ? "bg-cream-50" : "bg-white")}>
                <span className="text-slate2-800 font-medium text-sm sm:text-base leading-snug">{type}</span>
                <span className="flex-shrink-0 text-slate2-400 text-sm font-normal italic">Contact for rate</span>
              </div>
            ))}
          </div>

          <h2 className="h-section text-slate2-900 mb-2">A La Carte Services</h2>
          <p className="text-slate2-600 text-sm mb-6">A la carte fees are billed every 30 days. Available for brokers who need targeted support rather than full processing.</p>

          <div className="rounded-2xl bg-lavender-50 border border-lavender-100 p-6 sm:p-8 mb-8">
            <ul className="space-y-3">
              {alacarte.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate2-700">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-lavender-500 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line overflow-hidden">
            <div className="bg-slate2-900 px-6 py-4">
              <h3 className="font-display text-lg text-cream-50">Tailored Solutions</h3>
            </div>
            <div className="px-6 py-6">
              <p className="text-slate2-700 text-sm leading-relaxed mb-5">Not in need of full processing services? We can accommodate your specific needs — whether that is partial processing, overflow support during volume spikes, or a custom engagement. Schedule a call and we will scope it out.</p>
              <Link href="/contact" className="btn-gold inline-flex">Submit an Inquiry</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50 border-t border-line">
        <div className="container-px mx-auto max-w-2xl text-center">
          <h2 className="h-section text-slate2-900 mb-4">Ready to get started?</h2>
          <p className="text-slate2-600 mb-8 text-sm leading-relaxed">Reach out and we will confirm rates for your specific file mix and state.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Get Started</Link>
            <a href="mailto:info@clasmortgageprocessing.com" className="btn-secondary">Email Us Directly</a>
          </div>
        </div>
      </section>
    </>
  );
}
