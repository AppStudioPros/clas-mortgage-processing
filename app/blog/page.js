import Link from 'next/link';

export const metadata = {
  title: 'Blog — Clas Mortgage Processing',
  description: 'Articles on contract loan processing, lender quirks, LOS workflows, and the mortgage business.',
};

const POSTS = [
  // Placeholder posts. Phase 2 will wire to Supabase + Tiptap CMS (mirror Insurance Wheatridge pattern).
  {
    slug: 'why-broker-los-pairing-matters',
    title: 'Why the broker–LOS pairing matters more than the LOS itself',
    excerpt: 'Pick the LOS that fits your shop\'s deal flow, not the one with the slickest demo. A working note on Arive vs. LendingPad vs. Encompass for small shops.',
    date: 'Coming soon',
    cat: 'Tools',
  },
  {
    slug: 'lender-quirks-101',
    title: 'Lender quirks 101 — what we wish every LO submitted clean',
    excerpt: 'Three patterns that show up in 80% of files and trigger conditions every single time. Fix these upfront and your conditions list shrinks materially.',
    date: 'Coming soon',
    cat: 'Field Notes',
  },
  {
    slug: 'contract-processor-onboarding-15-min',
    title: 'The 15-minute contract processor onboarding call',
    excerpt: 'What a good onboarding conversation actually covers — scope, access, communication cadence, and the per-file rate. Skip the bloat.',
    date: 'Coming soon',
    cat: 'Process',
  },
];

export default function BlogIndex() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-50 pt-16 sm:pt-24 pb-12">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-3">Blog</div>
          <h1 className="h-display text-slate2-900 mb-4">
            Notes from the file room.
          </h1>
          <p className="lede max-w-xl mx-auto">
            Field-grade thinking on loan processing, lender quirks, LOS workflows, and running a small contract processing shop.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(p => (
              <article
                key={p.slug}
                className="group rounded-2xl border border-line bg-cream-50 p-6 transition-all hover:border-lavender-400 hover:shadow-xl hover:shadow-slate2-900/5 hover:-translate-y-1 flex flex-col"
              >
                <div className="eyebrow mb-3">{p.cat}</div>
                <h2 className="font-display text-xl text-slate2-900 mb-3 leading-tight group-hover:text-slate2-800">
                  {p.title}
                </h2>
                <p className="text-sm text-slate2-700 leading-relaxed mb-5 flex-1">
                  {p.excerpt}
                </p>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-lavender-600">
                  {p.date}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-lavender-50 border border-lavender-100 p-6 text-center">
            <p className="text-sm text-slate2-700">
              First posts dropping soon. Want to be on the short-list when they go live?{' '}
              <Link href="/contact" className="font-semibold text-slate2-900 underline decoration-lavender-400 underline-offset-2 hover:text-lavender-600">
                Tell us where to send them.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
