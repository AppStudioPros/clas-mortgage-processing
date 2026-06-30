import { Shield, MapPin, Phone, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'State Licensing | Clas Mortgage Processing',
  description: 'Clas Mortgage Processing is licensed in Colorado, Florida, and North Carolina. View our state license numbers and regulatory contact information.',
  alternates: { canonical: 'https://clasmortgageprocessing.com/licensing' },
};

const LICENSES = [
  {
    state: 'Colorado',
    type: 'Mortgage Company Registration',
    number: null,
    agency: 'Colorado Department of Regulatory Agencies — Division of Real Estate',
    address: '1560 Broadway, Suite 925, Denver, CO 80202',
    phone: '800-886-7675',
    url: 'https://dre.colorado.gov',
  },
  {
    state: 'Florida',
    type: 'Mortgage Broker License',
    number: 'MBR7014',
    agency: 'Florida Office of Financial Regulation',
    address: '200 East Gaines Street, Tallahassee, FL 32399',
    phone: '850-410-9895',
    url: 'https://www.flofr.gov',
  },
  {
    state: 'North Carolina',
    type: 'Mortgage Origination Support Registration',
    number: 'R-219565',
    agency: 'North Carolina Commissioner of Banks Office',
    address: '4309 Mail Service Center, Raleigh, NC 27699',
    phone: '919-733-3016',
    url: 'https://www.nccob.gov',
  },
];

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="bg-lavender-50 border-b border-lavender-100 pt-28 pb-16">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-lavender-100 text-lavender-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Shield size={13} /> Licensing & Compliance
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate2-900 mb-4 leading-tight">
            State Licensing
          </h1>
          <p className="text-slate2-600 text-lg max-w-2xl mx-auto">
            Clas Mortgage Processing holds active registrations and licenses in the following states. Don&apos;t see yours? We&apos;re actively expanding — reach out and we&apos;ll make it work.
          </p>
        </div>
      </section>

      {/* License cards */}
      <section className="py-16 container-px mx-auto max-w-4xl">
        <div className="grid gap-6">
          {LICENSES.map((lic) => (
            <div key={lic.state} className="bg-white rounded-2xl border border-lavender-100 shadow-sm p-7 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-display text-xl font-bold text-slate2-900">{lic.state}</h2>
                    <span className="inline-block bg-teal2-50 text-teal2-700 text-xs font-semibold px-3 py-1 rounded-full">Active</span>
                  </div>
                  <p className="text-slate2-600 text-sm mb-4">{lic.type}</p>

                  {lic.number && (
                    <div className="inline-flex items-center gap-2 bg-lavender-50 border border-lavender-100 rounded-lg px-4 py-2 mb-4">
                      <Shield size={14} className="text-lavender-500" />
                      <span className="text-xs text-slate2-500 font-medium">License #</span>
                      <span className="text-sm font-bold text-slate2-900">{lic.number}</span>
                    </div>
                  )}

                  <div className="space-y-2 text-sm text-slate2-500">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-lavender-400" />
                      <span>{lic.agency}<br />{lic.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="shrink-0 text-lavender-400" />
                      <a href={`tel:${lic.phone.replace(/-/g, '')}`} className="hover:text-lavender-600 transition-colors">{lic.phone}</a>
                    </div>
                  </div>
                </div>

                <a
                  href={lic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-lavender-600 hover:text-lavender-800 transition-colors whitespace-nowrap"
                >
                  Regulator website <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More states CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-lavender-600 to-purple-700 p-8 text-center text-white">
          <h3 className="font-display text-xl font-bold mb-2">Don&apos;t see your state?</h3>
          <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
            We&apos;re actively expanding our licensing footprint. We&apos;re willing to obtain licenses as needed — let&apos;s talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-lavender-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-lavender-50 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
