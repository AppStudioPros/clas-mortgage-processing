'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('clas-cookie-consent')) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem('clas-cookie-consent', 'accepted'); setVisible(false); };
  const decline = () => { localStorage.setItem('clas-cookie-consent', 'declined'); setVisible(false); };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9998,
      background: '#1e293b',
      borderTop: '2px solid #2a9d8f',
      padding: '16px 0',
      boxShadow: '0 -8px 32px rgba(0,0,0,0.25)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, flex: 1, minWidth: 240 }}>
          We use cookies for analytics and site performance. California and Colorado residents may opt out.{' '}
          <Link href="/privacy" style={{ color: '#2a9d8f', textDecoration: 'underline' }}>Privacy Policy</Link>
        </p>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
          <button onClick={decline} style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.7)', padding: '9px 20px', borderRadius: 6,
            fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
          }}>Decline</button>
          <button onClick={accept} style={{
            background: '#2a9d8f', border: '1px solid #2a9d8f',
            color: '#fff', padding: '9px 20px', borderRadius: 6,
            fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
          }}>Accept</button>
        </div>
      </div>
    </div>
  );
}
