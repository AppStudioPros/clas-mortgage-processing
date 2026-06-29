'use client';
import { Home, Shield, Leaf, Zap, BarChart3, Gift } from 'lucide-react';
import { useState } from 'react';

// ── Real lenders with Clearbit logo URLs ────────────────────────────────────
const LENDERS = [
  { name: 'A&D Mortgage',          domain: 'admortgage.com',         color: '#2a9d8f' },
  { name: 'Acra Lending',          domain: 'acralending.com',        color: '#7b6fa0' },
  { name: 'Angel Oak',             domain: 'angeloakms.com',         color: '#e07b39' },
  { name: 'Champions Funding',     domain: 'championsfunding.com',   color: '#2a9d8f' },
  { name: 'Click N Close',         domain: 'clicknclose.com',        color: '#3b82f6' },
  { name: 'Change Wholesale',      domain: 'changewholesale.com',    color: '#7b6fa0' },
  { name: 'Equity Prime',          domain: 'equityprimemortgage.com',color: '#e07b39' },
  { name: 'Freedom Mortgage',      domain: 'freedommortgage.com',    color: '#2a9d8f' },
  { name: 'HomeXpress',            domain: 'homexpress.com',         color: '#7b6fa0' },
  { name: 'Kind Lending',          domain: 'kindlending.com',        color: '#2a9d8f' },
  { name: 'Loan Simple',           domain: 'loansimple.com',         color: '#e07b39' },
  { name: 'LendSure',              domain: 'lendsure.com',           color: '#7b6fa0' },
  { name: 'NewRez',                domain: 'newrez.com',             color: '#3b82f6' },
  { name: 'PennyMac',              domain: 'pennymac.com',           color: '#7b6fa0' },
  { name: 'Plaza Home Mortgage',   domain: 'plazahomemortgage.com',  color: '#2a9d8f' },
  { name: 'PRMG',                  domain: 'prmg.net',               color: '#e07b39' },
  { name: 'Sierra Pacific',        domain: 'sierrapacificmortgage.com', color: '#2a9d8f' },
  { name: 'Spring EQ',             domain: 'springeq.com',           color: '#3b82f6' },
  { name: 'Symmetry Lending',      domain: 'symmetrylending.com',    color: '#e07b39' },
  { name: 'The Loan Store',        domain: 'theloanstore.com',       color: '#2a9d8f' },
  { name: 'UWM',                   domain: 'uwm.com',                color: '#3b82f6' },
  { name: 'Power TPO',             domain: 'powertpo.com',           color: '#7b6fa0' },
  { name: 'PRMG',                  domain: 'prmg.net',               color: '#2a9d8f' },
];

// ── Loan types with real Lucide icons ──────────────────────────────────────
const LOAN_TYPES = [
  { icon: Home,      name: 'Conventional', desc: 'Fannie/Freddie conforming',          color: '#2a9d8f', bg: '#f0faf9' },
  { icon: Shield,    name: 'FHA',          desc: 'Gov-backed, 3.5% down',              color: '#7b6fa0', bg: '#f6f4fb' },
  { icon: Shield,    name: 'VA',           desc: 'Zero down for veterans',             color: '#3b82f6', bg: '#eff6ff' },
  { icon: Leaf,      name: 'USDA',         desc: 'Rural development financing',        color: '#16a34a', bg: '#f0fdf4' },
  { icon: Zap,       name: 'Non-QM',       desc: 'Bank stmt, ITIN, foreign national',  color: '#e07b39', bg: '#fff7ed' },
  { icon: BarChart3, name: 'DSCR',         desc: 'Debt service ratio for investors',   color: '#7b6fa0', bg: '#f6f4fb' },
  { icon: Gift,      name: 'DPA',          desc: 'Down payment assistance',            color: '#2a9d8f', bg: '#f0faf9' },
];

// ── LOS SVG wordmarks ──────────────────────────────────────────────────────
function AriveLogo() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
      <rect x="0" y="8" width="6" height="24" rx="3" fill="#2a9d8f" />
      <rect x="10" y="0" width="6" height="40" rx="3" fill="#2a9d8f" opacity="0.6" />
      <rect x="20" y="12" width="6" height="20" rx="3" fill="#2a9d8f" opacity="0.4" />
      <text x="34" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#1a3a36">Arive</text>
    </svg>
  );
}

function LendingPadLogo() {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
      <rect x="2" y="10" width="20" height="20" rx="4" fill="#7b6fa0" />
      <rect x="6" y="14" width="12" height="2.5" rx="1.25" fill="white" />
      <rect x="6" y="18.5" width="9" height="2.5" rx="1.25" fill="white" />
      <rect x="6" y="23" width="12" height="2.5" rx="1.25" fill="white" />
      <text x="28" y="27" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="17" fill="#1e1b4b">Lending<tspan fontWeight="400" fill="#7b6fa0">Pad</tspan></text>
    </svg>
  );
}

function EncompassLogo() {
  return (
    <svg viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
      <circle cx="20" cy="20" r="16" stroke="#0066cc" strokeWidth="3" fill="none" />
      <circle cx="20" cy="20" r="8" fill="#0066cc" opacity="0.15" />
      <path d="M12 20 Q20 10 28 20 Q20 30 12 20Z" fill="#0066cc" />
      <text x="42" y="27" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="17" fill="#003380">Encompass</text>
      <text x="42" y="38" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="9" fill="#666" letterSpacing="1">ICE MORTGAGE TECH</text>
    </svg>
  );
}

