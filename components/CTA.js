'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-lavender-200/30 blur-[120px]" />
      </div>
      <div className="container-px mx-auto max-w-3xl text-center">
        <div className="eyebrow mb-3">Let's Talk</div>
        <h2 className="h-section text-slate2-900 mb-5">
          Ready to move files without the friction?
        </h2>
        <p className="lede max-w-xl mx-auto mb-9">
          Tell us a little about your shop and the LOS you're on. We'll respond the same business day with onboarding steps and a per-file rate for your file mix.
        </p>
        <div className="cta-buttons flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="btn-primary">
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="mailto:info@clasmortgageprocessing.com" className="btn-secondary">
            Email Directly
          </a>
        </div>
      </div>
    </section>
  );
}
