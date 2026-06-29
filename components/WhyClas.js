'use client';

const POINTS = [
  {
    num: '01',
    title: 'Direct partnership',
    body: 'No layered chain of command. You talk to the person processing your file, not a queue manager.',
  },
  {
    num: '02',
    title: 'Pay only at closing',
    body: 'Per-file flat rate billed at clear-to-close. No retainer. No surprises. No charge if the loan doesn\'t close.',
  },
  {
    num: '03',
    title: '20+ years processing',
    body: 'Shawna started in 2001. Worked the 2007-2009 recession as a contract processor. Returned through underwriting and management before founding Clas in 2023.',
  },
  {
    num: '04',
    title: 'Multi-state licensed',
    body: 'Colorado, Florida, and North Carolina licensed today. Additional state licenses available on request.',
  },
];

export default function WhyClas() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-lavender-700 text-cream-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="whyclas-grid grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="eyebrow text-lavender-400 mb-3">Why Clas</div>
            <h2 className="h-section text-cream-50 mb-5">
              Built to fix what we'd watched break for two decades.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-cream-200/90 max-w-md">
              The mortgage industry doesn't lack capacity. It lacks partners. Clas is a small team by design — the kind that treats your file like our own pipeline.
            </p>
          </div>

          <div className="space-y-6">
            {POINTS.map((p) => (
              <div key={p.num} className="flex gap-5 items-start">
                <div className="flex-shrink-0 font-display text-3xl text-lavender-400/80 leading-none mt-1 w-12">
                  {p.num}
                </div>
                <div>
                  <h3 className="font-display text-xl text-cream-50 mb-2">{p.title}</h3>
                  <p className="text-cream-200/80 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
