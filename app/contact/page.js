import { Mail, ShieldCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — Clas Mortgage Processing',
  description: 'Get in touch about contract loan processing. Same-business-day response.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-50 pt-16 sm:pt-24 pb-12">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-3">Let&apos;s Talk</div>
          <h1 className="h-display text-slate2-900 mb-4">Tell us about your shop.</h1>
          <p className="lede max-w-xl mx-auto">We respond the same business day with onboarding steps and a per-file rate for your mix.</p>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
            <ContactForm />
            <div className="space-y-6">
              <div className="rounded-2xl bg-cream-50 border border-line p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5 text-lavender-600" />
                  <h3 className="font-display text-lg text-slate2-900">Email directly</h3>
                </div>
                <a href="mailto:info@clasmortgageprocessing.com" className="text-sm text-slate2-800 hover:text-lavender-600 font-semibold break-all">info@clasmortgageprocessing.com</a>
              </div>
              <div className="rounded-2xl bg-lavender-50 border border-lavender-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="h-5 w-5 text-lavender-600" />
                  <h3 className="font-display text-lg text-slate2-900">Licensed in</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-slate2-800">
                  <li>Colorado &middot; Mortgage Company Registration</li>
                  <li>Florida &middot; MBR7014</li>
                  <li>North Carolina &middot; R-219565</li>
                </ul>
                <p className="text-xs text-slate2-700 mt-3 leading-relaxed">Additional state licenses available on request.</p>
              </div>
              <div className="rounded-2xl bg-lavender-700 text-cream-100 p-6">
                <h3 className="font-display text-lg text-cream-50 mb-2">Who we work with</h3>
                <p className="text-sm text-cream-200/80 leading-relaxed">Mortgage brokers, independent loan officers, and small lender shops. We are not a direct-to-consumer service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
