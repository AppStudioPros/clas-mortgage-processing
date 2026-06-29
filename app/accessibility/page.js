export const metadata = {
  title: 'Accessibility Statement | Clas Mortgage Processing',
  description: 'Our commitment to web accessibility for all users of clasmortgageprocessing.com.',
};

export default function Accessibility() {
  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', paddingTop: 40 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#1e293b', marginBottom: 8 }}>Accessibility Statement</h1>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: 40 }}>Last Updated: June 2025</p>
        <div style={{ background: '#fff', borderRadius: 10, padding: '40px 48px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', lineHeight: 1.8, color: '#475569' }}>
          <p>Clas Mortgage Processing is committed to ensuring our website is accessible to all users, including those with disabilities. We aim to conform to WCAG 2.1 Level AA standards.</p>
          <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', margin: '24px 0 10px' }}>Accessibility Features</h2>
          <ul style={{ paddingLeft: 24 }}>
            <li>Adjustable text size (accessible via the widget in the bottom-right corner)</li>
            <li>High-contrast and inverted display modes</li>
            <li>Underline all links option</li>
            <li>Reduced motion mode for vestibular sensitivities</li>
            <li>Semantic HTML and ARIA labels throughout</li>
            <li>Keyboard-navigable interface</li>
            <li>Color contrast meeting WCAG AA minimums</li>
          </ul>
          <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', margin: '24px 0 10px' }}>Feedback</h2>
          <p>If you encounter any barriers or need information in an alternative format, please contact us:</p>
          <div style={{ background: '#f0faf9', borderRadius: 8, padding: '14px 18px', marginTop: 12, border: '1px solid #a9e2db' }}>
            <a href="mailto:info@clasmortgageprocessing.com" style={{ color: '#2a9d8f', fontWeight: 700 }}>info@clasmortgageprocessing.com</a>
          </div>
          <p style={{ marginTop: 16, fontSize: '0.875rem', color: '#94a3b8' }}>We aim to respond to accessibility feedback within 2 business days.</p>
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <a href="/" style={{ color: '#2a9d8f', fontSize: '0.875rem' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
