import { Plus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import FAQAccordion from './FAQAccordion';

export const metadata = {
  title: 'FAQ — Clas Mortgage Processing',
  description: 'Common questions about contract loan processing, our LOS integrations, state licenses, fees, and security.',
};

const FAQ = [
  {
    q: 'What is contract loan processing?',
    a: 'Contract loan processing is outsourced loan processing — a third-party processor (us) handles your files end-to-end so your loan officers can stay on origination and your pipeline doesn\'t slow down when volume spikes. You stay licensed and accountable; we do the work.',
  },
  {
    q: 'Who do you work with?',
    a: 'We work with mortgage brokers, independent loan officers, and small lender shops. We are not a direct-to-consumer service. We process files for licensed mortgage professionals.',
  },
  {
    q: 'What states are you licensed in?',
    a: 'Colorado (Mortgage Company Registration with the Department of Regulatory Agencies, Division of Real Estate); Florida (Mortgage Broker License #MBR7014, Florida Office of Financial Regulation); North Carolina (Mortgage Origination Support Registration #R-219565, NC Commissioner of Banks). Additional state licenses are available on request — if your state isn\'t listed, let\'s talk.',
  },
  {
    q: 'Which LOS platforms do you work in?',
    a: 'Arive, LendingPad, and Encompass. We adapt to your platform, not the other way around. For Arive, we join your team as a contract processor with scoped access to your files. For LendingPad, we operate as a certified third-party fulfillment partner. For Encompass, we onboard as a named API user inside your lender instance.',
  },
  {
    q: 'What loan types do you process?',
    a: 'Conventional, FHA, VA, USDA, jumbo, and non-QM. Purchase and refinance. If you\'re running something exotic, ask — we\'ll let you know whether it fits our capacity.',
  },
  {
    q: 'How do I send you a new file?',
    a: 'Once we\'re onboarded, you initiate the file inside your LOS and grant us scoped access. We pick it up from there. For first-time partners, we\'ll walk you through the platform-specific onboarding — it\'s typically a 15-minute call.',
  },
  {
    q: 'What\'s your fee structure?',
    a: 'Per-file flat rate billed at closing. No charge if the loan doesn\'t close. We share specifics once we\'ve confirmed your file mix and state.',
  },
  {
    q: 'How fast do you turn files around?',
    a: 'Initial review and conditions list back within 1 business day of file receipt. Full processing timeline depends on file complexity and lender, but our average submission-to-CTC is competitive with in-house teams.',
  },
  {
    q: 'Are my borrower\'s documents secure?',
    a: 'Yes. All borrower documents are stored encrypted at rest in compliance-grade infrastructure. Access is scoped per-file. Retention follows your firm\'s policy. We\'re set up for ALTA Best Practice alignment and we operate per state and federal data-handling requirements.',
  },
  {
    q: 'Can borrowers upload documents directly to you?',
    a: 'Yes — through our partner portal, your borrowers can drop documents that route directly to the open file. You stay in the loop on every upload.',
  },
  {
    q: 'What are your business hours?',
    a: 'We work seven days a week. We know loans don\'t follow a Monday–Friday schedule, and neither do we. If you\'re pushing a file over the weekend, we\'re on it.',
  },
  {
    q: 'How do we communicate once we\'re working together?',
    a: 'However works best for you. We communicate through your LOS, phone, Slack, Zoom, and email. We also send regular status updates on open files so you\'re never chasing us for an update — we come to you.',
  },
  {
    q: 'Do you handle rush files?',
    a: 'Yes — rush processing is available. The first two rush requests per month are handled at the standard rate. After that, a rush fee applies. If you\'re running a tight closing timeline, flag it upfront and we\'ll tell you if we can make it work.',
  },
  {
    q: 'What if you\'re picking up a file mid-process?',
    a: 'We can join at any stage. If you\'re bringing us in partway through, the fee may be adjusted based on what work remains — we\'re not going to charge you for the part we didn\'t do.',
  },
  {
    q: 'What is the loan officer responsible for vs. Clas?',
    a: 'The LO stays accountable for origination, client relationship, and licensing compliance. Clas handles the processing side — document collection, condition clearing, AUS submission, disclosure prep, and lender communication. You originate, we process. Clean handoff, no overlap.',
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-50 pt-16 sm:pt-24 pb-12">
        <Reveal variant="fadeUp"><div className="container-px mx-auto max-w-3xl text-center">
          <div className="eyebrow mb-3">Frequently Asked Questions</div>
          <h1 className="h-display text-slate2-900 mb-4">
            Everything we get asked,<br />
            <span className="text-lavender-600">answered plainly.</span>
          </h1>
          <p className="lede max-w-xl mx-auto">
            Don't see your question? Email{' '}
            <a href="mailto:info@clasmortgageprocessing.com" className="text-lavender-600 font-semibold underline decoration-lavender-400 underline-offset-2 hover:text-lavender-600">
              info@clasmortgageprocessing.com
            </a>
            {' '}— we respond the same business day.
          </p>
        </div></Reveal>
      </section>

      {/* Accordion */}
      <section className="py-16 sm:py-20 bg-white">
        <Reveal variant="fadeUp" delay={0.1}><div className="container-px mx-auto max-w-3xl">
          <FAQAccordion items={FAQ} />
        </div></Reveal>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-lavender-700 text-cream-50">
        <Reveal variant="fadeUp"><div className="container-px mx-auto max-w-2xl text-center">
          <h2 className="h-section text-cream-50 mb-4">Still have a question?</h2>
          <p className="text-cream-200/80 mb-8">
            Reach out directly. Shawna or the team gets back to you the same business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-gold">
              Get Started
            </Link>
            <a href="mailto:info@clasmortgageprocessing.com" className="btn-secondary border-cream-200/30 text-cream-50 hover:bg-cream-50/10 hover:border-cream-50/50">
              Email Us
            </a>
          </div>
        </div></Reveal>
      </section>
    </>
  );
}
