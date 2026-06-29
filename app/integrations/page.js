import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'LOS Integrations — Clas Mortgage Processing',
  description: 'Clas Mortgage Processing works natively inside Arive, LendingPad, and Encompass. We adapt to your platform.',
};

const platforms = [
  {
    name: 'Arive',
    logo: '/los/arive.png',
    description: 'We join your Arive team as a scoped contract processor — directly inside your existing account, with access limited to your files.',
    how: [
      'You invite us to your Arive team as a contract processor',
      'Access is scoped to your files only — nothing else is visible',
      'We pick up the file, work it end-to-end, and update status in real time',
      'You stay in the loop with full transparency',
    ],
  },
  {
    name: 'LendingPad',
    logo: '/los/lendingpad.png',
    description: 'As a certified LendingPad third-party fulfillment partner, we integrate directly into your pipeline without any workarounds.',
    how: [
      'We operate as a certified third-party fulfillment partner',
      'You grant us access to specific loan files',
      'We process inside your LendingPad environment — no exports, no workarounds',
      'Status and conditions update directly in your LOS',
    ],
  },
  {
    name: 'Encompass',
    logo: '/partners/encompass.png',
    description: 'We onboard as a named API user inside your lender instance of Encompass, maintaining full compliance with ICE Mortgage Technology standards.',
    how: [
      'We are set up as a named user inside your Encompass instance',
      'Full ICE Mortgage Technology compliance maintained',
      'Condition tracking, milestone updates, and document management handled in-platform',
      'No third-party bridges or middleware',
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="bg-cream-50 pt-16 sm:pt-24 pb-12">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-3">LOS Integrations</div>
          <h1 className="h-display text-slate2-900 mb-4">We work in your platform,<br /><span className="text-lavender-600">not the other way around.</span></h1>
          <p className="lede max-w-xl mx-auto">Clas integrates natively into the LOS you already use. No new software. No extra logins for your team. Just processing that fits into your existing workflow.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px mx-auto max-w-4xl space-y-10">
          {platforms.map(({ name, logo, description, how }) => (
            <div key={name} className="rounded-2xl border border-line bg-cream-50 overflow-hidden">
              <div className="flex items-center gap-5 px-7 py-6 border-b border-line bg-white">
                <div className="h-12 w-28 relative flex-shrink-0">
                  <Image src={logo} alt={name} fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
                </div>
                <p className="text-slate2-700 text-sm leading-relaxed">{description}</p>
              </div>
              <div className="px-7 py-6">
                <p className="text-xs font-semibold text-lavender-600 uppercase tracking-widest mb-4">How it works</p>
                <ul className="space-y-3">
                  {how.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate2-700 leading-relaxed">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-lavender-100 text-lavender-700 text-xs font-bold mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-lavender-700 text-cream-50">
        <div className="container-px mx-auto max-w-2xl text-center">
          <h2 className="h-section text-cream-50 mb-4">Not on one of these platforms?</h2>
          <p className="text-cream-200/80 mb-8">If you're running a different LOS, reach out. We evaluate new platforms on a case-by-case basis and will let you know if we can make it work.</p>
          <Link href="/contact" className="btn-gold">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