function CalyxLogo() {
  return (
    <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
      <path d="M20 4 C8 4 4 12 4 20 C4 28 8 36 20 36 C26 36 30 34 33 30" stroke="#cc3300" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="20" r="5" fill="#cc3300" opacity="0.2" />
      <circle cx="20" cy="20" r="2.5" fill="#cc3300" />
      <text x="40" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#1a1a1a">Calyx</text>
      <text x="40" y="37" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="9" fill="#666" letterSpacing="0.8">POINT ORIGINATION</text>
    </svg>
  );
}

const LOS_SYSTEMS = [
  { name: 'Arive',      note: 'Direct integration', Logo: AriveLogo,      border: '#2a9d8f', bg: '#f0faf9' },
  { name: 'LendingPad', note: 'Direct integration', Logo: LendingPadLogo, border: '#7b6fa0', bg: '#f6f4fb' },
  { name: 'Encompass',  note: 'ICE Mortgage Tech',  Logo: EncompassLogo,  border: '#0066cc', bg: '#eff6ff' },
  { name: 'Calyx',      note: 'Point Origination',  Logo: CalyxLogo,      border: '#cc3300', bg: '#fff5f5' },
];

// ── Lender pill — favicon via Google S2 (works from browser, no auth) ────────
function LenderPill({ name, domain, color }) {
  const [imgOk, setImgOk] = useState(true);
  // Google's favicon service — reliable, no rate limits for browser requests
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <div style={{
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 18px 8px 10px',
      borderRadius: 999,
      background: 'white',
      border: `1.5px solid ${color}30`,
      boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
      whiteSpace: 'nowrap',
    }}>
      {imgOk ? (
        <img
          src={logoUrl}
          alt={name}
          onError={() => setImgOk(false)}
          style={{ width: 20, height: 20, objectFit: 'contain', borderRadius: 3, flexShrink: 0 }}
        />
      ) : (
        <span style={{
          width: 24, height: 24, borderRadius: 6,
          background: color, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, fontWeight: 800, color: 'white',
        }}>
          {name[0]}
        </span>
      )}
      <span style={{ fontSize: 13, fontWeight: 600, color: '#2a3548' }}>{name}</span>
    </div>
  );
}

export default function PartnershipBand() {
  const doubled = [...LENDERS, ...LENDERS];

  return (
    <>
      {/* ── Lenders Marquee ─────────────────────────────────────────────── */}
      <section id="lenders" className="relative py-12 sm:py-16 overflow-hidden" style={{ background: '#fafafa' }}>
        <div className="container-px mx-auto max-w-7xl mb-10 text-center">
          <div className="eyebrow mb-3">Lender Network</div>
          <h2 className="h-section text-slate2-900 mb-4">
            We&apos;ve processed with the lenders<br className="hidden sm:inline" /> you work with.
          </h2>
          <p className="lede max-w-2xl mx-auto">
            Over two decades of lender relationships means we know what each underwriter wants — before they ask for it.
          </p>
        </div>

        <div className="marquee-mask w-full overflow-hidden py-2">
          <div className="marquee-track" style={{ gap: 12 }}>
            {doubled.map((l, i) => (
              <LenderPill key={`${l.name}-${i}`} name={l.name} domain={l.domain} color={l.color} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate2-600">Don&apos;t see your lender? We expand regularly — just ask.</p>
        </div>
      </section>

      {/* ── Loan Types ──────────────────────────────────────────────────── */}
      <section id="loan-types" className="py-16 sm:py-20 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Loan Types</div>
            <h2 className="h-section text-slate2-900 mb-4">Every file type. Processed right.</h2>
            <p className="lede max-w-xl mx-auto">
              From straightforward conventional to complex non-QM — we&apos;ve seen it. Send it over.
            </p>
          </div>
          <div className="loan-types-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {LOAN_TYPES.map(({ icon: Icon, name, desc, color, bg }) => (
              <div key={name} style={{ background: bg, border: `1.5px solid ${color}30` }}
                className="flex flex-col items-center text-center p-5 rounded-2xl hover:shadow-md transition-all group cursor-default">
                <div style={{ background: color, width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}
                  className="group-hover:scale-110 transition-transform">
                  <Icon size={20} color="white" strokeWidth={2} />
                </div>
                <div style={{ fontWeight: 800, color: '#1e293b', fontSize: 13, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOS Integrations ────────────────────────────────────────────── */}
      <section id="integrations" className="py-16 sm:py-20" style={{ background: '#fafafa' }}>
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">LOS Integrations</div>
            <h2 className="h-section text-slate2-900 mb-4">Work in your system. Not ours.</h2>
            <p className="lede max-w-xl mx-auto">
              We embed directly into your LOS as a contract processor — right access, zero disruption, no workflow changes on your end.
            </p>
          </div>
          <div className="los-grid grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {LOS_SYSTEMS.map(({ name, note, Logo, border, bg }) => (
              <div key={name} style={{ background: bg, border: `2px solid ${border}25` }}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-center" style={{ minHeight: 40 }}>
                  <Logo />
                </div>
                <div style={{ fontSize: 11, color: border, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{note}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 text-sm text-slate2-700 shadow-sm border border-teal2-200">
              <span className="w-2 h-2 rounded-full bg-teal2-500 animate-pulse inline-block"></span>
              Use another LOS? We extend regularly — onboarding takes one quick call.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
