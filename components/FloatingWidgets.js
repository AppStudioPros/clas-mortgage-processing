'use client';
import A11yWidget from './A11yWidget';
import Deno from './Deno';

// Stacks accessibility widget above Deno bot, both anchored bottom-right
export default function FloatingWidgets() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      zIndex: 9996,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 12,
    }}>
      {/* A11y widget — relative positioned inside this stack */}
      <div style={{ position: 'relative' }}>
        <A11yWidget />
      </div>

      {/* Deno bot — also relative, sits below A11y */}
      <Deno />
    </div>
  );
}
