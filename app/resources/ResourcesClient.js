'use client';
import { useState } from 'react';
import { ExternalLink, LogIn, FileText, FolderOpen, LayoutDashboard } from 'lucide-react';
import LoanSubmitModal from '@/components/LoanSubmitModal';
import { Reveal, StaggerParent, StaggerChild } from '@/components/Reveal';

const resources = [
  {
    id: 'lendingpad',
    icon: LogIn,
    title: 'LendingPad Login',
    description: 'Access your files and pipeline inside LendingPad as a partner.',
    href: 'https://prod.lendingpad.com/clas-mortgage-processing/login',
    label: 'Open LendingPad',
    color: '#2a9d8f',
    bg: '#f0faf9',
    border: '#2a9d8f30',
    external: true,
  },
  {
    id: 'arive',
    icon: LayoutDashboard,
    title: 'Arive',
    description: 'Open the Arive platform to manage your origination pipeline.',
    href: 'https://www.arive.com/',
    label: 'Go to Arive',
    color: '#7b6fa0',
    bg: '#f6f4fb',
    border: '#7b6fa030',
    external: true,
  },
  {
    id: 'submit',
    icon: FileText,
    title: 'Submit a Loan',
    description: 'Hand off a new file to the Clas processing team. Fill out the submission form directly here.',
    href: null,
    label: 'Open Submission Form',
    color: '#6b3fa0',
    bg: '#f3f0fa',
    border: '#6b3fa030',
    external: false,
  },
  {
    id: 'sharefile',
    icon: FolderOpen,
    title: 'ShareFile Portal',
    description: 'Securely upload and access documents through the Clas ShareFile portal.',
    href: 'https://auth.sharefile.io/clasmtgprocessing/login?returnUrl=%2fconnect%2fauthorize%2fcallback%3fclient_id%3dDzi4UPUAg5l8beKdioecdcnmHUTWWln6%26state%3de4fWn6UDqJeeBbPtSVnYkw--%26acr_values%3dtenant%253Aclasmtgprocessing%26response_type%3dcode%26redirect_uri%3dhttps%253A%252F%252Fclasmtgprocessing.sharefile.com%252Flogin%252Foauthlogin%26scope%3dsharefile%253Arestapi%253Av3%2520sharefile%253Arestapi%253Av3-internal%2520offline_access%2520openid',
    label: 'Open ShareFile',
    color: '#e07b39',
    bg: '#fff7ed',
    border: '#e07b3930',
    external: true,
  },
];

export default function ResourcesClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-cream-50 pt-16 sm:pt-24 pb-12">
        <Reveal variant="fadeUp"><div className="container-px mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-3">Partner Resources</div>
          <h1 className="h-display text-slate2-900 mb-4">Everything you need,<br />in one place.</h1>
          <p className="lede max-w-xl mx-auto">Direct links to the tools and platforms you use to work with Clas. Bookmark this page for quick access.</p>
        </div></Reveal>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px mx-auto max-w-4xl">
          <StaggerParent className="grid sm:grid-cols-2 gap-6">
            {resources.map(({ id, icon: Icon, title, description, href, label, color, bg, border, external }) => {
              const inner = (

                <>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110" style={{ background: color }}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="font-display text-xl text-slate2-900 mb-2">{title}</h2>
                  <p className="text-sm leading-relaxed text-slate2-600 mb-5 flex-1">{description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color }}>
                    {label} <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </>
              );

              if (!external) {
                return (
                  <StaggerChild key={id} variant="scaleUp">
                  <button
                    onClick={() => setModalOpen(true)}
                    style={{ background: bg, borderColor: border, borderWidth: '1.5px', borderStyle: 'solid' }}
                    className="group relative rounded-2xl p-7 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col text-left w-full"
                  >
                    {inner}
                  </button>
                  </StaggerChild>
                );
              }

              return (
                <StaggerChild key={id} variant="scaleUp">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: bg, borderColor: border, borderWidth: '1.5px', borderStyle: 'solid' }}
                  className="group relative rounded-2xl p-7 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col"
                >
                  {inner}
                </a>
                </StaggerChild>
              );
            })}
          </StaggerParent>

          <Reveal variant="fadeUp" delay={0.2}><div className="mt-12 rounded-2xl bg-lavender-50 border border-lavender-100 p-7 text-center">
            <p className="text-sm text-slate2-700 leading-relaxed">
              Need help getting access or troubleshooting a tool?{' '}
              <a href="mailto:info@clasmortgageprocessing.com" className="text-lavender-600 font-semibold underline decoration-lavender-400 underline-offset-2 hover:text-lavender-700">
                Email us directly
              </a>{' '}
              or reach out through your LOS and we'll get you sorted.
            </p>
          </div></Reveal>
        </div>
      </section>

      {modalOpen && <LoanSubmitModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
