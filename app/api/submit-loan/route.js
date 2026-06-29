export const dynamic = 'force-dynamic';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    const checklist = [
      { key: 'processorAssigned', label: 'Processor assigned in LOS' },
      { key: 'lenderSelected', label: 'Lender and product selected' },
      { key: 'loanPriced', label: 'Loan priced with lender' },
      { key: 'borrowerPrequalified', label: 'LO has prequalified the borrower' },
      { key: 'form1003Complete', label: '1003 completed as accurately as possible' },
    ];

    const checklistRows = checklist
      .map(c => `<tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;">${c.label}</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:700;color:${data[c.key] ? '#2a9d8f' : '#e07b39'}">${data[c.key] ? '✓ Yes' : '✗ No'}</td></tr>`)
      .join('');

    const html = `
      <div style="font-family:Inter,sans-serif;max-width:640px;margin:0 auto;background:#faf7f2;border-radius:12px;overflow:hidden;">
        <div style="background:#6b3fa0;padding:28px 32px;">
          <h1 style="color:#fff;margin:0;font-size:1.4rem;font-weight:700;">New Loan Submission</h1>
          <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:0.9rem;">Submitted ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div style="padding:28px 32px;">

          <h2 style="font-size:1rem;font-weight:700;color:#2a3548;margin:0 0 12px;border-bottom:2px solid #ebe3d4;padding-bottom:8px;">Loan Officer</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;width:40%">Name</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.loName}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Email</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.loEmail}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Submission Date</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.submissionDate}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Rush Request</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;color:${data.isRush ? '#e07b39' : '#2a9d8f'}">${data.isRush ? '⚡ Yes — Rush' : 'No'}</td></tr>
          </table>

          <h2 style="font-size:1rem;font-weight:700;color:#2a3548;margin:0 0 12px;border-bottom:2px solid #ebe3d4;padding-bottom:8px;">Borrower</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;width:40%">Borrower Name (LOS)</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.borrowerName}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Co-Borrower</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.coBorrowerName || 'N/A'}</td></tr>
          </table>

          <h2 style="font-size:1rem;font-weight:700;color:#2a3548;margin:0 0 12px;border-bottom:2px solid #ebe3d4;padding-bottom:8px;">Loan Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;width:40%">Loan Type</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.loanType}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Transaction</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.transactionType}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Loan Amount</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.loanAmount}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Lender / Product</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.lenderName}${data.productName ? ' — ' + data.productName : ''}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">LOS Platform</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.losPlatform}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">File / Loan #</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.fileNumber || 'Not provided'}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Est. Closing Date</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.closingDate || 'Not provided'}</td></tr>
            <tr><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;">Property Address</td><td style="padding:6px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;">${data.propertyAddress || 'Not provided'}</td></tr>
          </table>

          <h2 style="font-size:1rem;font-weight:700;color:#2a3548;margin:0 0 12px;border-bottom:2px solid #ebe3d4;padding-bottom:8px;">Submission Checklist</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            ${checklistRows}
          </table>

          ${data.notes ? `
          <h2 style="font-size:1rem;font-weight:700;color:#2a3548;margin:0 0 12px;border-bottom:2px solid #ebe3d4;padding-bottom:8px;">Notes</h2>
          <p style="padding:12px;background:#f6f4fb;border-radius:8px;color:#2a3548;margin:0 0 24px;">${data.notes}</p>
          ` : ''}

        </div>
        <div style="background:#2a3548;padding:16px 32px;text-align:center;">
          <p style="color:rgba(255,255,255,0.5);font-size:0.75rem;margin:0;">Submitted via clasmortgageprocessing.com · Clas Mortgage Processing</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Clas Mortgage Processing <noreply@clasmortgageprocessing.com>',
      to: ['info@clasmortgageprocessing.com'],
      replyTo: data.loEmail,
      subject: `New Loan Submission — ${data.borrowerName}${data.isRush ? ' ⚡ RUSH' : ''}`,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
