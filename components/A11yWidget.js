'use client';
import { useState, useEffect } from 'react';
import { X, Type, Contrast, Eye, RotateCcw } from 'lucide-react';

const DEFAULT = { fontSize: 1, contrast: 'normal', underlineLinks: false, reducedMotion: false };

// 3D accessibility icon — matches the style Corey approved on Jason's site
function A11yIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="cg" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#44b3a9" />
          <stop offset="55%" stopColor="#2a9d8f" />
          <stop offset="100%" stopColor="#1a635b" />
        </radialGradient>
        <radialGradient id="fg" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#a9e2db" />
          <stop offset="100%" stopColor="#74ccc3" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#cg)" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <circle cx="24" cy="13" r="3.5" fill="url(#fg)" />
      <rect x="22.5" y="17" width="3" height="9" rx="1.5" fill="url(#fg)" />
      <rect x="13" y="18.5" width="22" height="3" rx="1.5" fill="url(#fg)" />
      <rect x="22.5" y="25.5" width="3" height="9.5" rx="1.5" transform="rotate(-15 22.5 25.5)" fill="url(#fg)" />
      <rect x="22.5" y="25.5" width="3" height="9.5" rx="1.5" transform="rotate(15 25.5 25.5)" fill="url(#fg)" />
      <ellipse cx="18" cy="14" rx="4.5" ry="2.5" fill="rgba(255,255,255,0.18)" transform="rotate(-20 18 14)" />
    </svg>
  );
}

export default function A11yWidget() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState(DEFAULT);

  useEffect(() => {
    try { const saved = localStorage.getItem('clas-a11y'); if (saved) setS(JSON.parse(saved)); } catch {}
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${s.fontSize * 100}%`;
    html.classList.toggle('a11y-high-contrast', s.contrast === 'high');
    html.classList.toggle('a11y-inverted', s.contrast === 'inverted');
    html.classList.toggle('a11y-underline-links', s.underlineLinks);
    html.classList.toggle('a11y-reduce-motion', s.reducedMotion);
    localStorage.setItem('clas-a11y', JSON.stringify(s));
  }, [s]);

  const toggle = (key, val) => setS(p => ({ ...p, [key]: p[key] === val ? DEFAULT[key] : val }));
  const reset = () => setS(DEFAULT);

  const btn = (active) => ({
    background: active ? '#2a9d8f' : 'rgba(255,255,255,0.08)',
    border: `1px solid ${active ? '#2a9d8f' : 'rgba(255,255,255,0.15)'}`,
    color: active ? '#fff' : 'rgba(255,255,255,0.75)',
    borderRadius: 6, padding: '7px 11px', cursor: 'pointer',
    fontSize: '0.78rem', fontWeight: 600, transition: 'all 0.15s',
    display: 'flex', alignItems: 'center', gap: 5,
  });

  return (
    <>
      <style>{`
        .a11y-high-contrast { filter: contrast(1.5); }
        .a11y-inverted { filter: invert(1) hue-rotate(180deg); }
        .a11y-underline-links a { text-decoration: underline !important; }
        .a11y-reduce-motion *, .a11y-reduce-motion *::before, .a11y-reduce-motion *::after {
          animation-duration: 0.001ms !important; transition-duration: 0.001ms !important;
        }
      `}</style>

      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Accessibility options"
        aria-expanded={open}
        title="Accessibility Options"
        style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))',
          transition: 'transform 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <A11yIcon size={52} />
      </button>

      {/* Panel — opens upward */}
      {open && (
        <div role="dialog" aria-label="Accessibility settings" style={{
          position: 'absolute', bottom: 64, right: 0,
          width: 280, background: '#1e293b',
          border: '1px solid rgba(42,157,143,0.4)',
          borderRadius: 10, padding: 18,
          boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
          color: '#fff',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <A11yIcon size={20} />
              <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>Accessibility</span>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={reset} title="Reset" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}><RotateCcw size={13} /></button>
              <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}><X size={15} /></button>
            </div>
          </div>

          {/* Text size */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Type size={11} /> Text Size
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 5 }}>
              {[{l:'A',v:1},{l:'A+',v:1.15},{l:'A++',v:1.3},{l:'A+++',v:1.5}].map(({l,v}) => (
                <button key={v} onClick={() => setS(p=>({...p,fontSize:v}))} style={btn(s.fontSize===v)} aria-pressed={s.fontSize===v}>{l}</button>
              ))}
            </div>
          </div>

          {/* Contrast */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Contrast size={11} /> Contrast
            </div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {['normal','high','inverted'].map(c => (
                <button key={c} onClick={() => toggle('contrast', c)} style={btn(s.contrast===c)} aria-pressed={s.contrast===c}>
                  {c.charAt(0).toUpperCase()+c.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: 3, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Eye size={11} /> Options
            </div>
            {[{key:'underlineLinks',label:'Underline Links'},{key:'reducedMotion',label:'Reduce Motion'}].map(({key,label}) => (
              <button key={key} onClick={() => setS(p=>({...p,[key]:!p[key]}))}
                style={{ ...btn(s[key]), justifyContent: 'space-between' }} aria-pressed={s[key]}>
                <span>{label}</span>
                <span style={{ width:30,height:16,borderRadius:8,background:s[key]?'#2a9d8f':'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',padding:'0 2px',transition:'background 0.15s' }}>
                  <span style={{ width:12,height:12,borderRadius:'50%',background:'#fff',transform:s[key]?'translateX(14px)':'translateX(0)',transition:'transform 0.15s',display:'block' }} />
                </span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <a href="/accessibility" style={{ color: '#2a9d8f', fontSize: '0.75rem', textDecoration: 'underline' }}>Accessibility Statement</a>
          </div>
        </div>
      )}
    </>
  );
}
