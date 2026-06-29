'use client';
import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle, Loader2 } from 'lucide-react';

const STEPS = ['Checklist', 'Borrower', 'Loan Details', 'Submit'];
const LOAN_TYPES = ['Conventional', 'FHA', 'VA', 'USDA', 'Jumbo', 'Non-QM', 'FHA 203K', 'ITIN', 'DSCR', 'FHA Streamline', 'VA IRRRL'];
const LOS_OPTIONS = ['Arive', 'LendingPad', 'Encompass'];

export default function LoanSubmitModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({
    loName: '', loEmail: '', submissionDate: '', isRush: false,
    processorAssigned: false, lenderSelected: false, loanPriced: false,
    borrowerPrequalified: false, form1003Complete: false,
    borrowerName: '', coBorrowerName: '',
    loanType: '', transactionType: '', loanAmount: '', lenderName: '',
    productName: '', losPlatform: '', fileNumber: '', closingDate: '',
    propertyAddress: '', notes: '',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setStatus('sending');
    try {
      const res = await fetch('/api/submit-loan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full rounded-lg border border-line bg-cream-50 px-4 py-2.5 text-sm text-slate2-900 focus:outline-none focus:border-lavender-400 focus:bg-white transition-colors';
  const labelCls = 'block text-xs font-semibold text-slate2-600 mb-1.5 uppercase tracking-wide';
  const checkboxRow = (key, label) => (
    <label key={key} className="flex items-start gap-3 cursor-pointer group">
      <input type="checkbox" checked={form[key]} onChange={e => set(key, e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-line accent-lavender-600 cursor-pointer" />
      <span className="text-sm text-slate2-700 leading-snug">{label}</span>
    </label>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(42,53,72,0.6)', backdropFilter: 'blur(4px)' }}>
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-lavender-700 rounded-t-2xl">
          <div>
            <p className="text-xs font-semibold text-lavender-200 uppercase tracking-widest mb-0.5">Loan Submission</p>
            <h2 className="text-lg font-bold text-cream-50">Submit a New File</h2>
          </div>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-cream-50 transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Step indicator */}
        {status === 'idle' || status === 'sending' ? (
          <div className="flex items-center gap-0 px-6 pt-5 pb-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-0 flex-1 last:flex-none">
                <div className="flex items-center gap-1.5">
                  <div className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                    style={{ background: i <= step ? '#6b3fa0' : '#ebe3d4', color: i <= step ? '#fff' : '#75649a' }}>
                    {i < step ? '✓' : i + 1}
                  </div>
                  <span className="text-xs font-semibold hidden sm:block" style={{ color: i === step ? '#6b3fa0' : '#75649a' }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && <div className="flex-1 h-px mx-2" style={{ background: i < step ? '#6b3fa0' : '#ebe3d4' }} />}
              </div>
            ))}
          </div>
        ) : null}

        {/* Content */}
        <div className="px-6 py-5">

          {/* SUCCESS */}
          {status === 'success' && (
            <div className="py-8 text-center">
              <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-display text-xl text-slate2-900 mb-2">Submission received!</h3>
              <p className="text-sm text-slate2-600 mb-6">Shawna and the team will review your file and be in touch shortly. For urgent matters, email <a href="mailto:shawna@clasmortgageprocessing.com" className="text-lavender-600 font-semibold">shawna@clasmortgageprocessing.com</a>.</p>
              <button onClick={onClose} className="btn-gold">Close</button>
            </div>
          )}

          {/* ERROR */}
          {status === 'error' && (
            <div className="py-8 text-center">
              <p className="text-slate2-700 mb-4">Something went wrong. Please email <a href="mailto:info@clasmortgageprocessing.com" className="text-lavender-600 font-semibold">info@clasmortgageprocessing.com</a> directly.</p>
              <button onClick={() => setStatus('idle')} className="btn-gold">Try Again</button>
            </div>
          )}

          {/* STEP 0 — Checklist */}
          {status !== 'success' && status !== 'error' && step === 0 && (
            <div className="space-y-5">
              <p className="text-sm text-slate2-600 leading-relaxed">Please fill out this form once your loan is ready for processing. If any information is missing, email <a href="mailto:shawna@clasmortgageprocessing.com" className="text-lavender-600 font-semibold">shawna@clasmortgageprocessing.com</a>.</p>
              <div>
                <label className={labelCls}>Your Email *</label>
                <input type="email" className={inputCls} placeholder="you@brokerage.com" value={form.loEmail} onChange={e => set('loEmail', e.target.value)} required />
              </div>
              <div>
                <label className={labelCls}>Submission Date *</label>
                <input type="date" className={inputCls} value={form.submissionDate} onChange={e => set('submissionDate', e.target.value)} required />
              </div>
              <div>
                <label className={labelCls}>Loan Officer Name *</label>
                <input type="text" className={inputCls} placeholder="Full name" value={form.loName} onChange={e => set('loName', e.target.value)} required />
              </div>
              <div>
                <label className={labelCls}>Rush Request?</label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.isRush} onChange={e => set('isRush', e.target.checked)} className="h-4 w-4 rounded border-line accent-lavender-600" />
                  <span className="text-sm text-slate2-700">Yes, this is a rush file</span>
                </label>
              </div>
              <div className="rounded-xl bg-lavender-50 border border-lavender-100 p-4 space-y-3">
                <p className="text-xs font-semibold text-lavender-700 uppercase tracking-wide mb-2">Submission Checklist — confirm all that apply</p>
                {checkboxRow('processorAssigned', 'Processor has been assigned in LOS')}
                {checkboxRow('lenderSelected', 'Lender and product have been selected')}
                {checkboxRow('loanPriced', 'Loan has been priced with the lender')}
                {checkboxRow('borrowerPrequalified', 'Loan officer has initially prequalified the borrower')}
                {checkboxRow('form1003Complete', '1003 is completed as accurately as possible at time of submission')}
              </div>
            </div>
          )}

          {/* STEP 1 — Borrower */}
          {status !== 'success' && status !== 'error' && step === 1 && (
            <div className="space-y-4">
              <div>
                <label className={labelCls}>Borrower Name (as in LOS) *</label>
                <input type="text" className={inputCls} placeholder="First Last" value={form.borrowerName} onChange={e => set('borrowerName', e.target.value)} required />
              </div>
              <div>
                <label className={labelCls}>Co-Borrower Name (if applicable)</label>
                <input type="text" className={inputCls} placeholder="First Last" value={form.coBorrowerName} onChange={e => set('coBorrowerName', e.target.value)} />
              </div>
            </div>
          )}

          {/* STEP 2 — Loan Details */}
          {status !== 'success' && status !== 'error' && step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Loan Type *</label>
                  <select className={inputCls} value={form.loanType} onChange={e => set('loanType', e.target.value)} required>
                    <option value="">Select...</option>
                    {LOAN_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Transaction *</label>
                  <select className={inputCls} value={form.transactionType} onChange={e => set('transactionType', e.target.value)} required>
                    <option value="">Select...</option>
                    <option>Purchase</option>
                    <option>Refinance</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Loan Amount *</label>
                  <input type="text" className={inputCls} placeholder="$000,000" value={form.loanAmount} onChange={e => set('loanAmount', e.target.value)} required />
                </div>
                <div>
                  <label className={labelCls}>LOS Platform *</label>
                  <select className={inputCls} value={form.losPlatform} onChange={e => set('losPlatform', e.target.value)} required>
                    <option value="">Select...</option>
                    {LOS_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Lender Name *</label>
                  <input type="text" className={inputCls} placeholder="Lender name" value={form.lenderName} onChange={e => set('lenderName', e.target.value)} required />
                </div>
                <div>
                  <label className={labelCls}>Product Name</label>
                  <input type="text" className={inputCls} placeholder="e.g. 30yr Fixed" value={form.productName} onChange={e => set('productName', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>File / Loan #</label>
                  <input type="text" className={inputCls} placeholder="LOS file number" value={form.fileNumber} onChange={e => set('fileNumber', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Est. Closing Date</label>
                  <input type="date" className={inputCls} value={form.closingDate} onChange={e => set('closingDate', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Property Address</label>
                <input type="text" className={inputCls} placeholder="123 Main St, City, State ZIP" value={form.propertyAddress} onChange={e => set('propertyAddress', e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Notes / Special Instructions</label>
                <textarea className={inputCls} rows={3} placeholder="Anything Shawna should know..." value={form.notes} onChange={e => set('notes', e.target.value)} />
              </div>
            </div>
          )}

          {/* STEP 3 — Review & Submit */}
          {status !== 'success' && status !== 'error' && step === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-slate2-600">Review your submission before sending.</p>
              <div className="rounded-xl bg-cream-50 border border-line divide-y divide-line text-sm">
                {[
                  ['LO Name', form.loName], ['LO Email', form.loEmail], ['Submission Date', form.submissionDate],
                  ['Rush', form.isRush ? '⚡ Yes' : 'No'], ['Borrower', form.borrowerName],
                  ['Co-Borrower', form.coBorrowerName || '—'], ['Loan Type', form.loanType],
                  ['Transaction', form.transactionType], ['Amount', form.loanAmount],
                  ['LOS', form.losPlatform], ['Lender', form.lenderName],
                  ['File #', form.fileNumber || '—'], ['Closing', form.closingDate || '—'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between px-4 py-2.5">
                    <span className="text-slate2-500 font-medium">{label}</span>
                    <span className="text-slate2-900 font-semibold text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer nav */}
        {status !== 'success' && status !== 'error' && (
          <div className="sticky bottom-0 flex items-center justify-between gap-3 px-6 py-4 bg-white border-t border-line rounded-b-2xl">
            {step > 0
              ? <button onClick={() => setStep(s => s - 1)} className="btn-secondary flex items-center gap-1.5 text-sm py-2 px-4"><ChevronLeft className="h-4 w-4" /> Back</button>
              : <div />
            }
            {step < STEPS.length - 1
              ? <button onClick={() => setStep(s => s + 1)} className="btn-gold flex items-center gap-1.5 text-sm py-2 px-5">Next <ChevronRight className="h-4 w-4" /></button>
              : <button onClick={handleSubmit} disabled={status === 'sending'} className="btn-gold flex items-center gap-2 text-sm py-2 px-5">
                  {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : 'Submit File'}
                </button>
            }
          </div>
        )}

      </div>
    </div>
  );
}
