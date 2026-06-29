import './globals.css';
import { Inter, DM_Serif_Display } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Deno from '@/components/Deno';
import CookieBanner from '@/components/CookieBanner';
import A11yWidgetFixed from '@/components/A11yWidgetFixed';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const serif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://clasmortgageprocessing.com'),
  title: {
    default: 'Clas Mortgage Processing — Contract Loan Processing for Brokers & LOs',
    template: '%s | Clas Mortgage Processing',
  },
  description: 'Dependable contract loan processing for mortgage brokers, loan officers, and small lender shops. Direct partnership, no chain-of-command friction. We work inside Arive, LendingPad, and Encompass.',
  keywords: ['contract loan processing', 'mortgage processor', 'third-party processor', 'Arive', 'LendingPad', 'Encompass', 'loan processing service', 'contract processor Colorado Florida North Carolina'],
  openGraph: {
    title: 'Clas Mortgage Processing — Contract Loan Processing',
    description: 'Direct contract loan processing for brokers, LOs, and small lender shops. Clean processing. Clear communication. No corporate friction.',
    url: 'https://clasmortgageprocessing.com',
    siteName: 'Clas Mortgage Processing',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="bg-cream-50 text-slate2-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Deno />
        <A11yWidgetFixed />
        <CookieBanner />
      </body>
    </html>
  );
}
