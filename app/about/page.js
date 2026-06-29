import Link from 'next/link';
import { Reveal, StaggerParent, StaggerChild } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About — Clas Mortgage Processing',
  description: 'Founded by Shawna Nguyen in 2023 to fix the corporate friction she watched break the LO-processor relationship for two decades.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-50 pt-16 sm:pt-24 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 right-1/3 h-[400px] w-[400px] rounded-full bg-lavender-100/40 blur-[120px]" />
        </div>
        <Reveal variant="fadeUp"><div className="container-px mx-auto max-w-5xl text-center">
          <div className="eyebrow mb-3">About Clas</div>
          <h1 className="h-display text-slate2-900 mb-5 max-w-3xl mx-auto">
            Built around the loan officer.<br />
            <span className="text-lavender-600">Run by someone who's been there.</span>
          </h1>
          <p className="lede max-w-2xl mx-auto">
            We started Clas in 2023 with one purpose: deliver dependable contract loan processing that respects the loan officer's time and the borrower's deadline.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 bg-white">
        <Reveal variant="fadeUp"><div className="container-px mx-auto max-w-3xl prose prose-lg">
          <h2 className="font-display text-3xl sm:text-4xl text-slate2-900 mb-6">The story</h2>
          <p className="text-slate2-700 leading-relaxed mb-5">
            The mortgage industry doesn't lack capacity. It lacks <strong className="text-slate2-900">partners</strong> — processors who treat your file like their own pipeline, who communicate without being asked, who know what each lender wants before the lender asks for it.
          </p>
          <p className="text-slate2-700 leading-relaxed mb-5">
            That's the gap we built Clas to fill.
          </p>
          <p className="text-slate2-700 leading-relaxed mb-5">
            We're a small team by design. Every file gets dedicated attention. Every loan officer gets a direct line to the processor working their pipeline. No call centers. No queues. No surprises.
          </p>
          <p className="text-slate2-700 leading-relaxed">
            If you're a broker, LO, or small lender shop looking for a processing partner who actually answers the phone and clears files — that's the relationship we're building.
          </p>
        </div>
      </section>

      {/* Shawna */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal variant="slideLeft"><div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="relative aspect-[4/5] max-w-sm">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-lavender-200/60 to-sage-100 -z-10 blur-xl" />
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-lavender-600 shadow-xl shadow-slate2-900/15">
                  <img
                    src="/images/shawna.webp"
                    alt="Shawna Nguyen"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="eyebrow mb-2">Founder</div>
              <h2 className="font-display text-4xl text-slate2-900 mb-2">Shawna Nguyen</h2>
              <div className="text-lavender-600 font-semibold text-sm uppercase tracking-[0.1em] mb-6">
                CEO · Contract Loan Processor
              </div>

              <div className="space-y-5 text-slate2-700 leading-relaxed">
                <p>
                  Shawna entered the mortgage industry in 2001 as a loan processor and quickly discovered her passion was clearing files to close. The phrase <strong className="text-slate2-900">"clear to close"</strong> became more than a job — it became her standard.
                </p>
                <p>
                  During the 2007–2009 recession, she worked as a contract processor and saw firsthand where the broker-LO relationship breaks down: the chain-of-command friction inside corporate mortgage shops that slows files and frustrates loan officers.
                </p>
                <p>
                  She returned to the workforce to broaden her skill set, taking on underwriting and management roles to understand every layer of the process.
                </p>
                <p>
                  She founded <strong className="text-slate2-900">Clas Mortgage Processing</strong> in 2023 to fix the problem she'd watched for two decades. Direct contract processing. No layers between the LO and the file. No corporate friction. Just clean processing, careful work, and the kind of partnership where loan officers know their files are getting the attention they need.
                </p>
                <p>
                  Shawna is licensed in <strong className="text-slate2-900">Colorado, Florida, and North Carolina</strong>, with additional state licenses available on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deno (tasteful mascot footnote) */}
      <section className="py-12 bg-white border-t border-line">
        <div className="container-px mx-auto max-w-3xl">
          <div className="flex items-start gap-5 bg-cream-50 border border-line rounded-2xl p-6">
            <div className="flex-shrink-0">
              <div className="h-14 w-14 rounded-full bg-lavender-600 flex items-center justify-center">
                <span className="text-2xl">🐾</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-slate2-900 mb-1">Meet Deno</h3>
              <p className="text-sm text-slate2-700 leading-relaxed">
                Deno is our mascot — Shawna's rescue cat, adopted in 2022. He's also the small AI assistant at the bottom of the page; he can answer the kind of quick questions partners ask most often. For anything specific to a file, talk to Shawna directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-lavender-700 text-cream-50 text-center">
        <Reveal variant="fadeUp"><div className="container-px mx-auto max-w-2xl">
          <h2 className="h-section text-cream-50 mb-4">Ready to start a conversation?</h2>
          <p className="text-cream-200/80 mb-8">
            Tell us about your shop and the LOS you're on. We respond the same business day.
          </p>
          <Link href="/contact" className="btn-gold">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
