import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center bg-cream-50">
      <div className="container-px mx-auto max-w-xl text-center">
        <div className="eyebrow mb-3">404</div>
        <h1 className="h-display text-slate2-900 mb-4">Page not found.</h1>
        <p className="lede mb-8">The page you&apos;re looking for moved or never existed.</p>
        <Link href="/" className="btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
