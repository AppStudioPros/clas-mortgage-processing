'use client';
import Link from 'next/link';

const LICENSES = [
  {
    state: 'Colorado',
    name: 'Mortgage Company Registration',
    regulator: 'Department of Regulatory Agencies — Division of Real Estate',
    addr: '1560 Broadway, Suite 925, Denver, CO 80202',
    phone: '800-886-7675',
  },
  {
    state: 'Florida',
    name: 'Mortgage Broker License',
    license: 'MBR7014',
    regulator: 'Office of Financial Regulation',
    addr: '200 East Gaines Street, Tallahassee, FL 32399',
    phone: '850-410-9895',
  },
  {
    state: 'North Carolina',
    name: 'Mortgage Origination Support Registration',
    license: 'R-219565',
    regulator: 'Commissioner of Banks Office',
    addr: '4309 Mail Service Center, Raleigh, NC 27699',
    phone: '919-733-3016',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-lavender-800 text-cream-200/80">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        {/* Top */}
        <div className="footer-grid grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-14 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <img src="/images/clas-logo-white.png" alt="Clas Mortgage Processing" style={{ height: 96, width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Dependable contract loan processing for mortgage brokers, loan officers, and small lender shops. Direct partnership. No corporate friction.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cream-50 font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-lavender-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-lavender-400 transition-colors">Services</Link></li>
              <li><Link href="/#integrations" className="hover:text-lavender-400 transition-colors">Integrations</Link></li>
              <li><Link href="/blog" className="hover:text-lavender-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-lavender-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-cream-50 font-semibold text-sm mb-4">For Partners</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="hover:text-lavender-400 transition-colors">Get Started</Link></li>
              <li><Link href="/portal" className="hover:text-lavender-400 transition-colors">Partner Portal</Link></li>
              <li><a href="mailto:info@clasmortgageprocessing.com" className="hover:text-lavender-400 transition-colors">info@clasmortgageprocessing.com</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-cream-50 font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="hover:text-lavender-400 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-lavender-400 transition-colors">Terms</Link></li>
              <li><Link href="/security" className="hover:text-lavender-400 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Licenses */}
        <div className="border-t border-cream-200/10 pt-10">
          <h4 className="text-cream-50 font-semibold text-xs uppercase tracking-[0.15em] mb-6">Licensed Contract Loan Processing</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs leading-relaxed">
            {LICENSES.map(l => (
              <div key={l.state} className="text-cream-200/75">
                <div className="text-lavender-400 font-semibold text-sm mb-1">{l.state}</div>
                <div className="text-cream-100/90">{l.name}</div>
                {l.license && <div>License #{l.license}</div>}
                {!l.license && <div className="opacity-60">License pending registration verification</div>}
                <div className="mt-2 opacity-75">{l.regulator}</div>
                <div className="opacity-75">{l.addr}</div>
                <div className="opacity-75">{l.phone}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-cream-200/50 mt-6 max-w-3xl">
            Additional state licenses available on request. Clas Mortgage Processing operates as a third-party contract loan processor on behalf of licensed mortgage brokers, loan officers, and small lender shops. We are not a direct-to-consumer service.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream-200/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
          <div>© {year} Clas Mortgage Processing. All rights reserved.</div>
          <div className="opacity-70">Built with care.</div>
        </div>
      </div>
    </footer>
  );
}
