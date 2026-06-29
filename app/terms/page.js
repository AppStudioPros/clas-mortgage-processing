export const metadata = {
  title: 'Terms of Use | Clas Mortgage Processing',
  description: 'Terms of use for the Clas Mortgage Processing website. B2B contract loan processing services.',
};

export default function Terms() {
  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', paddingTop: 40 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#1e293b', marginBottom: 8 }}>Terms of Use</h1>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: 40 }}>Effective Date: June 1, 2025 · Last Updated: June 2025</p>

        <div style={{ background: '#fff', borderRadius: 10, padding: '40px 48px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', lineHeight: 1.8, color: '#475569' }}>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>1. Acceptance</h2>
            <p>By accessing clasmortgageprocessing.com ("Site"), you agree to these Terms of Use. If you do not agree, do not use this Site. These terms govern access to and use of the Site by all visitors.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>2. About Our Services</h2>
            <p>Clas Mortgage Processing is a B2B contract loan processing company. This Site provides information about our services to licensed mortgage brokers, loan officers, and small lender shops. We are not a mortgage lender or broker. We do not offer loans, collect loan applications, or interact directly with borrowers through this Site.</p>
            <p style={{ marginTop: 10 }}>Nothing on this Site constitutes an offer to provide processing services, a guarantee of capacity or availability, or a commitment to any specific fee or timeline. All engagement terms are governed by a separate written agreement executed between Clas Mortgage Processing and the partner firm.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>3. Permitted Use</h2>
            <p>You may use this Site for lawful purposes to learn about our services. You may not:</p>
            <ul style={{ paddingLeft: 24, marginTop: 8 }}>
              <li>Reproduce, distribute, or modify Site content without written permission</li>
              <li>Attempt to gain unauthorized access to any system or data</li>
              <li>Use automated tools to scrape or harvest data from the Site</li>
              <li>Use the Site for any unlawful purpose or in violation of any applicable regulations</li>
            </ul>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>4. No Professional Advice</h2>
            <p>Content on this Site is for informational purposes only. Nothing constitutes legal, financial, compliance, or mortgage-specific professional advice. Consult qualified professionals before making decisions based on information found here.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>5. Intellectual Property</h2>
            <p>All content on this Site — including text, graphics, logos, and design — is owned by Clas Mortgage Processing or its content suppliers and is protected by applicable copyright and trademark law. Unauthorized use is prohibited.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>6. Third-Party Links</h2>
            <p>The Site may link to third-party sites (e.g., LOS platforms, lender portals). We do not control and are not responsible for the content or practices of any third-party site. Links are provided for convenience only.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>7. Disclaimer of Warranties</h2>
            <p>THIS SITE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>8. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLAS MORTGAGE PROCESSING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THIS SITE.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>9. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Colorado, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Colorado.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>10. Changes</h2>
            <p>We may update these terms at any time. Changes are effective upon posting. Continued use of the Site constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 style={{ color: '#1e293b', fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>11. Contact</h2>
            <div style={{ background: '#f0faf9', borderRadius: 8, padding: '16px 20px', border: '1px solid #a9e2db' }}>
              <strong>Clas Mortgage Processing · Shawna Nguyen</strong><br />
              <a href="mailto:info@clasmortgageprocessing.com" style={{ color: '#2a9d8f' }}>info@clasmortgageprocessing.com</a>
            </div>
          </section>
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <a href="/" style={{ color: '#2a9d8f', fontSize: '0.875rem' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
