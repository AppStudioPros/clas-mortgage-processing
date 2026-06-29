export const dynamic = 'force-dynamic';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, company, email, phone, los, message } = await req.json();

    await resend.emails.send({
      from: 'Clas Mortgage Processing <noreply@clasmortgageprocessing.com>',
      to: ['info@clasmortgageprocessing.com'],
      replyTo: email,
      subject: `New Inquiry — ${name}${company ? ' · ' + company : ''}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#faf7f2;border-radius:12px;overflow:hidden;">
          <div style="background:#6b3fa0;padding:24px 32px;">
            <h1 style="color:#fff;margin:0;font-size:1.3rem;font-weight:700;">New Broker Inquiry</h1>
            <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:0.85rem;">via clasmortgageprocessing.com</p>
          </div>
          <div style="padding:24px 32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              ${[['Name', name], ['Company', company || '—'], ['Email', email], ['Phone', phone || '—'], ['LOS Platform', los || '—']].map(([l, v]) =>
                `<tr><td style="padding:8px 12px;border-bottom:1px solid #ebe3d4;color:#75649a;font-size:0.85rem;width:35%">${l}</td><td style="padding:8px 12px;border-bottom:1px solid #ebe3d4;font-weight:600;color:#2a3548;">${v}</td></tr>`
              ).join('')}
            </table>
            ${message ? `<div style="background:#f6f4fb;border-radius:8px;padding:16px;margin-top:8px;">
              <p style="font-size:0.75rem;font-weight:700;color:#75649a;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px;">Message</p>
              <p style="color:#2a3548;font-size:0.9rem;line-height:1.7;margin:0;">${message}</p>
            </div>` : ''}
          </div>
          <div style="background:#2a3548;padding:14px 32px;text-align:center;">
            <p style="color:rgba(255,255,255,0.4);font-size:0.72rem;margin:0;">Clas Mortgage Processing · clasmortgageprocessing.com</p>
          </div>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
