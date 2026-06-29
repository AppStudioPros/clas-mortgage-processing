'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border bg-cream-50 transition-all"
          style={{
            borderColor: open === i ? '#7b6fa0' : '#ebe3d4',
            boxShadow: open === i ? '0 4px 16px rgba(107,63,160,0.08)' : 'none',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left"
          >
            <h3 className="font-display text-lg sm:text-xl text-slate2-900 leading-tight pr-4">
              {item.q}
            </h3>
            <span
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all"
              style={{
                borderColor: open === i ? '#6b3fa0' : '#a290d0',
                background: open === i ? '#6b3fa0' : 'transparent',
                color: open === i ? '#fff' : '#6b3fa0',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              <Plus className="h-4 w-4" />
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 pr-16 sm:px-6 sm:pb-6 sm:pr-20">
              <p className="text-slate2-700 leading-relaxed text-[15px]">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
