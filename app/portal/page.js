import Link from 'next/link';
import { Lock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Partner Portal — Clas Mortgage Processing',
  description: 'Secure document drop and file status for Clas partners.',
};

export default function PortalLanding() {
  return (
    <section className="min-h-[70vh] flex items-center bg-cream-50 py-20">
      <div className="container-px mx-auto max-w-2xl text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-lavender-600 text-lavender-400 mb-6">
          <Lock className="h-6 w-6" />
        </div>
        <div className="eyebrow mb-3">Partner Portal</div>
        <h1 className="h-display text-slate2-900 mb-4">Coming soon.</h1>
        <p className="lede max-w-lg mx-auto mb-8">
          The secure document drop and file status board are launching with our next release. In the meantime, partners receive a private invite link and direct contact with Shawna.
        </p>
        <Link href="/contact" className="btn-primary">
          Request Access
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
